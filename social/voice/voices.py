"""List the Azure voices in our region that can speak Azerbaijani, including the
newer multilingual voices, into social/voice/azerbaijani-voices.md.
Run by the "Make voiceover" workflow when "list_voices" is ticked.
"""
import json
import os
import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]


def main():
    key = os.environ.get('AZURE_SPEECH_KEY', '').strip()
    region = os.environ.get('AZURE_SPEECH_REGION', '').strip().lower()
    if not key or not re.fullmatch(r'[a-z0-9]+', region):
        raise SystemExit('Add AZURE_SPEECH_KEY and AZURE_SPEECH_REGION as repository secrets first.')
    req = urllib.request.Request(f'https://{region}.tts.speech.microsoft.com/cognitiveservices/voices/list',
                                 headers={'Ocp-Apim-Subscription-Key': key, 'User-Agent': 'meridel-voiceover'})
    with urllib.request.urlopen(req, timeout=60) as r:
        voices = json.load(r)
    rows = [v for v in voices if v.get('Locale') == 'az-AZ' or 'az-AZ' in (v.get('SecondaryLocaleList') or [])]
    lines = [f'# Voices in {region} that can speak Azerbaijani', '',
             f'{len(rows)} of {len(voices)} voices.', '',
             '| Voice | Gender | Type | Main language | Styles |', '|---|---|---|---|---|']
    for v in sorted(rows, key=lambda v: (v.get('Locale') != 'az-AZ', v['ShortName'])):
        lines.append(f"| {v['ShortName']} | {v.get('Gender', '')} | {v.get('VoiceType', '')} | {v.get('Locale', '')} "
                     f"| {', '.join(v.get('StyleList') or [])} |")
    (ROOT / 'social/voice/azerbaijani-voices.md').write_text('\n'.join(lines) + '\n', encoding='utf-8')
    print(f'{len(rows)} of {len(voices)} voices can speak Azerbaijani')


if __name__ == '__main__':
    main()
