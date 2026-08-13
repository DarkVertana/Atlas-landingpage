# FCRA-Aligned AI Prompt Standard — Atlas Screening Website

**Date:** 2026-08-13
**Scope:** Any AI-assisted development, copywriting, or SEO work on this repository
(and the Atlas Screening product/marketing ecosystem).
**Status:** Mandatory reference — load before any AI-generated content ships.

---

## 1. Why this exists

Atlas Screening is a **Consumer Reporting Agency (CRA)**. Its background screening
products produce **consumer reports** governed by the **Fair Credit Reporting Act
(FCRA), 15 U.S.C. §1681 et seq.**[1], enforced by the FTC and CFPB, plus a growing
patchwork of state laws (credit-based employment decision bans, ban-the-box/fair
chance rules, tenant screening statutes).

Marketing copy, metadata, FAQ answers, blog posts, and structured data on a CRA's
website are part of the compliance surface: exaggerated claims about speed or
accuracy, "instant background check" framing, or misstatements about consent and
adverse action can create regulatory and litigation exposure even when the product
itself is compliant.

**Policy: Anything AI-generated for this site must be reviewed against FCRA
compliance before implementation. The review is a gate, not a formality.**

---

## 2. The claim rulebook (what AI may and may not write)

### 2.1 Prohibited claims — never output these, in any context

| Phrase / concept | Why it's prohibited |
|---|---|
| "Instant background checks" / "instant results" (for the full report) | Implies the complete, verified report is immediate; screening involves verification steps. FTC guidance to employers stresses the two-step adverse-action process and that reports take time to verify.[2] |
| "Guaranteed accurate" / "100% accurate" / "error-free" | FCRA requires CRAs to follow "reasonable procedures to assure maximum possible accuracy"[1][3] — a guarantee of perfect accuracy is an overclaim courts and regulators treat harshly. |
| "Complete records" / "all counties" / "nationwide complete coverage" | No dataset is exhaustive; claims of completeness misrepresent the product and create liability for missing records. |
| "100% compliant" / "always compliant" | Compliance is process, not a percentage; absolute compliance claims are indefensible in an audit. |
| "Exact match" (identity) | Matches are probabilistic; adjudication resolves ambiguity. |
| "The AI decides" / "AI scores applicants" | Regulators have signaled that algorithmic decision-making without human governance and explainability is a compliance liability.[4] AI at Atlas finds and organizes records; trained humans adjudicate. |

### 2.2 Required framing — always include or preserve

- **CRA positioning:** Atlas provides reports; **clients make hiring decisions**.
- **Consent & permissible purpose:** checks run only with a lawful purpose,
  standalone disclosure, and written authorization.[2]
