const sections = [
  { id: "overview", title: "1. Overview" },
  { id: "information-we-collect", title: "2. Information we collect" },
  { id: "how-we-use", title: "3. How we use information" },
  { id: "sharing", title: "4. How we share information" },
  { id: "applicant-rights", title: "5. Applicant & consumer rights" },
  { id: "data-security", title: "6. Data security" },
  { id: "retention", title: "7. Data retention" },
  { id: "children", title: "8. Children's privacy" },
  { id: "international", title: "9. International transfers" },
  { id: "changes", title: "10. Changes to this policy" },
  { id: "contact", title: "11. Contact us" },
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
            Privacy Policy.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            How we collect, use, and protect personal information. Written in plain
            language so you know exactly what happens with your data.
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
                Atlas Screening (&ldquo;Atlas,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
                or &ldquo;our&rdquo;) is a consumer reporting agency (CRA) providing
                background screening services to employers, property managers, and
                organizations. This Privacy Policy explains how we collect, use,
                disclose, and protect personal information when you use our website,
                platform, and services.
              </p>
              <p>
                By using our services you agree to the practices described in this
                policy. If you do not agree, please do not use the services.
              </p>
            </LegalSection>

            <LegalSection id="information-we-collect" title="2. Information we collect">
              <p>We collect the following categories of personal information:</p>
              <ul>
                <li>
                  <strong>Applicant information</strong> you provide as part of a
                  screening request: name, date of birth, Social Security Number,
                  address history, government-issued identification, employment and
                  education history, and any other details required to perform the
                  requested checks.
                </li>
                <li>
                  <strong>Customer account information</strong>: company name, billing
                  details, team member names, roles, and credentials.
                </li>
                <li>
                  <strong>Report data</strong>: records retrieved from public and
                  licensed third-party sources (criminal records, court records,
                  verifications, motor vehicle records, watchlists).
                </li>
                <li>
                  <strong>Usage data</strong>: device information, browser type, IP
                  address, pages visited, and actions taken within our platform.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="how-we-use" title="3. How we use information">
              <p>We use personal information to:</p>
              <ul>
                <li>
                  Perform the background checks or other services our customers
                  request, with the applicant&apos;s consent.
                </li>
                <li>
                  Verify identities, prevent fraud, and meet our legal and regulatory
                  obligations, including the Fair Credit Reporting Act (FCRA).
                </li>
                <li>Operate, secure, and improve our platform and services.</li>
                <li>
                  Communicate with you about your account, reports, updates, and
                  changes to our services.
                </li>
              </ul>
              <p>
                We do not use applicant data for advertising, model training, or any
                purpose unrelated to the requested screening.
              </p>
            </LegalSection>

            <LegalSection id="sharing" title="4. How we share information">
              <p>
                We share personal information only with parties involved in
                delivering your report or where required by law:
              </p>
              <ul>
                <li>
                  <strong>Authorized customers</strong> who requested the report, in
                  compliance with FCRA and applicable law.
                </li>
                <li>
                  <strong>Vetted service providers</strong> that help us operate the
                  platform, such as cloud hosting and data-source partners, under
                  binding confidentiality and security agreements.
                </li>
                <li>
                  <strong>Regulators, courts, or law enforcement</strong> where we
                  are required by law, subpoena, or valid legal process.
                </li>
              </ul>
              <p>We never sell personal information.</p>
            </LegalSection>

            <LegalSection id="applicant-rights" title="5. Applicant & consumer rights">
              <p>
                Under the FCRA and applicable state laws, you have rights regarding
                your consumer report, including:
              </p>
              <ul>
                <li>The right to know what information is in your file.</li>
                <li>
                  The right to dispute inaccurate or incomplete information.
                </li>
                <li>
                  The right to have inaccurate information corrected or deleted.
                </li>
                <li>
                  The right to access copies of the consumer reports we have
                  generated about you, upon verified request.
                </li>
                <li>
                  Residents of California, Colorado, Virginia, and other states may
                  have additional rights under state privacy laws, including access,
                  correction, deletion, and opt-out of certain disclosures.
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:applicants@atlasscreening.com" className="text-[#058B74] underline">
                  applicants@atlasscreening.com
                </a>
                . We will respond within the timeframe required by applicable law.
              </p>
            </LegalSection>

            <LegalSection id="data-security" title="6. Data security">
              <p>
                We protect personal information with administrative, technical, and
                physical safeguards, including encryption in transit and at rest,
                tokenized access links, role-based access controls, and SOC 2 Type
                II audited infrastructure. No method of transmission or storage is
                100% secure, but we continuously invest in protecting your data.
              </p>
            </LegalSection>

            <LegalSection id="retention" title="7. Data retention">
              <p>
                We retain personal information for as long as needed to provide our
                services, meet legal or regulatory requirements, resolve disputes,
                and enforce our agreements. When retention windows expire, data is
                securely purged from active systems and backups per our retention
                schedule.
              </p>
            </LegalSection>

            <LegalSection id="children" title="8. Children's privacy">
              <p>
                Our services are not directed to children under 13, and we do not
                knowingly collect personal information from children. If we learn
                that we have collected such data, we will delete it promptly.
              </p>
            </LegalSection>

            <LegalSection id="international" title="9. International transfers">
              <p>
                Atlas is based in the United States and operates primarily for U.S.
                customers. If you access our services from outside the U.S., your
                information may be transferred to and processed in the U.S., where
                data protection laws may differ from those in your location.
              </p>
            </LegalSection>

            <LegalSection id="changes" title="10. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. If we make
                material changes, we will notify affected users by email or through
                the platform. The &ldquo;Last updated&rdquo; date at the top of this
                policy reflects the most recent revision.
              </p>
            </LegalSection>

            <LegalSection id="contact" title="11. Contact us">
              <p>
                Questions about this Privacy Policy or our data practices? Reach us
                at{" "}
                <a href="mailto:privacy@atlasscreening.com" className="text-[#058B74] underline">
                  privacy@atlasscreening.com
                </a>{" "}
                or by mail at Atlas Screening, 123 Screening Avenue, Suite 400, San
                Francisco, CA 94107.
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
