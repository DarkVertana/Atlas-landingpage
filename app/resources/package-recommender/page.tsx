"use client";

import { useState, useEffect } from "react";
import Reveal from "../../components/Reveal";
import SectionHeader from "../../components/ui/SectionHeader";
import CTASection from "../../components/CTASection";

// What each base tier already covers, so the recommendation reads as a real
// plan rather than just a name. Later tiers build on the earlier ones.
const tierIncludes: Record<string, string[]> = {
  Basic: [
    "SSN trace & identity verification",
    "National criminal database search",
    "Sex offender registry check",
  ],
  Standard: [
    "Everything in Basic",
    "County criminal court search",
    "Motor vehicle records (MVR)",
  ],
  Premium: [
    "Everything in Standard",
    "Federal criminal search",
    "Employment & education verification",
    "Global watchlist screening",
  ],
};

const addOnLabels: Record<string, string> = {
  mvr: "Motor vehicle records",
  drug: "Drug screening",
  employment: "Employment verification",
  education: "Education verification",
  credit: "Credit report",
  tenant: "Tenant screening",
  watchlist: "Global watchlist",
  social: "Social media inquiry",
};

type Industry =
  | "staffing"
  | "property"
  | "healthcare"
  | "transportation"
  | "financial"
  | "retail"
  | "education"
  | "nonprofit"
  | "other";

type Role = "entry" | "professional" | "executive" | "driver" | "contact-customers";

type Volume = "low" | "medium" | "high";

const industryOptions: { value: Industry; label: string }[] = [
  { value: "staffing", label: "Staffing agency" },
  { value: "property", label: "Property management" },
  { value: "healthcare", label: "Healthcare" },
  { value: "transportation", label: "Transportation & logistics" },
  { value: "financial", label: "Financial services" },
  { value: "retail", label: "Retail & hospitality" },
  { value: "education", label: "Education" },
  { value: "nonprofit", label: "Nonprofit / volunteer" },
  { value: "other", label: "Other" },
];

const roleOptions: { value: Role; label: string }[] = [
  { value: "entry", label: "Entry-level / hourly" },
  { value: "professional", label: "Professional / salaried" },
  { value: "executive", label: "Executive / fiduciary" },
  { value: "driver", label: "Driver / fleet" },
  { value: "contact-customers", label: "Customer-facing / in-home" },
];

const volumeOptions: { value: Volume; label: string }[] = [
  { value: "low", label: "Under 20/month" },
  { value: "medium", label: "20 – 200/month" },
  { value: "high", label: "200+/month" },
];

function recommendPackage(industry: Industry, role: Role, volume: Volume) {
  if (industry === "property") {
    return {
      tier: "Standard",
      badge: "Best for leasing teams",
      reason:
        "Tenant screening workflows pair with Standard plus the Tenant Screening add-on for criminal, credit, and eviction history in one report.",
      addOns: ["tenant"],
    };
  }
  if (industry === "transportation" || role === "driver") {
    return {
      tier: "Standard",
      badge: "Built for fleet roles",
      reason:
        "Driver roles need Standard for county criminal plus Motor Vehicle Records. Consider continuous monitoring for active drivers.",
      addOns: ["mvr"],
    };
  }
  if (industry === "healthcare" || industry === "financial" || role === "executive") {
    return {
      tier: "Premium",
      badge: "Compliance-heavy roles",
      reason:
        "Regulated industries and fiduciary roles benefit from Premium — federal criminal, employment + education verification, and watchlist screening by default.",
      addOns: ["credit", "watchlist"],
    };
  }
  if (industry === "nonprofit" || role === "contact-customers") {
    return {
      tier: "Standard",
      badge: "Best for trust-sensitive roles",
      reason:
        "Volunteer and in-home roles benefit from Standard's county criminal searches plus Global Watchlist coverage.",
      addOns: ["watchlist"],
    };
  }
  if (industry === "education") {
    return {
      tier: "Premium",
      badge: "Built for credentialed roles",
      reason:
        "Education roles pair Premium's education verification with federal criminal searches — ideal for instructors and credentialed staff.",
      addOns: ["education"],
    };
  }
  if (role === "entry" && volume === "high") {
    return {
      tier: "Basic",
      badge: "High-volume entry hiring",
      reason:
        "For high-volume entry-level hiring, Basic covers identity and core criminal checks at the lowest per-report cost. Volume pricing applies automatically.",
      addOns: [],
    };
  }
  if (role === "entry") {
    return {
      tier: "Basic",
      badge: "Great starting point",
      reason:
        "Basic covers identity and national criminal databases at the lowest per-report cost — a fit for most entry-level hiring.",
      addOns: [],
    };
  }
  return {
    tier: "Standard",
    badge: "Most teams start here",
    reason:
      "Standard balances county criminal searches with identity and MVR coverage — a fit for most professional hires.",
    addOns: ["social"],
  };
}

