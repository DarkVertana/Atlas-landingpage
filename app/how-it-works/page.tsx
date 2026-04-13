import NumbersStrip from "../components/NumbersStrip";

const deepDive = [
  {
    num: "01",
    title: "Create your account.",
    eyebrow: "Signup",
    desc: "Spin up an Atlas account in minutes. No sales call required, no credit card on file until you run a real check. Invite your team, set roles, and connect your ATS or property-management tool whenever you&apos;re ready.",
    bullets: [
      "Free to start, pay-as-you-go",
      "Role-based access for your team",
      "ATS and PMS integrations available",
    ],
    image: "/assets/images/Ai-section.webp",
    gradient: "from-[#01463A] to-[#058B74]",
  },
  {
    num: "02",
    title: "Provide the essentials.",
    eyebrow: "Identity & details",
    desc: "Applicants enter government ID, contact info, and the personal details required for the specific checks you ordered. The flow is mobile-first, localized, and respects candidate privacy from the first field.",
    bullets: [
      "Mobile-first applicant experience",
      "Tokenized, time-limited invite links",
      "Clear consent and disclosure screens",
    ],
    image: "/assets/images/SSN-trace-%26-address-history.webp",
    gradient: "from-[#058B74] to-[#0aa88a]",
  },
  {
    num: "03",
    title: "Upload supporting documents.",
    eyebrow: "Verification",
    desc: "Photo-capture for government-issued ID, selfie match, and any additional documents required by your specific screening package — all encrypted end-to-end.",
    bullets: [
      "Automated document capture & quality checks",
      "Tamper and forgery detection powered by ML",
      "Encrypted in transit and at rest",
    ],
    image: "/assets/images/Employment-verification.webp",
    gradient: "from-[#01463A] to-[#0aa88a]",
  },
  {
    num: "04",
    title: "We review and screen.",
    eyebrow: "Behind the scenes",
    desc: "Atlas runs FCRA-compliant searches across licensed national and local databases, verifies documents, and flags anomalies for human review. Every decision is logged for full auditability.",
    bullets: [
      "Criminal, MVR, credit, and verification searches",
      "Human review where AI flags uncertainty",
      "Full audit trail for every case",
    ],
    image: "/assets/images/Criminal-background-checks.webp",
    gradient: "from-[#058B74] to-[#01463A]",
  },
  {
    num: "05",
    title: "Receive a verified report.",
    eyebrow: "Decision-ready",
    desc: "Employers, property managers, or customers receive a branded, FCRA-compliant PDF — with clear pass/flag indicators, source citations, and adjudication tooling built right in.",
    bullets: [
      "Branded, compliant PDF + dashboard view",
      "Pass/flag indicators with sourcing",
      "Adverse-action workflow built in",
    ],
    image: "/assets/images/Tenant-screening.webp",
    gradient: "from-[#0aa88a] to-[#01463A]",
  },
];

