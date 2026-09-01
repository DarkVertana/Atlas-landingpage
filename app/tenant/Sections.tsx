"use client";

import Reveal from "../components/Reveal";
import TiltedCard from "../components/reactbits/TiltedCard";
import CountUp from "../components/reactbits/CountUp";
import DotField from "../components/reactbits/DotField";

/* Section header in the tenant palette (matches the hero). */
function Header({ eyebrow, title, intro, align = "left" }: { eyebrow: string; title: React.ReactNode; intro?: string; align?: "left" | "center" }) {
  const c = align === "center";
  return (
    <div className={`max-w-2xl ${c ? "mx-auto text-center" : ""}`}>
      <Reveal as="p" variant="fade" className="text-xs font-semibold uppercase tracking-widest text-[#058B74]">
        {eyebrow}
      </Reveal>
      <Reveal as="h2" variant="up" delay={80} className="mt-3 text-3xl font-bold leading-tight text-[#01463A] md:text-4xl">
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" variant="fade" delay={160} className={`mt-4 text-sm leading-relaxed text-[#5c675f] ${c ? "mx-auto" : ""}`}>
          {intro}
        </Reveal>
      )}
    </div>
  );
}

const I = ({ d, className = "h-6 w-6" }: { d: string; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={d} />
  </svg>
);

/* ------------------------------------------------- Made for landlords --- */

export function TenantShowcase() {
  const bullets = [
    "One unit or a small portfolio, no minimums",
    "No business license required to get started",
    "Applicant-guided, nothing to collect or upload",
    "Fair-housing rules applied automatically",
  ];
  return (
    <section className="overflow-hidden px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Header eyebrow="Made for you" title={<>Built for independent <span className="text-[#058B74]">landlords.</span></>} intro="Whether you own one unit or a small portfolio, Atlas Tenant keeps screening simple: no enterprise onboarding, no business certification. Start a screening and let the applicant do the rest." />
          <ul className="mt-6 space-y-3">
            {bullets.map((b, i) => (
              <Reveal as="li" key={b} variant="up" delay={200 + i * 70} className="flex items-start gap-3 text-sm text-[#3c4c47]">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#058B74]/12 text-[#058B74] ring-1 ring-inset ring-[#058B74]/15">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                {b}
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal variant="right" delay={120} className="[perspective:1200px]">
          <TiltedCard rotateAmplitude={7} scale={1.02} className="relative">
            <div className="absolute -inset-6 -z-10 hidden rounded-[2rem] bg-gradient-to-br from-[#058B74]/15 to-transparent blur-2xl sm:block" />
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-[#01463A]/15 ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/Tenant-screening.webp" alt="A landlord reviewing a tenant screening report" loading="lazy" className="block h-auto w-full" />
            </div>
            {[
              { label: "Eviction · none found", pos: "-top-4 -left-4" },
              { label: "ResidentScore 728", pos: "-bottom-4 -right-4" },
            ].map((b) => (
              <div key={b.label} className={`absolute ${b.pos} z-20 hidden items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lg shadow-black/10 ring-1 ring-black/5 sm:flex`} style={{ transform: "translateZ(60px)" }}>
                <span className="relative flex items-center justify-center">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#058B74] opacity-60" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#058B74]" />
                </span>
                <span className="whitespace-nowrap text-[11px] font-semibold text-[#01463A]">{b.label}</span>
              </div>
            ))}
          </TiltedCard>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- What you get --- */
// A balanced bento grid — one green summary tile, five check tiles, one CTA.

type Check = { label: string; desc: string; accent: string; d: string };

const CHECKS: Check[] = [
  { label: "Criminal history", desc: "Nationwide, county, state, and sex-offender registry.", accent: "#3E92CC", d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "Credit & ResidentScore", desc: "TransUnion report, scored for rental-payment prediction.", accent: "#8B7DE0", d: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" },
  { label: "Eviction records", desc: "Court filings and judgments where they're reported.", accent: "#F5A524", d: "M3 10h18M5 10V7l7-4 7 4v3M5 21h14M10 14h4v7h-4z" },
  { label: "Identity verification", desc: "SSN trace, address history, applicant-guided.", accent: "#058B74", d: "M12 11a4 4 0 100-8 4 4 0 000 8zM6 21v-1a6 6 0 0112 0v1" },
  { label: "Income verification", desc: "Bank-linked via Plaid, no paystubs to collect.", accent: "#F2694E", d: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182" },
];

function CheckTile({ c, delay }: { c: Check; delay: number }) {
  return (
    <Reveal as="div" variant="up" delay={delay} className="group flex flex-col rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01463A]/5">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105" style={{ backgroundColor: `${c.accent}1a`, color: c.accent }}>
        <I d={c.d} />
      </span>
      <h3 className="mt-4 text-base font-semibold text-[#01463A]">{c.label}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-[#5c675f]">{c.desc}</p>
    </Reveal>
  );
}

export function TenantChecks() {
  return (
    <section id="checks" className="scroll-mt-24 px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Header eyebrow="What you get" title="Five checks. One clean report." intro="Every component of a lease decision, bundled together, not five separate orders to chase down." />

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {/* Green summary tile */}
          <Reveal as="div" variant="up" className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#01463A] p-7 text-white shadow-lg shadow-[#01463A]/15 md:col-span-2 md:row-span-1">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#0aa88a]">One report</p>
              <h3 className="mt-2 text-xl font-bold leading-tight text-white">Everything a landlord needs, in a single file.</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {CHECKS.map((c) => (
                <span key={c.label} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/90 ring-1 ring-inset ring-white/10">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.accent }} />
                  {c.label.split(" ")[0]}
                </span>
              ))}
            </div>
          </Reveal>

          {/* First two checks fill row 1 */}
          <CheckTile c={CHECKS[0]} delay={80} />
          <CheckTile c={CHECKS[1]} delay={140} />

          {/* Row 2: remaining three checks + CTA */}
          <CheckTile c={CHECKS[2]} delay={80} />
          <CheckTile c={CHECKS[3]} delay={140} />
          <CheckTile c={CHECKS[4]} delay={200} />

          <Reveal as="div" variant="up" delay={260} className="flex flex-col justify-between rounded-2xl border border-dashed border-[#058B74]/40 bg-[#058B74]/[0.05] p-6">
            <div>
              <p className="text-sm font-semibold text-[#01463A]">Build your check</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[#5c675f]">Pick a package and add-ons to see the price live.</p>
            </div>
            <a href="#plans" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#058B74] transition-colors hover:text-[#01463A]">
              See packages
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Industries --- */
// Who tenant screening is built for — a visual breadth section, not links.

type Industry = { title: string; desc: string; accent: string; d: string };

const INDUSTRIES: Industry[] = [
  { title: "Independent landlords", desc: "One unit or a small portfolio, screen without enterprise onboarding.", accent: "#058B74", d: "M3 10l9-7 9 7M5 9v11h5v-6h4v6h5V9" },
  { title: "Property management companies", desc: "Consistent, compliant screening across every property you manage.", accent: "#3E92CC", d: "M3 21h18M6 21V7l6-4 6 4v14M10 10h.01M14 10h.01M10 14h.01M14 14h.01" },
  { title: "Student housing", desc: "Screen students, roommates, and guarantors on the same lease.", accent: "#8B7DE0", d: "M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 2.7 2 6 2s6-1 6-2v-5" },
  { title: "Corporate relocation", desc: "Faster placement for relocating employees and their households.", accent: "#F5A524", d: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" },
];

export function TenantIndustries() {
  return (
    <section id="industries" className="scroll-mt-24 px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Header align="center" eyebrow="Who it's for" title="Built for how you lease." intro="From a single rental to a managed portfolio, tenant screening adapts to the way you find and place residents." />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal as="div" key={ind.title} variant="up" delay={i * 90} className="group flex flex-col rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01463A]/5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105" style={{ backgroundColor: `${ind.accent}1a`, color: ind.accent }}>
                <I d={ind.d} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-[#01463A]">{ind.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[#5c675f]">{ind.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Stats --- */
// Dark panel, interactive DotField behind animated CountUp figures.

const STATS: { to: number; prefix?: string; suffix?: string; separator?: boolean; label: string }[] = [
  { to: 5, label: "Checks in one report" },
  { to: 50, label: "U.S. states covered" },
  { to: 10000, suffix: "+", separator: true, label: "Eviction jurisdictions" },
  { to: 3, prefix: "~", suffix: " days", label: "To a verified report" },
];

export function TenantStats() {
  return (
    <section className="px-6 py-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#01463A] px-6 py-14 md:px-12">
        <DotField className="absolute inset-0" color="255,255,255" glowColor="10,168,138" baseAlpha={0.12} dotSpacing={26} />
        <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal as="div" key={s.label} variant="up" delay={i * 90} className="text-center">
              <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} separator={s.separator} className="text-4xl font-extrabold tracking-tight text-white md:text-5xl" />
              <p className="mt-2 text-xs leading-relaxed text-white/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- How it works --- */
// A clean, connected horizontal timeline.

const STEPS: { n: string; title: string; desc: string; d: string }[] = [
  { n: "1", title: "Start the screening", desc: "Enter your applicant's name and email, no documents to collect.", d: "M12 4v16m8-8H4" },
  { n: "2", title: "Applicant completes it", desc: "A secure, mobile-first link to consent and confirm identity. Co-applicants captured too.", d: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" },
  { n: "3", title: "Checks run in parallel", desc: "Criminal, credit, eviction, identity, and income run together, database results first.", d: "M12 6v6l4 2M12 22a10 10 0 100-20 10 10 0 000 20z" },
  { n: "4", title: "Review one clean report", desc: "Pass / flag indicators in a single report, with a pre-filled adverse-action flow if needed.", d: "M9 12l2 2 4-4M12 22a10 10 0 100-20 10 10 0 000 20z" },
];

export function TenantSteps() {
  return (
    <section id="how" className="scroll-mt-24 px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Header align="center" eyebrow="How it works" title="Four steps. No paperwork chase." intro="From invitation to cleared report: automated, tracked, and mobile-first the whole way." />

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[#058B74]/30 to-transparent md:block" />
          {STEPS.map((s, i) => (
            <Reveal as="div" key={s.n} variant="up" delay={i * 100} className="relative flex flex-col items-center text-center md:items-start md:text-left">
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#058B74] shadow-md shadow-[#01463A]/5 ring-1 ring-[#058B74]/15">
                <I d={s.d} className="h-6 w-6" />
                <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#01463A] text-[11px] font-bold text-white">{s.n}</span>
              </span>
              <h3 className="mt-5 text-base font-semibold text-[#01463A]">{s.title}</h3>
              <p className="mt-2 max-w-[15rem] text-[13px] leading-relaxed text-[#5c675f]">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- FAQ --- */

const FAQS = [
  { q: "How is Atlas Tenant different from a generic background check?", a: "It's built specifically for residential leasing: eviction records, ResidentScore, and fair-housing rules are first-class, not bolted on. Atlas is a Consumer Reporting Agency; reports are furnished in accordance with the FCRA and applicable state and local housing laws." },
  { q: "Who pays, the landlord or the applicant?", a: "Your choice. The default is landlord-paid, and an applicant-paid flow is available if that fits your leasing model. You're only billed after the applicant submits their information." },
  { q: "How fast will I get results?", a: "Database results can return quickly, often the same day. The verified report, including county records and verifications, may take longer depending on the jurisdictions involved. We separate the two so you always know what's confirmed." },
  { q: "Does this handle fair-housing compliance?", a: "Atlas applies state-specific rules automatically, including source-of-income protections and fair-chance housing ordinances where they apply. If you decline an applicant based on a report, the pre-adverse and adverse-action notices and the dispute path are built in." },
  { q: "Can I screen more than one applicant on a lease?", a: "Yes. Add co-applicants or guarantors and they're screened in parallel. You receive one combined report with individual sub-reports." },
  { q: "Are applicant details secure?", a: "All applicant information is protected with advanced encryption and stored on encrypted servers, with strict role-based access so only authorized people can view completed reports." },
];

export function TenantFAQ() {
  return (
    <section id="faq" className="scroll-mt-24 px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Header eyebrow="Answers" title="Tenant screening, answered." intro="Compliance, turnaround, and multi-applicant leases: the things landlords ask before their first check." />
          <Reveal as="p" variant="fade" delay={200} className="mt-4 text-sm text-[#5c675f]">
            Still stuck? <a href="/contact" className="font-semibold text-[#058B74] hover:underline">Get in touch</a>.
          </Reveal>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <details className="group rounded-2xl border border-[#E4E9E6] bg-white transition-all duration-300 hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 open:border-[#058B74]/40 open:shadow-md open:shadow-[#058B74]/5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2">
                  <span className="text-sm font-semibold text-[#01463A] transition-colors group-hover:text-[#058B74] group-open:text-[#058B74] md:text-base">{faq.q}</span>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#058B74]/10 text-[#058B74] ring-1 ring-inset ring-[#058B74]/10 transition-all duration-300 group-open:rotate-45 group-open:bg-[#058B74] group-open:text-white group-open:ring-[#058B74]">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 3v10M3 8h10" /></svg>
                  </span>
                </summary>
                <div className="-mt-1 px-6 pb-5 text-sm leading-relaxed text-[#5c675f]">{faq.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
