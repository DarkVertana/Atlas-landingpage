import LegalPage, { LegalSection } from "@/app/components/LegalPage";

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
    <LegalPage
      eyebrow="Legal"
      title="Dispute / reinvestigation policy."
      intro="Atlas Screening is committed to maintaining accurate and compliant reporting in accordance with the Fair Credit Reporting Act. This policy outlines how consumers can dispute information and how we handle reinvestigations."
      lastUpdated="April 1, 2026"
      sections={sections}
    >
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
