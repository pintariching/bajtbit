import pathlib
import re

SRC = pathlib.Path(".")
OUT = pathlib.Path("_site")

OUT.mkdir(exist_ok=True)

for name in ("robots.txt", "sitemap.xml"):
    (OUT / name).write_bytes((SRC / name).read_bytes())

assets = OUT / "assets"
assets.mkdir(exist_ok=True)
(assets / "logo.svg").write_bytes((SRC / "assets" / "logo.svg").read_bytes())

html = (SRC / "index.html").read_text(encoding="utf-8")

css = (SRC / "css" / "style.css").read_text(encoding="utf-8")
html = html.replace('<link rel="stylesheet" href="css/style.css">', "")
html = html.replace("</head>", "\n    <style>\n" + css.strip() + "\n    </style>\n</head>", 1)

svg = (SRC / "assets" / "logo.svg").read_text(encoding="utf-8")
svg = re.sub(r"<\?xml[^>]*\?>\s*", "", svg).strip()
svg = re.sub(r"(<svg\b[^>]*?)\s*width=\"[^\"]*\"\s*height=\"[^\"]*\"", r'\1 width="42" height="43"', svg, count=1)
svg = svg.replace("<svg ", "<svg class=\"brand-mark\" role=\"img\" aria-label=\"Logo BAJTBIT\" ", 1)

img_tag = re.search(r"<img[^>]*src=\"assets/logo\.svg\"[^>]*>", html)
if img_tag:
    html = html.replace(img_tag.group(0), svg, 1)

(OUT / "index.html").write_text(html, encoding="utf-8")
print("built _site/index.html")
