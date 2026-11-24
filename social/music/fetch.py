"""Download background music from Pixabay into social/music/.

Run by the "Fetch music" workflow (the build machine can reach Pixabay).
TRACKS is a comma-separated list of name|download-url pairs.
"""
import os
import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
NAME = re.compile(r'^[a-z0-9-]{1,60}$')
URL = re.compile(r'^https://cdn\.pixabay\.com/download/audio/[0-9/]+/audio_[0-9a-f]+\.mp3(\?filename=[A-Za-z0-9._-]+)?$')


def main():
    pairs = [p.strip() for p in os.environ.get('TRACKS', '').split(',') if p.strip()]
    if not pairs:
        raise SystemExit('No tracks given')
    for pair in pairs:
        name, _, url = pair.partition('|')
        if not NAME.fullmatch(name) or not URL.fullmatch(url):
            raise SystemExit(f'Bad track: {pair}')
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (meridel-videos)'})
        with urllib.request.urlopen(req, timeout=120) as r:
            data = r.read()
        if len(data) < 100_000:
            raise SystemExit(f'{name}: download too small ({len(data)} bytes)')
        (ROOT / 'social/music' / f'{name}.mp3').write_bytes(data)
        print(f'{name}: {len(data) // 1024} KB', flush=True)


if __name__ == '__main__':
    main()