const faqs = [
  {
    q: "How long does the whole process take?",
    a: "Most reports are delivered within 24 hours. Criminal searches, identity verification, and MVR often complete in minutes; employment and education verifications may take 1–3 business days depending on sources.",
  },
  {
    q: "What does the applicant actually see?",
    a: "A secure, time-limited link that opens on any device. They provide consent, submit required data, and capture ID/selfie. Most applicants finish in 5–10 minutes.",
  },
  {
    q: "Who can see the report?",
    a: "Only authorized users in your account. Every view is logged, and you can control access with role-based permissions.",
  },
  {
    q: "Can I dispute a finding?",
    a: "Yes. Applicants can open disputes directly from the report. Our team responds within one business day, and corrections flow through automatically.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            How it works
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            From invite to verified report.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            A look at the five-step Atlas workflow — and what happens behind the
            scenes to keep every report accurate, compliant, and fast.
          </p>
        </div>
      </section>

      {/* Deep-dive steps — alternating split */}
      <section id="workflow" className="bg-white py-20 px-6 scroll-mt-40">
        <div className="mx-auto max-w-6xl space-y-24">
          {deepDive.map((step, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={step.num}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  reversed ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Copy */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
                    {step.eyebrow}
                  </p>
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl md:text-6xl font-extrabold text-[#058B74]/15 leading-none">
                      {step.num}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#01463A] leading-tight">
                      {step.title}
                    </h2>
                  </div>
                  <p className="mt-5 text-sm text-gray-500 leading-relaxed max-w-lg">
                    {step.desc.replace(/&apos;/g, "'")}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-[#01463A]">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#058B74"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-shrink-0 mt-0.5"
                        >
                          <path d="M5 12l5 5 9-11" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="relative">
                  <div
                    className={`relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br ${step.gradient} aspect-[4/3] shadow-xl shadow-[#058B74]/15`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01463A]/30 via-transparent to-transparent pointer-events-none" />

                    {/* Step badge */}
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white">
                      Step {step.num}
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-[#058B74]/15 -z-10" />
                  <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-[#01463A]/10 -z-10" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-5">
            {/* For employers */}
            <div
              id="for-employers"
              className="scroll-mt-40 group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 group-hover:bg-[#058B74] group-hover:text-white group-hover:ring-[#058B74] transition-all duration-300">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
                  <path d="M3 12h18" />
                </svg>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[#058B74]">
                Employers
              </p>
              <h3 className="mt-1 text-lg font-semibold text-[#01463A] leading-tight">
                For hiring teams.
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Pre-employment screening, bulk orders, and ATS integration — wired
                up in minutes.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Pre-employment checks in under 24 hours",
                  "Bulk ordering for high-volume hiring",
                  "Native ATS integrations + REST API",
                  "Adverse-action workflow built in",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-[#01463A]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                      <path d="M5 12l5 5 9-11" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="/for-employers"
                className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#058B74] hover:text-[#01463A] transition-colors"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* For property managers */}
            <div
              id="for-property-managers"
              className="scroll-mt-40 group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 group-hover:bg-[#058B74] group-hover:text-white group-hover:ring-[#058B74] transition-all duration-300">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-4v-6h-8v6H4a1 1 0 01-1-1v-9z" />
                </svg>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[#058B74]">
                Property managers
              </p>
              <h3 className="mt-1 text-lg font-semibold text-[#01463A] leading-tight">
                For leasing teams.
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Tenant screening as a full solution — criminal, credit, and
                eviction history in one report.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Criminal, credit, and eviction checks",
                  "Integrates with property-management tools",
                  "Applicant-friendly dispute workflow",
                  "Branded reports for your portfolio",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-[#01463A]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                      <path d="M5 12l5 5 9-11" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="/for-property-managers"
                className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#058B74] hover:text-[#01463A] transition-colors"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* For applicants */}
            <div
              id="for-applicants"
              className="scroll-mt-40 group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 group-hover:bg-[#058B74] group-hover:text-white group-hover:ring-[#058B74] transition-all duration-300">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[#058B74]">
                Applicants
              </p>
              <h3 className="mt-1 text-lg font-semibold text-[#01463A] leading-tight">
                For the person being screened.
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Your rights under the FCRA, how to check your report status, and
                how to dispute any finding.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Know what's in your file",
                  "Check report status in real time",
                  "Dispute inaccurate findings",
                  "Clear FCRA rights explanations",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-[#01463A]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                      <path d="M5 12l5 5 9-11" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="/for-applicants"
                className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#058B74] hover:text-[#01463A] transition-colors"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <NumbersStrip />

      {/* Workflow FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Questions about the flow.
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              The most common things hiring and leasing teams want to know before
              running their first check.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
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
                Run your first check<br className="hidden md:block" /> in minutes.
              </h2>
              <p className="mt-4 text-white/60 text-base leading-relaxed max-w-md">
                Create an account and invite your first applicant today. No
                contracts, no setup fees.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-white text-[#01463A] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Create account
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center border border-white/30 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Talk to sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
