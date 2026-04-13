"use client";

import { useMemo, useState } from "react";

type TierValue = "basic" | "standard" | "premium";

type Tier = {
  value: TierValue;
  name: string;
  price: number;
  desc: string;
  includes: string[];
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    value: "basic",
    name: "Basic",
    price: 24.99,
    desc: "Identity + national criminal coverage.",
    includes: ["SSN trace", "National criminal", "Watchlist"],
  },
  {
    value: "standard",
    name: "Standard",
    price: 34.99,
    desc: "Adds county criminal + MVR.",
    includes: ["Basic coverage", "County criminal", "Motor vehicle records"],
    popular: true,
  },
  {
    value: "premium",
    name: "Premium",
    price: 44.99,
    desc: "Federal + employment + education.",
    includes: ["Standard coverage", "Federal criminal", "Employment + education"],
  },
];

const volumeMilestones = [
  { at: 10, label: "Startup" },
  { at: 50, label: "Growing" },
  { at: 200, label: "Scale" },
  { at: 500, label: "Enterprise" },
];

function milestoneFor(v: number) {
  return [...volumeMilestones].reverse().find((m) => v >= m.at)?.label ?? "Startup";
}

const addOnList = [
  { key: "mvr", label: "Motor vehicle records", price: 9.99 },
  { key: "drug", label: "Drug screening", price: 49.99 },
  { key: "employment", label: "Employment verification", price: 19.99 },
  { key: "education", label: "Education verification", price: 19.99 },
  { key: "credit", label: "Credit report", price: 19.99 },
  { key: "tenant", label: "Tenant screening", price: 39.99 },
  { key: "watchlist", label: "Global watchlist", price: 14.99 },
  { key: "social", label: "Social media inquiry", price: 29.99 },
];

// Heuristic "legacy vendor" per-check cost for the savings callout.
const LEGACY_MULTIPLIER = 1.45;

function fmt(n: number, opts: Intl.NumberFormatOptions = {}) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0, ...opts });
}

