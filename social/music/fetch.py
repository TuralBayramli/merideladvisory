"""Download background music from Pixabay into social/music/.

Run by the "Fetch music" workflow (the build machine can reach Pixabay).
TRACKS is a comma-separated list of name|url pairs. The url is either a
cdn.pixabay.com download link or a track page (pixabay.com/music/...), whose
download link is read from the page. Tracks registered with YouTube Content ID
are skipped, since they can get videos claimed.
"""
import json
import os
import re
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
NAME = re.compile(r'^[a-z0-9-]{1,60}$')
URL = re.compile(r'^https://cdn\.pixabay\.com/download/audio/[0-9/]+/audio_[0-9a-f]+\.mp3(\?filename=[A-Za-z0-9._-]+)?$')
PAGE = re.compile(r'^https://pixabay\.com/music/[a-z0-9-]+-\d+/$')
HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36',
           'Accept-Language': 'en-US,en;q=0.9'}


def from_page(url):
    """Download link and Content ID status from a Pixabay track page."""
    with urllib.request.urlopen(urllib.request.Request(url, headers=HEADERS), timeout=60) as r:
        html = r.read().decode('utf-8', 'replace')
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
        try:
            data = json.loads(block)
        except ValueError:
            continue
        if 'MusicRecording' in json.dumps(data.get('@type', '')):
            props = {p.get('name'): p.get('value') for p in data.get('additionalProperty', [])}
            return data.get('contentUrl', ''), props.get('Content ID Registered') is True
    raise SystemExit(f'No track found on {url}')


def main():
    pairs = [p.strip() for p in os.environ.get('TRACKS', '').split(',') if p.strip()]
    if not pairs:
        raise SystemExit('No tracks given')
    for pair in pairs:
        name, _, url = pair.partition('|')
        if not NAME.fullmatch(name) or not (URL.fullmatch(url) or PAGE.fullmatch(url)):
            raise SystemExit(f'Bad track: {pair}')
        if PAGE.fullmatch(url):
            try:
                url, claimed = from_page(url)
            except urllib.error.HTTPError as e:
                # Pixabay often blocks build machines from its pages; use the cdn link instead.
                print(f'{name}: page refused ({e.code}), give the cdn.pixabay.com link instead', flush=True)
                continue
            if claimed:
                print(f'{name}: skipped, registered with Content ID', flush=True)
                continue
            if not URL.fullmatch(url):
                raise SystemExit(f'{name}: unexpected download link {url}')
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=120) as r:
            data = r.read()
        if len(data) < 100_000:
            raise SystemExit(f'{name}: download too small ({len(data)} bytes)')
        (ROOT / 'social/music' / f'{name}.mp3').write_bytes(data)
        print(f'{name}: {len(data) // 1024} KB', flush=True)


if __name__ == '__main__':
    main()