- **Adverse action support (two-step):** pre-adverse notice (copy of report +
  CFPB's "A Summary of Your Rights Under the FCRA" + a reasonable waiting period)
  then the final adverse-action notice.[2]
- **Dispute rights:** consumers may dispute; Atlas reinvestigates; contact
  compliance@atlasscreening.com.[1][3]
- **Data-source caveat:** information comes from third-party/public-record
  sources; Atlas does not guarantee completeness, currency, or error-free data
  (mirror the language already in Terms of Service).
- **Turnaround honesty:** separate "database results" (fast) from "verified,
  complete report" (depends on courts, employers, jurisdictions).

### 2.3 State-law awareness

- ~11 states (CA, CO, CT, HI, IL, MD, NV, NY, OR, VT, WA + some cities)
  restrict credit-based employment decisions.
- Ban-the-box / fair-chance laws vary by jurisdiction; HUD guidance discourages
  blanket criminal-history bans in housing.
- Copy must acknowledge variation — never promise one uniform rule.

---

## 3. Prompt templates (copy these into any AI session)

### Template A — marketing copy / page content

```
You are writing marketing content for Atlas Screening, a Consumer Reporting
Agency (CRA) that provides FCRA-compliant background screening. Strict rules:

1. NEVER use these words or equivalents: instant, guaranteed, 100% accurate,
   error-free, complete records, all counties, always, exact match.
2. Atlas provides consumer reports; employers/property managers make decisions.
3. When describing how a check runs, include: lawful permissible purpose,
   standalone disclosure + written authorization, and (for any adverse outcome)
   the two-step adverse-action process with a waiting period.
4. Consumers can dispute report contents; reinvestigation is offered; disputes go
   to compliance@atlasscreening.com.
5. Data comes from third-party and public-record sources — no guarantee of
   completeness or currency.
6. Distinguish fast database results from the verified, complete report.
7. Keep every claim conservative, specific, and defensible in an audit.

Task: [describe the page/block and the information to include]
```

### Template B — SEO metadata / structured data

```
You are writing SEO metadata and JSON-LD for Atlas Screening
(https://atlasscreening.com), a CRA under the FCRA.

Rules:
1. Title ≤ 60 chars, description ≤ 155 chars, factual and specific.
2. No absolute speed/accuracy claims (no "instant", "guaranteed", "accurate",
   "complete"). You may say "FCRA-compliant" and describe what a service
   includes.
3. JSON-LD may only restate claims that already appear in the page copy —
   never introduce new facts or figures.
4. Use schema.org types appropriate to the page (Service, FAQPage,
   BreadcrumbList, BlogPosting, Organization, WebSite). Organization data:
   name "Atlas Screening", url https://atlasscreening.com, logo
   https://atlasscreening.com/assets/atlas-logo.png, sameAs [LinkedIn, X,
   Facebook, Instagram links as in the site footer], contactPoint
   contact@atlasscreening.com / +1-917-275-7712.
5. Admin routes must stay noindexed; robots.txt disallows /admin.

Task: [page URL + existing copy to base the metadata on]
```

### Template C — blog / educational content

```
You are drafting a blog post for Atlas Screening's compliance-focused blog.

Rules:
1. Educational accuracy first: FCRA obligations (permissible purpose, standalone
   disclosure, two-step adverse action, dispute/reinvestigation, record retention
   per EEOC requirements), state-law variation, and EEOC/Title VII guidance on
   criminal-record screens (arrest vs conviction, individualized assessment)
   must be stated correctly.
2. Cite applicable law/guidance inline where relevant (FCRA sections, EEOC
   guidance, HUD guidance, state statutes).
3. No promotional absolute claims (see rule list in Template A).
4. Do not give legal advice; when a reader should consult counsel, say so.
5. Tone: practical, plain-English, written by a compliance team.

Task: [topic + outline]
```

### Template D — code / component changes

```
You are modifying the Atlas Screening website (Next.js 16 App Router).
Constraints:
- Do not alter compliance copy, disclosure language, legal pages, or the
  CRA positioning line except for factual corrections.
- New metadata must not make absolute accuracy/speed claims.
- Structured data must only restate existing page copy.
- Exactly one H1 per page; page heroes use SectionHeader with as="h1".
- Follow DESIGN_SPEC.md tokens; use shared components (SectionHeader, Reveal,
  ServiceHero, LegalPage, ServiceJsonLd).
- New public routes must be added to app/sitemap.ts.
- Keep /admin noindexed; never remove the proxy.ts auth guard.
- After changes: npm run build must pass; run scripts/verify_seo.py.

Task: [describe the change]
```

---

## 4. The FCRA review gate (before ANY AI output is implemented)

1. **Static scan** — grep the proposed text for the prohibited-claim word list
   (instant, guaranteed, 100%, complete, all, always, exact, error-free,
   accurate).
2. **Role check** — does the copy correctly separate Atlas (report provider)
   from the client (decision maker)?
3. **Process check** — consent/disclosure/permissible purpose present where a
   check is described? Adverse action described as two-step with a waiting
   period?
4. **Rights check** — dispute path reachable on consumer-facing pages?
5. **Evidence check** — any credential (SOC 2, PBSA), statistic, or source
   count must be verified against a company-provided fact, not invented.
6. **Metadata check** — title/description/OG/JSON-LD pass rules 1–5 too.
7. **Sign-off** — record the review in the changelog / PR description.

---

## 5. Sources (canonical, verified 2026-08-13)

1. FTC — Fair Credit Reporting Act (statute text, 15 U.S.C. §1681 et seq.):
   https://www.ftc.gov/legal-library/browse/statutes/fair-credit-reporting-act
2. FTC — "Using Consumer Reports: What Employers Need to Know" (disclosure,
   certification, two-step adverse action):
   https://www.ftc.gov/business-guidance/resources/using-consumer-reports-employers-what-employers-need-know
3. FTC — "Fair Credit Reporting Act" (consumer summary; maximum possible
   accuracy; dispute rights):
   https://consumer.ftc.gov/articles/fair-credit-reporting-act
4. CFPB — "A Summary of Your Rights Under the FCRA" (required enclosure with
   pre-adverse action notices):
   https://files.consumerfinance.gov/f/documents/cfpb_summary_your_rights_under_fcra.pdf
5. EEOC — "Enforcement Guidance on the Consideration of Arrest and Conviction
   Records in Employment Decisions Under Title VII" (2012; individualized
   assessment, job-relatedness, disparate impact):
   https://www.eeoc.gov/laws/guidance/enforcement-guidance-consideration-arrest-and-conviction-records-employment-decisions
6. HUD — Office of General Counsel guidance on criminal records under the Fair
   Housing Act (2016; individualized assessment in housing):
   https://www.hud.gov/sites/dfiles/Main/documents/HUD_OGCGuidAppFHAStandardCR.pdf

> Note: the FTC guidance pages render content via JavaScript; the URLs above are
> the canonical entry points. EEOC quote verified verbatim from fetched page:
> "the use of a screen that does not include individualized assessment is more
> likely to violate Title VII."

---

## 6. Operational files

- `CLAUDE.md` (repo root) — auto-loaded guardrails for Claude Code / AI agents.
  *(Pending user approval to create; content mirrors this document.)*
- This file — the canonical prompt templates + review gate.
- `CHANGELOG-2026-08-13.md` — record of the compliance/SEO fixes this standard
  was applied to.
