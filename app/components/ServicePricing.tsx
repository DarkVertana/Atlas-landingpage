import Link from "next/link";
import Reveal from "./Reveal";
import FcraComplianceNote from "./FcraComplianceNote";

export type ServiceTier = {
  name: string;
  tagline: string;
  price: string;
  unit?: string;
  features: string[];
  highlight?: boolean;
  href?: string;
  cta?: string;
};

export const defaultTiers: ServiceTier[] = [
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
    href: "/contact?plan=basic",
    cta: "Get started",
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
    href: "/contact?plan=standard",
    cta: "Get started",
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
    href: "/contact?plan=premium",
    cta: "Get started",
  },
];

type Props = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  tiers?: ServiceTier[];
  footnote?: string;
};

export default function ServicePricing({
  eyebrow = "Pricing tiers",
  heading = "Plans and pricing",
  subheading = "Every tier is pay-as-you-go. Switch at any time — the applicant flow stays the same.",
  tiers = defaultTiers,
  footnote = "All prices in USD. Applicants pay nothing — charges apply to the requesting customer only.",
}: Props) {
  return (
    <section className="bg-white py-14 sm:py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-14">
          <Reveal as="p" className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
            {eyebrow}
          </Reveal>
          <Reveal as="h2" delay={80} className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
            {heading}
          </Reveal>
          <Reveal as="p" delay={160} className="mt-5 text-gray-600 text-sm leading-relaxed">
            {subheading}
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              variant="up"
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col transition-all duration-300 ${
                t.highlight
                  ? "bg-[#01463A] text-white shadow-xl shadow-[#058B74]/25 border border-[#058B74]/50"
                  : "bg-white border border-gray-200 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10"
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
                    t.highlight ? "text-white/70" : "text-gray-600"
                  }`}
                >
                  {t.unit ?? "per check"}
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
                      aria-hidden="true"
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

              <Link
                href={t.href ?? `/contact?plan=${t.name.toLowerCase()}`}
                className={`mt-8 inline-flex items-center justify-center w-full px-6 py-3 min-h-[44px] rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  t.highlight
                    ? "bg-white text-[#01463A] hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-[#01463A]"
                    : "bg-[#01463A] text-white hover:bg-[#058B74] focus-visible:ring-[#058B74] focus-visible:ring-offset-white"
                }`}
              >
                {t.cta ?? "Get started"}
              </Link>
            </Reveal>
          ))}
        </div>

        {footnote && (
          <p className="mt-8 text-xs text-gray-600">{footnote}</p>
        )}

        {/* Enterprise / talk to sales band */}
        <Reveal
          variant="up"
          className="mt-6 overflow-hidden rounded-3xl border border-[#058B74]/30 bg-[#01463A] text-white"
        >
          <div className="flex flex-col gap-8 p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0aa88a]">
                Enterprise
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight text-white">
                High volume or complex screening programs?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                For teams running checks at scale, we tailor a program to your needs —
                volume-based pricing, custom packages by role, ATS/API integration, and a
                dedicated compliance and account team. Every program is conducted in
                accordance with the FCRA and applicable state laws.
              </p>
              <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {[
                  "Volume-based pricing",
                  "Custom check packages by role",
                  "ATS & API integration",
                  "Dedicated account & compliance team",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0aa88a"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <path d="M5 12l5 5 9-11" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 md:w-56 md:flex-shrink-0">
              <Link
                href="/contact?plan=enterprise"
                className="inline-flex items-center justify-center w-full px-6 py-3 min-h-[44px] rounded-xl text-sm font-semibold bg-white text-[#01463A] transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
              >
                Talk to sales
              </Link>
              <Link
                href="/contact?topic=enterprise"
                className="inline-flex items-center justify-center w-full px-6 py-3 min-h-[44px] rounded-xl text-sm font-semibold border border-white/30 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
      {/* FCRA compliance framing */}
      <FcraComplianceNote />
    </section>
  );
}
