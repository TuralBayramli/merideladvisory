"""Render the PNG logo files from the SVGs made by build_logo.py.

  python3 brand/render_png.py      (from the repository root; needs Playwright and Chrome)

Writes public/brand/*.png and public/og.png (the picture shown when the site is shared).
"""
import base64
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
B = ROOT / 'public/brand'
NAVY, IVORY, GOLD = '#14213a', '#efe9dd', '#c2a574'
FONTS = ROOT / 'node_modules/@fontsource-variable'


def data_uri(path):
    return 'data:image/svg+xml;base64,' + base64.b64encode(path.read_bytes()).decode()


def font_face():
    serif = (FONTS / 'newsreader/files/newsreader-latin-opsz-normal.woff2').read_bytes()
    sans = (FONTS / 'ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2').read_bytes()
    return (f"@font-face{{font-family:S;src:url(data:font/woff2;base64,{base64.b64encode(serif).decode()}) format('woff2');font-weight:200 800}}"
            f"@font-face{{font-family:P;src:url(data:font/woff2;base64,{base64.b64encode(sans).decode()}) format('woff2');font-weight:100 700}}")


def graticule(w, h, color, opacity):
    """Faint meridians and parallels, like the lines on a navigation chart."""
    lines = []
    cx, cy, r = w * 0.78, h * 0.5, max(w, h) * 0.55
    for i, rx in enumerate([0.15, 0.38, 0.62, 0.85, 1.0]):
        lines.append(f'<ellipse cx="{cx}" cy="{cy}" rx="{r * rx}" ry="{r}" fill="none" stroke="{color}" stroke-width="1" opacity="{opacity}"/>')
    for k in range(-4, 5):
        y = cy + k * r / 5
        lines.append(f'<line x1="0" x2="{w}" y1="{y}" y2="{y}" stroke="{color}" stroke-width="1" opacity="{opacity * 0.7}"/>')
    return f'<svg width="{w}" height="{h}" viewBox="0 0 {w} {h}" style="position:absolute;inset:0">{"".join(lines)}</svg>'


PAGES = {
    # name: (width, height, html body)
    'meridel-profile-1080.png': (1080, 1080,
        f'<div style="width:1080px;height:1080px;background:{NAVY};display:flex;align-items:center;justify-content:center">'
        f'<img src="{data_uri(B / "meridel-symbol-profile.svg")}" style="width:820px;height:820px"></div>'),
    # LinkedIn asks for 400 x 400: drawn at that size, not shrunk, so the fine lines stay sharp.
    'meridel-profile-400.png': (400, 400,
        f'<div style="width:400px;height:400px;background:{NAVY};display:flex;align-items:center;justify-content:center">'
        f'<img src="{data_uri(B / "meridel-symbol-profile.svg")}" style="width:304px;height:304px"></div>'),
    'meridel-logo-navy.png': (1600, 560,
        f'<div style="width:1600px;height:560px;display:flex;align-items:center;justify-content:center">'
        f'<img src="{data_uri(B / "meridel-logo-navy.svg")}" style="width:1300px"></div>'),
    'meridel-logo-ivory.png': (1600, 560,
        f'<div style="width:1600px;height:560px;display:flex;align-items:center;justify-content:center">'
        f'<img src="{data_uri(B / "meridel-logo-ivory.svg")}" style="width:1300px"></div>'),
    'meridel-linkedin-cover.png': (1128 * 2, 191 * 2,
        f'<div style="position:relative;overflow:hidden;width:2256px;height:382px;background:{NAVY}">'
        f'{graticule(2256, 382, GOLD, 0.22)}'
        f'<div style="position:absolute;right:430px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;text-align:right">'
        f'<div style="font:330 84px/1.05 S;font-variation-settings:\'opsz\' 72;color:{IVORY};letter-spacing:-.005em">We find your position.<br>Together, we chart the course.</div>'
        f'<div style="font:430 25px/1 P;letter-spacing:.42em;margin-right:-.42em;color:{GOLD};margin-top:30px">SUPPLY CHAIN CONSULTING</div></div></div>'),
}
OG = (1200, 630,
      f'<div style="position:relative;overflow:hidden;width:1200px;height:630px;background:{NAVY};display:flex;align-items:center;justify-content:center">'
      f'{graticule(1200, 630, GOLD, 0.16)}'
      f'<img src="{data_uri(B / "meridel-logo-stacked-ivory.svg")}" style="position:relative;width:430px"></div>')


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
        jobs = dict(PAGES)
        jobs['../og.png'] = OG
        for name, (w, h, body) in jobs.items():
            page = browser.new_page(viewport={'width': w, 'height': h}, device_scale_factor=1)
            page.set_content(f'<html><head><style>{font_face()}body{{margin:0}}</style></head><body>{body}</body></html>')
            page.evaluate('document.fonts.ready.then(() => 1)')
            page.wait_for_timeout(200)
            transparent = name in ('meridel-logo-navy.png', 'meridel-logo-ivory.png')
            out = (B / name).resolve()
            page.screenshot(path=str(out), omit_background=transparent)
            print('wrote', out.relative_to(ROOT))
            page.close()
        browser.close()


if __name__ == '__main__':
    main()
