const sections = [
  { id: "overview", title: "FCRA Compliance" },
  { id: "consumer-authorization", title: "Consumer Authorization" },
  { id: "permissible-purpose", title: "Permissible Purpose" },
  { id: "adverse-action", title: "Adverse Action Support" },
  { id: "dispute-reinvestigation", title: "Dispute & Reinvestigation" },
  { id: "audit-reporting", title: "Audit-Ready Documentation" },
  { id: "state-laws", title: "State Law Compliance" },
  { id: "contact", title: "Contact" },
];

export default function CompliancePage() {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            Compliance
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Compliance & Consumer Protection
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            Atlas Screening operates in accordance with the Fair Credit Reporting
            Act (FCRA) and applicable state laws. Every step of our process is
            designed to protect consumers and ensure lawful, accurate screening.
          </p>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_260px] gap-12 lg:gap-16 items-start">
          <article className="min-w-0 space-y-12">
            <LegalSection id="overview" title="FCRA Compliance">
              <p>
                Atlas Screening operates as a Consumer Reporting Agency (CRA) and
                provides background screening services in full compliance with the
                Fair Credit Reporting Act (FCRA) and applicable state and local laws.
              </p>
              <p>
                Our processes are built to ensure that every report is produced,
                delivered, and used within the bounds of federal and state
                regulations — protecting both the clients who request reports and
                the consumers who are the subjects of those reports.
              </p>
            </LegalSection>

            <LegalSection id="consumer-authorization" title="Consumer Authorization Prior to Screening">
              <p>
                Before any background check is initiated, Atlas Screening requires
                that proper consumer authorization is obtained. This includes:
              </p>
              <ul>
                <li>
                  Written consent from the individual prior to conducting a
                  background screening
                </li>
                <li>
                  Clear disclosure that a background report will be obtained
                </li>
                <li>
                  A standalone disclosure document, separate from the employment
                  application or other agreements
                </li>
                <li>
                  Authorization records that are timestamped and retained for
                  audit purposes
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="permissible-purpose" title="Verification of Permissible Purpose">
              <p>
                All background checks conducted by Atlas Screening are performed
                only for permissible purposes under applicable law. Before
                processing a request, we verify that the client:
              </p>
              <ul>
                <li>Has a lawful purpose for the screening</li>
                <li>
                  Has obtained proper authorization from the consumer
                </li>
                <li>
                  Will comply with all applicable federal, state, and local laws
                </li>
              </ul>
              <p>
                Permissible purposes include employment screening, tenant screening,
                and other legally authorized uses as defined under the FCRA.
              </p>
            </LegalSection>

            <LegalSection id="adverse-action" title="Adverse Action Support">
              <p>
                When a client intends to take an adverse action based on information
                in a background report, Atlas Screening supports the required
                adverse action process:
              </p>
              <ul>
                <li>
                  <strong>Pre-adverse action notice</strong> — Providing the
                  consumer with a copy of the report and a summary of their rights
                  before a final decision is made
                </li>
                <li>
                  <strong>Waiting period</strong> — Allowing the consumer reasonable
                  time to review and dispute the information
                </li>
                <li>
                  <strong>Final adverse action notice</strong> — Informing the
                  consumer of the final decision, including contact information for
                  Atlas Screening and notice of the consumer's right to dispute
                </li>
              </ul>
              <p>
                Clients are responsible for following all applicable adverse action
                requirements. Atlas Screening provides the tools and documentation
                to support this process.
              </p>
            </LegalSection>

            <LegalSection id="dispute-reinvestigation" title="Consumer Dispute & Reinvestigation Procedures">
              <p>
                Consumers who believe information in a report is inaccurate or
                incomplete have the right to dispute that information. Atlas
                Screening's dispute process includes:
              </p>
              <ul>
                <li>Initiating a reinvestigation of the disputed information</li>
                <li>Reviewing information with original sources</li>
                <li>Correcting or removing inaccurate data within the required timeframe</li>
                <li>
                  Providing updated results to the consumer and client when
                  applicable
                </li>
              </ul>
              <p>
                To submit a dispute, consumers may contact us at:{" "}
                <a
                  href="mailto:compliance@atlasscreening.com"
                  className="text-[#058B74] hover:underline"
                >
                  compliance@atlasscreening.com
                </a>
              </p>
            </LegalSection>

            <LegalSection id="audit-reporting" title="Audit-Ready Documentation & Reporting">
              <p>
                Atlas Screening maintains comprehensive records to support audit
                readiness and regulatory compliance:
              </p>
              <ul>
                <li>
                  Timestamped consent and authorization records for every screening
                </li>
                <li>Complete audit logs of all system actions and data access</li>
                <li>
                  Role-based access controls to restrict report viewing to
                  authorized personnel
                </li>
                <li>
                  Secure retention of screening records for the period required by
                  applicable law
                </li>
                <li>
                  Branded, standardized reports that are consistent and defensible
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="state-laws" title="State Law Compliance">
              <p>
                In addition to federal FCRA requirements, Atlas Screening monitors
                and applies state-specific and local regulations, including:
              </p>
              <ul>
                <li>State-specific lookback limits for criminal records</li>
                <li>
                  Ban-the-box and fair chance hiring requirements where applicable
                </li>
                <li>State-level disclosure and consent requirements</li>
                <li>Restrictions on the use of certain types of records</li>
              </ul>
            </LegalSection>

            <LegalSection id="contact" title="Contact">
              <p>
                For compliance inquiries or to learn more about our consumer
                protection practices:
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:compliance@atlasscreening.com"
                    className="text-[#058B74] hover:underline"
                  >
                    compliance@atlasscreening.com
                  </a>
                </li>
                <li>
                  General inquiries:{" "}
                  <a
                    href="mailto:contact@atlasscreening.com"
                    className="text-[#058B74] hover:underline"
                  >
                    contact@atlasscreening.com
                  </a>
                </li>
                <li>Phone: (917) 275-7712</li>
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