import type { ReactNode } from "react";
import Reveal from "./Reveal";
import CTASection from "./CTASection";
import ServiceHero from "./ui/ServiceHero";
import FeatureGrid from "./ui/FeatureGrid";
import ServiceJsonLd from "./ServiceJsonLd";
import FcraComplianceNote from "./FcraComplianceNote";

export type ServiceFeature = {
  title: string;
  desc: string;
  icon: ReactNode;
};

export type ServiceStep = {
  n: string;
  t: string;
  d: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceDetailProps = {
  eyebrow: string;
  title: string;
  description: string;
  path: string; // canonical path, e.g. "/services/credit-report" (for structured data)
  image?: string; // optional hero backdrop image
  price?: string;
  priceUnit?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  heroSteps?: string[];
  includedHeading: string;
  includedSubheading: string;
  features: ServiceFeature[];
  stepsHeading?: string;
  steps?: ServiceStep[];
  faqHeading: string;
  faqSubheading: string;
  faqs: ServiceFaq[];
  ctaHeading: string;
  ctaDescription: string;
};

export default function ServiceDetail({
  eyebrow,
  title,
  description,
  path,
  image,
  price,
  priceUnit = "per check",
  primaryCta = { label: "Start a check", href: "/contact" },
  secondaryCta = { label: "Talk to sales", href: "/contact" },
  heroSteps,
  includedHeading,
  includedSubheading,
  features,
  stepsHeading = "From request to report",
  steps,
  faqHeading,
  faqSubheading,
  faqs,
  ctaHeading,
  ctaDescription,
}: ServiceDetailProps) {
  return (
    <main id="main" className="bg-white text-[#01463A]">
      <ServiceJsonLd
        name={title}
        description={description}
        faqs={faqs}
        path={path}
      />
      <ServiceHero eyebrow={eyebrow} title={title} description={description} steps={heroSteps} image={image}>
        {price && (
          <Reveal delay={220} variant="scale" className="mt-7 inline-flex items-baseline gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-5 py-2">
            <span className="text-2xl font-extrabold text-white">{price}</span>
            <span className="text-xs text-white/70">{priceUnit}</span>
          </Reveal>
        )}
      </ServiceHero>

      <FeatureGrid title={includedHeading} intro={includedSubheading} features={features} />

      {/* How it runs */}
      {steps && steps.length > 0 && (
        <section className="bg-white py-14 sm:py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
                The check process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
                {stepsHeading}
              </h2>
            </div>

            {/* Horizontal, map-style route: numbered stops joined by a
                connector line with a direction arrow, label + copy beneath each.
                Stacks vertically on small screens. */}
            <ol className="flex flex-col gap-10 md:flex-row md:items-start md:gap-0">
              {steps.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.n}
                  delay={i * 90}
                  className="relative flex flex-1 flex-col items-center px-2 text-center"
                >
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-7 hidden h-[2px] w-full bg-[#058B74]/25 md:block"
                    >
                      <span className="absolute left-1/2 top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#058B74]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </span>
                  )}

                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#058B74] bg-white text-lg font-bold text-[#058B74] shadow-sm">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-[#01463A]">{s.t}</h3>
                  <p className="mt-1.5 max-w-[15rem] text-sm leading-relaxed text-gray-600">{s.d}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
              {faqHeading}
            </h2>
            <p className="mt-5 text-gray-600 text-sm leading-relaxed">
              {faqSubheading}
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal
                key={faq.q}
                as="details"
                delay={i * 60}
                className="group rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 open:border-[#058B74]/40 open:shadow-md open:shadow-[#058B74]/5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2">
                  <span className="text-sm md:text-base font-semibold text-[#01463A] group-hover:text-[#058B74] group-open:text-[#058B74] transition-colors">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 transition-all duration-300 group-open:rotate-45 group-open:bg-[#058B74] group-open:text-white group-open:ring-[#058B74]">
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 -mt-1 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FCRA compliance framing */}
      <FcraComplianceNote />

      {/* CTA */}
      <CTASection
        eyebrow="Get started today"
        title={ctaHeading}
        description={ctaDescription}
        primary={primaryCta}
        secondary={secondaryCta}
      />
    </main>
  );
}
