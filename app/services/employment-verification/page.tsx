import type { Metadata } from "next";
import CTASection from "../../components/CTASection";
import ServicePricing from "../../components/ServicePricing";
import Reveal from "../../components/Reveal";
import Bento from "./Bento";

export const metadata: Metadata = {
  title: "Employment Verification | Atlas Screening",
  description:
    "Confirm titles, employment dates, and reason for separation directly with prior employers — documented, compliant, and audit-ready.",
};

const included = [
  {
    title: "Titles and dates",
    desc: "Confirmed job titles, start and end dates for each prior employer — pulled straight from HR or authorized verification networks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Reason for separation",
    desc: "Where the employer is authorized to disclose it, we surface the reason for leaving — voluntary, involuntary, or layoff.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M10 17l-5-5 5-5" />
        <path d="M5 12h14" />
      </svg>
    ),
  },
  {
    title: "Rehire eligibility",
    desc: "The single most-requested signal from reference checks, surfaced cleanly without relying on off-the-record calls.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 12a9 9 0 11-3.5-7.1" />
        <path d="M21 4v5h-5" />
      </svg>
    ),
  },
  {
    title: "Compensation verification",
    desc: "For roles with a valid permissible purpose, we verify salary, hourly rate, or total compensation directly with payroll.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v20M17 5H9a3 3 0 000 6h6a3 3 0 010 6H7" />
      </svg>
    ),
  },
  {
    title: "Verification networks",
    desc: "Automated data pulls from The Work Number, Equifax Workforce, and authorized HRIS integrations — instant where available.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="6" r="2" />
        <circle cx="20" cy="6" r="2" />
        <circle cx="4" cy="18" r="2" />
        <circle cx="20" cy="18" r="2" />
        <path d="M6 6l4 4M18 6l-4 4M6 18l4-4M18 18l-4-4" />
      </svg>
    ),
  },
  {
    title: "Audit trail",
    desc: "Every contact attempt is logged with timestamp, method, and outcome — so your hiring decisions stay defensible and FCRA-compliant.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "How do you verify employment?",
    a: "Atlas uses a tiered approach: automated verification networks first (The Work Number, Equifax Workforce, HRIS integrations), then direct HR email, then live-phone verification. Every method is timestamped and logged.",
  },
  {
    q: "How far back do you verify?",
    a: "Standard verifications cover the three most-recent employers. Premium extends to a full seven-year employment history. We can go further on enterprise plans when a role requires it.",
  },
  {
    q: "What if a prior employer won't respond?",
    a: "After three documented attempts across methods, we mark the employer as non-responsive and attach the full contact log. You can then decide whether the gap is material to your hiring decision.",
  },
  {
    q: "Can you verify international employers?",
    a: "Yes. International employer outreach is included on Premium and enterprise plans. We handle timezone, language, and local verification practices across major markets.",
  },
  {
    q: "Is compensation verification always available?",
    a: "Compensation disclosure depends on employer policy and state law. Where disclosed, we report it — otherwise the field is marked 'not disclosed' with the method and source on record.",
  },
];

export default function EmploymentVerificationPage() {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal as="p" className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            Employment verification
          </Reveal>
          <Reveal as="h1" delay={80} className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Verified titles, dates, and separation reasons.
          </Reveal>
          <Reveal as="p" delay={160} className="mt-5 text-white/70 max-w-2xl mx-auto text-sm leading-relaxed">
            Atlas contacts prior employers directly — via automated networks,
            tracked email, or live phone — so every claim on a résumé is
            confirmed at the source, with a full audit trail.
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {included.map((f, i) => (
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

      {/* Interactive bento */}
      <section className="bg-white pb-8 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal variant="fade">
            <Bento />
          </Reveal>
        </div>
      </section>

      <ServicePricing />

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <Reveal as="h2" className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Employment verification questions.
            </Reveal>
            <Reveal as="p" delay={80} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              How we verify, how far back we go, and what happens when a prior
              employer goes dark.
            </Reveal>
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

      <CTASection />
    </main>
  );
}
