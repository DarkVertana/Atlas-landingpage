import HeroSection from "./components/HeroSection";
// import TrustedBySection from "./components/TrustedBySection";
import AboutIntro from "./components/AboutIntro";
import HowItWorks from "./components/HowItWorks";
import AIFeatures from "./components/AIFeatures";
import DashboardPreview from "./components/DashboardPreview";
import NumbersStrip from "./components/NumbersStrip";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <TrustedBySection /> */}
      <AboutIntro />
      <HowItWorks />
      <AIFeatures />
      <DashboardPreview />
      <NumbersStrip />

      {/* Consumer Disputes & Reinvestigation */}
      <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Reveal as="p" className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
              Consumer Protection
            </Reveal>
            <Reveal as="h2" delay={80} className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Consumer Disputes & Reinvestigation
            </Reveal>
            <Reveal as="p" delay={160} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Consumers may dispute the accuracy or completeness of a report.
              Atlas Screening is committed to thorough and fair reinvestigation
              of all disputes.
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Initiate reinvestigation",
                desc: "Every consumer dispute triggers a formal reinvestigation process upon request.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                ),
              },
              {
                title: "Verify with original sources",
                desc: "We go back to the original court, employer, or data provider to confirm accuracy.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: "Correct or remove data",
                desc: "If data is found to be incorrect or unverifiable, it is corrected or removed promptly.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M9 13h6M9 17h4" />
                  </svg>
                ),
              },
              {
                title: "Updated reports",
                desc: "Updated results are shared with both the consumer and the requesting client when applicable.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                as="div"
                delay={200 + i * 80}
                className="rounded-2xl border border-gray-200 bg-white p-5 hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-[#01463A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal as="div" delay={500} className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              To submit a dispute, contact{" "}
              <a
                href="mailto:compliance@atlasscreening.com"
                className="text-[#058B74] hover:underline underline-offset-2 transition-colors"
              >
                compliance@atlasscreening.com
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Data & Vendor Partnerships */}
      <section className="bg-gradient-to-br from-[#01463A] to-[#058B74] py-14 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">
                Partnerships
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Data & Vendor Partnerships
              </h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Atlas Screening partners with trusted data providers and court researchers
                to deliver accurate and timely background reports.
              </p>
              <p className="mt-6 text-xs text-white/25">
                We are actively expanding our vendor network across the United States.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-5">
                {[
                  {
                    title: "Verified data sourcing",
                    desc: "We work with established data providers and court systems to obtain reliable, up-to-date information.",
                  },
                  {
                    title: "Quality control processes",
                    desc: "Multi-layer quality checks ensure every report meets our accuracy and compliance standards.",
                  },
                  {
                    title: "Compliance-focused reporting",
                    desc: "Every report is produced within the bounds of FCRA and applicable state regulations.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 border-l-2 border-white/20 pl-5"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-xs text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Typical Turnaround Times */}
      <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Reveal as="p" className="text-xs font-semibold tracking-widest uppercase text-[#058B74] mb-3">
              Turnaround
            </Reveal>
            <Reveal as="h2" delay={80} className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Typical Turnaround Times
            </Reveal>
            <Reveal as="p" delay={160} className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Results vary by search type and jurisdiction. These are typical timeframes
              for our most common screening services.
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              {
                type: "Instant database searches",
                time: "Same day",
                desc: "National criminal database, sex offender registry, and identity verification results return within minutes.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                ),
              },
              {
                type: "County criminal searches",
                time: "24–72 hours",
                desc: "Direct county court record searches conducted by researchers for the most current and accurate results.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M3 10h18M5 10V7l7-4 7 4v3M5 21h14M7 10v11M17 10v11M10 14h4v7h-4z" />
                  </svg>
                ),
              },
              {
                type: "Employment verification",
                time: "1–3 business days",
                desc: "Direct contact with past employers to verify titles, dates, and separation reasons.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <Reveal
                key={item.type}
                as="div"
                delay={200 + i * 80}
                className="rounded-2xl border border-gray-200 bg-white p-5 hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10">
                  {item.icon}
                </div>
                <div className="mt-4">
                  <span className="text-lg font-bold text-[#01463A]">{item.time}</span>
                </div>
                <h3 className="mt-1 text-sm font-semibold text-[#01463A]">
                  {item.type}
                </h3>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </div>
  );
}