export default function CostCalculatorPage() {
  const [tier, setTier] = useState<TierValue>("standard");
  const [volume, setVolume] = useState(50);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const activeTier = useMemo(
    () => tiers.find((t) => t.value === tier)!,
    [tier]
  );

  const addOnLineItems = useMemo(
    () => addOnList.filter((a) => selectedAddOns.includes(a.key)),
    [selectedAddOns]
  );

  const addOnTotal = addOnLineItems.reduce((sum, a) => sum + a.price, 0);
  const perCheck = activeTier.price + addOnTotal;
  const monthlyCost = perCheck * volume;
  const annualCost = monthlyCost * 12;
  const legacyAnnual = annualCost * LEGACY_MULTIPLIER;
  const annualSavings = legacyAnnual - annualCost;
  const savingsPct = legacyAnnual > 0 ? Math.round((annualSavings / legacyAnnual) * 100) : 0;
  const tierShare = perCheck > 0 ? (activeTier.price / perCheck) * 100 : 100;
  const addOnShare = 100 - tierShare;

  const toggleAddOn = (key: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]
    );
  };

  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            Interactive tool
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Screening cost calculator.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            Estimate your annual screening spend in seconds — pick a tier, add
            what you need, and see totals update live.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-gray-50/50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
            {/* ─── Inputs ─── */}
            <div className="space-y-8">
              {/* Tier */}
              <Panel step="01" title="Choose your base tier">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {tiers.map((t) => {
                    const active = tier === t.value;
                    return (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => setTier(t.value)}
                        className={`relative text-left p-4 rounded-xl border-2 transition-all ${
                          active
                            ? "border-[#058B74] bg-[#058B74]/5 shadow-sm"
                            : "border-gray-200 bg-white hover:border-[#058B74]/40"
                        }`}
                      >
                        {t.popular && (
                          <span className="absolute -top-2 right-3 inline-flex items-center bg-[#01463A] text-[9px] font-bold uppercase tracking-widest text-white px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                        <div className="flex items-baseline justify-between">
                          <span className="text-sm font-semibold text-[#01463A]">
                            {t.name}
                          </span>
                          <span className="text-xs font-semibold text-[#058B74]">
                            ${t.price}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[11px] text-gray-500 leading-relaxed">
                          {t.desc}
                        </p>
                        <ul className="mt-3 space-y-1">
                          {t.includes.map((i) => (
                            <li
                              key={i}
                              className="flex items-center gap-1.5 text-[11px] text-[#01463A]"
                            >
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke={active ? "#058B74" : "#9CA3AF"}
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="flex-shrink-0"
                              >
                                <path d="M5 12l5 5 9-11" />
                              </svg>
                              {i}
                            </li>
                          ))}
                        </ul>
                        {active && (
                          <span className="absolute top-3 left-3 w-4 h-4 rounded-full bg-[#058B74] flex items-center justify-center">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12l5 5 9-11" />
                            </svg>
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </Panel>

              {/* Volume */}
              <Panel step="02" title="Set your monthly volume">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Checks per month
                    </span>
                    <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#058B74]/10 text-[10px] font-semibold uppercase tracking-widest text-[#058B74]">
                      {milestoneFor(volume)}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#01463A] leading-none">
                      {volume}
                    </span>
                    {volume >= 500 && (
                      <span className="text-base font-bold text-[#058B74]">+</span>
                    )}
                  </div>
                </div>

                <input
                  type="range"
                  min={1}
                  max={500}
                  step={1}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full accent-[#058B74]"
                />

                <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-400 mt-2">
                  <span>1</span>
                  <span>100</span>
                  <span>250</span>
                  <span>500+</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[10, 25, 50, 100, 250, 500].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setVolume(preset)}
                      className={`px-3 py-1 rounded-full text-[11px] font-medium border transition-all ${
                        volume === preset
                          ? "bg-[#01463A] text-white border-[#01463A]"
                          : "bg-white text-[#01463A] border-gray-200 hover:border-[#058B74]/40"
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>

                {volume >= 200 && (
                  <div className="mt-5 flex items-start gap-2 rounded-xl bg-[#058B74]/5 border border-[#058B74]/20 px-4 py-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#058B74"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2z" />
                    </svg>
                    <div>
                      <p className="text-xs font-semibold text-[#01463A]">
                        You may qualify for volume pricing.
                      </p>
                      <p className="mt-0.5 text-[11px] text-gray-500 leading-relaxed">
                        Teams above ~200 checks/month unlock tiered discounts
                        automatically.{" "}
                        <a href="/contact" className="text-[#058B74] font-semibold hover:underline">
                          Request a quote
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}
              </Panel>

              {/* Add-ons */}
              <Panel step="03" title="Add what you need">
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Every add-on stacks on top of your base tier and is billed only
                  when an applicant completes it.
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {addOnList.map((a) => {
                    const active = selectedAddOns.includes(a.key);
                    return (
                      <button
                        key={a.key}
                        type="button"
                        onClick={() => toggleAddOn(a.key)}
                        className={`flex items-center justify-between gap-3 p-3 rounded-xl border text-left transition-all ${
                          active
                            ? "bg-[#058B74]/5 border-[#058B74]/40"
                            : "bg-white border-gray-200 hover:border-[#058B74]/40"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                              active
                                ? "bg-[#058B74] border-[#058B74]"
                                : "border-gray-300"
                            }`}
                          >
                            {active && (
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12l5 5 9-11" />
                              </svg>
                            )}
                          </span>
                          <span className="text-sm font-medium text-[#01463A] truncate">
                            {a.label}
                          </span>
                        </div>
                        <span className="flex-shrink-0 text-xs font-semibold text-[#058B74]">
                          +${a.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </Panel>
            </div>

            {/* ─── Sticky summary ─── */}
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-3xl overflow-hidden border border-[#01463A]/20 shadow-xl shadow-[#01463A]/10">
                {/* Header */}
                <div className="relative bg-[#01463A] text-white p-6 overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />
                  <div className="relative">
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-white/50">
                      Your estimate
                    </p>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold leading-none">
                        ${fmt(monthlyCost)}
                      </span>
                      <span className="text-xs text-white/60">/ month</span>
                    </div>
                    <p className="mt-1 text-sm text-white/70">
                      <span className="font-semibold text-white">${fmt(annualCost)}</span>{" "}
                      annually · {volume} checks/mo
                    </p>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="bg-white p-6">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-3">
                    Breakdown
                  </p>

                  <div className="divide-y divide-gray-100">
                    <LineItem
                      label={`${activeTier.name} tier`}
                      sub={`${volume} × $${activeTier.price}`}
                      value={`$${fmt(activeTier.price * volume)}`}
                    />
                    {addOnLineItems.map((a) => (
                      <LineItem
                        key={a.key}
                        label={a.label}
                        sub={`${volume} × $${a.price}`}
                        value={`$${fmt(a.price * volume)}`}
                      />
                    ))}
                    {addOnLineItems.length === 0 && (
                      <p className="py-3 text-xs text-gray-400 italic">
                        No add-ons selected.
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200 flex items-baseline justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Per check
                    </span>
                    <span className="text-base font-bold text-[#01463A]">
                      ${perCheck.toFixed(2)}
                    </span>
                  </div>

                  {/* Composition bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-gray-400 mb-1.5">
                      <span>Cost mix</span>
                      <span>
                        {Math.round(tierShare)}% tier · {Math.round(addOnShare)}% add-ons
                      </span>
                    </div>
                    <div className="flex h-1.5 rounded-full overflow-hidden bg-gray-100">
                      <div
                        className="bg-[#01463A] transition-all duration-300"
                        style={{ width: `${tierShare}%` }}
                      />
                      <div
                        className="bg-[#0aa88a] transition-all duration-300"
                        style={{ width: `${addOnShare}%` }}
                      />
                    </div>
                  </div>

                  {/* Savings callout */}
                  <div className="mt-5 rounded-xl bg-gradient-to-br from-[#058B74]/10 to-[#0aa88a]/5 border border-[#058B74]/20 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#058B74"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 12l4-4-4-4" />
                          <path d="M21 8H7a4 4 0 00-4 4v4" />
                        </svg>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#058B74]">
                          Est. annual savings
                        </span>
                      </div>
                      <span className="inline-flex items-center bg-[#058B74] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        −{savingsPct}%
                      </span>
                    </div>
                    <p className="mt-2 text-2xl font-extrabold text-[#01463A]">
                      ${fmt(annualSavings)}
                    </p>
                    <p className="mt-1 text-[11px] text-gray-500 leading-relaxed">
                      vs. a typical legacy screening vendor at this volume.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <a
                      href="/signup"
                      className="inline-flex items-center justify-center bg-[#01463A] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#058B74] transition-colors"
                    >
                      Get started
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center border border-gray-200 text-[#01463A] px-5 py-3 rounded-xl text-sm font-semibold hover:border-[#058B74]/40 hover:text-[#058B74] transition-all"
                    >
                      Talk to sales
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-center text-gray-400 leading-relaxed">
                Estimates assume 100% applicant completion. You&apos;re only
                billed when a check finishes, so real spend is usually lower.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-5">
          {[
            {
              title: "No contracts",
              desc: "Pay-as-you-go by default. Switch tiers or cancel anytime.",
            },
            {
              title: "Volume discounts",
              desc: "Enterprise pricing kicks in automatically at higher volumes.",
            },
            {
              title: "Flexible billing",
              desc: "Need applicant-paid or invoiced billing? We&apos;re flexible.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#058B74]/40 hover:shadow-sm transition-all"
            >
              <h3 className="text-sm font-semibold text-[#01463A]">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {card.desc.replace(/&apos;/g, "'")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-3">
            {[
              {
                q: "Is the estimate accurate?",
                a: "Estimates assume every applicant completes their check. Since we only bill on completion, real-world spend is usually 5–15% lower than the number shown here.",
              },
              {
                q: "Do I pay before the applicant finishes?",
                a: "No. You&apos;re only billed after an applicant submits their information and the report is generated. Drop-offs cost you nothing.",
              },
              {
                q: "When do volume discounts kick in?",
                a: "Tiered discounts apply automatically around 200 checks/month. For enterprise volume or custom pricing, our sales team will put together a tailored quote.",
              },
              {
                q: "Can I change tiers or add-ons later?",
                a: "Yes. Pricing is per check — switch tiers or toggle add-ons at any time. No contract amendment required.",
              },
              {
                q: "Do add-ons stack on any tier?",
                a: "Yes. Every add-on works with Basic, Standard, or Premium. Mix and match freely, and each add-on is billed only when an applicant completes it.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 open:border-[#058B74]/40 open:shadow-md open:shadow-[#058B74]/5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5">
                  <span className="text-sm md:text-base font-semibold text-[#01463A] group-hover:text-[#058B74] group-open:text-[#058B74] transition-colors">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 transition-all duration-300 group-open:rotate-45 group-open:bg-[#058B74] group-open:text-white group-open:ring-[#058B74]">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 -mt-1 text-sm text-gray-500 leading-relaxed">
                  {faq.a.replace(/&apos;/g, "'")}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl px-8 md:px-16 py-10 md:py-14 flex items-center shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/banner_cta.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top right, #01463A 30%, transparent 100%)",
              }}
            />
            <div className="relative z-10 max-w-xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-3">
                Get Started Today
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to Start<br className="hidden md:block" /> Screening?
              </h2>
              <p className="mt-4 text-white/60 text-base leading-relaxed max-w-md">
                Sign up today and get enterprise-grade background screening for
                your organization.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-white text-[#01463A] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center border border-white/30 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function Panel({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
      <div className="flex items-center gap-3 mb-5">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#058B74]/10 text-[#058B74] text-xs font-bold ring-1 ring-inset ring-[#058B74]/10">
          {step}
        </span>
        <h2 className="text-lg font-bold text-[#01463A]">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function LineItem({
  label,
  sub,
  value,
}: {
  label: string;
  sub: string;
  value: string;
}) {
  return (
    <div className="py-3 flex items-baseline justify-between gap-4">
      <div className="min-w-0">
        <p className="text-sm font-medium text-[#01463A] truncate">{label}</p>
        <p className="text-[11px] text-gray-400">{sub}</p>
      </div>
      <span className="text-sm font-semibold text-[#01463A] flex-shrink-0">
        {value}
      </span>
    </div>
  );
}
