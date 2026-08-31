import NumbersStrip from "../components/NumbersStrip";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import WorkflowSteps from "../components/WorkflowSteps";
import CTASection from "../components/CTASection";

type Audience = {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  icon: React.ReactNode;
};

const audiences: Audience[] = [
  {
    id: "for-employers",
    eyebrow: "Employers",
    title: "For hiring teams.",
    desc: "Accelerate your talent acquisition with seamless pre-employment screening. Manage bulk orders and integrate with your ATS in minutes.",
    bullets: [
      "Pre-employment background checks within 24 hours",
      "Scalable bulk ordering for high-volume recruitment",
      "Native ATS integrations and robust REST API access",
      "Automated adverse action workflows built directly in",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    id: "for-property-managers",
    eyebrow: "Property managers",
    title: "For leasing teams.",
    desc: "Secure comprehensive tenant screening data to protect your real estate portfolio — all through one unified, compliant dashboard.",
    bullets: [
      "Complete criminal, credit, and eviction history checks",
      "Seamless integration with property management software",
      "Transparent, applicant-friendly dispute resolution",
      "Fully branded background reports for your portfolio",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-4v-6h-8v6H4a1 1 0 01-1-1v-9z" />
      </svg>
    ),
  },
  {
    id: "for-applicants",
    eyebrow: "Applicants",
    title: "For the person being screened.",
    desc: "Understand your legal rights under the FCRA, track your background check status, and maintain complete control over your personal data.",
    bullets: [
      "Complete transparency into your personal screening file",
      "Real-time status tracking from your mobile device",
      "Straightforward workflow to dispute inaccurate findings",
      "Clear, accessible explanations of your FCRA rights",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <main id="main" className="bg-white text-[#0F1B17]">
      {/* ── Hero — the site's signature dark, cartographic backdrop ── */}
      <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pb-28 sm:pt-40">
        {/* base + brand gradient */}
        <div className="absolute inset-0 bg-[#02120d]" />
        <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_-10%,#0a6b54_0%,#023528_42%,#01180f_78%,#020c08_100%)]" />

        {/* graticule rings — the "Atlas" coordinate motif */}
        <div className="pointer-events-none absolute inset-x-0 -top-24 flex justify-center">
          <div
            className="relative h-[520px] w-[520px] sm:h-[760px] sm:w-[760px]"
            style={{
              maskImage: "radial-gradient(circle, black 48%, transparent 78%)",
              WebkitMaskImage: "radial-gradient(circle, black 48%, transparent 78%)",
            }}
          >
            <div
              className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: "radial-gradient(closest-side, rgba(62,232,190,0.10), transparent)" }}
            />
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border border-white"
                style={{ inset: `${i * 10}%`, opacity: 0.06 - i * 0.009 }}
              />
            ))}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
          </div>
        </div>

        {/* tonal glows for depth */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#0aa88a]/20 blur-[130px]" />
          <div className="absolute -right-16 top-4 h-80 w-80 rounded-full bg-[#3E92CC]/15 blur-[140px]" />
        </div>

        {/* grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal
            as="span"
            className="inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[#5EE3C0]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#5EE3C0] shadow-[0_0_10px_2px_rgba(94,227,192,0.6)]" />
            How it works
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.02em] text-white [text-wrap:balance] md:text-[3.4rem]"
          >
            The end-to-end background screening workflow.
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mx-auto mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/60"
          >
            We engineered our platform to demand minimal client effort while delivering
            maximum visibility. Discover how we process complex background investigations
            efficiently and securely.
          </Reveal>
          <Reveal
            delay={240}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#01463A] shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#02120d]"
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#02120d]"
            >
              Walk through the steps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Deep-dive steps on a connected spine ── */}
      <WorkflowSteps />

      {/* ── Proof band — why the workflow is fast and defensible ── */}
      <section className="border-y border-[#E1E6E2] bg-[#F7F8F6] px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#058B74]">
              Built to move
            </p>
            <h2 className="mt-4 text-[1.9rem] font-semibold leading-[1.06] tracking-[-0.02em] text-[#01463A] md:text-[2.5rem]">
              Minimal effort in, defensible reports out.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E1E6E2] bg-[#E1E6E2] lg:grid-cols-4">
            {[
              { stat: "< 1 min", label: "Your admin time per order", sub: "Just a name and an email" },
              { stat: "~24 hrs", label: "Typical turnaround", sub: "For standard criminal & SSN checks" },
              { stat: "50 states", label: "County, state & federal", sub: "Multi-jurisdiction record coverage" },
              { stat: "FCRA", label: "Compliant by design", sub: "Consent & disclosures automated" },
            ].map((m, i) => (
              <Reveal
                key={m.label}
                delay={i * 90}
                className="flex flex-col bg-white p-6 sm:p-7"
              >
                <span className="text-[2.1rem] font-semibold leading-none tracking-[-0.02em] text-[#058B74] sm:text-[2.4rem]">
                  {m.stat}
                </span>
                <span className="mt-3 text-sm font-semibold text-[#01463A]">{m.label}</span>
                <span className="mt-1 text-[13px] leading-relaxed text-[#5B6B64]">{m.sub}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="bg-[#F7F8F6] px-5 py-16 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Who it's for"
            title="One platform, three perspectives."
            intro="However you meet Atlas — hiring, leasing, or being screened — the workflow is built around your role."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal
                key={a.id}
                id={a.id}
                delay={i * 120}
                className="group relative flex scroll-mt-40 flex-col overflow-hidden rounded-2xl border border-[#E4E9E6] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#058B74]/10 text-[#058B74] ring-1 ring-inset ring-[#058B74]/10 transition-all duration-300 group-hover:bg-[#058B74] group-hover:text-white group-hover:ring-[#058B74]">
                  {a.icon}
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#058B74]">
                  {a.eyebrow}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold leading-tight text-[#01463A]">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B6B64]">
                  {a.desc}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[#1B2C25]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                        <path d="M5 12l5 5 9-11" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-[#058B74] transition-colors hover:text-[#01463A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Numbers strip ── */}
      <NumbersStrip />

      {/* ── Bottom CTA ── */}
      <CTASection
        eyebrow="Ready when you are"
        title={
          <>
            Run your first check<br className="hidden lg:block" /> in minutes.
          </>
        }
        description="Create an account and invite your first applicant today. No contracts, no setup fees."
        primary={{ label: "Create account", href: "/contact" }}
        secondary={{ label: "Talk to sales", href: "/contact?topic=sales" }}
      />
    </main>
  );
}
