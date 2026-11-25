"""Three Instagram posts that form one picture when pinned in a row at the top
of the profile: the tagline on the outside tiles, the logo in the middle, and
the corridor from Europe through Baku to China running underneath.

  python3 social/posts/build_pinned.py

Writes social/out/pinned/pin-1-left.png, pin-2-middle.png and pin-3-right.png
(1080 x 1440 each, the 3:4 shape of the profile grid) and pinned-preview.png.
"""
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'social/out/pinned'
FONTS = ROOT / 'node_modules/@fontsource-variable'
LOGO = (ROOT / 'public/brand/meridel-logo-stacked-ivory.svg').read_text(encoding='utf-8')

W, H, TILE = 3240, 1440, 1080
GOLD, IVORY, NAVY = '#c2a574', '#efe9dd', '#14213a'

# The same cities and lanes as the map on the website (longitude, latitude).
# Baku sits under the logo.
CITIES = [
    ('Rotterdam', 4.5, 51.9, 'above'), ('Varşava', 21.0, 52.2, 'above'), ('İstanbul', 29.0, 41.0, 'below'),
    ('Tbilisi', 44.8, 41.7, 'above'), ('Bakı', 49.9, 40.4, 'below'), ('Aktau', 51.2, 43.6, 'above-right'),
    ('Almatı', 76.9, 43.2, 'above-left'), ('Sian', 108.9, 34.3, 'above'), ('Dubay', 55.3, 25.2, 'right'),
]
# Middle Corridor from China to Europe, and the North-South lane to the Gulf.
LANES = [
    (['Sian', 'Almatı', 'Aktau', 'Bakı', 'Tbilisi', 'İstanbul', 'Varşava', 'Rotterdam'], 'route'),
    (['Bakı', 'Dubay'], 'route south'),
]


def x_of(lon):
    return 170 + lon * 25.4


def y_of(lat):
    return 1250 - (lat - 25) * 14


def svg():
    parts = []
    # Graticule: meridians every 10 degrees, parallels every 5.
    for lon in range(-5, 125, 10):
        x = x_of(lon)
        parts.append(f'<line x1="{x:.1f}" y1="0" x2="{x:.1f}" y2="{H}" class="g"/>')
    for lat in range(30, 120, 5):
        y = y_of(lat)
        if 0 <= y <= H:
            parts.append(f'<line x1="0" y1="{y:.1f}" x2="{W}" y2="{y:.1f}" class="g"/>')
    pts = {n: (x_of(lo), y_of(la)) for n, lo, la, _ in CITIES}
    # Each lane as a smooth curve through its cities.
    for names, cls in LANES:
        seq = [pts[n] for n in names]
        d = f'M{seq[0][0]:.1f} {seq[0][1]:.1f}'
        for (x0, y0), (x1, y1) in zip(seq, seq[1:]):
            if abs(x1 - x0) > abs(y1 - y0):
                mx = (x0 + x1) / 2
                d += f' C{mx:.1f} {y0:.1f} {mx:.1f} {y1:.1f} {x1:.1f} {y1:.1f}'
            else:
                my = (y0 + y1) / 2
                d += f' C{x0:.1f} {my:.1f} {x1:.1f} {my:.1f} {x1:.1f} {y1:.1f}'
        parts.append(f'<path d="{d}" class="{cls}"/>')
    for name, lon, lat, pos in CITIES:
        x, y = pts[name]
        home = name in ('Varşava', 'Bakı')
        if home:
            parts.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="26" class="halo"/>')
        parts.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{12 if home else 8}" class="{"home" if home else "dot"}"/>')
        dx, dy, anchor = {'above': (0, -36, 'middle'), 'below': (0, 58, 'middle'), 'above-left': (-20, -30, 'end'),
                          'above-right': (22, -28, 'start'), 'right': (40, 11, 'start')}[pos]
        parts.append(f'<text x="{x + dx:.1f}" y="{y + dy:.1f}" text-anchor="{anchor}" class="{"lbl home-l" if home else "lbl"}">{name}</text>')
    return f'<svg width="{W}" height="{H}" viewBox="0 0 {W} {H}">{"".join(parts)}</svg>'


