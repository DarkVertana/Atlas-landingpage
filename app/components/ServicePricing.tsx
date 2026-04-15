import Link from "next/link";
import Reveal from "./Reveal";

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
    href: "/signup?plan=basic",
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
    href: "/signup?plan=standard",
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
    href: "/signup?plan=premium",
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
  heading = "Pick a tier. Scale when you need to.",
  subheading = "Every tier is pay-as-you-go. Switch at any time — the applicant flow stays the same.",
  tiers = defaultTiers,
  footnote = "All prices in USD. Applicants pay nothing — charges apply to the requesting customer only.",
}: Props) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <Reveal as="p" className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
            {eyebrow}
          </Reveal>
          <Reveal as="h2" delay={80} className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
            {heading}
          </Reveal>
          <Reveal as="p" delay={160} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {subheading}
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              variant="up"
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
                href={t.href ?? `/signup?plan=${t.name.toLowerCase()}`}
                className={`mt-8 inline-flex items-center justify-center w-full px-6 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  t.highlight
                    ? "bg-white text-[#01463A] hover:bg-white/90"
                    : "bg-[#01463A] text-white hover:bg-[#058B74]"
                }`}
              >
                {t.cta ?? "Get started"}
              </Link>
            </Reveal>
          ))}
        </div>

        {footnote && (
          <p className="mt-8 text-center text-xs text-gray-400">{footnote}</p>
        )}
      </div>
    </section>
  );
}
