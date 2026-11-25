"""Share images (1200 x 630) for every article, used when a link is posted on
LinkedIn, WhatsApp and similar. Run after adding or retitling an article:

  python3 brand/render_og_articles.py      (from the repository root)

Writes public/og/<lang>/<slug>.png. Pages without an image fall back to /og.png.
"""
import json
import math
import re
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / 'src/content/insights'
OUT = ROOT / 'public/og'
FONTS = ROOT / 'node_modules/@fontsource-variable'
LOGO = (ROOT / 'public/brand/meridel-logo-ivory.svg').read_text(encoding='utf-8')

TOPICS = {
    'en': {'strategy': 'Supply chain strategy', 'logistics': 'Logistics and transport',
           'inventory': 'Inventory and planning', 'data': 'Data and analytics'},
    'az': {'strategy': 'Təchizat zənciri strategiyası', 'logistics': 'Logistika və daşıma',
           'inventory': 'Ehtiyat və planlaşdırma', 'data': 'Məlumat və analitika'},
}


def front_matter(text):
    m = re.match(r'^---\n(.*?)\n---\n', text, re.S)
    data = {}
    for line in m.group(1).split('\n'):
        k, sep, v = line.partition(':')
        if sep and not line.startswith(' ') and v.strip():
            v = v.strip()
            if v[0] in '"\'':
                v = json.loads(v) if v[0] == '"' else v[1:-1].replace("''", "'")
            data[k.strip()] = v
    return data


def graticule():
    # Meridians and parallels of a globe seen from the side, as in the logo.
    cx, cy, r = 1010, 330, 330
    lines = [f'<circle cx="{cx}" cy="{cy}" r="{r}"/>']
    for k in (-68, -40, -12, 16, 44, 72):
        rx = abs(r * math.sin(math.radians(k)))
        lines.append(f'<ellipse cx="{cx}" cy="{cy}" rx="{rx:.1f}" ry="{r}"/>')
    for lat in (-50, -25, 0, 25, 50):
        y = cy - r * math.sin(math.radians(lat))
        half = r * math.cos(math.radians(lat))
        lines.append(f'<line x1="{cx - half:.1f}" y1="{y:.1f}" x2="{cx + half:.1f}" y2="{y:.1f}"/>')
    return ''.join(lines)


def page(title, topic, lang):
    return f'''<!doctype html><html lang="{lang}"><head><meta charset="utf-8">
<link rel="stylesheet" href="{(FONTS / 'newsreader/opsz.css').as_uri()}">
<link rel="stylesheet" href="{(FONTS / 'ibm-plex-sans/wght.css').as_uri()}">
<style>
  html, body {{ margin: 0; }}
  body {{ width: 1200px; height: 630px; background: #14213a; color: #efe9dd; position: relative; overflow: hidden;
         font-family: 'IBM Plex Sans Variable', sans-serif; }}
  .globe {{ position: absolute; inset: 0; }}
  .globe g {{ fill: none; stroke: #c2a574; stroke-opacity: .18; stroke-width: 1.4; }}
  .logo {{ position: absolute; left: 72px; top: 64px; height: 58px; color: #efe9dd; --logo-gold: #c2a574; }}
  .logo svg {{ height: 58px; width: auto; display: block; }}
  .topic {{ position: absolute; left: 72px; top: 188px; font-size: 26px; font-weight: 500; color: #c2a574; letter-spacing: .01em; }}
  h1 {{ position: absolute; left: 72px; top: 232px; width: 860px; margin: 0; font-family: 'Newsreader Variable', serif;
        font-weight: 420; font-size: 60px; line-height: 1.1; letter-spacing: -.01em; text-wrap: balance; }}
  .foot {{ position: absolute; left: 72px; bottom: 56px; display: flex; gap: 18px; align-items: center; font-size: 22px; color: #b9c2d3; }}
  .foot i {{ width: 56px; height: 2px; background: #c2a574; display: block; }}
</style></head><body>
<svg class="globe" viewBox="0 0 1200 630"><g>{graticule()}</g></svg>
<div class="logo">{LOGO}</div>
<div class="topic">{topic}</div>
<h1>{title}</h1>
<div class="foot"><i></i>merideladvisory.com</div>
</body></html>'''


def main():
    jobs = []
    for lang in ('en', 'az'):
        for md in sorted((CONTENT / lang).glob('*.md')):
            fm = front_matter(md.read_text(encoding='utf-8'))
            jobs.append((lang, md.stem, fm['title'], TOPICS[lang][fm['topic']]))
    tmp = ROOT / 'brand/.og.html'
    with sync_playwright() as p:
        browser = p.chromium.launch()
        pg = browser.new_page(viewport={'width': 1200, 'height': 630}, device_scale_factor=1)
        for lang, slug, title, topic in jobs:
            tmp.write_text(page(title, topic, lang), encoding='utf-8')
            pg.goto(tmp.as_uri())
            pg.evaluate('document.fonts.ready')
            pg.wait_for_timeout(150)
            out = OUT / lang / f'{slug}.png'
            out.parent.mkdir(parents=True, exist_ok=True)
            pg.screenshot(path=str(out))
            print(out.relative_to(ROOT))
        browser.close()
    tmp.unlink(missing_ok=True)


if __name__ == '__main__':
    main()