export default function PackageRecommenderPage() {
  const [industry, setIndustry] = useState<Industry>("staffing");
  const [role, setRole] = useState<Role>("professional");
  const [volume, setVolume] = useState<Volume>("medium");

  // Preselect the industry from a ?industry= query param (used by the header's
  // "By industry" mega-menu links). Done after mount so server and first client
  // render match — no hydration mismatch on the controlled <select>.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("industry");
    // Intentional post-mount setState: reading the URL during render would
    // desync SSR/first-client render and trigger a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (q && industryOptions.some((o) => o.value === q)) setIndustry(q as Industry);
  }, []);

  const rec = recommendPackage(industry, role, volume);

  return (
    <main id="main" className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-5 sm:pt-36 sm:pb-20 sm:px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-24 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative mx-auto max-w-4xl">
          <SectionHeader
            tone="light"
            as="h1"
            eyebrow="Interactive tool"
            title="Package recommender."
            intro="Tell us about your industry, the roles you hire, and your volume — we'll point you to the Atlas package that fits best."
          />
        </div>
      </section>

      {/* Recommender tool */}
      <section className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Inputs — 2/5 */}
            <Reveal delay={0} className="lg:col-span-2 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:shadow-black/5">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
                Tell us about your team
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-[#01463A] leading-tight">
                Answer three quick questions.
              </h2>

              <div className="mt-8 space-y-6">
                <PillGroup
                  label="Industry"
                  name="industry"
                  value={industry}
                  onChange={(v) => setIndustry(v as Industry)}
                  options={industryOptions}
                />
                <PillGroup
                  label="Role type"
                  name="role"
                  value={role}
                  onChange={(v) => setRole(v as Role)}
                  options={roleOptions}
                />
                <PillGroup
                  label="Monthly volume"
                  name="volume"
                  value={volume}
                  onChange={(v) => setVolume(v as Volume)}
                  options={volumeOptions}
                />
              </div>
            </Reveal>

            {/* Recommendation — 3/5 */}
            <Reveal
              delay={80}
              className="lg:col-span-3 lg:sticky lg:top-28 lg:self-start rounded-3xl bg-[#01463A] text-white p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

              <div aria-live="polite" className="relative">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/50">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#0aa88a] opacity-75 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0aa88a]" />
                    </span>
                    Updates as you choose
                  </p>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/90">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#0aa88a">
                      <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2z" />
                    </svg>
                    {rec.badge}
                  </div>
                </div>

                <h3 className="mt-6 flex items-baseline gap-2 text-4xl font-extrabold leading-none text-white">
                  {rec.tier}
                  <span className="text-lg font-semibold uppercase tracking-[0.2em] text-white/45">
                    plan
                  </span>
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
                  {rec.reason}
                </p>

                {/* Included in the base tier */}
                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-white/50">
                    Included in this plan
                  </p>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {(tierIncludes[rec.tier] ?? []).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                        <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#0aa88a]/20">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3EE8BE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5 9-11" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {rec.addOns.length > 0 && (
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-white/50">
                      Suggested add-ons
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {rec.addOns.map((a) => (
                        <span
                          key={a}
                          className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3EE8BE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                            <path d="M5 12l5 5 9-11" />
                          </svg>
                          {addOnLabels[a]}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-7">
                  <a
                    href="/pricing"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#01463A] transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
                  >
                    See full pricing
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
                  >
                    Talk to sales
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeader
            align="center"
            eyebrow="No commitment"
            title="Not sure? Neither are we — at first."
            intro="This recommender is a starting point, not a contract. You can switch tiers or add services at any time, and our team is happy to tailor a package to your exact hiring or leasing workflow."
          />
          <Reveal delay={200} className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/resources/cost-calculator"
              className="inline-flex items-center gap-2 bg-[#01463A] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#058B74] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
            >
              Estimate your cost
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-200 text-[#01463A] px-6 py-3 rounded-xl text-sm font-semibold hover:border-[#058B74]/40 hover:text-[#058B74] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
            >
              Talk to sales
            </a>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title={
          <>
            Ready to Start<br className="hidden lg:block" /> Screening?
          </>
        }
        description="Sign up today and get enterprise-grade background screening for your organization."
      />

    </main>
  );
}

function PillGroup({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  const groupId = `${name}-label`;
  return (
    <div role="radiogroup" aria-labelledby={groupId}>
      <p
        id={groupId}
        className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2"
      >
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <button
              key={o.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.value)}
              className={`min-h-[44px] px-4 py-2 rounded-2xl text-sm font-medium border text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2 ${
                active
                  ? "bg-[#058B74]/5 border-[#058B74] ring-1 ring-[#058B74] text-[#01463A]"
                  : "bg-gray-50 border-gray-200 text-[#01463A] hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
