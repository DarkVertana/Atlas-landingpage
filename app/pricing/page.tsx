"use client";

import Reveal from "../components/Reveal";

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
    href: "/signup?plan=basic",
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
    href: "/signup?plan=standard",
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
    href: "/signup?plan=premium",
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
    a: "Enterprise plans and custom volume pricing are available. Reach out to sales@atlasscreening.com for a tailored quote.",
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
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

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
      <section className="bg-white py-20 px-6">
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
                    : "bg-white border border-gray-200 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-[#0aa88a] text-[#01463A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#01463A]" />
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
                  className={`mt-8 inline-flex items-center justify-center w-full px-6 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    t.highlight
                      ? "bg-white text-[#01463A] hover:bg-white/90"
                      : "bg-[#01463A] text-white hover:bg-[#058B74]"
                  }`}
                >
                  {t.cta}
                </a>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-gray-400">
            All prices in USD. Applicants pay nothing — charges apply to the
            requesting customer only.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <Reveal as="p" variant="fade" className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
              Add-ons
            </Reveal>
            <Reveal as="h2" variant="up" delay={100} className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Add exactly what you need.
            </Reveal>
            <Reveal as="p" variant="fade" delay={200} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
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
                  <p className="text-[11px] uppercase tracking-widest text-gray-400 mt-0.5">
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

      {/* Transparency extensions nav */}
      <section className="bg-gray-50 py-12 px-6 border-y border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <Reveal as="div" variant="left" className="text-center md:text-left flex-1">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-2">
                Transparency extensions
              </p>
              <p className="text-sm text-gray-600">
                Deep dive into pricing details and plan comparisons
              </p>
            </Reveal>
            <Reveal as="div" variant="right" delay={100} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="#comparison"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white border border-gray-200 text-sm font-semibold text-[#01463A] hover:border-[#058B74]/40 hover:bg-white hover:shadow-sm transition-all"
              >
                <span className="inline-flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  Compare plans
                </span>
              </a>
              <a
                href="#whats-included"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#01463A] text-white text-sm font-semibold hover:bg-[#058B74] transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  What's included
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included section */}
      <section id="whats-included" className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <Reveal as="p" variant="fade" className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
              What's included
            </Reveal>
            <Reveal as="h2" variant="up" delay={100} className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Detailed breakdown of every check.
            </Reveal>
            <Reveal as="p" variant="fade" delay={200} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
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
      <section id="comparison" className="bg-white py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <Reveal as="h2" variant="up" className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Compare plans side-by-side.
            </Reveal>
            <Reveal as="p" variant="fade" delay={100} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              See exactly what&apos;s included in each tier so you can pick the
              right fit from day one.
            </Reveal>
          </div>

          <Reveal as="div" variant="scale" delay={200} className="overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50/60 text-[11px] font-semibold uppercase tracking-widest text-gray-500">
                  <th className="text-left px-6 py-4 font-semibold">Feature</th>
                  <th className="px-4 py-4 font-semibold text-center">Basic</th>
                  <th className="px-4 py-4 font-semibold text-center text-[#058B74]">
                    Standard
                  </th>
                  <th className="px-4 py-4 font-semibold text-center">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="hover:bg-gray-50/40 transition-colors">
                    <td className="px-6 py-3.5 text-[#01463A]">{row.label}</td>
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
          <div className="text-center mb-14">
            <Reveal as="h2" variant="up" className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Pricing questions.
            </Reveal>
            <Reveal as="p" variant="fade" delay={100} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
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
                  {faq.a}
                </div>
              </Reveal>
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
