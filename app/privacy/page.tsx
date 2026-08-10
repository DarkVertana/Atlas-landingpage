import LegalPage, { LegalSection } from "@/app/components/LegalPage";

const sections = [
  { id: "cra-status", title: "1. Consumer Reporting Agency Status" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Information" },
  { id: "permissible-purpose", title: "4. Permissible Purpose Requirement" },
  { id: "sharing", title: "5. Information Sharing and Disclosure" },
  { id: "data-security", title: "6. Data Security" },
  { id: "retention", title: "7. Data Retention" },
  { id: "consumer-rights", title: "8. Consumer Rights" },
  { id: "disputes", title: "9. Disputes and Reinvestigation" },
  { id: "accuracy", title: "10. Accuracy of Information" },
  { id: "third-party", title: "11. Third-Party Services" },
  { id: "childrens-privacy", title: "12. Children's Privacy" },
  { id: "changes", title: "13. Changes to This Policy" },
  { id: "governing-law", title: "14. Governing Law" },
  { id: "contact", title: "15. Contact Information" },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Atlas Screening privacy policy."
      intro="We are committed to protecting the privacy and security of personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information in connection with our background screening services."
      lastUpdated="April 1, 2026"
      sections={sections}
    >
      <LegalSection id="cra-status" title="1. Consumer Reporting Agency Status">
        <p>
          Atlas Screening operates as a Consumer Reporting Agency (CRA) and
          provides background screening services in accordance with the Fair
          Credit Reporting Act (FCRA) and applicable state laws.
        </p>
        <p>
          Our services are provided solely for permissible purposes as defined
          under applicable law, including employment screening, tenant
          screening, and other legally authorized uses.
        </p>
      </LegalSection>

      <LegalSection id="information-we-collect" title="2. Information We Collect">
        <h3 className="text-base font-semibold text-[#01463A] mt-2">A. Personal Identifiers</h3>
        <ul>
          <li>Full name</li>
          <li>Date of birth</li>
          <li>Social Security Number (full or partial)</li>
          <li>Address history</li>
          <li>Phone number</li>
          <li>Email address</li>
        </ul>

        <h3 className="text-base font-semibold text-[#01463A] mt-6">B. Background Information</h3>
        <ul>
          <li>Criminal records</li>
          <li>Public records</li>
          <li>Employment history</li>
          <li>Education verification</li>
          <li>Identity verification data</li>
        </ul>

        <h3 className="text-base font-semibold text-[#01463A] mt-6">C. Technical Information</h3>
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
        </ul>
      </LegalSection>

      <LegalSection id="how-we-use" title="3. How We Use Information">
        <ul>
          <li>Perform background screening services</li>
          <li>Verify identity and personal history</li>
          <li>Generate consumer reports</li>
          <li>Comply with legal and regulatory requirements</li>
          <li>Support dispute and reinvestigation processes</li>
          <li>Improve service functionality and security</li>
        </ul>
      </LegalSection>

      <LegalSection id="permissible-purpose" title="4. Permissible Purpose Requirement">
        <p>
          All background checks conducted by Atlas Screening are performed
          only for permissible purposes under applicable law.
        </p>
        <ul>
          <li>Have a lawful purpose</li>
          <li>Have obtained proper authorization</li>
          <li>Will comply with all applicable laws</li>
        </ul>
      </LegalSection>

      <LegalSection id="sharing" title="5. Information Sharing and Disclosure">
        <h3 className="text-base font-semibold text-[#01463A] mt-2">A. Data Providers and Vendors</h3>
        <ul>
          <li>Criminal data providers</li>
          <li>Court researchers</li>
          <li>Verification services</li>
          <li>Technology and processing partners</li>
        </ul>

        <h3 className="text-base font-semibold text-[#01463A] mt-6">B. Clients</h3>
        <ul>
          <li>Employers</li>
          <li>Property managers</li>
          <li>Authorized requestors</li>
        </ul>

        <h3 className="text-base font-semibold text-[#01463A] mt-6">C. Legal and Regulatory Authorities</h3>
        <p>
          When required by law, subpoena, or legal process.
        </p>
        <p className="mt-2">
          <strong>We do not sell personal information for marketing purposes.</strong>
        </p>
      </LegalSection>

      <LegalSection id="data-security" title="6. Data Security">
        <ul>
          <li>Secure data transmission (encryption where appropriate)</li>
          <li>Access controls and authentication</li>
          <li>Monitoring and security practices</li>
        </ul>
        <p className="mt-4">
          Despite these measures, no system can guarantee complete security.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="7. Data Retention">
        <p>
          We retain personal information only as long as necessary to provide
          services, comply with legal obligations, resolve disputes, and enforce
          agreements. After this period, data is securely deleted or anonymized.
        </p>
      </LegalSection>

      <LegalSection id="consumer-rights" title="8. Consumer Rights">
        <ul>
          <li>The right to request a copy of their report</li>
          <li>The right to dispute inaccurate or incomplete information</li>
          <li>The right to request correction or deletion where applicable</li>
        </ul>
      </LegalSection>

      <LegalSection id="disputes" title="9. Disputes and Reinvestigation">
        <p>
          Consumers who believe information in a report is inaccurate may
          submit a dispute.
        </p>
        <ul>
          <li>Initiate a reinvestigation</li>
          <li>Review information with original sources</li>
          <li>Correct or remove inaccurate data</li>
          <li>Provide updated results when applicable</li>
        </ul>
        <p className="mt-4">
          To submit a dispute, contact:{" "}
          <a
            href="mailto:compliance@atlasscreening.com"
            className="text-[#058B74] underline hover:text-[#01463A] transition-colors"
          >
            compliance@atlasscreening.com
          </a>
        </p>
      </LegalSection>

      <LegalSection id="accuracy" title="10. Accuracy of Information">
        <p>
          Information provided in background reports is obtained from
          third-party sources. While we strive for accuracy, Atlas Screening
          does not guarantee that all information is complete, current, or
          error-free.
        </p>
      </LegalSection>

      <LegalSection id="third-party" title="11. Third-Party Services">
        <p>
          Our services may involve third-party providers. We are not
          responsible for the privacy practices of those third parties.
        </p>
      </LegalSection>

      <LegalSection id="childrens-privacy" title="12. Children's Privacy">
        <p>
          Our services are not intended for individuals under the age of 18,
          and we do not knowingly collect information from minors.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="13. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with a revised effective date.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="14. Governing Law">
        <p>
          This Privacy Policy is governed by the laws of the State of New
          York, without regard to conflict of law principles.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="15. Contact Information">
        <div className="space-y-2">
          <p>
            <strong>Atlas Screening</strong>, New York, NY
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:contact@atlasscreening.com"
              className="text-[#058B74] underline hover:text-[#01463A] transition-colors"
            >
              contact@atlasscreening.com
            </a>
          </p>
          <p>
            Compliance:{" "}
            <a
              href="mailto:compliance@atlasscreening.com"
              className="text-[#058B74] underline hover:text-[#01463A] transition-colors"
            >
              compliance@atlasscreening.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+19172757712"
              className="text-[#058B74] underline hover:text-[#01463A] transition-colors"
            >
              (917) 275-7712
            </a>
          </p>
        </div>
      </LegalSection>
    </LegalPage>
  );
}
