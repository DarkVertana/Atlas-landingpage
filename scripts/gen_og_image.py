#!/usr/bin/env python3
"""Generate the Atlas brand OG image (1200x630) with PIL."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

W, H = 1200, 630
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "assets", "og-image.png")

# Brand colors
DEEP = (1, 70, 58)      # #01463A
TEAL = (5, 139, 116)    # #058B74
AQUA = (10, 168, 138)   # #0aa88a
WHITE = (255, 255, 255)
MUTED = (200, 228, 221)

def font(size, bold=True):
    candidates = [
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\georgiab.ttf" if bold else r"C:\Windows\Fonts\georgia.ttf",
    ]
    for c in candidates:
        if os.path.exists(c):
            return ImageFont.truetype(c, size)
    return ImageFont.load_default()

img = Image.new("RGB", (W, H))
d = ImageDraw.Draw(img)

# Vertical gradient deep green -> teal
for y in range(H):
    t = y / H
    r = int(DEEP[0] + (TEAL[0] - DEEP[0]) * t)
    g = int(DEEP[1] + (TEAL[1] - DEEP[1]) * t)
    b = int(DEEP[2] + (TEAL[2] - DEEP[2]) * t)
    d.line([(0, y), (W, y)], fill=(r, g, b))

# Soft radial glow top-right
glow = Image.new("RGB", (W, H), (0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([W - 500, -300, W + 200, 500], fill=(10, 168, 138))
glow = glow.filter(ImageFilter.GaussianBlur(120))
img = Image.blend(img, glow, 0.45)
d = ImageDraw.Draw(img)

# Subtle dot grid texture (bottom-left)
for x in range(40, 400, 34):
    for y in range(H - 200, H - 30, 34):
        d.ellipse([x, y, x + 3, y + 3], fill=(255, 255, 255, 40))

# Monogram: rounded square with "A"
cx, cy, r = 120, 315, 58
d.rounded_rectangle([cx - r, cy - r, cx + r, cy + r], radius=26, fill=AQUA)
mono = font(64, bold=True)
d.text((cx, cy), "A", font=mono, fill=WHITE, anchor="mm")

# Headline
f_head = font(64, bold=True)
d.text((200, 228), "Atlas Screening", font=f_head, fill=WHITE)

# Tagline
f_tag = font(42, bold=False)
d.text((202, 330), "Trust Fast. Hire to Last.", font=f_tag, fill=MUTED)

# Rule + CRA line
d.rounded_rectangle([202, 428, 290, 432], radius=2, fill=AQUA)
f_small = font(30, bold=False)
d.text(
    (202, 458),
    "Consumer Reporting Agency  |  FCRA-compliant screening",
    font=f_small,
    fill=MUTED,
)

os.makedirs(os.path.dirname(OUT), exist_ok=True)
img.save(OUT, "PNG")
print(f"wrote {OUT} ({os.path.getsize(OUT)} bytes)")
