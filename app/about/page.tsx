import Image from "next/image";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import SolidHeader from "../components/SolidHeader";

/* Editorial /about — big type, hairline-divided principle lists, an inline stat
   row, and generous whitespace instead of repeated card grids. Deep-green FCRA
   brand; CRA positioning kept throughout (we provide reports, clients decide). */

const stats = [
  { v: "50 states", l: "County, state & federal coverage" },
  { v: "~24 hrs", l: "Typical turnaround, standard checks" },
  { v: "FCRA", l: "Compliant by design" },
  { v: "Human-reviewed", l: "Every report adjudicated" },
];

const principles = [
  {
    title: "Compliant by default",
    body: "FCRA alignment, adverse-action steps, and dispute rights are built into the workflow, not bolted on after the fact.",
  },
  {
    title: "Investigation, not just data",
    body: "We pair public-record and database searches with human review, so a report reflects verified findings, not raw, unconfirmed hits.",
  },
  {
    title: "Consent comes first",
    body: "Every check runs on a lawful permissible purpose, with the applicant's standalone disclosure and written authorization.",
  },
  {
    title: "Fairness the applicant can see",
    body: "Applicants track status, receive a copy of their report, and can dispute anything inaccurate through a documented reinvestigation path.",
  },
  {
    title: "Clear, defensible reports",
    body: "Structured reports your team and auditors can actually read, with a documented trail behind every decision.",
  },
];

const audiences = [
  "Employers & HR teams",
  "Staffing agencies",
  "Property managers",
  "Healthcare",
  "Transportation & logistics",
  "Nonprofits & volunteer orgs",
];

