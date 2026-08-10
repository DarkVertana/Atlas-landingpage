import LegalPage, { LegalSection } from "@/app/components/LegalPage";

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
    <LegalPage
      eyebrow="Legal"
      title="Client certification & user agreement."
      intro={
        <>
          This Client Certification & Permissible Use Agreement is entered
          into between Atlas Screening (&ldquo;Company&rdquo;) and the Client
          (&ldquo;User&rdquo;). By requesting or using background screening
          services, the Client agrees to the following.
        </>
      }
      lastUpdated="April 1, 2026"
      sections={sections}
    >
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
        <p>
          Client agrees not to resell, distribute, or repurpose reports outside
          the intended use.
        </p>
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
    </LegalPage>
  );
}
