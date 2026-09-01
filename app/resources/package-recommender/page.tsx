"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

// A distinct line icon per included item (no surrounding circle).
const iconSvg = (paths: React.ReactNode) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
);

const includeIcons: Record<string, React.ReactNode> = {
  "SSN trace & identity verification": iconSvg(<><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="12" r="2" /><path d="M14 10h4M14 14h4" /></>),
  "National criminal database search": iconSvg(<><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>),
  "Sex offender registry check": iconSvg(<><path d="M12 3l9 4v5c0 5-3.5 8-9 9-5.5-1-9-4-9-9V7l9-4z" /><path d="M12 8v4M12 16h.01" /></>),
  "County criminal court search": iconSvg(<><path d="M3 21h18M5 21V10M19 21V10M4 10l8-5 8 5M9 21v-6h6v6" /></>),
  "Motor vehicle records (MVR)": iconSvg(<><path d="M5 13l1.5-4.5A2 2 0 018.4 7h7.2a2 2 0 011.9 1.5L19 13M5 13h14v4H5zM7 17v2M17 17v2" /><circle cx="7.5" cy="15" r=".8" /><circle cx="16.5" cy="15" r=".8" /></>),
  "Federal criminal search": iconSvg(<><path d="M3 21h18M4 21V10h16v11M12 3L4 8h16l-8-5zM8 21v-7M12 21v-7M16 21v-7" /></>),
  "Employment & education verification": iconSvg(<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" /></>),
  "Global watchlist screening": iconSvg(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></>),
  "Everything in Basic": iconSvg(<><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></>),
  "Everything in Standard": iconSvg(<><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></>),
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

const addOnIcons: Record<string, React.ReactNode> = {
  mvr: iconSvg(<><path d="M5 13l1.5-4.5A2 2 0 018.4 7h7.2a2 2 0 011.9 1.5L19 13M5 13h14v4H5zM7 17v2M17 17v2" /><circle cx="7.5" cy="15" r=".8" /><circle cx="16.5" cy="15" r=".8" /></>),
  drug: iconSvg(<><path d="M9 3h6M10 3v4l-5 9a3 3 0 002.7 4.3h8.6A3 3 0 0019 16l-5-9V3" /><path d="M6.5 14h11" /></>),
  employment: iconSvg(<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" /></>),
  education: iconSvg(<><path d="M12 4L2 9l10 5 10-5-10-5z" /><path d="M6 11v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5" /></>),
  credit: iconSvg(<><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></>),
  tenant: iconSvg(<><path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-4v-6H8v6H4a1 1 0 01-1-1v-9z" /></>),
  watchlist: iconSvg(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></>),
  social: iconSvg(<><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></>),
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
        "Regulated industries and fiduciary roles benefit from Premium: federal criminal, employment + education verification, and watchlist screening by default.",
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
        "Education roles pair Premium's education verification with federal criminal searches, ideal for instructors and credentialed staff.",
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
        "Basic covers identity and national criminal databases at the lowest per-report cost, a fit for most entry-level hiring.",
      addOns: [],
    };
  }
  return {
    tier: "Standard",
    badge: "Most teams start here",
    reason:
      "Standard balances county criminal searches with identity and MVR coverage, a fit for most professional hires.",
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
            intro="Tell us about your industry, the roles you hire, and your volume. We'll point you to the Atlas package that fits best."
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
                <div className="flex items-center justify-start gap-3">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/90">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#0aa88a">
                      <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2z" />
                    </svg>
                    {rec.badge}
                  </div>
                </div>

                <h3 className="mt-6 flex items-baseline gap-2 text-5xl font-extrabold leading-none text-white sm:text-6xl">
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
                  <ul className="flex flex-col gap-2.5">
                    {(tierIncludes[rec.tier] ?? []).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                        <span className="mt-0.5 flex-shrink-0 text-[#3EE8BE]">
                          {includeIcons[item] ?? iconSvg(<path d="M5 12l5 5 9-11" />)}
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
                          <span className="mr-1.5 text-[#3EE8BE]">
                            {addOnIcons[a] ?? iconSvg(<path d="M5 12l5 5 9-11" />)}
                          </span>
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
            title="Not sure? Neither are we, at first."
            intro="This recommender is a starting point, not a contract. Switch tiers anytime, or let our team tailor a package to your workflow."
          />

          {/* Image card with the two actions overlaid */}
          <Reveal delay={200} className="mt-10">
            <div className="relative overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/assets/images/call-center-agent-office-helping-customers-by-answering-questions.webp"
                alt="An Atlas specialist ready to tailor a package to your workflow"
                width={1600}
                height={900}
                className="h-[280px] w-full object-cover sm:h-[340px]"
              />
              {/* Green gradient overlay for contrast */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, #01463A 0%, rgba(1,70,58,0.45) 55%, rgba(1,70,58,0.15) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 p-6 sm:flex-row sm:justify-center sm:p-8">
                <a
                  href="/resources/cost-calculator"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] bg-white text-[#01463A] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
                >
                  Estimate your cost
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] border border-white/40 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
                >
                  Talk to sales
                </a>
              </div>
            </div>
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
