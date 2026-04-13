const sections = [
  { id: "acceptance", title: "1. Acceptance of terms" },
  { id: "services", title: "2. Description of services" },
  { id: "accounts", title: "3. Accounts & eligibility" },
  { id: "customer-obligations", title: "4. Customer obligations" },
  { id: "acceptable-use", title: "5. Acceptable use" },
  { id: "fees", title: "6. Fees & billing" },
  { id: "data", title: "7. Data & privacy" },
  { id: "compliance", title: "8. FCRA compliance" },
  { id: "disclaimers", title: "9. Disclaimers" },
  { id: "liability", title: "10. Limitation of liability" },
  { id: "termination", title: "11. Termination" },
  { id: "governing-law", title: "12. Governing law" },
  { id: "changes", title: "13. Changes to terms" },
  { id: "contact", title: "14. Contact us" },
];

export default function TermsPage() {
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
            Terms of Service.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            The agreement between Atlas Screening and customers who use our
            background-check platform. Please read carefully.
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
            <LegalSection id="acceptance" title="1. Acceptance of terms">
              <p>
                By accessing or using Atlas Screening&apos;s website, platform, or
                services (the &ldquo;Services&rdquo;), you agree to be bound by
                these Terms of Service (&ldquo;Terms&rdquo;). If you are using the
                Services on behalf of an organization, you represent that you have
                authority to bind that organization to these Terms.
              </p>
            </LegalSection>

            <LegalSection id="services" title="2. Description of services">
              <p>
                Atlas provides consumer-reporting and background-screening tools for
                hiring, leasing, and credentialing purposes, including criminal
                record searches, identity verification, employment and education
                verification, motor vehicle records, tenant screening, and related
                services.
              </p>
            </LegalSection>

            <LegalSection id="accounts" title="3. Accounts & eligibility">
              <p>
                You must provide accurate and complete information to create an
                account, keep it up to date, and safeguard your credentials. You
                are responsible for all activity that occurs under your account.
                Services are available only to users who are at least 18 years old
                and authorized to request consumer reports under applicable law.
              </p>
            </LegalSection>

            <LegalSection id="customer-obligations" title="4. Customer obligations">
              <p>As a customer using Atlas, you agree to:</p>
              <ul>
                <li>
                  Obtain all required written consents and disclosures from each
                  applicant before requesting a report.
                </li>
                <li>
                  Use reports only for permissible purposes under the FCRA and
                  applicable state law.
                </li>
                <li>
                  Comply with the adverse action process, including providing
                  pre-adverse and adverse action notices where required.
                </li>
                <li>
                  Keep applicant data confidential and stored only as long as
                  legally permitted.
                </li>
                <li>
                  Provide accurate information about your use case and the types of
                  reports you intend to request.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="acceptable-use" title="5. Acceptable use">
              <p>You may not use the Services to:</p>
              <ul>
                <li>
                  Run reports on individuals without a lawful permissible purpose or
                  without their required consent.
                </li>
                <li>
                  Reverse-engineer, scrape, or interfere with the platform&apos;s
                  security, performance, or availability.
                </li>
                <li>
                  Use the Services for discriminatory purposes in violation of the
                  EEOC, fair-housing laws, or similar regulations.
                </li>
                <li>
                  Resell, sublicense, or transfer the Services without our prior
                  written consent.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="fees" title="6. Fees & billing">
              <p>
                Fees are billed per report on a pay-as-you-go basis unless an
                enterprise agreement applies. You authorize us to charge your
                selected payment method for all fees incurred under your account.
                All fees are non-refundable except as expressly stated.
              </p>
            </LegalSection>

            <LegalSection id="data" title="7. Data & privacy">
              <p>
                Our collection, use, and protection of personal information is
                governed by our{" "}
                <a href="/privacy" className="text-[#058B74] underline">
                  Privacy Policy
                </a>
                . By using the Services, you acknowledge and agree to the
                practices described there.
              </p>
            </LegalSection>

            <LegalSection id="compliance" title="8. FCRA compliance">
              <p>
                As a Consumer Reporting Agency, Atlas operates in accordance with
                the Fair Credit Reporting Act (FCRA), EEOC guidance, and applicable
                state laws. You are a &ldquo;user of consumer reports&rdquo; under
                the FCRA and are responsible for fulfilling all user obligations,
                including notice and disclosure requirements.
              </p>
            </LegalSection>

            <LegalSection id="disclaimers" title="9. Disclaimers">
              <p>
                The Services are provided &ldquo;as is&rdquo; and &ldquo;as
                available,&rdquo; without warranties of any kind, express or
                implied, except as required by law. While we work diligently to
                source accurate information, report data reflects third-party
                records that may contain errors. You are solely responsible for
                verifying information before relying on it for any decision.
              </p>
            </LegalSection>

            <LegalSection id="liability" title="10. Limitation of liability">
              <p>
                To the maximum extent permitted by law, Atlas&apos;s total
                aggregate liability arising out of or relating to the Services will
                not exceed the fees paid by you to Atlas during the twelve (12)
                months preceding the event giving rise to the claim. In no event
                will Atlas be liable for indirect, incidental, consequential,
                special, or punitive damages.
              </p>
            </LegalSection>

            <LegalSection id="termination" title="11. Termination">
              <p>
                Either party may terminate the account at any time with notice. We
                may suspend or terminate your access immediately if you violate
                these Terms, misuse the Services, or fail to pay fees when due.
                Provisions that by their nature should survive termination (such
                as indemnities, disclaimers, and limitations of liability) will
                survive.
              </p>
            </LegalSection>

            <LegalSection id="governing-law" title="12. Governing law">
              <p>
                These Terms are governed by the laws of the State of California,
                without regard to its conflict of laws principles. Any dispute
                arising from these Terms will be resolved in the state or federal
                courts located in San Francisco, California, unless otherwise
                required by applicable law.
              </p>
            </LegalSection>

            <LegalSection id="changes" title="13. Changes to terms">
              <p>
                We may revise these Terms from time to time. If we make material
                changes, we will notify customers by email or through the
                platform. Continued use of the Services after changes take effect
                constitutes acceptance of the revised Terms.
              </p>
            </LegalSection>

            <LegalSection id="contact" title="14. Contact us">
              <p>
                Questions about these Terms? Reach us at{" "}
                <a href="mailto:legal@atlasscreening.com" className="text-[#058B74] underline">
                  legal@atlasscreening.com
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
