import Image from "next/image";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import CTASection from "../components/CTASection";

type Value = { title: string; desc: string; icon: React.ReactNode };

const values: Value[] = [
  {
    title: "Compliance is the craft",
    desc: "We operate under the FCRA and state law. Getting the details right, consent, accuracy, consumer rights, is the work, not a checkbox.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Ship for real people",
    desc: "Behind every report is an applicant and a hiring team. We build software that respects both, and we sweat the experience end to end.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
      </svg>
    ),
  },
  {
    title: "Small team, real ownership",
    desc: "You'll own meaningful surface area from day one, work directly with the people making decisions, and see your work reach customers fast.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.8 7.2 17l.9-5.4L4.2 7.7l5.4-.8z" />
      </svg>
    ),
  },
];

type Perk = { title: string; desc: string; icon: React.ReactNode };

const perks: Perk[] = [
  {
    title: "Remote-friendly",
    desc: "Outcome-driven and async-first. Work where you do your best thinking.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
      </svg>
    ),
  },
  {
    title: "Salary + equity",
    desc: "Competitive pay and meaningful ownership from your first day.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V5M4 19h16M8 15v-4M12 15V9M16 15v-6" />
      </svg>
    ),
  },
  {
    title: "Health coverage",
    desc: "Medical, dental, and vision for you and your family.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.5-9-8.5A5 5 0 0112 5a5 5 0 019 7.5C19 16.5 12 21 12 21z" />
      </svg>
    ),
  },
  {
    title: "Home-office budget",
    desc: "Hardware and a setup stipend so you're properly equipped.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="12" rx="1.5" />
        <path d="M2 20h20" />
      </svg>
    ),
  },
  {
    title: "Real time off",
    desc: "PTO people actually take, recharging is part of the job.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
  },
  {
    title: "Founder access",
    desc: "A direct line to the people making the decisions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

// Points paired with the "How we work" image, plain, defensible, no ticks.
const workPoints = [
  "A calm, focused workload, quality over churn",
  "Cross-functional by default: engineering, ops, and compliance in the same room",
  "Feedback that's direct, kind, and frequent",
];

export default function CareersPage() {
  return (
    <main id="main" className="bg-white text-[#0F1B17]">
      {/* ── Hero, the site's dark, cartographic backdrop ── */}
      <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-40">
        <div className="absolute inset-0 bg-[#02120d]" />
        <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_-10%,#0a6b54_0%,#023528_42%,#01180f_78%,#020c08_100%)]" />

        {/* graticule rings, the "Atlas" coordinate motif */}
        <div className="pointer-events-none absolute inset-x-0 -top-24 flex justify-center">
          <div
            className="relative h-[520px] w-[520px] sm:h-[760px] sm:w-[760px]"
            style={{
              maskImage: "radial-gradient(circle, black 48%, transparent 78%)",
              WebkitMaskImage: "radial-gradient(circle, black 48%, transparent 78%)",
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border border-white"
                style={{ inset: `${i * 10}%`, opacity: 0.06 - i * 0.009 }}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#0aa88a]/20 blur-[130px]" />
          <div className="absolute -right-16 top-4 h-80 w-80 rounded-full bg-[#3E92CC]/15 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal
            as="span"
            className="inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[#5EE3C0]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#5EE3C0] shadow-[0_0_10px_2px_rgba(94,227,192,0.6)]" />
            Careers
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.02em] text-white [text-wrap:balance] md:text-[3.4rem]"
          >
            Build the future of background screening.
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            We&rsquo;re a small, senior team making compliant screening faster and
            fairer for everyone it touches. If that sounds like your kind of
            problem, we&rsquo;d love to hear from you.
          </Reveal>
          <Reveal delay={240} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#open-roles"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#01463A] shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#02120d]"
            >
              See open roles
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Single, well-composed team image, bridges the dark hero into the
           light page (pulled up to overlap, like the tenant sections) ── */}
      <div className="relative -mt-10 px-5 sm:-mt-16 sm:px-6">
        <Reveal className="mx-auto max-w-5xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_40px_90px_-45px_rgba(4,20,14,0.7)] sm:aspect-[16/7]">
            <Image
              src="/assets/images/careers-hero.jpg"
              alt="A team collaborating in a bright modern office"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 1024px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* ── What we value ── */}
      <section className="bg-white px-5 py-16 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="How we work"
            title="What we value."
            intro="A few principles that shape how we build, hire, and treat the people on both sides of a report."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 100}
                className="group flex flex-col rounded-2xl border border-[#E4E9E6] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#058B74]/10 text-[#058B74] ring-1 ring-inset ring-[#058B74]/10 transition-all duration-300 group-hover:bg-[#058B74] group-hover:text-white group-hover:ring-[#058B74]">
                  {v.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-tight text-[#01463A]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B6B64]">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work, clean image + copy split ── */}
      <section className="bg-[#F7F8F6] px-5 py-16 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#058B74]">The day-to-day</p>
            <h2 className="mt-3 text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[#01463A] md:text-[2.5rem]">
              Focused work, in good company.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#5B6B64] sm:text-lg">
              We keep the team small and the loop tight, so the people closest to
              the work make the calls. No sprawling process, just clear problems,
              real ownership, and support when you need it.
            </p>
            <ul className="mt-7 space-y-3.5">
              {workPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-[#1B2C25]">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#058B74]/10 text-[#058B74] ring-1 ring-inset ring-[#058B74]/15">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5 9-11" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="scale" delay={120} className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-black/[0.06] shadow-[0_30px_60px_-30px_rgba(4,20,14,0.5)]">
              <Image
                src="/assets/images/careers-work.jpg"
                alt="Two colleagues working together at a desk"
                fill
                sizes="(max-width: 1024px) 92vw, 520px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Perks, icon cards ── */}
      <section className="bg-white px-5 py-16 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Why Atlas"
            title="What you can expect."
            intro="We keep the team lean, the work meaningful, and the support real."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 70}
                className="group flex items-start gap-4 rounded-2xl border border-[#E4E9E6] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#058B74]/10 text-[#058B74] ring-1 ring-inset ring-[#058B74]/10 transition-all duration-300 group-hover:bg-[#058B74] group-hover:text-white group-hover:ring-[#058B74]">
                  {p.icon}
                </span>
                <div>
                  <h3 className="text-[15.5px] font-semibold text-[#01463A]">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5B6B64]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open roles ── */}
      <section id="open-roles" className="scroll-mt-28 bg-[#F7F8F6] px-5 py-16 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            align="center"
            eyebrow="Open roles"
            title="No open positions right now."
            intro="We're not actively hiring at the moment, but we're always glad to meet people who care about this space. Send us a note and tell us what you'd want to build."
          />
          <Reveal delay={120} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:Contact@atlasscreening.com?subject=Careers%20at%20Atlas%20Screening"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#01463A] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#058B74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
            >
              Email us your resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D6DED9] bg-white px-6 py-3 text-sm font-semibold text-[#01463A] transition-colors hover:bg-[#F1F4F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
            >
              Get in touch
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <CTASection
        eyebrow="Don't see your role?"
        title={
          <>
            Tell us how you&rsquo;d<br className="hidden lg:block" /> make Atlas better.
          </>
        }
        description="We hire for curiosity and care as much as for a title. If you want to help build compliant screening, reach out."
        primary={{ label: "Email the team", href: "mailto:Contact@atlasscreening.com?subject=Careers%20at%20Atlas%20Screening" }}
        secondary={{ label: "Learn about Atlas", href: "/about" }}
      />
    </main>
  );
}
