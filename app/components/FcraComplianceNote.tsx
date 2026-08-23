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
const POINTS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Atlas is the reporting agency — you decide",
    body: (
      <>
        Atlas is a Consumer Reporting Agency (CRA). We provide consumer reports
        under the Fair Credit Reporting Act (FCRA); your organization makes the
        hiring decision.
      </>
    ),
  },
  {
    title: "Consent before every check",
    body: (
      <>
        Every check runs only for a lawful permissible purpose, after a
        standalone disclosure and the applicant&apos;s written authorization are
        collected and stored as part of the intake flow.
      </>
    ),
  },
  {
    title: "A supported, two-step adverse action",
    body: (
      <>
        If an adverse action is being considered, the FCRA requires a two-step
        process: a pre-adverse notice with a copy of the report and a summary of
        the applicant&apos;s rights, a reasonable waiting period, and then the
        final adverse-action notice. Atlas provides the documents and workflow to
        support each step.
      </>
    ),
  },
  {
    title: "Disputes are reinvestigated",
    body: (
      <>
        Applicants may dispute report contents. Atlas reinvestigates disputes,
        and corrections flow back to your dashboard. Disputes can be opened from
        the report or by emailing{" "}
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
    body: (
      <>
        Report contents come from third-party and public-record sources. Atlas
        follows reasonable procedures for accuracy but does not guarantee that
        every record is complete, current, or error-free.
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
            Every Atlas report is built to keep you defensible — consent up
            front, a supported adverse-action process, and open dispute rights
            for applicants.
          </p>
        </div>

        {/* Right: the points, separated by hairlines so they read as one
            continuous, professional list rather than stacked cards. */}
        <ul className="divide-y divide-[#ECEFEC] border-t border-[#ECEFEC]">
          {POINTS.map((p) => (
            <li key={p.title} className="flex gap-4 py-5 first:pt-6">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#058B74]/10 text-[#058B74]"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.5 8.5l2.6 2.6L12.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
