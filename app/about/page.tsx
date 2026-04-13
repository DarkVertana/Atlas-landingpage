import NumbersStrip from "../components/NumbersStrip";

const testimonials = [
  {
    quote:
      "Atlas cut our onboarding time in half. The reports are clearer, faster, and our compliance team finally stopped chasing adverse-action letters.",
    name: "Operations Director",
    role: "Regional staffing agency",
  },
  {
    quote:
      "Tenant screening that treats applicants like humans. The dispute workflow alone has saved us from two lawsuits.",
    name: "Portfolio Manager",
    role: "Multi-family property group",
  },
  {
    quote:
      "We plugged Atlas into our ATS in a day. The AI flags catch things our reviewers used to miss — without slowing anyone down.",
    name: "Head of People",
    role: "Healthcare network",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            About Atlas
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Background checks, built on trust.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            Atlas helps employers, property managers, and organizations make faster,
            more confident decisions — with reports that stay compliant and fair.
          </p>
        </div>
      </section>

      {/* Our Story — split */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
                Our story.
              </h2>
              <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-lg">
                Atlas was founded by a team of investigators, engineers, and
                compliance specialists who saw the same problem across every
                industry we served: background screening felt stuck in the past.
                Opaque reports, slow turnarounds, and stitched-together tools
                made it hard for hiring and leasing teams to move with
                confidence.
              </p>
              <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-lg">
                We set out to rebuild the workflow end-to-end — accurate
                sourcing, AI-assisted verification, transparent reporting, and
                a respectful candidate experience — in one platform. Every
                report is calibrated against FCRA, EEOC, and state-level
                requirements, so compliance is baked in rather than bolted on.
              </p>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-[#01463A] to-[#058B74] aspect-[4/3] shadow-xl shadow-[#058B74]/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/founders.webp"
                  alt="Atlas Screening founders"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Sticker */}
              <div className="absolute -top-14 -right-8 z-20 w-32 h-32 rotate-[-10deg] hover:rotate-0 transition-transform duration-500 ease-out">
                {/* Rotating dashed outer ring */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite] text-[#058B74]/40"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />
                </svg>

                {/* Sticker body */}
                <div className="absolute inset-1.5 rounded-full bg-white flex flex-col items-center justify-center shadow-xl shadow-[#01463A]/25 ring-2 ring-[#058B74]/25">
                  {/* Inner ring accent */}
                  <span className="absolute inset-3 rounded-full ring-1 ring-inset ring-[#058B74]/20 pointer-events-none" />

                  {/* Sparkle icon */}
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="#058B74"
                    className="mb-1.5"
                  >
                    <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2z" />
                  </svg>

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] leading-none text-[#058B74]">
                    We&apos;re
                  </p>
                  <p className="text-[17px] font-extrabold leading-none mt-1 tracking-tight text-[#01463A]">
                    on it!
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-10 right-8 w-24 h-24 rounded-2xl bg-[#058B74]/15 -z-10" />
              <div className="absolute top-12 -right-8 w-28 h-28 rounded-3xl bg-[#01463A]/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission pull-quote */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            className="mx-auto text-[#058B74]/30"
            fill="currentColor"
          >
            <path d="M7 7c-2.8 0-5 2.2-5 5v7h7v-7H4c0-1.7 1.3-3 3-3V7zm10 0c-2.8 0-5 2.2-5 5v7h7v-7h-5c0-1.7 1.3-3 3-3V7z" />
          </svg>
          <p className="mt-6 text-2xl md:text-3xl font-semibold text-[#01463A] leading-snug">
            We believe hiring and leasing decisions should be <span className="text-[#058B74]">fast, fair, and defensible</span> — never a black box, and never at the cost of the person on the other side of the report.
          </p>
          <p className="mt-6 text-sm text-gray-500">
            — The Atlas Screening team
          </p>
        </div>
      </section>

      {/* Numbers strip */}
      <NumbersStrip />

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
              Teams that trust us.
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              From staffing agencies to property groups and healthcare networks —
              here&apos;s what the people running the workflows say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#058B74]/40 hover:shadow-lg hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-0.5 text-[#f5a623] mb-4">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1.5l2.6 5.5 6 .9-4.3 4.2 1 6-5.3-2.9-5.4 2.9 1-6L1.4 7.9l6-.9L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm text-[#01463A] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-[#01463A]">{t.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA — uses the Get Started CTA visual */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div
            className="relative overflow-hidden rounded-2xl px-8 md:px-16 py-10 md:py-14 flex items-center shadow-lg"
          >
            {/* Background Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/banner_cta.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Green gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top right, #01463A 30%, transparent 100%)",
              }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-3">
                Careers at Atlas
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Build the future<br className="hidden md:block" /> of screening with us.
              </h2>
              <p className="mt-4 text-white/60 text-base leading-relaxed max-w-md">
                Engineering, research, and compliance roles open — help us rewrite background screening.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/careers"
                  className="inline-flex items-center gap-2 bg-white text-[#01463A] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  View open roles
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