export default function AboutPage() {
  return (
    <main id="main" className="bg-white text-[#0F1B17]">
      <SolidHeader />
      {/* ── Hero — bright editorial split ── */}
      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_60%_at_100%_0%,#E9F5F0_0%,transparent_58%)]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Reveal
              as="p"
              variant="fade"
              className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#058B74]"
            >
              About Atlas
            </Reveal>
            <Reveal
              as="h1"
              variant="up"
              delay={80}
              className="mt-6 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[#01463A] [text-wrap:balance] sm:text-6xl lg:text-[4.25rem]"
            >
              Screening built on defensible trust.
            </Reveal>
            <Reveal
              as="p"
              variant="fade"
              delay={160}
              className="mt-7 max-w-lg text-lg leading-relaxed text-[#5B6B64] sm:text-xl"
            >
              Atlas is a Consumer Reporting Agency built for teams that hire and lease
              at scale. We produce accurate, compliant reports under the FCRA and
              applicable state laws.
            </Reveal>
            <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#01463A] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#058B74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
              >
                Talk to us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D6DED9] bg-white px-6 py-3 text-sm font-semibold text-[#01463A] transition-colors hover:bg-[#F1F4F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
              >
                How it works
              </a>
            </Reveal>
            <Reveal delay={320} className="mt-8 flex items-center gap-2.5 text-[13px] text-[#5B6B64]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#058B74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Conducted under the FCRA and applicable state laws
            </Reveal>
          </div>

          <Reveal variant="scale" delay={160} className="relative">
            {/* soft accent block for depth */}
            <div aria-hidden className="absolute -right-5 -top-5 -z-10 hidden h-32 w-32 rounded-3xl bg-[#058B74]/10 sm:block" />
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl ring-1 ring-black/[0.06] shadow-[0_40px_90px_-45px_rgba(4,20,14,0.45)]">
              <Image
                src="/assets/images/about-team.jpg"
                alt="The Atlas Screening team collaborating"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 560px"
                className="object-cover"
              />
            </div>
            {/* floating credential card */}
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-[#E4E9E6] bg-white/95 px-4 py-3 shadow-[0_20px_44px_-24px_rgba(4,20,14,0.4)] backdrop-blur sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#058B74]/10 text-[#058B74]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <div>
                <p className="text-[13px] font-semibold text-[#01463A]">FCRA-compliant reporting</p>
                <p className="text-[11px] text-[#5B6B64]">Consent and dispute rights preserved</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Inline stat row — hairline dividers, no boxes ── */}
      <section className="border-b border-[#E4E9E6] bg-white px-5 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-[#E4E9E6]">
          {stats.map((s, i) => (
            <Reveal key={s.l} as="div" variant="up" delay={i * 80} className="md:px-10 md:first:pl-0">
              <div className="text-[2.4rem] font-semibold leading-none tracking-[-0.03em] text-[#01463A] sm:text-[2.75rem]">
                {s.v}
              </div>
              <div className="mt-3 text-[13px] leading-relaxed text-[#5B6B64]">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Mission statement — the editorial centerpiece ── */}
      <section className="bg-white px-5 py-20 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <Reveal as="p" variant="fade" className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#058B74]">
            Our mission
          </Reveal>
          <Reveal
            as="p"
            variant="up"
            delay={100}
            className="mt-7 text-[1.7rem] font-medium leading-[1.28] tracking-[-0.02em] text-[#0F1B17] [text-wrap:balance] sm:text-[2.15rem] md:text-[2.6rem]"
          >
            A background check decides real opportunities. We give employers and
            property managers a way to run one that is{" "}
            <span className="text-[#058B74]">fast, fair, and defensible</span>, and a
            way for the people being screened to be treated with the same care.
          </Reveal>
        </div>
      </section>

      {/* ── How we work — split with team image ── */}
      <section className="bg-[#F7F8F6] px-5 py-16 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal as="div" variant="right" delay={100} className="relative order-1 lg:order-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-black/[0.06] shadow-[0_40px_80px_-40px_rgba(4,20,14,0.5)]">
              <Image
                src="/assets/images/about-work.jpg"
                alt="Two Atlas Screening colleagues reviewing a case together"
                fill
                sizes="(max-width: 1024px) 92vw, 560px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal as="p" variant="fade" className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#058B74]">
              How we work
            </Reveal>
            <Reveal as="h2" variant="left" delay={80} className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[#01463A] md:text-[2.6rem]">
              Software runs the workflow. People make the calls.
            </Reveal>
            <Reveal as="p" variant="fade" delay={140} className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#5B6B64]">
              To start a check you submit an applicant&rsquo;s name and email on a
              lawful permissible purpose. Atlas handles the standalone disclosure,
              written authorization, secure invitation, and identity collection, then
              runs the searches you selected.
            </Reveal>
            <Reveal as="p" variant="fade" delay={220} className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#5B6B64]">
              Trained adjudicators review the results before a report is finalized.
              Atlas provides the consumer report. The hiring or leasing decision, and
              any adverse action with its pre-adverse notice and waiting period, stays
              with you, exactly as the FCRA requires.
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Principles — editorial list, big titles + hairline dividers ── */}
      <section className="bg-white px-5 py-16 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <Reveal as="p" variant="fade" className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#058B74]">
              What you can count on
            </Reveal>
            <Reveal as="h2" variant="up" delay={80} className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[#01463A] md:text-[2.6rem]">
              The principles behind every report.
            </Reveal>
          </div>

          <div className="border-t border-[#E4E9E6]">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                as="div"
                variant="up"
                delay={i * 70}
                className="group grid gap-3 border-b border-[#E4E9E6] py-8 transition-colors md:grid-cols-[0.85fr_1.15fr] md:gap-12 md:py-9"
              >
                <h3 className="text-xl font-semibold tracking-[-0.01em] text-[#01463A] transition-colors group-hover:text-[#058B74] md:text-2xl">
                  {p.title}
                </h3>
                <p className="max-w-xl text-[15px] leading-relaxed text-[#5B6B64]">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we work with — editorial rows ── */}
      <section className="bg-[#F7F8F6] px-5 py-16 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <Reveal as="p" variant="fade" className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#058B74]">
              Who we serve
            </Reveal>
            <Reveal as="h2" variant="up" delay={80} className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[#01463A] md:text-[2.6rem]">
              Built for regulated, high-volume teams.
            </Reveal>
          </div>

          <div className="grid border-t border-[#E4E9E6] sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal
                key={a}
                as="div"
                variant="up"
                delay={i * 70}
                className="flex items-center gap-3 border-b border-[#E4E9E6] py-5"
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#058B74]" />
                <span className="text-[15px] font-medium text-[#01463A]">{a}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <CTASection
        eyebrow="Get in touch"
        title={
          <>
            See how Atlas fits<br className="hidden lg:block" /> your screening workflow.
          </>
        }
        description="Tell us how your team screens today and we'll show you what running it on Atlas looks like."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "How it works", href: "/how-it-works" }}
      />
    </main>
  );
}
