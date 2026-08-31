"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import OrderMockup from "./OrderMockup";
import { TenantShowcase, TenantChecks, TenantStats, TenantIndustries, TenantSteps, TenantFAQ } from "./Sections";

/* ------------------------------------------------------------------ data --- */

type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  features: string[];
  highlight?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "The essentials to screen with confidence.",
    price: 24.99,
    features: [
      "Identity & SSN trace",
      "Nationwide criminal database",
      "Sex offender registry",
      "Global watchlist",
      "Eviction records search",
      "Applicant-guided intake",
    ],
  },
  {
    id: "essential",
    name: "Essential",
    tagline: "What most landlords choose.",
    price: 34.99,
    highlight: true,
    features: [
      "Everything in Starter",
      "Credit report + ResidentScore",
      "County criminal search (up to 7 yrs)",
      "Income verification (bank-linked)",
      "Priority applicant support",
    ],
  },
  {
    id: "complete",
    name: "Complete",
    tagline: "Our most thorough package.",
    price: 44.99,
    features: [
      "Everything in Essential",
      "Federal criminal search",
      "Rental & employment history verification",
      "Full credit detail & tradelines",
      "Dedicated support",
    ],
  },
];

type AddOn = { id: string; name: string; price: number; desc: string };

const ADDONS: AddOn[] = [
  { id: "identity-protect", name: "Identity Protection", price: 2.95, desc: "Extra applicant-identity assurance for the screening." },
  { id: "mvr", name: "Motor vehicle record", price: 9.99, desc: "State driving history — useful for on-site or fleet roles." },
  { id: "rental-history", name: "Rental history verification", price: 9.99, desc: "Confirm prior landlord references and payment history." },
  { id: "co-applicant", name: "Additional co-applicant", price: 19.99, desc: "Screen a roommate, spouse, or guarantor on the same lease." },
];

const money = (n: number) => `$${n.toFixed(2)}`;

/* ------------------------------------------------------------------ page --- */

