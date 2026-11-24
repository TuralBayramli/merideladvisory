"""Turn the site's Fontsource fonts (latin + latin-ext only) into @font-face rules
with embedded data URIs, so the video pages render with the brand fonts offline.

Run from the repository root after `npm install`:  python3 social/video/build_fonts.py
"""
import base64
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
FONTS = [
    (ROOT / 'node_modules/@fontsource-variable/newsreader', 'opsz.css'),
    (ROOT / 'node_modules/@fontsource-variable/ibm-plex-sans', 'wght.css'),
]


def faces(css_path: Path, pkg: Path) -> str:
    css = css_path.read_text()
    blocks = re.findall(r'/\* ([^*]+) \*/\s*(@font-face \{.*?\})', css, re.S)
    out = []
    for name, block in blocks:
        if not re.search(r'-latin(-ext)?-', name):
            continue
        def embed(m):
            data = (pkg / m.group(1)).read_bytes()
            return f"url(data:font/woff2;base64,{base64.b64encode(data).decode()})"
        out.append(re.sub(r'url\(\./(files/[^)]+)\)', embed, block))
    return '\n'.join(out)


if __name__ == '__main__':
    css = '\n'.join(faces(pkg / name, pkg) for pkg, name in FONTS)
    (HERE / 'fonts.css').write_text(css)
    print('fonts.css', len(css) // 1024, 'KB')
