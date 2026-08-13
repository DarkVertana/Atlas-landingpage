#!/usr/bin/env python3
"""Static SEO/design audit scanner for the Atlas landing page."""
import os, re, json, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, "app")

def walk_tsx():
    for root, dirs, files in os.walk(APP):
        dirs[:] = [d for d in dirs if d not in ("admin",)]
        for f in files:
            if f.endswith((".tsx", ".ts")):
                yield os.path.join(root, f)

def rel(p):
    return os.path.relpath(p, ROOT).replace("\\", "/")

# 1. Metadata per route
print("=" * 70)
print("METADATA EXPORTS PER FILE")
print("=" * 70)
for p in walk_tsx():
    with open(p, encoding="utf-8", errors="replace") as fh:
        src = fh.read()
    for m in re.finditer(r"export const metadata[:=]\s*(?:Metadata\s*=\s*)?(\{.*?\n\})", src, re.S):
        print(f"--- {rel(p)} ---")
        print(m.group(1).strip()[:600])
    for m in re.finditer(r"export async function generateMetadata.*?\n\}", src, re.S):
        print(f"--- {rel(p)} [generateMetadata] ---")
        print(m.group(0).strip()[:600])

# 2. JSON-LD / schema
print("=" * 70)
print("JSON-LD / STRUCTURED DATA")
print("=" * 70)
found = False
for p in walk_tsx():
    with open(p, encoding="utf-8", errors="replace") as fh:
        src = fh.read()
    if "ld+json" in src or "schema.org" in src or "application/ld" in src:
        found = True
        print(f"{rel(p)}: JSON-LD present")
if not found:
    print("NONE FOUND anywhere in app/")

# 3. h1 / h2 counts and h1 text per page
print("=" * 70)
print("HEADING AUDIT (h1 per page, total h2/h3)")
print("=" * 70)
for p in sorted(glob.glob(os.path.join(APP, "**", "page.tsx"), recursive=True)):
    with open(p, encoding="utf-8", errors="replace") as fh:
        src = fh.read()
    h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", src, re.S)
    h2 = len(re.findall(r"<h2[^>]*>", src))
    h3 = len(re.findall(r"<h3[^>]*>", src))
    clean = lambda s: re.sub(r"<[^>]+>", "", s).strip().replace("\n", " ")[:80]
    print(f"{rel(p):45s} h1={len(h1s)} h2={h2} h3={h3} | {clean(h1s[0]) if h1s else 'NO H1'}")

# 4. Image usage: next/image with/without alt, plain <img>
print("=" * 70)
print("IMAGE AUDIT")
print("=" * 70)
missing_alt = []
img_total = 0
for p in walk_tsx():
    with open(p, encoding="utf-8", errors="replace") as fh:
        src = fh.read()
    for m in re.finditer(r"<Image\b[^>]*/?>", src, re.S):
        img_total += 1
        tag = m.group(0)
        if "alt=" not in tag:
            missing_alt.append((rel(p), tag[:120]))
    for m in re.finditer(r"<img\b[^>]*/?>", src, re.S):
        img_total += 1
        tag = m.group(0)
        if "alt=" not in tag:
            missing_alt.append((rel(p), tag[:120]))
print(f"total <Image>/<img> tags: {img_total}")
print(f"missing alt: {len(missing_alt)}")
for f, t in missing_alt[:40]:
    print(f"  {f}: {t}")

# 5. Links in Header/Footer for sitemap inventory
print("=" * 70)
print("HEADER/FOOTER LINK INVENTORY")
print("=" * 70)
for name in ("Header", "Footer"):
    p = os.path.join(APP, "components", f"{name}.tsx")
    if not os.path.exists(p):
        print(f"{name}: NOT FOUND at {p}")
        continue
    with open(p, encoding="utf-8", errors="replace") as fh:
        src = fh.read()
    links = re.findall(r'href=["\']([^"\']+)["\']', src)
    print(f"{name}: {len(links)} links -> {sorted(set(links))}")

# 6. Route inventory
print("=" * 70)
print("ROUTE INVENTORY (page.tsx files)")
print("=" * 70)
routes = []
for p in sorted(glob.glob(os.path.join(APP, "**", "page.tsx"), recursive=True)):
    r = rel(p).replace("page.tsx", "").replace("\\", "/")
    if r.startswith("app/"):
        r = r[4:]
    route = "/" + r if r else "/"
    if "(panel)" in route:
        route = route.replace("/(panel)", "")
    routes.append(route)
print(json.dumps(routes, indent=1))
