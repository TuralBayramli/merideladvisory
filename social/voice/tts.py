"""Turn voice scripts into speech with Azure AI Speech (one MP3 per paragraph).

Run by the "Make voiceover" GitHub workflow, which supplies the key from the
repository secrets. Settings come from environment variables:
  AZURE_SPEECH_KEY, AZURE_SPEECH_REGION   (secrets)
  SCRIPTS  comma-separated names in social/voice/ without .txt
  VOICES   comma-separated Azure voice names, e.g. az-AZ-BabekNeural
  RATE     speaking rate, e.g. 0% or -8%
Output: social/audio/<script>/<voice>/p01.mp3, p02.mp3, ...
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


def paragraphs(text: str) -> list[str]:
    lines = [l for l in text.splitlines() if not l.lstrip().startswith('#')]
    blocks = re.split(r'\n\s*\n', '\n'.join(lines))
    return [' '.join(b.split()) for b in blocks if b.strip()]


def synth(text: str, voice: str, rate: str, key: str, region: str) -> bytes:
    ssml = (
        '<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="az-AZ">'
        f'<voice name="{voice}"><prosody rate="{rate}">{escape(text)}</prosody></voice></speak>'
    )
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
    for s in scripts:
        if not NAME.fullmatch(s):
            raise SystemExit(f'Bad script name: {s}')
    for v in voices:
        if not VOICE.fullmatch(v):
            raise SystemExit(f'Bad voice name: {v}')
    if not RATE.fullmatch(rate):
        raise SystemExit(f'Bad rate: {rate}')

    chars = 0
    for s in scripts:
        paras = paragraphs((ROOT / 'social/voice' / f'{s}.txt').read_text(encoding='utf-8'))
        for v in voices:
            out = ROOT / 'social/audio' / s / v
            out.mkdir(parents=True, exist_ok=True)
            for old in out.glob('p*.mp3'):
                old.unlink()
            for i, p in enumerate(paras, 1):
                (out / f'p{i:02d}.mp3').write_bytes(synth(p, v, rate, key, region))
                chars += len(p)
            print(f'{s} / {v}: {len(paras)} paragraphs', flush=True)
    print(f'about {chars} characters used', flush=True)


if __name__ == '__main__':
    sys.exit(main())
