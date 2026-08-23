"use client";

import Reveal from "../components/Reveal";

const categories = [
  {
    id: "general",
    title: "General",
    desc: "Services, compliance, and how Atlas Screening works.",
    faqs: [
      {
        q: "What services does Atlas Screening provide?",
        a: "Atlas Screening provides background screening services including:\n\n• Criminal background checks (national, state, county)\n• Identity verification (SSN trace and address history)\n• Employment verification\n• Tenant screening\n\nAll services are conducted in accordance with applicable laws and regulations.",
      },
      {
        q: "How long does a background check take?",
        a: "Turnaround times vary depending on the type of search:\n\n• Instant database searches: Same day\n• County criminal searches: Typically 24–72 hours\n• Employment verification: 1–3 business days\n\nSome results may require additional verification depending on jurisdiction and data availability.",
      },
      {
        q: "Are background checks instant?",
        a: "Some portions of a background check may return results quickly. However, complete reports may require additional verification and are not always instant. This ensures accuracy and compliance.",
      },
      {
        q: "Is Atlas Screening compliant with the law?",
        a: "Yes. Atlas Screening operates in accordance with the Fair Credit Reporting Act and applicable state laws.\n\nWe follow procedures for:\n\n• Consumer authorization\n• Permissible purpose\n• Adverse action support\n• Dispute and reinvestigation",
      },
      {
        q: "What is required before running a background check?",
        a: "Clients must:\n\n• Have a lawful, permissible purpose\n• Obtain written authorization from the individual\n• Comply with all applicable laws",
      },
      {
        q: "Does the individual being screened know about it?",
        a: "Yes. Proper disclosure and authorization are required before any background check is conducted.",
      },
    ],
  },
  {
    id: "accuracy-privacy",
    title: "Accuracy & Privacy",
    desc: "Data protection, dispute rights, and report accuracy.",
    faqs: [
      {
        q: "What happens if a report contains incorrect information?",
        a: "Consumers have the right to dispute inaccurate or incomplete information.\n\nAtlas Screening will:\n\n• Conduct a reinvestigation\n• Verify information with original sources\n• Correct or remove inaccurate data\n\nTo submit a dispute: compliance@atlasscreening.com",
      },
      {
        q: "Are background reports guaranteed to be accurate?",
        a: "Atlas Screening obtains data from third-party sources, including public records. While we strive for accuracy, we do not guarantee that all information is complete, current, or error-free.",
      },
      {
        q: "How is personal information protected?",
        a: "We use reasonable administrative and technical safeguards to protect personal information, including secure handling and access controls.",
      },
      {
        q: "Can reports be used for any purpose?",
        a: "No. Reports may only be used for lawful, permissible purposes such as employment or tenant screening. Unauthorized use is strictly prohibited.",
      },
      {
        q: "Do you offer contracts or subscriptions?",
        a: "Atlas Screening offers flexible, pay-per-report services. Custom arrangements may be available for higher volume clients.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((cat) =>
    cat.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <main id="main" className="bg-white text-[#01463A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-5 sm:pt-36 sm:pb-20 sm:px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal
            as="p"
            variant="fade"
            className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4"
          >
            Help Center
          </Reveal>
          <Reveal
            as="h1"
            variant="up"
            delay={100}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Frequently asked questions.
          </Reveal>
          <Reveal
            as="p"
            variant="fade"
            delay={200}
            className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Find answers about our screening services, turnaround times, compliance
            practices, and how we protect your information.
          </Reveal>
        </div>
      </section>

      {/* Categories + Sidebar */}
      <section className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">
          {/* Main column — categories */}
          <div className="space-y-14 sm:space-y-20 min-w-0">
            {categories.map((cat, catIndex) => (
              <Reveal
                as="div"
                key={cat.id}
                id={cat.id}
                variant="left"
                delay={catIndex * 100}
                className="scroll-mt-28"
              >
                <div className="mb-8">
                  <Reveal as="h2" variant="up" className="text-2xl md:text-3xl font-bold text-[#01463A] leading-tight">
                    {cat.title}
                  </Reveal>
                  <Reveal as="p" variant="fade" delay={50} className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {cat.desc}
                  </Reveal>
                </div>

                <Reveal as="div" variant="fade" delay={100} className="space-y-3">
                  {cat.faqs.map((faq, faqIndex) => (
                    <Reveal
                      as="details"
                      key={faq.q}
                      variant="up"
                      delay={faqIndex * 60}
                      className="group rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 open:border-[#058B74]/40 open:shadow-md open:shadow-[#058B74]/5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2">
                        <span className="text-sm md:text-base font-semibold text-[#01463A] group-hover:text-[#058B74] group-open:text-[#058B74] transition-colors">
                          {faq.q}
                        </span>
                        <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 transition-all duration-300 group-open:rotate-45 group-open:bg-[#058B74] group-open:text-white group-open:ring-[#058B74]">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M8 3v10M3 8h10" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-5 -mt-1 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                        {faq.a}
                      </div>
                    </Reveal>
                  ))}
                </Reveal>
              </Reveal>
            ))}
          </div>

          {/* Sidebar */}
          <Reveal as="aside" variant="right" delay={200} className="lg:sticky lg:top-28 space-y-5">
            {/* Category nav */}
            <Reveal as="div" variant="scale" className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-500 mb-4">
                On this page
              </p>
              <nav className="flex flex-col">
                {categories.map((c) => (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    className="group flex items-center gap-2 py-2.5 px-2 -mx-2 rounded-lg text-sm text-[#01463A] hover:text-[#058B74] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#058B74]/30 group-hover:bg-[#058B74] group-hover:w-2 transition-all" />
                    {c.title}
                  </a>
                ))}
              </nav>
            </Reveal>

            {/* Resources */}
            <Reveal as="div" variant="scale" delay={100} className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-500 mb-4">
                Resources
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="/terms"
                    className="flex items-center justify-between py-1 px-2 -mx-2 rounded-lg text-[#01463A] hover:text-[#058B74] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
                  >
                    Terms of service
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="flex items-center justify-between py-1 px-2 -mx-2 rounded-lg text-[#01463A] hover:text-[#058B74] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
                  >
                    Privacy policy
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/compliance"
                    className="flex items-center justify-between py-1 px-2 -mx-2 rounded-lg text-[#01463A] hover:text-[#058B74] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
                  >
                    Trust & compliance
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="flex items-center justify-between py-1 px-2 -mx-2 rounded-lg text-[#01463A] hover:text-[#058B74] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
                  >
                    Pricing & packages
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
              </ul>
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* Contact callout */}
      <section className="bg-white pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          <Reveal as="div" variant="scale" delay={100} className="rounded-2xl border border-gray-200 bg-gray-50/60 p-8 md:p-10 text-center">
            <Reveal as="h3" variant="up" className="text-xl md:text-2xl font-bold text-[#01463A]">
              Didn&apos;t find what you were looking for?
            </Reveal>
            <Reveal as="p" variant="fade" delay={100} className="mt-3 text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
              Reach out to our team and we&apos;ll get back to you as soon as possible.
            </Reveal>
            <Reveal as="div" variant="fade" delay={200} className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#01463A] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#058B74] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
              >
                Contact support
              </a>
              <a
                href="mailto:contact@atlasscreening.com"
                className="inline-flex items-center border border-gray-200 text-[#01463A] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white hover:border-[#058B74]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
              >
                contact@atlasscreening.com
              </a>
            </Reveal>
          </Reveal>
        </div>
      </section>

    </main>
  );
}