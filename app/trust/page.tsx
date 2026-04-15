const badges = [
  { name: "FCRA", sub: "Compliant" },
  { name: "SOC 2", sub: "Type II" },
  { name: "EEOC", sub: "Guidelines" },
  { name: "PBSA", sub: "Accredited" },
  { name: "GDPR", sub: "Aligned" },
  { name: "CCPA", sub: "Ready" },
];

const pillars = [
  {
    title: "Native FCRA automation",
    desc: "Mandated standalone disclosures and timestamped electronic authorization are enforced directly in the workflow — no manual steps, no missed notices.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 5v7c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5l-8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Two-step adverse action",
    desc: "When a report returns actionable data, the system generates the pre-adverse notice, report copy, and final adverse action documentation automatically.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 018 0v4" />
      </svg>
    ),
  },
  {
    title: "EEOC & state adaptability",
    desc: "Ban-the-box timing, individualized assessment context, and dynamic state filtering keep reports aligned with jurisdictional rules across all 50 states.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 00-4 4v4h8V6a4 4 0 00-4-4z" />
        <rect x="4" y="10" width="16" height="12" rx="2" />
      </svg>
    ),
  },
  {
    title: "Integrated dispute resolution",
    desc: "A transparent, built-in workflow lets applicants challenge inaccurate public records directly with our compliance team — fulfilling your federal obligations.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Comprehensive action logging",
    desc: "Every administrative action is tracked and recorded with immediate, exportable reporting — the paper trail your compliance officers require.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: "Automated retention lifecycles",
    desc: "We don't hold consumer data indefinitely. The system automatically archives and securely purges applicant files based on federal retention timelines.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 12l2 2 3.5-4" />
      </svg>
    ),
  },
];

const applicantRights = [
  {
    title: "Mandated standalone disclosures",
    desc: "Clear, legally compliant disclosure documents are delivered to candidates automatically before the submission process begins.",
  },
  {
    title: "Timestamped electronic authorization",
    desc: "Every candidate completes a secure, digitally timestamped consent workflow before any public record search initiates.",
  },
  {
    title: "Two-step adverse action support",
    desc: "Pre-adverse action notice, consumer report copy, and final adverse action documentation are generated instantly when actionable data is returned.",
  },
  {
    title: "Integrated dispute resolution",
    desc: "A transparent, built-in workflow for applicants to challenge inaccurate public records directly with our compliance team.",
  },
];

const faqs = [
  {
    q: "How does Atlas enforce FCRA compliance automatically?",
    a: "Navigating the Fair Credit Reporting Act requires absolute precision. Our platform natively enforces federal guidelines inside the workflow — delivering mandated standalone disclosures, capturing timestamped electronic authorization, generating two-step adverse action documentation, and providing integrated dispute resolution.",
  },
  {
    q: "How does the platform adapt to EEOC and state-level rules?",
    a: "Fair hiring practices extend beyond the FCRA. Our workflow supports ban-the-box timing, gives your HR team the reporting context needed for individualized assessments, and applies dynamic state filtering so reports adhere to local limitations such as salary history bans and criminal record timeframes in states like California and New York.",
  },
  {
    q: "How is candidate PII protected?",
    a: "All candidate personally identifiable information is secured with advanced cryptographic protocols — encrypted in transit and at rest. Candidate entry portals operate strictly through secure, tokenized access links that expire automatically, and biometric uploads (government IDs, live selfies) sit entirely within secure server storage restricted from general administrative view.",
  },
  {
    q: "Who can access completed consumer reports?",
    a: "Role-based permissions let you restrict dashboard access exclusively to authorized hiring, legal, and leasing personnel. You control exactly who views sensitive consumer reports, and every administrative action is automatically tracked and exportable for compliance review.",
  },
  {
    q: "How long is applicant data retained?",
    a: "We do not hold consumer data indefinitely. Our system automatically manages the archiving and secure purging of applicant files based on federal data retention timelines.",
  },
];

