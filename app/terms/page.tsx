const sections = [
  { id: "overview", title: "1. Overview" },
  { id: "permissible-purpose", title: "2. Employer obligations & permissible purpose" },
  { id: "applicant-consent", title: "3. Applicant consent requirements" },
  { id: "adverse-action", title: "4. Adverse action compliance" },
  { id: "billing", title: "5. Smart payment processing & billing" },
  { id: "pricing", title: "6. Transparent pricing structure" },
  { id: "accuracy", title: "7. Public record accuracy & service limitations" },
  { id: "liability", title: "8. Indemnification and liability" },
  { id: "account-security", title: "9. Account security & role-based access" },
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
            Atlas Screening terms of service.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            These legal provisions govern your access to the Atlas Screening platform,
            dashboards, and associated investigative services. By registering an
            account, you agree to follow these operating standards.
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
            <LegalSection id="overview" title="1. Overview">
              <p>
                These legal provisions govern your access to the Atlas Screening
                platform, dashboards, and associated investigative services. By
                registering an account, you agree to follow these operating standards.
                This document outlines the legal responsibilities for both our company
                and your organization.
              </p>
            </LegalSection>

            <LegalSection id="permissible-purpose" title="2. Employer obligations & permissible purpose">
              <p>
                Clients using our dashboard must establish a permissible purpose to
                request a consumer report. The Fair Credit Reporting Act defines the
                acceptable use cases. You must have a valid employment or tenant
                screening reason to initiate any background check through our system.
              </p>
            </LegalSection>

            <LegalSection id="applicant-consent" title="3. Applicant consent requirements">
              <p>
                You agree to obtain explicit, written consent from all candidates
                before starting a screening request. Our platform automates delivery of
                these disclosure documents during the secure applicant submission flow.
                However, you remain legally responsible for ensuring your overall
                hiring process complies with all state and federal consent laws.
              </p>
            </LegalSection>

            <LegalSection id="adverse-action" title="4. Adverse action compliance">
              <p>
                If a background report influences your decision to deny employment or
                housing, you must follow strict adverse action procedures. You agree to
                provide the candidate with a pre-adverse action notice, a copy of their
                report, and a final adverse action notice. Our platform provides the
                tools and documentation to support your legal compliance workflow.
              </p>
            </LegalSection>

            <LegalSection id="billing" title="5. Smart payment processing & billing">
              <p>
                Initiating a screening order authorizes Atlas Screening to charge your
                selected payment method. We operate on a smart billing model —
                automated charges trigger exactly when the applicant successfully
                completes their secure data and biometric submission. You never pay for
                uncompleted or ignored invitations.
              </p>
            </LegalSection>

            <LegalSection id="pricing" title="6. Transparent pricing structure">
              <p>
                All base package costs and optional add-on services display clearly
                before you confirm an order. We do not implement hidden fees. Selecting
                a Global Watchlist check or a Tenant Screening report adds a flat fee
                to your active order. All transactions process securely through our
                encrypted payment gateway.
              </p>
            </LegalSection>

            <LegalSection id="accuracy" title="7. Public record accuracy & service limitations">
              <p>
                We use advanced data aggregation and human review to ensure high
                accuracy. However, public records inherently contain occasional human
                errors at the county and state court levels. We provide background
                reports exactly as the public data presents them at the specific time
                of the investigation.
              </p>
            </LegalSection>

            <LegalSection id="liability" title="8. Indemnification and liability">
              <p>
                Atlas Screening acts strictly as a consumer reporting agency. We supply
                data, but we do not make hiring or leasing decisions for your
                organization. You agree to hold our platform harmless from any legal
                claims arising from your specific employment decisions or your failure
                to follow required federal compliance workflows.
              </p>
            </LegalSection>

            <LegalSection id="account-security" title="9. Account security & role-based access">
              <p>
                You assume responsibility for maintaining the security of your
                administrative dashboard credentials. You agree to utilize our built-in
                role-based access controls properly. You must restrict sensitive report
                data so that only authorized personnel within your human resources or
                leasing departments can view completed consumer files.
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
