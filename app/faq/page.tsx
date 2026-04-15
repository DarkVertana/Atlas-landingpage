const categories = [
  {
    id: "employer-resources",
    title: "Employer resources",
    desc: "Dashboard, timelines, billing, and compliance.",
    faqs: [
      {
        q: "How do I initiate a background check on a new candidate?",
        a: "You only need to provide the candidate name and email address. Log into your centralized dashboard, select a predefined package or custom-built bundle, and enter those two details. The platform immediately dispatches a secure, time-limited invitation to your candidate to complete the data entry process.",
      },
      {
        q: "How long does a standard background check take?",
        a: "Most criminal background checks and SSN traces finalize within 24 hours. Complex investigative verifications — such as manual county court searches or employment verification — require two to three business days. You maintain clear status visibility for every candidate directly within your dashboard.",
      },
      {
        q: "How does smart payment processing and billing work?",
        a: "Automated billing triggers only when an applicant officially submits their authorized information. You never pay for incomplete invitations or dropped candidates. Base screening packages and optional add-ons — such as a $39.99 Global Watchlist or Tenant Screening check — feature transparent, upfront pricing.",
      },
      {
        q: "Is the Atlas platform fully FCRA compliant?",
        a: "Yes. Compliance is a non-negotiable foundation for our entire system. The platform automatically captures timestamped applicant consent, provides all legally mandated disclosure documents, and generates fully branded, FCRA-compliant PDF reports for your final review.",
      },
    ],
  },
  {
    id: "applicant-resources",
    title: "Applicant resources",
    desc: "What to submit, how your data is protected, and your rights.",
    faqs: [
      {
        q: "What information do I need to provide for my background check?",
        a: "You must provide your electronic consent, Social Security Number, date of birth, and recent address history. Our secure mobile flow also requires you to upload a valid government ID and take a live selfie. This multi-step verification protects your identity and prevents matching errors during the public records search.",
      },
      {
        q: "Is my personal information and biometric data secure?",
        a: "We protect your personal details using enterprise-grade encrypted document storage and transmission. You access the submission flow through a secure, time-limited tokenized link. Your data is strictly guarded by role-based access controls and is only shared with the specific employer requesting the report.",
      },
      {
        q: "Why does the system require a selfie and ID upload?",
        a: "Uploading a government ID and taking a live selfie proves that the person submitting the background check is actually you. This critical step protects your identity from fraud and ensures the resulting background report is highly accurate.",
      },
      {
        q: "How do I dispute a finding on my completed report?",
        a: "You hold the right to challenge any inaccurate public records under the Fair Credit Reporting Act. If you find an error on your completed screening report, you can initiate a formal review directly through our dedicated compliance team.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            Help Center
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Atlas help center and frequently asked questions.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            Find immediate answers regarding screening timelines, platform billing, and
            candidate data security. We designed this resource hub to provide complete
            transparency for both hiring teams and job applicants.
          </p>
        </div>
      </section>

      {/* Categories + Sidebar */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">
          {/* Main column — categories */}
          <div className="space-y-20 min-w-0">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-28">
                <div className="mb-8">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-2">
                    {cat.title}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#01463A] leading-tight">
                    {cat.desc}
                  </h2>
                </div>

                <div className="space-y-3">
                  {cat.faqs.map((faq) => (
                    <details
                      key={faq.q}
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
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 space-y-5">
            {/* Category nav */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-4">
                On this page
              </p>
              <nav className="flex flex-col">
                {categories.map((c) => (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    className="group flex items-center gap-2 py-2 text-sm text-[#01463A] hover:text-[#058B74] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#058B74]/30 group-hover:bg-[#058B74] group-hover:w-2 transition-all" />
                    {c.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Resources */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-4">
                Resources
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="/resources/background-check-guide"
                    className="flex items-center justify-between text-[#01463A] hover:text-[#058B74] transition-colors"
                  >
                    Background check guide
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-gray-300">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/resources/fcra-guide"
                    className="flex items-center justify-between text-[#01463A] hover:text-[#058B74] transition-colors"
                  >
                    FCRA compliance guide
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-gray-300">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="flex items-center justify-between text-[#01463A] hover:text-[#058B74] transition-colors"
                  >
                    Pricing &amp; packages
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-gray-300">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/trust"
                    className="flex items-center justify-between text-[#01463A] hover:text-[#058B74] transition-colors"
                  >
                    Trust &amp; compliance
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-gray-300">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Still stuck callout */}
      <section className="bg-white pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-[#01463A]">
              Didn&apos;t find what you were looking for?
            </h3>
            <p className="mt-3 text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our support team usually replies in under an hour during business days —
              with a real person, never a form letter.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#01463A] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#058B74] transition-colors"
              >
                Contact support
              </a>
              <a
                href="mailto:hello@atlasscreening.com"
                className="inline-flex items-center border border-gray-200 text-[#01463A] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white hover:border-[#058B74]/40 transition-colors"
              >
                hello@atlasscreening.com
              </a>
            </div>
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
                Ready when you are
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Start screening<br className="hidden md:block" /> in minutes.
              </h2>
              <p className="mt-4 text-white/60 text-base leading-relaxed max-w-md">
                Create an account and run your first check today. No contracts,
                no setup fees.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-white text-[#01463A] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Create account
                </a>
                <a
                  href="mailto:sales@atlasscreening.com"
                  className="inline-flex items-center border border-white/30 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Email sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
