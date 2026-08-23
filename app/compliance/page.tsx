import LegalPage, { LegalSection } from "@/app/components/LegalPage";

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
    <LegalPage
      eyebrow="Compliance"
      title="Compliance & Consumer Protection"
      intro="Atlas Screening operates in accordance with the Fair Credit Reporting Act (FCRA) and applicable state laws. Every step of our process is designed to protect consumers and ensure lawful, accurate screening."
      sections={sections}
    >
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
            Atlas Screening and notice of the consumer&apos;s right to dispute
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
          Screening&apos;s dispute process includes:
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
          <li>
            Phone:{" "}
            <a
              href="tel:+19172757712"
              className="text-[#058B74] hover:underline"
            >
              (917) 275-7712
            </a>
          </li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
