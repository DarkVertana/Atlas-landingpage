import Reveal from "../components/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import ServiceHero from "../components/ui/ServiceHero";
import WorkflowSteps from "../components/WorkflowSteps";
import CTASection from "../components/CTASection";

type Bullet = { text: string; icon: React.ReactNode };

type Audience = {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  bullets: Bullet[];
  icon: React.ReactNode;
};

// Small, consistent line icons used per feature bullet.
const bulletSvg = (paths: React.ReactNode) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
);

const ic = {
  clock: bulletSvg(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  layers: bulletSvg(<><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></>),
  plug: bulletSvg(<><path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 01-10 0V7zM12 16v5" /></>),
  shield: bulletSvg(<><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></>),
  link: bulletSvg(<><path d="M10 13a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1" /><path d="M14 11a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1" /></>),
  chat: bulletSvg(<><path d="M21 12a8 8 0 01-11.5 7.2L3 21l1.8-6.5A8 8 0 1121 12z" /></>),
  eye: bulletSvg(<><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></>),
  phone: bulletSvg(<><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>),
  edit: bulletSvg(<><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" /></>),
};

const audiences: Audience[] = [
  {
    id: "for-employers",
    eyebrow: "Employers",
    title: "For hiring teams.",
    desc: "Seamless pre-employment screening with bulk ordering and ATS integration in minutes.",
    bullets: [
      { text: "Pre-employment background checks with fast turnaround", icon: ic.clock },
      { text: "Scalable bulk ordering for high-volume recruitment", icon: ic.layers },
      { text: "Native ATS integrations and robust REST API access", icon: ic.plug },
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
    desc: "Tenant screening to protect your portfolio, through one unified, compliant dashboard.",
    bullets: [
      { text: "Criminal, credit, and eviction history checks", icon: ic.shield },
      { text: "Seamless integration with property management software", icon: ic.link },
      { text: "Transparent, applicant-friendly dispute resolution", icon: ic.chat },
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
    desc: "Understand your FCRA rights, track your screening status, and stay in control of your data.",
    bullets: [
      { text: "Full transparency into your personal screening file", icon: ic.eye },
      { text: "Real-time status tracking from your mobile device", icon: ic.phone },
      { text: "Straightforward workflow to dispute inaccurate findings", icon: ic.edit },
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
      {/* Hero: shared services-style gradient backdrop */}
      <ServiceHero
        eyebrow="How it works"
        title="The end-to-end background screening workflow."
        description="Minimal client effort, maximum visibility, from consent to a defensible report."
        image="/assets/how-it-works-hero.jpg"
      >
        <Reveal
          delay={240}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#01463A] shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#040d10]"
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#workflow"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040d10]"
          >
            Walk through the steps
          </a>
        </Reveal>
      </ServiceHero>

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
            intro="However you meet Atlas, whether hiring, leasing, or being screened, the workflow is built around your role."
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
                    <li key={b.text} className="flex items-start gap-2.5 text-sm text-[#1B2C25]">
                      <span className="mt-0.5 flex-shrink-0 text-[#058B74]">{b.icon}</span>
                      {b.text}
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
