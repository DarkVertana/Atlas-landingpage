import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

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
  price?: string;
  priceUnit?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
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
  price,
  priceUnit = "per check",
  primaryCta = { label: "Start a check", href: "/signup" },
  secondaryCta = { label: "Talk to sales", href: "/contact" },
  includedHeading,
  includedSubheading,
  features,
  stepsHeading = "How it runs.",
  steps,
  faqHeading,
  faqSubheading,
  faqs,
  ctaHeading,
  ctaDescription,
}: ServiceDetailProps) {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal as="p" className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            {eyebrow}
          </Reveal>
          <Reveal as="h1" delay={80} className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {title}
          </Reveal>
          <Reveal as="p" delay={160} className="mt-5 text-white/70 max-w-2xl mx-auto text-sm leading-relaxed">
            {description}
          </Reveal>

          {price && (
            <Reveal delay={220} variant="scale" className="mt-7 inline-flex items-baseline gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-5 py-2">
              <span className="text-2xl font-extrabold text-white">{price}</span>
              <span className="text-xs text-white/70">{priceUnit}</span>
            </Reveal>
          )}

          <Reveal delay={280} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2 bg-white text-[#01463A] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-all"
            >
              {primaryCta.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-all"
            >
              {secondaryCta.label}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <Reveal as="p" className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
              What&apos;s included
            </Reveal>
            <Reveal as="h2" delay={80} className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              {includedHeading}
            </Reveal>
            <Reveal as="p" delay={160} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              {includedSubheading}
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 80}
                className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 group-hover:bg-[#058B74] group-hover:text-white group-hover:ring-[#058B74] transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#01463A]">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it runs */}
      {steps && steps.length > 0 && (
        <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
                Under the hood
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
                {stepsHeading}
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-5">
              {steps.map((s, i) => (
                <Reveal
                  key={s.n}
                  delay={i * 90}
                  className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#058B74]/40 transition-all"
                >
                  <span className="text-2xl font-extrabold text-[#058B74]/40">{s.n}</span>
                  <h3 className="mt-2 text-base font-semibold text-[#01463A]">{s.t}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              {faqHeading}
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
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

      {/* CTA */}
      <section className="bg-[#01463A] py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal as="h2" className="text-2xl md:text-4xl font-bold text-white leading-tight">
            {ctaHeading}
          </Reveal>
          <Reveal as="p" delay={80} className="mt-4 text-white/70 text-sm max-w-xl mx-auto leading-relaxed">
            {ctaDescription}
          </Reveal>
          <Reveal delay={160} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-[#01463A] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-all"
            >
              Create your account
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-all"
            >
              Talk to sales
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
