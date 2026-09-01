"use client";

import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";

type Tier = {
  name: string;
  tagline: string;
  price: string;
  unit: string;
  features: string[];
  highlight?: boolean;
  cta: string;
  href: string;
};

const tiers: Tier[] = [
  {
    name: "Basic",
    tagline: "Essential identity & criminal.",
    price: "$24.99",
    unit: "per check",
    features: [
      "SSN trace & address history",
      "National criminal database",
      "Sex offender registry",
      "Global watchlist",
      "Branded PDF report",
      "Standard support",
    ],
    cta: "Get started",
    href: "/contact?plan=basic",
  },
  {
    name: "Standard",
    tagline: "Most teams start here.",
    price: "$34.99",
    unit: "per check",
    features: [
      "Everything in Basic",
      "County criminal search (up to 7 yrs)",
      "Motor vehicle records",
      "Social media inquiry",
      "Priority applicant support",
      "Audit log exports",
    ],
    highlight: true,
    cta: "Get started",
    href: "/contact?plan=standard",
  },
  {
    name: "Premium",
    tagline: "Full verification suite.",
    price: "$44.99",
    unit: "per check",
    features: [
      "Everything in Standard",
      "Federal criminal search",
      "Employment verification",
      "Education verification",
      "Dedicated account manager",
      "Custom adjudication rules",
    ],
    cta: "Get started",
    href: "/contact?plan=premium",
  },
];

const enterpriseTier: Tier = {
  name: "Enterprise",
  tagline: "Screening at scale.",
  price: "Custom",
  unit: "volume pricing",
  features: [
    "Everything in Premium",
    "Volume-based pricing",
    "Custom packages by role",
    "ATS & API integration",
    "Dedicated account & compliance team",
  ],
  cta: "Talk to sales",
  href: "/contact?plan=enterprise",
};

const addOns = [
  {
    name: "Motor vehicle records",
    price: "$9.99",
    desc: "State-by-state driving history for fleet and gig operators.",
  },
  {
    name: "Drug screening",
    price: "$49.99",
    desc: "Lab-based drug testing with nationwide collection-site network.",
  },
  {
    name: "Employment verification",
    price: "$19.99",
    desc: "Confirms titles, employment dates, and reason for separation.",
    unit: "per record",
  },
  {
    name: "Education verification",
    price: "$19.99",
    desc: "Validates degrees, diplomas, and certifications.",
    unit: "per record",
  },
  {
    name: "Credit report",
    price: "$39.99",
    desc: "For financial, fiduciary, and executive roles (permissible-purpose required).",
  },
  {
    name: "Tenant screening",
    price: "$39.99",
    desc: "Criminal, credit, and eviction history bundled for property managers.",
  },
  {
    name: "Global watchlist",
    price: "$39.99",
    desc: "OFAC, sanctions, terror lists, and PEP screening.",
  },
  {
    name: "Social media inquiry",
    price: "$29.99",
    desc: "FCRA-compliant review of public social profiles.",
  },
];

const comparisonRows = [
  { label: "SSN trace & address history", basic: true, standard: true, premium: true },
  { label: "National criminal database", basic: true, standard: true, premium: true },
  { label: "Sex offender registry", basic: true, standard: true, premium: true },
  { label: "Global watchlist", basic: true, standard: true, premium: true },
  { label: "County criminal search", basic: false, standard: true, premium: true },
  { label: "Motor vehicle records", basic: false, standard: true, premium: true },
  { label: "Social media inquiry", basic: false, standard: true, premium: true },
  { label: "Federal criminal search", basic: false, standard: false, premium: true },
  { label: "Employment verification", basic: false, standard: false, premium: true },
  { label: "Education verification", basic: false, standard: false, premium: true },
  { label: "Dedicated account manager", basic: false, standard: false, premium: true },
];

