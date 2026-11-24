"""Turn voice scripts into speech with Azure AI Speech (one MP3 per paragraph).

Run by the "Make voiceover" GitHub workflow, which supplies the key from the
repository secrets. Settings come from environment variables:
  AZURE_SPEECH_KEY, AZURE_SPEECH_REGION   (secrets)
  SCRIPTS  comma-separated names in social/voice/ without .txt
  VOICES   comma-separated Azure voice names, e.g. az-AZ-BabekNeural
  RATE     speaking rate, e.g. 0% or +8%
  PITCH    voice pitch, e.g. 0% or +8%
  LABEL    optional suffix for the output folder, to keep variants apart
  INTONATION  plain, or expressive: each sentence gets its own rise and fall,
              *starred* words are stressed and questions get a short pause
Output: social/audio/<script>/<voice>[-<label>]/p01.mp3, p02.mp3, ...
"""
import os
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parents[2]
NAME = re.compile(r'^[a-z0-9-]+$')
VOICE = re.compile(r'^[a-z]{2,3}-[A-Z]{2}-[A-Za-z]+Neural$')
RATE = re.compile(r'^[+-]?\d{1,2}%$')
LABEL = re.compile(r'^[a-z0-9-]{0,20}$')


def paragraphs(text: str) -> list[str]:
    lines = [l for l in text.splitlines() if not l.lstrip().startswith('#')]
    blocks = re.split(r'\n\s*\n', '\n'.join(lines))
    return [' '.join(b.split()) for b in blocks if b.strip()]


SENT = re.compile(r'(?<=[.!?:])\s+')
WORD = re.compile(r'\S+')
# Azerbaijani question words: in a question that has one, the voice peaks on it and then falls.
QWORD = re.compile(r'\b(nə|nədir|niyə|necə|harada|hara|haradan|haraya|kim|kimdir|hansı|neçə|nəyə|nəyi)\b', re.IGNORECASE)
# Words between *stars* in a script are said higher, a little louder and slower, as a speaker stresses them.
STAR = re.compile(r'\*([^*]+)\*')
STRESSED = r'<prosody pitch="+18%" volume="+15%" rate="-8%">\1</prosody>'
UNSTAR = r'\1'


