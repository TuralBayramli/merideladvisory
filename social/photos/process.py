"""Crop and compress the chosen photos for the website (WebP, two widths each).

  python3 social/photos/process.py      (from the repository root)

Photos are from Pexels (free to use, no attribution required); see CREDITS.md.
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
RAW = ROOT / 'social/photos/raw'
OUT = ROOT / 'public/images'

# name: (source file, focal point x, focal point y) with the focal point as a share of width/height
PHOTOS = {
    'sea-river': ('barge-9552905.jpg', 0.5, 0.55),
    'rail': ('rail-14776383.jpg', 0.62, 0.55),
    'road': ('truck-9195241.jpg', 0.55, 0.5),
    'warehouse': ('warehouse-4483608.jpg', 0.5, 0.55),
    'data': ('data-3183126.jpg', 0.42, 0.4),
    'workshop': ('workshop-18999540.jpg', 0.5, 0.5),
    'carbon': ('wind-5569023.jpg', 0.45, 0.6),
    'delivery': ('delivery-7363098.jpg', 0.48, 0.5),
    'dashboard': ('code-577210.jpg', 0.45, 0.6),
    'code': ('dashboard-34804005.jpg', 0.55, 0.45),
    'forklift': ('forklift-1267338.jpg', 0.45, 0.6),
    'picking': ('team-4481329.jpg', 0.42, 0.5),
    'analytics': ('laptop-12969403.jpg', 0.62, 0.4),
}
# shape: (aspect width/height, widths)
SHAPES = {'wide': (3 / 2, (1600, 800)), 'tall': (4 / 5, (960, 480))}


def crop(im, aspect, fx, fy):
    w, h = im.size
    if w / h > aspect:
        cw, ch = round(h * aspect), h
    else:
        cw, ch = w, round(w / aspect)
    x = min(max(round(fx * w - cw / 2), 0), w - cw)
    y = min(max(round(fy * h - ch / 2), 0), h - ch)
    return im.crop((x, y, x + cw, y + ch))


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for name, (src, fx, fy) in PHOTOS.items():
        im = Image.open(RAW / src).convert('RGB')
        for shape, (aspect, widths) in SHAPES.items():
            c = crop(im, aspect, fx, fy)
            for w in widths:
                out = OUT / f'{name}-{shape}-{w}.webp'
                c.resize((w, round(w / aspect)), Image.LANCZOS).save(out, 'WEBP', quality=78, method=6)
                print(out.relative_to(ROOT), out.stat().st_size // 1024, 'KB')


if __name__ == '__main__':
    main()
