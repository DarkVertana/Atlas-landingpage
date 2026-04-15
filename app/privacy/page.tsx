const sections = [
  { id: "overview", title: "1. Overview" },
  { id: "information-we-collect", title: "2. Information we collect and how we use it" },
  { id: "sharing", title: "3. Strict rules on data sharing" },
  { id: "retention", title: "4. Data retention guidelines" },
  { id: "data-security", title: "5. Enterprise-grade data security" },
  { id: "applicant-rights", title: "6. Your privacy rights and control" },
];

export default function PrivacyPage() {
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
            Atlas Screening privacy policy.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            Protecting personal information forms the foundation of our entire screening
            platform. This policy provides complete transparency on how we collect,
            secure, and manage data for both our business clients and the individual
            applicants utilizing our system.
          </p>
          <p className="mt-6 text-xs uppercase tracking-widest text-white/40">
            Last updated · April 1, 2026
          </p>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_260px] gap-12 lg:gap-16 items-start">
          <article className="prose-legal min-w-0 space-y-12">
            <LegalSection id="overview" title="1. Overview">
              <p>
                Protecting personal information forms the foundation of our entire
                screening platform. We designed this privacy policy to provide complete
                transparency regarding how we collect, secure, and manage data for both
                our business clients and the individual applicants utilizing our system.
              </p>
            </LegalSection>

            <LegalSection id="information-we-collect" title="2. Information we collect and how we use it">
              <p>
                We gather personal data exclusively to conduct authorized background
                investigations and manage active client accounts. We never collect
                information outside of what is strictly necessary to perform these
                functions.
              </p>
              <ul>
                <li>
                  <strong>Client account data:</strong> business contact details,
                  billing information, and user credentials used to manage dashboard
                  access and process smart payments.
                </li>
                <li>
                  <strong>Applicant identifiers:</strong> candidate name, date of
                  birth, recent address history, and Social Security Number required
                  to conduct accurate background checks.
                </li>
                <li>
                  <strong>Biometric verification:</strong> live selfie and government
                  ID upload, used strictly for immediate identity verification to
                  prevent matching errors and fraud.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="sharing" title="3. Strict rules on data sharing">
              <p>
                We never sell your personal data. Your privacy remains our primary
                concern throughout the screening workflow.
              </p>
              <p>
                We only share applicant information with authorized third-party data
                furnishers, federal and state court systems, and official verification
                agencies. This data exchange occurs strictly to fulfill the requested
                background check. Once the investigation concludes, the final consumer
                report transmits securely and exclusively to the specific employer or
                property manager who initiated the request.
              </p>
            </LegalSection>

            <LegalSection id="retention" title="4. Data retention guidelines">
              <p>
                We do not store your data indefinitely. We retain consumer and client
                information only for the duration necessary to fulfill our service
                agreements and comply with strict federal regulations, including the
                Fair Credit Reporting Act. Once applicant data reaches the end of its
                legally mandated retention lifecycle, our systems securely purge it from
                our active servers.
              </p>
            </LegalSection>

            <LegalSection id="data-security" title="5. Enterprise-grade data security">
              <p>
                Protecting sensitive candidate data requires rigorous technical
                infrastructure. We secure all personal information, including
                identification documents and biometric inputs, behind enterprise-grade
                encryption protocols.
              </p>
              <p>
                Candidate data flows directly through secure, time-limited tokenized
                access links. We store all files on protected servers and enforce
                strict role-based authentication — ensuring only authorized personnel
                within the requesting organization can view the completed consumer
                files.
              </p>
            </LegalSection>

            <LegalSection id="applicant-rights" title="6. Your privacy rights and control">
              <p>
                We respect the privacy rights granted to you under federal and state
                laws. Candidates retain the specific right to request access to their
                screening files, dispute inaccurate findings on their consumer reports,
                and understand exactly how their data informs hiring or leasing
                decisions.
              </p>
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
