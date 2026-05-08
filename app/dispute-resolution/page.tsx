const sections = [
  { id: "right-to-dispute", title: "1. Right to Dispute" },
  { id: "how-to-submit", title: "2. How to Submit a Dispute" },
  { id: "reinvestigation", title: "3. Reinvestigation Process" },
  { id: "timeline", title: "4. Timeline" },
  { id: "results", title: "5. Results of Reinvestigation" },
  { id: "corrections", title: "6. Corrections and Deletions" },
  { id: "additional-rights", title: "7. Additional Rights" },
  { id: "contact", title: "8. Contact Information" },
];

export default function DisputeResolutionPage() {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            Legal
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Dispute / reinvestigation policy.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            Atlas Screening is committed to maintaining accurate and compliant
            reporting in accordance with the Fair Credit Reporting Act. This
            policy outlines how consumers can dispute information and how we
            handle reinvestigations.
          </p>
          <p className="mt-6 text-xs uppercase tracking-widest text-white/40">
            Last updated · April 1, 2026
          </p>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_260px] gap-12 lg:gap-16 items-start">
          <article className="min-w-0 space-y-12">
            <LegalSection id="right-to-dispute" title="1. Right to Dispute">
              <p>
                Consumers have the right to dispute the accuracy or completeness
                of information contained in a background report.
              </p>
            </LegalSection>

            <LegalSection id="how-to-submit" title="2. How to Submit a Dispute">
              <p>Disputes may be submitted by email:</p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:compliance@atlasscreening.com"
                    className="text-[#058B74] hover:underline"
                  >
                    compliance@atlasscreening.com
                  </a>
                </li>
              </ul>
              <p className="mt-4">Please include the following:</p>
              <ul>
                <li>Full name</li>
                <li>Report reference (if available)</li>
                <li>Description of disputed information</li>
                <li>Supporting documentation (if available)</li>
              </ul>
            </LegalSection>

            <LegalSection id="reinvestigation" title="3. Reinvestigation Process">
              <p>Upon receiving a dispute, Atlas Screening will:</p>
              <ul>
                <li>Review the disputed information</li>
                <li>Contact original data sources where necessary</li>
                <li>Verify the accuracy of the reported data</li>
                <li>Update or remove inaccurate or unverifiable information</li>
              </ul>
            </LegalSection>

            <LegalSection id="timeline" title="4. Timeline">
              <p>
                Reinvestigations are typically completed within 30 days, unless
                extended as permitted by law.
              </p>
            </LegalSection>

            <LegalSection id="results" title="5. Results of Reinvestigation">
              <p>After completion:</p>
              <ul>
                <li>Consumers will be notified of the results</li>
                <li>Updated reports will be provided where applicable</li>
              </ul>
            </LegalSection>

            <LegalSection id="corrections" title="6. Corrections and Deletions">
              <p>
                If information is found to be inaccurate or cannot be verified:
              </p>
              <ul>
                <li>It will be corrected or removed</li>
                <li>Future reports will reflect the updated information</li>
              </ul>
            </LegalSection>

            <LegalSection id="additional-rights" title="7. Additional Rights">
              <p>
                Consumers may have additional rights under applicable state laws.
              </p>
            </LegalSection>

            <LegalSection id="contact" title="8. Contact Information">
              <p>
                For disputes or questions about the reinvestigation process,
                please contact:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:compliance@atlasscreening.com"
                    className="text-[#058B74] hover:underline"
                  >
                    compliance@atlasscreening.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:9172757712"
                    className="text-[#058B74] hover:underline"
                  >
                    (917) 275-7712
                  </a>
                </li>
              </ul>
            </LegalSection>
          </article>

          {/* Sidebar TOC */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-4">
                On this page
              </p>
              <nav className="flex flex-col">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group flex items-center gap-2 py-2 text-sm text-[#01463A] hover:text-[#058B74] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#058B74]/30 group-hover:bg-[#058B74] group-hover:w-2 transition-all" />
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl md:text-2xl font-bold text-[#01463A] leading-tight">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm text-gray-600 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-[#01463A] [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}