export default function PricingPage() {
  return (
    <main id="main" className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-5 sm:pt-36 sm:pb-20 sm:px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal
            as="p"
            variant="fade"
            className="text-xs font-semibold tracking-widest uppercase text-white/90 mb-4"
          >
            Pricing
          </Reveal>
          <Reveal
            as="h1"
            variant="up"
            delay={100}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Transparent pay-as-you-go.
          </Reveal>
          <Reveal
            as="p"
            variant="fade"
            delay={200}
            className="mt-5 text-white/90 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Pick a tier, add what you need. No contracts, no setup fees — billed
            only when applicants complete a check.
          </Reveal>
        </div>
      </section>

      {/* Tier cards */}
      <section className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[...tiers, enterpriseTier].map((t, i) => (
              <Reveal
                as="div"
                variant="up"
                delay={i * 100}
                key={t.name}
                className={`group relative rounded-3xl p-6 lg:p-7 flex flex-col transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform hover:-translate-y-1.5 motion-reduce:transform-none motion-reduce:transition-none ${
                  t.highlight
                    ? "bg-[#01463A] text-white shadow-xl shadow-[#058B74]/25 border border-[#058B74]/50 hover:shadow-2xl hover:shadow-[#058B74]/35"
                    : "bg-white border border-gray-300 shadow-[0_1px_2px_rgba(15,42,36,0.05),0_10px_28px_-14px_rgba(15,42,36,0.14)] hover:border-[#058B74]/40 hover:shadow-xl hover:shadow-[#058B74]/15"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center bg-[#0aa88a] text-[#01463A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}

                <p
                  className={`text-xs font-semibold tracking-widest uppercase ${
                    t.highlight ? "text-[#0aa88a]" : "text-[#058B74]"
                  }`}
                >
                  {t.name}
                </p>
                <h3
                  className={`mt-2 text-lg font-bold leading-snug min-h-[3.25rem] ${
                    t.highlight ? "text-white" : "text-[#01463A]"
                  }`}
                >
                  {t.tagline}
                </h3>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span
                    className={`text-[2rem] leading-none font-extrabold ${
                      t.highlight ? "text-white" : "text-[#01463A]"
                    }`}
                  >
                    {t.price}
                  </span>
                  <span
                    className={`text-xs ${
                      t.highlight ? "text-white/85" : "text-gray-500"
                    }`}
                  >
                    {t.unit}
                  </span>
                </div>

                <ul className="mt-7 space-y-2.5 flex-1">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-sm ${
                        t.highlight ? "text-white/90" : "text-[#01463A]"
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={t.highlight ? "#0aa88a" : "#058B74"}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <path d="M5 12l5 5 9-11" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={t.href}
                  className={`mt-7 inline-flex items-center justify-center w-full min-h-[44px] px-6 py-3 rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    t.highlight
                      ? "bg-white text-[#01463A] hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-[#01463A]"
                      : t.name === "Enterprise"
                        ? "bg-[#0B0F0E] text-white hover:bg-black focus-visible:ring-[#0B0F0E]"
                        : "bg-[#01463A] text-white hover:bg-[#058B74] focus-visible:ring-[#058B74]"
                  }`}
                >
                  {t.cta}
                </a>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-gray-600">
            All prices in USD. Applicants pay nothing — charges apply to the
            requesting customer only.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <Reveal as="h2" variant="up" className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
              Add exactly what you need.
            </Reveal>
            <Reveal as="p" variant="fade" delay={100} className="mt-4 text-gray-600 text-sm leading-relaxed">
              Every add-on stacks on top of any tier. Mix and match — you&apos;re
              billed per add-on, only when an applicant completes it.
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {addOns.map((a, i) => (
              <Reveal
                as="div"
                key={a.name}
                variant="up"
                delay={i * 80}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 transition-all duration-300"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-[#01463A]">{a.name}</h3>
                  <span className="text-sm font-bold text-[#058B74] flex-shrink-0">
                    {a.price}
                  </span>
                </div>
                {a.unit && (
                  <p className="text-[11px] uppercase tracking-widest text-gray-600 mt-0.5">
                    {a.unit}
                  </p>
                )}
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {a.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included section */}
      <section id="whats-included" className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <Reveal as="h2" variant="up" className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
              Detailed breakdown of every check.
            </Reveal>
            <Reveal as="p" variant="fade" delay={100} className="mt-4 text-gray-600 text-sm leading-relaxed">
              See exactly what verification services and data points are included in each tier so you can make an informed decision.
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <Reveal
                as="div"
                key={tier.name}
                variant="up"
                delay={i * 100}
                className={`rounded-2xl p-8 border ${
                  tier.highlight
                    ? "bg-[#01463A] text-white border-[#058B74]/50 shadow-lg shadow-[#058B74]/15"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <h3 className={`text-lg font-bold ${tier.highlight ? "text-white" : "text-[#01463A]"}`}>
                  {tier.name}
                </h3>
                <p className={`mt-1 text-sm ${tier.highlight ? "text-white/90" : "text-gray-600"}`}>
                  {tier.tagline}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-3 text-sm ${tier.highlight ? "text-white/90" : "text-[#01463A]"}`}>
                      <FeatureIcon name={feature} color={tier.highlight ? "#0aa88a" : "#058B74"} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section id="comparison" className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 max-w-2xl">
            <Reveal as="h2" variant="up" className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
              Compare plans side-by-side.
            </Reveal>
            <Reveal as="p" variant="fade" delay={100} className="mt-4 text-gray-600 text-sm leading-relaxed">
              See exactly what&apos;s included in each tier so you can pick the
              right fit from day one.
            </Reveal>
          </div>

          <Reveal as="div" variant="scale" delay={200} className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="bg-gray-50/60 text-[11px] font-semibold uppercase tracking-widest text-gray-500">
                  <th scope="col" className="text-left px-6 py-4 font-semibold">Feature</th>
                  <th scope="col" className="px-4 py-4 font-semibold text-center">Basic</th>
                  <th scope="col" className="px-4 py-4 font-semibold text-center text-[#058B74]">
                    Standard
                  </th>
                  <th scope="col" className="px-4 py-4 font-semibold text-center">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="hover:bg-gray-50/40 transition-colors">
                    <th scope="row" className="px-6 py-3.5 text-left font-normal text-[#01463A]">{row.label}</th>
                    <td className="px-4 py-3.5 text-center">
                      <Check on={row.basic} />
                    </td>
                    <td className="px-4 py-3.5 text-center bg-[#058B74]/[0.04]">
                      <Check on={row.standard} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Check on={row.premium} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Enterprise / talk to sales */}
      <section className="bg-white pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal
            as="div"
            variant="up"
            className="overflow-hidden rounded-3xl border border-[#058B74]/30 bg-[#01463A] text-white"
          >
            <div className="flex flex-col gap-8 p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#0aa88a]">
                  Enterprise
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold leading-tight text-white">
                  High volume or complex screening programs?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  For teams running checks at scale, we tailor a program to your
                  needs — volume-based pricing, custom packages by role, ATS/API
                  integration, and a dedicated compliance and account team. Every
                  program is conducted in accordance with the FCRA and applicable
                  state laws.
                </p>
                <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {[
                    "Volume-based pricing",
                    "Custom check packages by role",
                    "ATS & API integration",
                    "Dedicated account & compliance team",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0aa88a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                        <path d="M5 12l5 5 9-11" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 md:w-56 md:flex-shrink-0">
                <a
                  href="/contact?plan=enterprise"
                  className="inline-flex items-center justify-center w-full px-6 py-3 min-h-[44px] rounded-xl text-sm font-semibold bg-white text-[#01463A] transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
                >
                  Talk to sales
                </a>
                <a
                  href="/contact?topic=enterprise"
                  className="inline-flex items-center justify-center w-full px-6 py-3 min-h-[44px] rounded-xl text-sm font-semibold border border-white/30 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
                >
                  Contact us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        eyebrow="Get started today"
        title={
          <>
            Ready to start<br className="hidden lg:block" /> screening?
          </>
        }
        description="Sign up today and get enterprise-grade background screening for your organization."
        primary={{ label: "Get started", href: "/contact" }}
        secondary={{ label: "Contact sales", href: "/contact?topic=sales" }}
      />

    </main>
  );
}

function FeatureIcon({ name, color }: { name: string; color: string }) {
  const key = name.toLowerCase();

  // Neat 16px stroked icons, mapped to each feature's meaning.
  const paths: Record<string, string> = {
    ssn: "M4 6h16M4 10h16M4 14h10M4 18h6", // records / trace lines
    national: "M4 7h16v12H4zM4 7l4-3h8l4 3M9 11h6M9 15h6", // database / building
    offender: "M12 3l7 3v5c0 4.5-3 7-7 8-4-1-7-3.5-7-8V6zM12 9v3M12 15h.01", // shield alert
    watchlist: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18", // globe
    "pdf": "M7 3h7l4 4v14H7zM14 3v4h4M9 13h6M9 17h6", // file / report
    support: "M4 13a8 8 0 0116 0v3a2 2 0 01-2 2h-1v-6h3M4 13v3a2 2 0 002 2h1v-6H4", // headset
    everything: "M4 8h16M4 14h16M8 4l-2 16M18 4l-2 16", // layers / stack
    county: "M11 4a7 7 0 100 14 7 7 0 000-14zM20 20l-4-4", // search
    "motor": "M5 13l1.5-4.5A2 2 0 018.4 7h7.2a2 2 0 011.9 1.5L19 13v5h-2v-2H7v2H5zM7.5 16h.01M16.5 16h.01", // car
    social: "M12 8a4 4 0 100 8 4 4 0 000-8zM16 12v1a3 3 0 006 0v-1a10 10 0 10-4 8", // at-sign
    audit: "M4 4h11l5 5v11H4zM15 4v5h5M8 13h8M8 17h8", // export / log
    federal: "M4 9l8-5 8 5M5 9v9M9 9v9M15 9v9M19 9v9M3 20h18", // landmark
    employment: "M4 8h16v11H4zM9 8V6a2 2 0 012-2h2a2 2 0 012 2v2M4 13h16", // briefcase
    education: "M12 4l9 4-9 4-9-4zM6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5", // graduation cap
    manager: "M12 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM5 20a7 7 0 0114 0", // user
    adjudication: "M6 4v6M6 14v6M18 4v10M18 18v2M12 4v2M12 10v10M4 12h4M16 8h4M10 8h4", // sliders / rules
  };

  const match =
    key.includes("ssn") || key.includes("address") ? "ssn"
    : key.includes("national") ? "national"
    : key.includes("offender") ? "offender"
    : key.includes("watchlist") ? "watchlist"
    : key.includes("pdf") || key.includes("report") ? "pdf"
    : key.includes("support") ? "support"
    : key.includes("everything") ? "everything"
    : key.includes("county") || key.includes("search") ? "county"
    : key.includes("motor") || key.includes("vehicle") ? "motor"
    : key.includes("social") ? "social"
    : key.includes("audit") || key.includes("export") ? "audit"
    : key.includes("federal") ? "federal"
    : key.includes("employment") ? "employment"
    : key.includes("education") ? "education"
    : key.includes("manager") || key.includes("account") ? "manager"
    : key.includes("adjudication") || key.includes("rules") ? "adjudication"
    : "everything";

  return (
    <svg
      aria-hidden="true"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 mt-0.5"
    >
      <path d={paths[match]} />
    </svg>
  );
}

function Check({ on }: { on: boolean }) {
  if (on) {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#058B74"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="inline-block"
      >
        <path d="M5 12l5 5 9-11" />
      </svg>
    );
  }
  return <span className="inline-block w-4 h-px bg-gray-300" />;
}
