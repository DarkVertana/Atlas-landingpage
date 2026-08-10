import LegalPage, { LegalSection } from "@/app/components/LegalPage";

const sections = [
  { id: "services", title: "1. Services Provided" },
  { id: "permissible-purpose", title: "2. Permissible Purpose Requirement" },
  { id: "client-responsibilities", title: "3. Client Responsibilities" },
  { id: "accuracy", title: "4. No Guarantee of Accuracy" },
  { id: "use-restrictions", title: "5. Use Restrictions" },
  { id: "fees", title: "6. Fees and Payment" },
  { id: "liability", title: "7. Limitation of Liability" },
  { id: "indemnification", title: "8. Indemnification" },
  { id: "data-privacy", title: "9. Data Use and Privacy" },
  { id: "termination", title: "10. Termination" },
  { id: "governing-law", title: "11. Governing Law" },
  { id: "contact", title: "12. Contact Information" },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Atlas Screening terms of service."
      intro="These Terms of Service govern your use of the Atlas Screening platform and services. By accessing or using our services, you agree to be bound by these terms."
      lastUpdated="April 1, 2026"
      sections={sections}
    >
      <LegalSection id="services" title="1. Services Provided">
        <p>
          Atlas Screening provides background screening services, including but not limited to:
        </p>
        <ul>
          <li>Criminal background checks</li>
          <li>Identity verification</li>
          <li>Employment verification</li>
          <li>Tenant screening</li>
        </ul>
        <p>
          Atlas Screening operates as a Consumer Reporting Agency and provides reports for
          legally permissible purposes only.
        </p>
      </LegalSection>

      <LegalSection id="permissible-purpose" title="2. Permissible Purpose Requirement">
        <p>
          Clients agree that all requests for background screening:
        </p>
        <ul>
          <li>Are for lawful, permissible purposes</li>
          <li>Comply with applicable laws, including the Fair Credit Reporting Act</li>
          <li>Are supported by proper consumer authorization</li>
        </ul>
        <p>
          Clients are solely responsible for ensuring compliance with applicable laws.
        </p>
      </LegalSection>

      <LegalSection id="client-responsibilities" title="3. Client Responsibilities">
        <p>Clients agree to:</p>
        <ul>
          <li>Obtain written authorization from the subject before requesting a report</li>
          <li>Provide accurate and complete information</li>
          <li>Use reports only for lawful purposes</li>
          <li>Follow all adverse action requirements where applicable</li>
        </ul>
      </LegalSection>

      <LegalSection id="accuracy" title="4. No Guarantee of Accuracy">
        <p>
          Atlas Screening obtains information from third-party sources, including public
          records and data providers.
        </p>
        <p>
          We do not guarantee that all information is complete, current, or error-free.
        </p>
        <p>
          Clients acknowledge that reports should be used as one factor in decision-making.
        </p>
      </LegalSection>

      <LegalSection id="use-restrictions" title="5. Use Restrictions">
        <p>Clients may not:</p>
        <ul>
          <li>Use reports for unlawful or discriminatory purposes</li>
          <li>Share reports with unauthorized parties</li>
          <li>Misuse or resell reports outside permitted use</li>
        </ul>
      </LegalSection>

      <LegalSection id="fees" title="6. Fees and Payment">
        <ul>
          <li>Services are provided on a per-report basis unless otherwise agreed</li>
          <li>Fees are due at the time of service or as invoiced</li>
          <li>All payments are non-refundable once processing begins</li>
        </ul>
      </LegalSection>

      <LegalSection id="liability" title="7. Limitation of Liability">
        <p>To the fullest extent permitted by law:</p>
        <p>
          Atlas Screening shall not be liable for any indirect, incidental, special, or
          consequential damages arising from the use of our services.
        </p>
        <p>
          Our total liability shall not exceed the amount paid for the specific report in
          question.
        </p>
      </LegalSection>

      <LegalSection id="indemnification" title="8. Indemnification">
        <p>
          Clients agree to indemnify and hold harmless Atlas Screening from any claims,
          damages, or liabilities arising from:
        </p>
        <ul>
          <li>Misuse of reports</li>
          <li>Failure to obtain proper authorization</li>
          <li>Violation of applicable laws</li>
        </ul>
      </LegalSection>

      <LegalSection id="data-privacy" title="9. Data Use and Privacy">
        <p>
          Use of services is also governed by our Privacy Policy. By using our services, you
          agree to the collection and use of data as described therein.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="10. Termination">
        <p>
          Atlas Screening reserves the right to suspend or terminate access to services for:
        </p>
        <ul>
          <li>Violation of these Terms</li>
          <li>Suspected misuse</li>
          <li>Legal or compliance concerns</li>
        </ul>
      </LegalSection>

      <LegalSection id="governing-law" title="11. Governing Law">
        <p>
          These Terms are governed by the laws of the State of New York.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact Information">
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@atlasscreening.com" className="text-[#058B74] hover:underline">
              contact@atlasscreening.com
            </a>
          </li>
          <li>
            <strong>Compliance:</strong>{" "}
            <a href="mailto:compliance@atlasscreening.com" className="text-[#058B74] hover:underline">
              compliance@atlasscreening.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+19172757712" className="text-[#058B74] hover:underline">
              (917) 275-7712
            </a>
          </li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
