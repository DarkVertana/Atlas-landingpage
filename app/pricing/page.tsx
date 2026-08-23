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

const faqs = [
  {
    q: "When do I get charged?",
    a: "You're only billed after the applicant submits their information. No upfront costs, no charges for drop-offs.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Pricing is per check — switch tiers or add services at any time without a contract change.",
  },
  {
    q: "Do you offer volume discounts?",
    a: "Enterprise plans and custom volume pricing are available. Reach out to Contact@Atlasscreening.com for a tailored quote.",
  },
  {
    q: "Are there setup fees?",
    a: "No. There are no setup fees, annual fees, or per-seat charges. You only pay for checks your applicants complete.",
  },
  {
    q: "What about add-ons?",
    a: "Add-ons stack on top of any tier. You can mix and match — we'll bill each one only when an applicant completes it.",
  },
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
            className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4"
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
            className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Pick a tier, add what you need. No contracts, no setup fees — billed
            only when applicants complete a check.
          </Reveal>
        </div>
      </section>

      {/* Tier cards */}
      <section className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <Reveal
                as="div"
                variant="up"
                delay={i * 100}
                key={t.name}
                className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                  t.highlight
                    ? "bg-[#01463A] text-white shadow-xl shadow-[#058B74]/25 border border-[#058B74]/50"
                    : "bg-white border border-gray-300 shadow-[0_1px_2px_rgba(15,42,36,0.05),0_10px_28px_-14px_rgba(15,42,36,0.14)] hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10"
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
                  className={`mt-2 text-xl font-bold leading-tight ${
                    t.highlight ? "text-white" : "text-[#01463A]"
                  }`}
                >
                  {t.tagline}
                </h3>

                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className={`text-4xl font-extrabold ${
                      t.highlight ? "text-white" : "text-[#01463A]"
                    }`}
                  >
                    {t.price}
                  </span>
                  <span
                    className={`text-xs ${
                      t.highlight ? "text-white/60" : "text-gray-500"
                    }`}
                  >
                    {t.unit}
                  </span>
                </div>

                <ul className="mt-8 space-y-3 flex-1">
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
                  className={`mt-8 inline-flex items-center justify-center w-full min-h-[44px] px-6 py-3 rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    t.highlight
                      ? "bg-white text-[#01463A] hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-[#01463A]"
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
                <p className={`mt-1 text-sm ${tier.highlight ? "text-white/70" : "text-gray-600"}`}>
                  {tier.tagline}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-3 text-sm ${tier.highlight ? "text-white/90" : "text-[#01463A]"}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={tier.highlight ? "#0aa88a" : "#058B74"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                        <path d="M5 12l5 5 9-11" />
                      </svg>
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

      {/* FAQ */}
      <section className="bg-white pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 max-w-2xl">
            <Reveal as="h2" variant="up" className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
              Pricing questions.
            </Reveal>
            <Reveal as="p" variant="fade" delay={100} className="mt-4 text-gray-600 text-sm leading-relaxed">
              Common questions about how billing and tiers work at Atlas.
            </Reveal>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal
                as="details"
                key={faq.q}
                variant="up"
                delay={i * 80}
                className="group rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 open:border-[#058B74]/40 open:shadow-md open:shadow-[#058B74]/5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 min-h-[44px] rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2">
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
                  {faq.a}
                </div>
              </Reveal>
            ))}
          </div>
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