PAGE = f'''<!doctype html><html lang="az"><head><meta charset="utf-8">
<link rel="stylesheet" href="{(FONTS / 'newsreader/opsz.css').as_uri()}">
<link rel="stylesheet" href="{(FONTS / 'ibm-plex-sans/wght.css').as_uri()}">
<style>
  html, body {{ margin: 0; }}
  body {{ width: {W}px; height: {H}px; position: relative; overflow: hidden; color: {IVORY};
         background: radial-gradient(ellipse at 50% 38%, #1f3157 0%, {NAVY} 60%); font-family: 'IBM Plex Sans Variable', sans-serif; }}
  svg {{ position: absolute; inset: 0; }}
  .g {{ stroke: {GOLD}; stroke-opacity: .12; stroke-width: 1.5; }}
  .route {{ fill: none; stroke: {GOLD}; stroke-width: 5; stroke-linecap: round; stroke-dasharray: 2 16; }}
  .route.south {{ stroke: #a9b6cb; }}
  .dot {{ fill: {IVORY}; stroke: {NAVY}; stroke-width: 4; }}
  .home {{ fill: {GOLD}; stroke: {NAVY}; stroke-width: 4; }}
  .halo {{ fill: none; stroke: {GOLD}; stroke-opacity: .45; stroke-width: 2; }}
  .lbl {{ font: 500 30px 'IBM Plex Sans Variable', sans-serif; fill: #b9c2d3; }}
  .home-l {{ fill: {IVORY}; font-weight: 600; }}
  .logo {{ position: absolute; left: {TILE + 210}px; top: 250px; width: 660px; }}
  .logo svg {{ position: static; width: 100%; height: auto; display: block; }}
  .line {{ position: absolute; top: 420px; width: 820px; }}
  .line.l {{ left: 130px; }}
  .line.r {{ left: {2 * TILE + 130}px; }}
  .line h2 {{ margin: 0; font-family: 'Newsreader Variable', serif; font-weight: 400; font-size: 112px; line-height: 1.02;
             letter-spacing: -.015em; color: #ffffff; }}
  .line p {{ margin: 28px 0 0; font-family: 'Newsreader Variable', serif; font-style: italic; font-size: 46px; color: #b9c2d3; }}
  .rule {{ display: block; width: 90px; height: 3px; background: {GOLD}; margin-bottom: 42px; }}
  .foot {{ position: absolute; bottom: 70px; width: {TILE}px; text-align: center; font-size: 30px; color: #b9c2d3; letter-spacing: .04em; }}
</style></head><body>
{svg()}
<div class="line l"><i class="rule"></i><h2>Mövqeyinizi müəyyən edirik.</h2><p>We find your position.</p></div>
<div class="logo">{LOGO}</div>
<div class="line r"><i class="rule"></i><h2>İstiqaməti birlikdə qururuq.</h2><p>Together, we chart the course.</p></div>
</body></html>'''


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    tmp = OUT / '.pinned.html'
    tmp.write_text(PAGE, encoding='utf-8')
    full = OUT / 'pinned-full.png'
    with sync_playwright() as pw:
        b = pw.chromium.launch()
        pg = b.new_page(viewport={'width': W, 'height': H})
        pg.goto(tmp.as_uri())
        pg.evaluate('document.fonts.ready')
        pg.wait_for_timeout(300)
        pg.screenshot(path=str(full))
        b.close()
    tmp.unlink()
    img = Image.open(full).convert('RGB')
    names = ['pin-1-left', 'pin-2-middle', 'pin-3-right']
    for i, n in enumerate(names):
        img.crop((i * TILE, 0, (i + 1) * TILE, H)).save(OUT / f'{n}.png')
    # Preview with the small gaps of the profile grid.
    gap = 6
    prev = Image.new('RGB', (W + 2 * gap, H), 'white')
    for i in range(3):
        prev.paste(img.crop((i * TILE, 0, (i + 1) * TILE, H)), (i * (TILE + gap), 0))
    prev.resize((prev.width // 3, prev.height // 3)).save(OUT / 'pinned-preview.png')
    full.unlink()
    print('done')


if __name__ == '__main__':
    main()
