import Header from "../components/Header";
import Footer from "../components/Footer";

const categories = [
  {
    id: "getting-started",
    title: "Getting started",
    desc: "Onboarding, first checks, and setup.",
    faqs: [
      {
        q: "How quickly can I start running background checks?",
        a: "Create an account and run your first check in under 10 minutes — no lengthy onboarding, no contracts, no setup fees.",
      },
      {
        q: "Do I need to sign a contract?",
        a: "No. Atlas is pay-as-you-go by default. Enterprise plans are available if you prefer committed volume pricing.",
      },
      {
        q: "How do I invite an applicant?",
        a: "From your dashboard, enter the applicant's name and email. They'll receive a secure, time-limited invitation and can complete the process on any device.",
      },
    ],
  },
  {
    id: "applicants",
    title: "Applicant experience",
    desc: "What candidates and tenants see and do.",
    faqs: [
      {
        q: "What does the applicant experience look like?",
        a: "Applicants receive a secure, time-limited invite. They provide consent, SSN, date of birth, address history, government ID, and a selfie for verification — most finish in 5–10 minutes.",
      },
      {
        q: "Can applicants use a phone?",
        a: "Yes. The entire applicant flow is mobile-first and works on any modern browser — no app install required.",
      },
      {
        q: "How do applicants dispute a report?",
        a: "Every report includes a clear dispute pathway. Applicants can open a dispute from the report link, and our team responds with next steps within one business day.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & billing",
    desc: "How and when you're charged.",
    faqs: [
      {
        q: "When do I get charged?",
        a: "You're only billed after your applicant submits their information — never before. No upfront payments, no charges for drop-offs.",
      },
      {
        q: "Are there volume discounts?",
        a: "Yes — enterprise and high-volume customers unlock tiered pricing. Reach out to sales@atlasscreening.com for a tailored quote.",
      },
      {
        q: "Do you charge for add-ons separately?",
        a: "Each add-on (tenant screening, credit report, global watchlist, etc.) is priced per check on top of the base package you choose. Exact pricing lives on the Pricing page.",
      },
    ],
  },
  {
    id: "reports",
    title: "Reports & data",
    desc: "Formats, delivery, and what's inside.",
    faqs: [
      {
        q: "What format do reports come in?",
        a: "You'll get a branded, FCRA-compliant PDF delivered to your dashboard with an email notification. Reports include all findings organized by check type with clear pass/flag indicators.",
      },
      {
        q: "Can I export data to my ATS?",
        a: "Yes — Atlas integrates with common applicant tracking systems via a REST API and native connectors. CSV exports are also available for bulk workflows.",
      },
      {
        q: "How long are reports retained?",
        a: "Reports are retained for the minimum period required by law, plus any additional window you configure. All data is purged securely afterward.",
      },
    ],
  },
  {
    id: "compliance",
    title: "Compliance & security",
    desc: "FCRA, SOC 2, and applicant rights.",
    faqs: [
      {
        q: "Are Atlas reports FCRA compliant?",
        a: "Yes. Every report follows Fair Credit Reporting Act (FCRA) guidelines, EEOC guidance, and applicable state and local laws. Consent, adverse action, and audit logging are built in.",
      },
      {
        q: "How is my applicants' data protected?",
        a: "All data is encrypted in transit and at rest, hosted on SOC 2 Type II certified infrastructure. Applicant invite links are tokenized and time-limited, with role-based access controls for your team.",
      },
      {
        q: "Do you offer social media screening?",
        a: "Yes — Atlas offers FCRA-compliant social media inquiry. We review public profiles for concerning content while respecting candidate privacy and protected-class information.",
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    desc: "ATS, property management, and APIs.",
    faqs: [
      {
        q: "Which ATS platforms do you integrate with?",
        a: "We support direct integrations with several major ATS platforms and offer a REST API for custom workflows. Reach out if you'd like us to prioritize a specific one.",
      },
      {
        q: "Do you integrate with property management software?",
        a: "Yes — tenant screening integrations are available for most major property-management platforms, plus bulk CSV workflows for scaled portfolios.",
      },
      {
        q: "Is there an API?",
        a: "Yes. Atlas offers a REST API with webhook events for every stage of the screening lifecycle. API documentation is available to all accounts.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="bg-white text-[#01463A]">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            Help Center
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Frequently asked questions.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            Straight answers about turnaround, compliance, applicants, and
            everything in between. Still stuck? Our team is an email away.
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

      <Footer />
    </main>
  );
}
