"""Download photos from Pexels (free to use, no attribution needed) into social/photos/raw/.

Run by the "Fetch photos" workflow. PHOTOS is a comma-separated list of name|pexels-id pairs.
"""
import os
import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'social/photos/raw'
NAME = re.compile(r'^[a-z0-9-]{1,40}$')
PID = re.compile(r'^\d{3,10}$')


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for pair in [p.strip() for p in os.environ.get('PHOTOS', '').split(',') if p.strip()]:
        name, _, pid = pair.partition('|')
        if not NAME.fullmatch(name) or not PID.fullmatch(pid):
            raise SystemExit(f'Bad photo: {pair}')
        url = f'https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg?auto=compress&cs=tinysrgb&w=2400'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (meridel-site)'})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
        except Exception as e:  # keep going, report at the end
            print(f'{name}: failed ({e})', flush=True)
            continue
        (OUT / f'{name}-{pid}.jpg').write_bytes(data)
        print(f'{name}: {len(data) // 1024} KB', flush=True)


if __name__ == '__main__':
    main()