export default function TrustPage() {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            Trust &amp; Compliance
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Enterprise-grade security and FCRA compliance.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            Protecting consumer data and maintaining strict legal adherence form the
            absolute foundation of Atlas Screening. Our platform is engineered from the
            ground up to meet the exact demands of federal, state, and local employment
            laws.
          </p>
        </div>
      </section>

      {/* Badges strip */}
      <section className="bg-white py-14 px-6 border-b border-gray-100">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">
            Certifications &amp; Frameworks
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {badges.map((b) => (
              <div
                key={b.name}
                className="flex flex-col items-center justify-center w-28 h-28 rounded-2xl border border-gray-200 hover:border-[#058B74]/30 hover:shadow-sm transition-all"
              >
                <span className="text-lg font-bold text-[#01463A]">{b.name}</span>
                <span className="text-[11px] text-gray-400 mt-0.5">{b.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust pillars */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Compliance engineered into every layer.
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              In the highly regulated U.S. hiring market, we treat regulatory compliance
              as a non-negotiable operational standard — these are the guarantees built
              directly into the platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#058B74]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 group-hover:bg-[#058B74] group-hover:text-white group-hover:ring-[#058B74] transition-all duration-300">
                    {p.icon}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-[#01463A]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security split */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
                Cryptography & biometric security
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight">
                Sensitive applicant data never sits exposed.
              </h2>
              <p className="mt-5 text-sm text-gray-500 leading-relaxed max-w-lg">
                We secure all candidate Personally Identifiable Information using
                advanced cryptographic protocols. All system data is protected by
                enterprise-grade encryption in transit and at rest, guarding against
                unauthorized interception.
              </p>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-lg">
                Candidate entry portals operate strictly through secure, tokenized
                access links that expire automatically. Government-issued IDs and live
                selfie verification data sit entirely within secure server storage and
                are restricted from general administrative view.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Enterprise-grade encryption in transit and at rest",
                  "Tokenized applicant portals with auto-expiring links",
                  "Biometric uploads stored on restricted-access servers",
                  "Role-based permissions across all consumer reports",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#01463A]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#058B74"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0"
                    >
                      <path d="M5 12l5 5 9-11" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-[#01463A] to-[#058B74] aspect-[4/3] shadow-xl shadow-[#058B74]/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/Ai-section.webp"
                  alt="Atlas security architecture"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#01463A]/60 via-[#01463A]/20 to-transparent pointer-events-none" />

                <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full pl-2 pr-4 py-1.5">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#058B74]">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white">
                    SOC 2 Type II
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 z-10 bg-white rounded-2xl shadow-xl shadow-[#01463A]/15 border border-gray-100 px-4 py-3 w-[190px]">
                <div className="flex items-center gap-2">
                  <span className="relative flex items-center justify-center">
                    <span className="absolute w-2.5 h-2.5 rounded-full bg-[#0aa88a] animate-ping opacity-75" />
                    <span className="relative w-2 h-2 rounded-full bg-[#0aa88a]" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#058B74]">
                    All systems go
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-semibold text-[#01463A]">
                  99.98% uptime
                </p>
                <p className="text-xs text-gray-500 mt-0.5">Last 12 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applicant bill of rights */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
              FCRA automation
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Native FCRA automation and adverse action management.
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              A single manual error can expose your business to significant litigation.
              We simplify this complexity by natively enforcing federal guidelines
              directly within your screening workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {applicantRights.map((r, i) => (
              <div
                key={r.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#058B74] text-white font-bold flex items-center justify-center text-sm">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#01463A]">{r.title}</h3>
                    <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="mailto:applicants@atlasscreening.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#058B74] hover:text-[#01463A] transition-colors"
            >
              Contact our applicant help team
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Trust FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Complete system auditing and access control.
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Maintain absolute visibility over your entire screening program. Our
              infrastructure provides the definitive paper trail required for internal
              compliance reviews and external regulatory audits.
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
