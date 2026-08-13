#!/usr/bin/env python3
"""Post-change verification: routes, H1s, metadata, JSON-LD validity, sitemap/robots/manifest."""
import json, re, urllib.request, ssl

BASE = "http://localhost:3000"
ctx = ssl.create_default_context(); ctx.check_hostname = False; ctx.verify_mode = ssl.CERT_NONE

def fetch(path):
    req = urllib.request.Request(BASE + path, headers={"User-Agent": "atlas-verify/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=90, context=ctx) as r:
            return r.status, r.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", errors="replace")
    except Exception as e:
        return None, str(e)

def meta(body, prop):
    m = re.search(r'<meta[^>]+(?:name|property)=["\']' + prop + r'["\'][^>]+content=["\']([^"\']+)', body)
    if not m:
        m = re.search(r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+(?:name|property)=["\']' + prop + r'["\']', body)
    return m.group(1) if m else ""

ROUTES = ["/", "/about", "/blog", "/client-certification", "/compliance", "/contact",
          "/dispute-resolution", "/faq", "/how-it-works", "/pricing", "/privacy",
          "/resources/cost-calculator", "/resources/package-recommender", "/services",
          "/services/credit-report", "/services/criminal-background-checks",
          "/services/employment-verification", "/services/global-watchlist", "/services/mvr",
          "/services/sex-offender-registry", "/services/social-media-screening",
          "/services/ssn-trace", "/services/tenant-screening", "/terms",
          "/blog/fcra-adverse-action-checklist-2026", "/blog/ssn-trace-explained"]

issues = []
for r in ROUTES:
    status, body = fetch(r)
    if status != 200:
        issues.append(f"{r}: HTTP {status}")
        continue
    h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", body, re.S)
    if len(h1s) != 1:
        issues.append(f"{r}: {len(h1s)} H1 tags")
    if not re.search(r'rel="canonical"', body):
        issues.append(f"{r}: no canonical")
    if not meta(body, "og:title"):
        issues.append(f"{r}: no og:title")
    if not meta(body, "twitter:card"):
        issues.append(f"{r}: no twitter:card")
    if "og:image" not in body:
        issues.append(f"{r}: no og:image")
    ld = re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', body, re.S)
    if not ld:
        issues.append(f"{r}: no JSON-LD")
    for block in ld:
        try:
            json.loads(block)
        except Exception as e:
            issues.append(f"{r}: JSON-LD parse error: {e}")

print(f"routes checked: {len(ROUTES)}, issues: {len(issues)}")
for i in issues: print("  !", i)

# sitemap
status, body = fetch("/sitemap.xml")
print(f"\nsitemap.xml: HTTP {status}, {len(body)} bytes")
if status == 200:
    urls = re.findall(r"<loc>([^<]+)</loc>", body)
    print(f"  URLs: {len(urls)}")
    bad = [u for u in urls if "/admin" in u or "/trust" in u]
    print(f"  admin/trust entries: {len(bad)}")
    print("  sample:", urls[:3])

# robots
status, body = fetch("/robots.txt")
print(f"\nrobots.txt: HTTP {status}")
print(body[:300])

# manifest
status, body = fetch("/manifest.webmanifest")
print(f"\nmanifest.webmanifest: HTTP {status}")
print(body[:200])

# og image
status, _ = fetch("/assets/og-image.png")
print(f"\nog-image.png: HTTP {status}")

# admin guard
status, body = fetch("/admin")
print(f"\n/admin: HTTP {status} (expect 200 login page w/ noindex)")
print("  robots meta:", meta(body, "robots") or "none", "| h1:", "Sign in" in body)
