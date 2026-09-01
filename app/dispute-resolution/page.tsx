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
      intro="How consumers can dispute report information and how we handle reinvestigations under the FCRA."
      image="/assets/images/call-center-agent-office-helping-customers-by-answering-questions.webp"
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
        <p>
          Disputes may be submitted by email to{" "}
          <a
            href="mailto:compliance@atlasscreening.com"
            className="text-[#058B74] hover:underline"
          >
            compliance@atlasscreening.com
          </a>
          . To help us process your dispute, please include your full name, a
          report reference where available, a clear description of the disputed
          information, and any supporting documentation you are able to provide.
        </p>
      </LegalSection>

      <LegalSection id="reinvestigation" title="3. Reinvestigation Process">
        <p>
          Upon receiving a dispute, Atlas Screening will review the disputed
          information, contact the original data sources where necessary, and
          verify the accuracy of the reported data. Any information found to be
          inaccurate or that cannot be verified will be updated or removed.
        </p>
      </LegalSection>

      <LegalSection id="timeline" title="4. Timeline">
        <p>
          Reinvestigations are typically completed within 30 days, unless
          extended as permitted by law.
        </p>
      </LegalSection>

      <LegalSection id="results" title="5. Results of Reinvestigation">
        <p>
          Once the reinvestigation is complete, consumers are notified of the
          results, and an updated report is provided where applicable.
        </p>
      </LegalSection>

      <LegalSection id="corrections" title="6. Corrections and Deletions">
        <p>
          If information is found to be inaccurate or cannot be verified, it will
          be corrected or removed, and future reports will reflect the updated
          information.
        </p>
      </LegalSection>

      <LegalSection id="additional-rights" title="7. Additional Rights">
        <p>
          Consumers may have additional rights under applicable state laws.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="8. Contact Information">
        <p>
          For disputes or questions about the reinvestigation process, please
          contact our compliance team by email at{" "}
          <a
            href="mailto:compliance@atlasscreening.com"
            className="text-[#058B74] hover:underline"
          >
            compliance@atlasscreening.com
          </a>{" "}
          or by phone at{" "}
          <a href="tel:+19172757712" className="text-[#058B74] hover:underline">
            (917) 275-7712
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
