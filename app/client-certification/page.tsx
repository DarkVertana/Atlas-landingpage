const sections = [
  { id: "permissible-purpose", title: "1. Permissible Purpose Certification" },
  { id: "consumer-authorization", title: "2. Consumer Authorization Requirement" },
  { id: "adverse-action", title: "3. Adverse Action Compliance" },
  { id: "use-restrictions", title: "4. Use Restrictions" },
  { id: "accuracy", title: "5. Accuracy Acknowledgment" },
  { id: "data-protection", title: "6. Data Protection Responsibility" },
  { id: "prohibition-on-resale", title: "7. Prohibition on Resale" },
  { id: "audit-verification", title: "8. Audit & Verification" },
  { id: "indemnification", title: "9. Indemnification" },
  { id: "liability", title: "10. Limitation of Liability" },
  { id: "termination", title: "11. Termination" },
  { id: "governing-law", title: "12. Governing Law" },
  { id: "acceptance", title: "13. Acceptance" },
];

export default function ClientCertificationPage() {
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
            Client certification & user agreement.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            This Client Certification & Permissible Use Agreement is entered
            into between Atlas Screening (&ldquo;Company&rdquo;) and the Client
            (&ldquo;User&rdquo;). By requesting or using background screening
            services, the Client agrees to the following.
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
            <LegalSection id="permissible-purpose" title="1. Permissible Purpose Certification">
              <p>Client certifies that all background screening requests:</p>
              <ul>
                <li>Are for lawful, permissible purposes</li>
                <li>Comply with the Fair Credit Reporting Act and applicable state laws</li>
                <li>Are related to employment, tenant screening, or other legally authorized uses</li>
              </ul>
              <p>
                Client agrees not to request reports for any unauthorized or unlawful purpose.
              </p>
            </LegalSection>

            <LegalSection id="consumer-authorization" title="2. Consumer Authorization Requirement">
              <p>Client agrees that:</p>
              <ul>
                <li>Proper written authorization has been obtained from the individual</li>
                <li>Disclosure requirements have been satisfied</li>
                <li>Authorization documentation will be retained and provided upon request</li>
              </ul>
            </LegalSection>

            <LegalSection id="adverse-action" title="3. Adverse Action Compliance">
              <p>
                Client agrees to follow all applicable adverse action requirements,
                including:
              </p>
              <ul>
                <li>Providing pre-adverse action notice</li>
                <li>Allowing time for consumer response</li>
                <li>Providing final adverse action notice</li>
              </ul>
              <p>
                Atlas Screening does not assume responsibility for Client's adverse
                action compliance.
              </p>
            </LegalSection>

            <LegalSection id="use-restrictions" title="4. Use Restrictions">
              <p>Client agrees that reports will:</p>
              <ul>
                <li>Be used only for the certified permissible purpose</li>
                <li>Not be shared with unauthorized parties</li>
                <li>Not be used in violation of anti-discrimination laws</li>
              </ul>
            </LegalSection>

            <LegalSection id="accuracy" title="5. Accuracy Acknowledgment">
              <p>Client acknowledges that:</p>
              <ul>
                <li>Reports are compiled from third-party sources</li>
                <li>Information may not always be complete or current</li>
              </ul>
              <p>
                Atlas Screening does not guarantee accuracy and reports should not be
                the sole basis for decisions.
              </p>
            </LegalSection>

            <LegalSection id="data-protection" title="6. Data Protection Responsibility">
              <p>Client agrees to:</p>
              <ul>
                <li>Protect all report data and personal information</li>
                <li>Restrict access to authorized personnel only</li>
                <li>Use secure methods for storage and transmission</li>
              </ul>
            </LegalSection>

            <LegalSection id="prohibition-on-resale" title="7. Prohibition on Resale">
              <p>Client agrees:</p>
              <ul>
                <li>Not to resell, distribute, or repurpose reports outside the intended use</li>
              </ul>
            </LegalSection>

            <LegalSection id="audit-verification" title="8. Audit & Verification">
              <p>Atlas Screening reserves the right to:</p>
              <ul>
                <li>Request proof of permissible purpose</li>
                <li>Request authorization documentation</li>
                <li>Suspend access if compliance concerns arise</li>
              </ul>
            </LegalSection>

            <LegalSection id="indemnification" title="9. Indemnification">
              <p>
                Client agrees to indemnify and hold harmless Atlas Screening from any
                claims, damages, or liabilities arising from:
              </p>
              <ul>
                <li>Misuse of reports</li>
                <li>Failure to obtain proper authorization</li>
                <li>Violation of applicable laws</li>
              </ul>
            </LegalSection>

            <LegalSection id="liability" title="10. Limitation of Liability">
              <p>To the fullest extent permitted by law:</p>
              <p>
                Atlas Screening's liability shall not exceed the amount paid for the
                report in question.
              </p>
            </LegalSection>

            <LegalSection id="termination" title="11. Termination">
              <p>Atlas Screening reserves the right to suspend or terminate access for:</p>
              <ul>
                <li>Non-compliance</li>
                <li>Misuse of services</li>
                <li>Legal or regulatory concerns</li>
              </ul>
            </LegalSection>

            <LegalSection id="governing-law" title="12. Governing Law">
              <p>
                This Agreement is governed by the laws of the State of New York.
              </p>
            </LegalSection>

            <LegalSection id="acceptance" title="13. Acceptance">
              <p>
                By using Atlas Screening services, Client acknowledges and agrees to
                all terms outlined in this Agreement.
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