export default function TenantPage() {
  const [planId, setPlanId] = useState("essential");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const plan = PLANS.find((p) => p.id === planId)!;
  const addOnTotal = useMemo(
    () => ADDONS.filter((a) => selected.has(a.id)).reduce((s, a) => s + a.price, 0),
    [selected]
  );
  const total = plan.price + addOnTotal;

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const startHref = `/contact?product=tenant&plan=${planId}${
    selected.size ? `&addons=${[...selected].join(",")}` : ""
  }`;

  // Full-bleed hero video: pause it whenever it scrolls out of view (or under
  // reduced-motion) so it isn't decoding continuously and taxing weak GPUs.
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      v.removeAttribute("autoplay");
      v.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.05 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-[#F3F4EC] text-[#2b352f]">
      <TenantHeader startHref={startHref} />

      {/* ============================================================= HERO */}
      <section className="relative w-full overflow-hidden">
        {/* Full-bleed video */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/images/Tenant-screening.webp"
        >
          <source src="/assets/nature_mp4.mp4" type="video/mp4" />
        </video>

        {/* Blend scrims: soften the video for legibility on the left, and melt
            the bottom edge into the page background so nothing has a hard seam. */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3F4EC]/20 via-[#F3F4EC]/45 to-[#F3F4EC]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[#F3F4EC]" />

        <div className="relative mx-auto max-w-4xl px-5 pt-28 text-center sm:px-6 sm:pt-40 md:pt-48">
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#058B74]">
            Atlas Tenant · for landlords
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-[2.25rem] sm:text-5xl font-bold leading-[1.02] tracking-tight text-[#01463A] md:text-[4.5rem]">
            Know who&apos;s moving in.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#4a564e] md:text-lg">
            Smarter tenant screening for landlords and property managers.
            Criminal, credit, eviction, identity, and income — one
            applicant-guided report, built for residential leasing.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={startHref}
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#01463A] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#01463A]/15 transition-all hover:bg-[#058B74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
            >
              Start a screening
            </a>
            <a
              href="#plans"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#01463A]/20 bg-white/50 px-7 py-3 text-sm font-semibold text-[#01463A] backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
            >
              See packages
            </a>
          </div>

          <p className="mt-7 text-sm text-[#5c675f]">
            Pay as you go from <span className="font-semibold text-[#01463A]">$24.99</span> per screening — no
            subscriptions, billed only when an applicant completes.
          </p>
        </div>

        {/* Full desktop product mockup */}
        <div className="relative mx-auto mt-16 max-w-5xl px-5 pb-24 sm:px-6 md:mt-20 md:pb-28">
          <div className="tenant-rise">
            <OrderMockup />
          </div>
        </div>
      </section>

      {/* ============================================= MADE FOR LANDLORDS */}
      <TenantShowcase />

      {/* ==================================================== WHAT YOU GET */}
      <TenantChecks />

      {/* ========================================================== STATS */}
      <TenantStats />

      {/* ===================================================== INDUSTRIES */}
      <TenantIndustries />

      {/* ========================================================== PLANS */}
      <section id="plans" className="scroll-mt-24 py-14 sm:py-20 px-5 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <Reveal as="p" variant="fade" className="text-xs font-semibold uppercase tracking-widest text-[#058B74]">
              Build your screening
            </Reveal>
            <Reveal as="h2" variant="up" delay={80} className="mt-3 text-3xl font-bold leading-tight text-[#01463A] md:text-4xl">
              Pick a package. Add what you need.
            </Reveal>
            <Reveal as="p" variant="fade" delay={160} className="mt-4 text-sm leading-relaxed text-[#5c675f]">
              Choose a base package, then stack optional add-ons. Your running
              total updates live — you&apos;re only billed when an applicant
              completes the screening.
            </Reveal>
          </div>

          {/* Tier cards (selectable) */}
          <div className="grid gap-6 md:grid-cols-3">
            {PLANS.map((p, i) => {
              const active = p.id === planId;
              return (
                <Reveal as="div" key={p.id} variant="up" delay={i * 90} className="h-full">
                  <button
                    type="button"
                    onClick={() => setPlanId(p.id)}
                    aria-pressed={active}
                    className={`relative flex h-full w-full flex-col rounded-3xl border p-8 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2 ${
                      active
                        ? "border-[#058B74] bg-[#01463A] text-white shadow-xl shadow-[#01463A]/20"
                        : "border-black/[0.06] bg-white shadow-sm hover:-translate-y-0.5 hover:border-[#058B74]/30 hover:shadow-lg hover:shadow-[#058B74]/10"
                    }`}
                  >
                    {p.highlight && (
                      <span className={`absolute -top-3 left-8 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${active ? "bg-[#0aa88a] text-[#01463A]" : "bg-[#058B74] text-white"}`}>
                        Most chosen
                      </span>
                    )}
                    <div className="flex items-center justify-between">
                      <p className={`text-xs font-semibold uppercase tracking-widest ${active ? "text-[#0aa88a]" : "text-[#058B74]"}`}>
                        {p.name}
                      </p>
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${active ? "border-[#0aa88a] bg-[#0aa88a]" : "border-gray-300"}`}>
                        {active && (
                          <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8.5l3 3 7-7" stroke="#01463A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                    </div>
                    <h3 className={`mt-2 text-lg font-bold leading-tight ${active ? "text-white" : "text-[#01463A]"}`}>
                      {p.tagline}
                    </h3>
                    <div className="mt-5 flex items-baseline gap-1.5">
                      <span className={`text-4xl font-extrabold ${active ? "text-white" : "text-[#01463A]"}`}>{money(p.price)}</span>
                      <span className={`text-xs ${active ? "text-white/60" : "text-gray-400"}`}>per screening</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className={`flex items-start gap-3 text-sm ${active ? "text-white/90" : "text-[#2b352f]"}`}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? "#0aa88a" : "#058B74"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                            <path d="M5 12l5 5 9-11" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className={`mt-7 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest ${active ? "text-[#0aa88a]" : "text-[#058B74]"}`}>
                      {active ? "Selected" : "Select package"}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Add-ons + running summary */}
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="rounded-3xl border border-black/[0.06] bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#058B74]">Optional add-ons</h3>
              <p className="mt-1 text-sm text-[#5c675f]">Stack these on top of any package.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {ADDONS.map((a) => {
                  const on = selected.has(a.id);
                  return (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => toggle(a.id)}
                      aria-pressed={on}
                      className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2 ${
                        on ? "border-[#058B74] bg-[#058B74]/[0.04]" : "border-gray-200 bg-white hover:border-[#058B74]/40"
                      }`}
                    >
                      <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 transition-colors ${on ? "border-[#058B74] bg-[#058B74]" : "border-gray-300"}`}>
                        {on && (
                          <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8.5l3 3 7-7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-[#01463A]">{a.name}</span>
                          <span className="flex-shrink-0 text-sm font-bold text-[#058B74]">+{money(a.price)}</span>
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-[#5c675f]">{a.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Summary */}
            <div className="rounded-3xl border border-[#058B74]/30 bg-[#01463A] p-6 text-white shadow-lg shadow-[#01463A]/15 md:p-8 lg:sticky lg:top-24 lg:self-start">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#0aa88a]">Your screening</h3>
              <div className="mt-4 flex items-center justify-between border-b border-white/10 pb-3 text-sm">
                <span className="text-white/80">{plan.name} package</span>
                <span className="font-semibold">{money(plan.price)}</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {ADDONS.filter((a) => selected.has(a.id)).map((a) => (
                  <li key={a.id} className="flex items-center justify-between text-white/70">
                    <span>{a.name}</span>
                    <span>+{money(a.price)}</span>
                  </li>
                ))}
                {selected.size === 0 && <li className="text-xs text-white/40">No add-ons selected.</li>}
              </ul>
              <div className="mt-5 flex items-baseline justify-between border-t border-white/10 pt-4">
                <span className="text-sm text-white/70">Total per screening</span>
                <span className="text-3xl font-extrabold">{money(total)}</span>
              </div>
              <a
                href={startHref}
                className="mt-6 flex min-h-[48px] w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#01463A] transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
              >
                Start this screening
              </a>
              <p className="mt-3 text-center text-[11px] text-white/50">
                Applicants pay nothing unless you choose an applicant-paid flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== HOW IT WORKS */}
      <TenantSteps />

      {/* =========================================================== FAQ */}
      <TenantFAQ />

      {/* =========================================================== CTA */}
      <CTASection
        eyebrow="Get started today"
        title={<>Lease with<br className="hidden lg:block" /> confidence.</>}
        description="Criminal, credit, eviction, identity, and income — one compliant report, with fair-housing rules built in."
        primary={{ label: "Start a screening", href: startHref }}
        secondary={{ label: "Talk to us", href: "/contact?topic=sales&product=tenant" }}
      />

      <TenantFooter />
    </div>
  );
}

/* -------------------------------------------------------------- pieces --- */

function TenantHeader({ startHref }: { startHref: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-[#F3F4EC]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/tenant" className="flex items-center gap-2.5">
          <Image src="/assets/atlas-logo.svg" alt="Atlas Screening" width={112} height={28} className="h-7 w-auto" priority />
          <span className="hidden text-sm font-semibold text-[#01463A]/70 sm:inline">Tenant</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-[#4a564e] md:flex">
          <a href="#checks" className="transition-colors hover:text-[#01463A]">What you get</a>
          <a href="#plans" className="transition-colors hover:text-[#01463A]">Packages</a>
          <a href="#industries" className="transition-colors hover:text-[#01463A]">Industries</a>
          <a href="#how" className="transition-colors hover:text-[#01463A]">How it works</a>
          <a href="#faq" className="transition-colors hover:text-[#01463A]">FAQ</a>
        </nav>
        <a
          href={startHref}
          className="inline-flex min-h-[40px] items-center rounded-full bg-[#01463A] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#058B74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
        >
          Start screening
        </a>
      </div>
    </header>
  );
}

function TenantFooter() {
  return (
    <footer className="border-t border-black/[0.06] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/assets/atlas-logo.svg" alt="Atlas Screening" width={100} height={26} className="h-6 w-auto" />
          <span className="text-sm font-semibold text-[#01463A]">Tenant</span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#5c675f]">
          <a href="/compliance" className="hover:text-[#058B74]">FCRA compliance</a>
          <a href="/privacy" className="hover:text-[#058B74]">Privacy</a>
          <a href="/terms" className="hover:text-[#058B74]">Terms</a>
          <a href="/dispute-resolution" className="hover:text-[#058B74]">Disputes</a>
          <a href="/contact" className="hover:text-[#058B74]">Contact</a>
        </nav>
      </div>
      <p className="mx-auto mt-6 max-w-3xl text-[11px] leading-relaxed text-[#8a938c]">
        Atlas Screening is a Consumer Reporting Agency. Tenant reports are furnished in
        accordance with the Fair Credit Reporting Act (FCRA) and applicable state and
        local housing laws. Database results can return quickly; the full verified
        report may take longer. Housing decisions are made by the landlord, not Atlas —
        pre-adverse and adverse-action notices, and the dispute process
        (compliance@atlasscreening.com), apply. Screening requires a permissible purpose,
        applicant disclosure, and written authorization.
      </p>
    </footer>
  );
}
