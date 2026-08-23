import NumbersStrip from "../components/NumbersStrip";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";

const values = [
  {
    title: "Compliant by default",
    body: "Every completed report is aligned with Fair Credit Reporting Act guidelines, and the adverse-action and dispute workflows are built in — not bolted on.",
  },
  {
    title: "Fast turnaround",
    body: "Submit an applicant's name and email. Atlas handles the secure invitation, identity collection, and verifications so results come back without manual chasing.",
  },
  {
    title: "Clear, defensible reports",
    body: "Results are delivered as structured PDF reports your team and auditors can actually read, with a documented trail behind every decision.",
  },
];

export default function AboutPage() {
  return (
    <main id="main" className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-5 sm:pt-36 sm:pb-20 sm:px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal
            as="p"
            variant="fade"
            className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4"
          >
            About Atlas
          </Reveal>
          <Reveal
            as="h1"
            variant="up"
            delay={100}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Background checks built on defensible trust.
          </Reveal>
          <Reveal
            as="p"
            variant="fade"
            delay={200}
            className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Atlas Screening helps HR teams and property managers make faster,
            more confident decisions. We run background investigations with
            rapid turnaround times while keeping every report compliant and
            fair.
          </Reveal>
        </div>
      </section>

      {/* Our Story — split */}
      <section className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal
                as="h2"
                variant="left"
                className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight"
              >
                What Atlas does.
              </Reveal>
              <Reveal
                as="p"
                variant="fade"
                delay={100}
                className="mt-5 text-gray-600 text-sm leading-relaxed max-w-lg"
              >
                Atlas Screening is a background-check platform for teams that
                hire and screen at volume — staffing agencies, property
                managers, and other employers. We built it to replace slow,
                manual screening processes with a workflow that runs itself.
              </Reveal>
              <Reveal
                as="p"
                variant="fade"
                delay={200}
                className="mt-4 text-gray-600 text-sm leading-relaxed max-w-lg"
              >
                Under the hood, the platform combines investigative verification
                with software automation. It handles applicant invitations,
                identity collection, and legal verifications so your team spends
                less time coordinating and more time deciding.
              </Reveal>
              <Reveal
                as="p"
                variant="fade"
                delay={300}
                className="mt-4 text-gray-600 text-sm leading-relaxed max-w-lg"
              >
                To start a check you submit an applicant name and email. Atlas
                manages the secure applicant invitation, biometric identity
                collection, and verifications from there — and every completed
                PDF report is aligned with Fair Credit Reporting Act guidelines
                and federal compliance standards.
              </Reveal>
            </div>

            <Reveal as="div" variant="right" delay={150} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 aspect-[4/3] shadow-xl shadow-[#058B74]/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/founders.webp"
                  alt="The Atlas Screening founding team"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-10 right-8 w-24 h-24 rounded-2xl bg-[#058B74]/15 -z-10" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission pull-quote */}
      <section className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <Reveal
            as="p"
            variant="up"
            delay={100}
            className="text-2xl md:text-3xl font-semibold text-[#01463A] leading-snug"
          >
            Rapid turnaround times, without sacrificing{" "}
            <span className="text-[#058B74]">strict compliance and fairness</span>{" "}
            — background checks built on defensible trust.
          </Reveal>
          <Reveal
            as="p"
            variant="fade"
            delay={200}
            className="mt-6 text-sm text-gray-600"
          >
            — The Atlas Screening team
          </Reveal>
        </div>
      </section>

      {/* Numbers strip */}
      <NumbersStrip />

      {/* What you can count on */}
      <section className="bg-gray-50 py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <Reveal
              as="h2"
              variant="up"
              className="text-3xl md:text-4xl font-bold text-[#01463A] leading-tight"
            >
              What you can count on.
            </Reveal>
            <Reveal
              as="p"
              variant="fade"
              delay={100}
              className="mt-5 text-gray-600 max-w-xl text-sm leading-relaxed"
            >
              The principles that shape how Atlas handles every background check,
              from the first invitation to the final report.
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                as="div"
                variant="up"
                delay={i * 100}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-[#01463A]">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