def contour(sentence: str) -> str:
    """Pitch path for one long sentence.

    Statements peak on the word before the final verb (where Azerbaijani puts
    the stress) and fall at the end; exclamations do the same, higher. Questions
    peak on their question word, or rise at the end when they have none. Each
    item in a comma list ends a little higher, as when someone lists things.
    """
    n = len(sentence)
    words = list(WORD.finditer(sentence))
    end = sentence.rstrip()[-1:]
    at = lambda i: round(i / n * 100)
    if end == '?':
        q = QWORD.search(sentence)
        if q:
            peak = min(max(at(q.start() + len(q.group()) // 3), 10), 90)
            pts = [(0, 0), (peak, 24), (100, -4)]
        else:
            pts = [(0, 0), (70, 4), (100, 26)]
    else:
        high, start, fall = (22, 8, -8) if end == '!' else (16, 5, -10)
        peak = min(max(at(words[-2].start()), 40), 85) if len(words) > 2 else 50
        pts = [(0, start)]
        for c in re.finditer(',', sentence):
            p = at(c.start())
            if 8 < p < peak - 10:
                pts += [(p - 1, start + 8), (p + 2, start - 2)]
        pts += [(peak, high), (100, fall)]
    return ' '.join(f'({x}%,{y:+d}%)' for x, y in pts)


def shape(sentence: str, i: int) -> str:
    """One sentence with its own pitch path (Azure ignores contours on very short phrases)."""
    plain = STAR.sub(UNSTAR, sentence)
    text = STAR.sub(STRESSED, escape(sentence))
    end = plain.rstrip()[-1:]
    if len(plain.split()) < 4:
        # Lift short questions and exclamations; alternate short statements high, low.
        lift = {'?': '+16%', '!': '+12%'}.get(end, '+6%' if i % 2 == 0 else '-3%')
        return f'<prosody pitch="{lift}">{text}</prosody>'
    return f'<prosody contour="{contour(plain)}">{text}</prosody>'


def build_ssml(text: str, voice: str, rate: str, pitch: str, intonation: str) -> str:
    base = f'rate="{rate}" pitch="{pitch}"'
    if intonation == 'plain':
        body = f'<prosody {base}>{escape(STAR.sub(UNSTAR, text))}</prosody>'
    else:
        sentences = SENT.split(text)
        parts = []
        for i, s in enumerate(sentences):
            parts.append(f'<prosody {base}>{shape(s, i)}</prosody>')
            if s.endswith('?') and i < len(sentences) - 1:
                # A beat after a question before the answer (break is not allowed inside prosody).
                parts.append(f'<break time="{300 if len(s.split()) < 4 else 200}ms"/>')
        body = ' '.join(parts)
    return (
        '<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="az-AZ">'
        f'<voice name="{voice}">{body}</voice></speak>'
    )


def synth(text: str, voice: str, rate: str, pitch: str, intonation: str, key: str, region: str) -> bytes:
    ssml = build_ssml(text, voice, rate, pitch, intonation)
    req = urllib.request.Request(
        f'https://{region}.tts.speech.microsoft.com/cognitiveservices/v1',
        data=ssml.encode('utf-8'),
        headers={
            'Ocp-Apim-Subscription-Key': key,
            'Content-Type': 'application/ssml+xml',
            'X-Microsoft-OutputFormat': 'audio-48khz-192kbitrate-mono-mp3',
            'User-Agent': 'meridel-voiceover',
        },
    )
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code == 429 and attempt < 4:
                time.sleep(3 * (attempt + 1))
                continue
            raise SystemExit(f'Azure returned {e.code} for voice {voice}: {e.read()[:300]!r}')
    raise SystemExit('Azure kept refusing requests')


def main():
    key = os.environ.get('AZURE_SPEECH_KEY', '').strip()
    region = os.environ.get('AZURE_SPEECH_REGION', '').strip().lower()
    if not key or not re.fullmatch(r'[a-z0-9]+', region):
        raise SystemExit('Add AZURE_SPEECH_KEY and AZURE_SPEECH_REGION as repository secrets first.')
    scripts = [s.strip() for s in os.environ.get('SCRIPTS', '').split(',') if s.strip()]
    voices = [v.strip() for v in os.environ.get('VOICES', '').split(',') if v.strip()]
    rate = os.environ.get('RATE', '0%').strip()
    pitch = os.environ.get('PITCH', '0%').strip() or '0%'
    label = os.environ.get('LABEL', '').strip()
    intonation = os.environ.get('INTONATION', 'plain').strip() or 'plain'
    if intonation not in ('plain', 'expressive'):
        raise SystemExit(f'Bad intonation: {intonation}')
    for s in scripts:
        if not NAME.fullmatch(s):
            raise SystemExit(f'Bad script name: {s}')
    for v in voices:
        if not VOICE.fullmatch(v):
            raise SystemExit(f'Bad voice name: {v}')
    if not RATE.fullmatch(rate) or not RATE.fullmatch(pitch):
        raise SystemExit(f'Bad rate or pitch: {rate} {pitch}')
    if not LABEL.fullmatch(label):
        raise SystemExit(f'Bad label: {label}')

    chars = 0
    for s in scripts:
        paras = paragraphs((ROOT / 'social/voice' / f'{s}.txt').read_text(encoding='utf-8'))
        for v in voices:
            out = ROOT / 'social/audio' / s / (f'{v}-{label}' if label else v)
            out.mkdir(parents=True, exist_ok=True)
            for old in out.glob('p*.mp3'):
                old.unlink()
            for i, p in enumerate(paras, 1):
                (out / f'p{i:02d}.mp3').write_bytes(synth(p, v, rate, pitch, intonation, key, region))
                chars += len(p)
            print(f'{s} / {out.name}: {len(paras)} paragraphs (rate {rate}, pitch {pitch}, {intonation})', flush=True)
    print(f'about {chars} characters used', flush=True)


if __name__ == '__main__':
    sys.exit(main())
