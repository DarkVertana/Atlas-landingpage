#!/usr/bin/env python3
"""Rendered-SEO crawl of the local Atlas dev server."""
import json, re, urllib.request, urllib.error, ssl, sys

BASE = "http://localhost:3000"
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

BLOG_SLUGS = [
    "fcra-adverse-action-checklist-2026", "tenant-screening-best-practices",
    "ai-in-background-checks", "mvr-fleet-compliance", "hiring-velocity-without-risk",
    "ssn-trace-explained", "ban-the-box-state-map", "onboarding-checklist-new-hires",
    "data-retention-in-screening",
]

ROUTES = [
    "/", "/about", "/blog", "/client-certification", "/compliance", "/contact",
    "/dispute-resolution", "/faq", "/how-it-works", "/pricing", "/privacy",
    "/resources/cost-calculator", "/resources/package-recommender", "/services",
    "/services/credit-report", "/services/criminal-background-checks",
    "/services/employment-verification", "/services/global-watchlist",
    "/services/mvr", "/services/sex-offender-registry",
    "/services/social-media-screening", "/services/ssn-trace",
    "/services/tenant-screening", "/terms", "/trust",
    "/admin", "/admin/login", "/sitemap.xml", "/robots.txt", "/nonexistent-xyz",
] + [f"/blog/{s}" for s in BLOG_SLUGS]

def fetch(path):
    req = urllib.request.Request(BASE + path, headers={"User-Agent": "atlas-audit/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=60, context=ctx) as r:
            body = r.read().decode("utf-8", errors="replace")
            return r.status, r.geturl(), body
    except urllib.error.HTTPError as e:
        return e.code, BASE + path, e.read().decode("utf-8", errors="replace")
    except Exception as e:
        return None, str(e), ""

def meta(body, prop):
    m = re.search(r'<meta[^>]+(?:name|property)=["\']' + prop + r'["\'][^>]+content=["\']([^"\']+)', body)
    if not m:
        m = re.search(r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+(?:name|property)=["\']' + prop + r'["\']', body)
    return m.group(1) if m else ""

results = []
for r in ROUTES:
    status, final_url, body = fetch(r)
    row = {"route": r, "status": status, "final": final_url}
    if body and status == 200:
        t = re.search(r"<title[^>]*>(.*?)</title>", body, re.S)
        h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", body, re.S)
        clean = lambda s: re.sub(r"<[^>]+>", " ", s).replace("&amp;", "&").strip()
        row.update({
            "title": clean(t.group(1))[:110] if t else "NO TITLE",
            "desc": meta(body, "description")[:120],
            "og:title": meta(body, "og:title")[:80],
            "og:image": meta(body, "og:image")[:80],
            "twitter:card": meta(body, "twitter:card"),
            "canonical": re.search(r'<link[^>]+rel="canonical"[^>]+href="([^"]+)"', body).group(1) if re.search(r'<link[^>]+rel="canonical"[^>]+href="([^"]+)"', body) else "NONE",
            "robots_meta": meta(body, "robots"),
            "h1": [clean(h)[:60] for h in h1s[:2]],
            "jsonld": len(re.findall(r'application/ld\+json', body)),
            "h2": len(re.findall(r"<h2[^>]*>", body)),
        })
    results.append(row)

print(json.dumps(results, indent=1))
