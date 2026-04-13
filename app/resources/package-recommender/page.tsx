"use client";

import { useState } from "react";

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

  const rec = recommendPackage(industry, role, volume);

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
            Package recommender.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            Tell us about your industry, the roles you hire, and your volume — we&apos;ll
            point you to the Atlas package that fits best.
          </p>
        </div>
      </section>

      {/* Recommender tool */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Inputs — 2/5 */}
            <div className="lg:col-span-2 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
                Tell us about your team
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-[#01463A] leading-tight">
                Answer three quick questions.
              </h2>

              <div className="mt-8 space-y-6">
                <SelectField
                  label="Industry"
                  value={industry}
                  onChange={(v) => setIndustry(v as Industry)}
                  options={industryOptions}
                />
                <SelectField
                  label="Role type"
                  value={role}
                  onChange={(v) => setRole(v as Role)}
                  options={roleOptions}
                />
                <SelectField
                  label="Monthly volume"
                  value={volume}
                  onChange={(v) => setVolume(v as Volume)}
                  options={volumeOptions}
                />
              </div>
            </div>

            {/* Recommendation — 3/5 */}
            <div className="lg:col-span-3 rounded-3xl bg-[#01463A] text-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#0aa88a]/20 blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0aa88a">
                    <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2z" />
                  </svg>
                  {rec.badge}
                </div>

                <h3 className="mt-5 text-3xl md:text-4xl font-extrabold leading-none">
                  {rec.tier} <span className="text-white/60 text-2xl font-bold">plan</span>
                </h3>
                <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-lg">
                  {rec.reason}
                </p>

                {rec.addOns.length > 0 && (
                  <div className="mt-6">
                    <p className="text-[10px] uppercase tracking-widest text-white/50 mb-3">
                      Suggested add-ons
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {rec.addOns.map((a) => (
                        <span
                          key={a}
                          className="inline-flex items-center bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0aa88a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                            <path d="M5 12l5 5 9-11" />
                          </svg>
                          {addOnLabels[a]}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/pricing"
                    className="inline-flex items-center gap-2 bg-white text-[#01463A] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors"
                  >
                    See full pricing
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors"
                  >
                    Talk to sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
            Not sure? Neither are we — at first.
          </h2>
          <p className="mt-5 text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            This recommender is a starting point, not a contract. You can switch
            tiers or add services at any time, and our team is happy to tailor a
            package to your exact hiring or leasing workflow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/resources/cost-calculator"
              className="inline-flex items-center gap-2 bg-[#01463A] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#058B74] transition-colors"
            >
              Estimate your cost
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-200 text-[#01463A] px-6 py-3 rounded-xl text-sm font-semibold hover:border-[#058B74]/40 hover:text-[#058B74] transition-all"
            >
              Talk to sales
            </a>
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

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-sm text-[#01463A] bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-[#058B74]/50 focus:ring-1 focus:ring-[#058B74]/20 transition-all"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
