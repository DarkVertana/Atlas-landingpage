/**
 * FcraComplianceNote — shared FCRA framing block for service pages.
 *
 * Required framing per docs/FCRA-AI-PROMPT-STANDARD.md §2.2:
 *   - CRA positioning (Atlas provides reports; clients make decisions)
 *   - Permissible purpose + standalone disclosure + written authorization
 *   - Two-step adverse action process (pre-adverse → waiting period → final)
 *   - Dispute / reinvestigation path
 *   - Data-source caveat (third-party/public records; no completeness guarantee)
 *
 * No absolute claims (no "instant", "guaranteed", "100%", "complete", etc.).
 *
 * Design: blends into the white service-page flow — no grey band, no boxed
 * card. A hairline rule separates it from the section above, then a calm
 * two-column composition (heading + lede on the left, the compliance points on
 * the right) reads as an intentional, professional part of the page. Green is
 * used only as a small accent (eyebrow, tick marks, link).
 */
import Image from "next/image";

const Ico = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d={d} />
  </svg>
);

const POINTS: { title: string; body: React.ReactNode; icon: React.ReactNode }[] = [
  {
    title: "Atlas is the reporting agency; you decide",
    icon: <Ico d="M3 21h18M5 21V7l7-4 7 4v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 21v-3h4v3" />,
    body: (
      <>
        Atlas is a Consumer Reporting Agency that furnishes reports under the
        FCRA. Your organization makes the hiring decision.
      </>
    ),
  },
  {
    title: "Consent before every check",
    icon: <Ico d="M8 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-2M9 3a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1h-4a1 1 0 01-1-1V3zM9 13l2 2 4-4" />,
    body: (
      <>
        Every check needs a lawful permissible purpose, a standalone disclosure,
        and the applicant&apos;s written authorization.
      </>
    ),
  },
  {
    title: "A supported, two-step adverse action",
    icon: <Ico d="M12 3v18M5 21h14M7 7l-3 6a3 3 0 006 0l-3-6zM17 7l-3 6a3 3 0 006 0l-3-6zM7 7h10M12 4l5 3M12 4L7 7" />,
    body: (
      <>
        Pre-adverse notice with the report and a summary of rights, a waiting
        period, then a final notice. Atlas supports each step.
      </>
    ),
  },
  {
    title: "Disputes are reinvestigated",
    icon: <Ico d="M3 12a9 9 0 0115.5-6.3L21 8M21 3v5h-5M21 12a9 9 0 01-15.5 6.3L3 16M3 21v-5h5" />,
    body: (
      <>
        Applicants may dispute a report; Atlas reinvestigates and corrections
        reach your dashboard. Email{" "}
        <a
          href="mailto:compliance@atlasscreening.com"
          className="font-medium text-[#01463A] underline decoration-[#058B74]/40 underline-offset-2 hover:text-[#058B74]"
        >
          compliance@atlasscreening.com
        </a>
        .
      </>
    ),
  },
  {
    title: "Sourced with reasonable procedures",
    icon: <Ico d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35M9 11h4M11 9v4" />,
    body: (
      <>
        Contents come from third-party and public records. Atlas uses reasonable
        procedures for accuracy but cannot guarantee every record is current.
      </>
    ),
  },
];

export default function FcraComplianceNote() {
  return (
    <section
      aria-label="FCRA compliance note"
      className="border-t border-[#ECEFEC] bg-white px-5 py-14 sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Left: framing */}
        <div className="lg:pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#058B74]">
            FCRA compliance
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#14201C] sm:text-3xl">
            How this check stays compliant.
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#5A6560]">
            Built to be defensible: upfront consent, adverse-action support,
            and open dispute rights.
          </p>

          {/* Supporting image, faded into green at the top and bottom edges,
              no border, so it blends into the section rather than sitting as a
              boxed card. */}
          <div className="relative mt-8 max-w-sm overflow-hidden rounded-2xl">
            <Image
              src="/assets/images/call-center-agent-office-helping-customers-by-answering-questions.webp"
              alt=""
              aria-hidden
              width={640}
              height={420}
              className="h-52 w-full object-cover sm:h-56"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #01463A 0%, rgba(1,70,58,0) 35%, rgba(1,70,58,0) 65%, #01463A 100%)",
              }}
            />
          </div>
        </div>

        {/* Right: the points, separated by hairlines so they read as one
            continuous, professional list rather than stacked cards. */}
        <ul className="divide-y divide-[#ECEFEC] border-t border-[#ECEFEC]">
          {POINTS.map((p) => (
            <li key={p.title} className="flex gap-4 py-5 first:pt-6">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#058B74]/8 text-[#058B74] ring-1 ring-inset ring-[#058B74]/10"
              >
                {p.icon}
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-[#14201C]">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5A6560]">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
