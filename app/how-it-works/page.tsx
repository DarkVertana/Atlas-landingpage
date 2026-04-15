import NumbersStrip from "../components/NumbersStrip";
import HoverVideo from "../components/HoverVideo";

type DeepDiveStep = {
  num: string;
  title: string;
  eyebrow: string;
  desc: string;
  bullets: string[];
  image: string;
  video?: string;
  gradient: string;
};

const deepDive: DeepDiveStep[] = [
  {
    num: "01",
    title: "Rapid account creation and order placement.",
    eyebrow: "Client setup",
    desc: "Create an account, access your centralized dashboard, and select a predefined package or custom-built bundle. You only need to input the applicant's name and email — the platform handles everything that follows.",
    bullets: [
      "Centralized dashboard access",
      "Predefined or custom-built bundles",
      "Name and email are the only inputs needed",
    ],
    image: "/assets/soft-capture/Home-img.png",
    video: "/assets/soft-capture/Home-vdo.mov",
    gradient: "from-[#01463A] to-[#058B74]",
  },
  {
    num: "02",
    title: "Automated candidate invitation.",
    eyebrow: "Secure dispatch",
    desc: "The platform immediately dispatches a secure, time-limited automated invitation to your candidate — no manual outreach or coordination required from your team.",
    bullets: [
      "Instant automated dispatch",
      "Secure, time-limited access link",
      "No manual follow-up required",
    ],
    image: "/assets/soft-capture/Step%202.png",
    video: "/assets/soft-capture/Step%202%20vdo.mov",
    gradient: "from-[#058B74] to-[#0aa88a]",
  },
  {
    num: "03",
    title: "Secure applicant submission flow.",
    eyebrow: "Candidate experience",
    desc: "Candidates complete a mobile-optimized flow that captures FCRA consent, SSN, address history, a government-issued ID upload, and a live selfie for identity verification.",
    bullets: [
      "Mobile-optimized experience",
      "FCRA consent, SSN, and address history",
      "Government ID upload and selfie verification",
    ],
    image: "/assets/soft-capture/step%203.png",
    gradient: "from-[#01463A] to-[#0aa88a]",
  },
  {
    num: "04",
    title: "Smart payment and investigation processing.",
    eyebrow: "Billing & checks",
    desc: "Automated billing triggers only upon the applicant's submission — you never pay for drop-offs. The background checks and investigative verifications begin immediately after authorization.",
    bullets: [
      "Billing triggers only on submission",
      "No charges for incomplete invitations",
      "Investigations begin immediately after consent",
    ],
    image: "/assets/soft-capture/step%204.png",
    gradient: "from-[#058B74] to-[#01463A]",
  },
  {
    num: "05",
    title: "Clear reporting and instant notifications.",
    eyebrow: "Final delivery",
    desc: "The system generates a branded, FCRA-compliant PDF report and notifies your team via instant email and dashboard alerts the moment it is ready for review.",
    bullets: [
      "Branded, FCRA-compliant PDF report",
      "Instant email and dashboard alerts",
      "Real-time status visibility throughout",
    ],
    image: "/assets/soft-capture/step%205.png",
    gradient: "from-[#0aa88a] to-[#01463A]",
  },
];

const faqs = [
  {
    q: "How long does the entire process take?",
    a: "Your administrative work takes less than a minute. Once you submit the candidate details, the platform immediately sends the invitation. After the applicant completes their secure submission, most standard criminal checks and SSN traces return results within 24 hours. Complex county court searches or employment verifications may require up to three business days.",
  },
  {
    q: "What exactly does the applicant see?",
    a: "Candidates receive a secure access link via email. Clicking the link opens a mobile-optimized portal that guides them through reviewing the legally required disclosure forms, providing electronic consent, and entering their address history. Finally, they authenticate their identity by uploading a government-issued ID and taking a live selfie.",
  },
  {
    q: "Who has access to the final report?",
    a: "Only authorized personnel within your organization can view the completed background report. We protect all data using strict role-based access controls and enterprise-grade encryption. Atlas Screening never sells applicant data or shares it with unauthorized third parties.",
  },
  {
    q: "What happens if a candidate disputes a finding?",
    a: "We maintain a transparent, applicant-friendly dispute workflow. If a candidate believes a public record on their report is inaccurate, they can initiate a formal review directly with our compliance team. We investigate the claim promptly according to strict Fair Credit Reporting Act guidelines.",
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
            The end-to-end background screening workflow.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            We engineered our platform to demand minimal client effort while delivering
            maximum visibility. Discover how we process complex background investigations
            efficiently and securely.
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
                    {step.video ? (
                      <HoverVideo
                        poster={step.image}
                        video={step.video}
                        alt={step.title}
                      />
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={step.image}
                        alt={step.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01463A]/30 via-transparent to-transparent pointer-events-none" />

                    {/* Step badge */}
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white">
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
                Accelerate your talent acquisition with seamless pre-employment
                screening. Manage bulk orders and integrate with your ATS in minutes.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Pre-employment background checks within 24 hours",
                  "Scalable bulk ordering for high-volume recruitment",
                  "Native ATS integrations and robust REST API access",
                  "Automated adverse action workflows built directly in",
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
                Secure comprehensive tenant screening data to protect your real estate
                portfolio — all through one unified, compliant dashboard.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Complete criminal, credit, and eviction history checks",
                  "Seamless integration with property management software",
                  "Transparent, applicant-friendly dispute resolution",
                  "Fully branded background reports for your portfolio",
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
                Understand your legal rights under the FCRA, track your background check
                status, and maintain complete control over your personal data.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Complete transparency into your personal screening file",
                  "Real-time status tracking from your mobile device",
                  "Straightforward workflow to dispute inaccurate findings",
                  "Clear, accessible explanations of your FCRA rights",
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
