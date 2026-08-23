import LegalPage, { LegalSection } from "@/app/components/LegalPage";

const sections = [
  { id: "orders-final", title: "1. All Submitted Orders Are Final" },
  { id: "client-responsibility", title: "2. Client Responsibility Before Ordering" },
  { id: "applicant-non-completion", title: "3. Applicant Non-Completion" },
  { id: "third-party-fees", title: "4. Third-Party & Pass-Through Fees" },
  { id: "billing-adjustments", title: "5. Limited Billing Adjustments" },
  { id: "billing-review", title: "6. Billing-Review Requests" },
  { id: "consumer-disputes", title: "7. Consumer Disputes & FCRA Rights" },
  { id: "chargebacks", title: "8. Payment Disputes & Chargebacks" },
  { id: "controlling-agreements", title: "9. Controlling Agreements" },
  { id: "policy-changes", title: "10. Policy Changes & Severability" },
];

export default function CancellationRefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cancellation, refund & account credit policy."
      intro="This policy applies to all services ordered from Atlas Screening LLC, including background checks, consumer reports, identity verifications, motor vehicle records, criminal-record searches, credential verifications, drug testing, and related screening services. By submitting an order through the Atlas website, client portal, API, integration, written request, or other authorized ordering method, the client acknowledges and agrees to this policy."
      lastUpdated="April 1, 2026"
      sections={sections}
    >
      <LegalSection id="orders-final" title="1. All Submitted Orders Are Final">
        <p>
          <strong>
            All orders are final once submitted and processing has commenced.
          </strong>{" "}
          Atlas begins processing orders shortly after submission. Processing may
          include automated searches, manual research, applicant invitations, data
          retrieval, database queries, or transmission of requests to courts,
          government agencies, laboratories, employers, educational institutions,
          licensing authorities, record repositories, and other third-party
          sources. Once processing has commenced, an order cannot be canceled,
          withdrawn, changed, refunded, or credited except as expressly provided in
          this policy or required by applicable law.
        </p>
        <p>
          Processing is considered to have commenced upon the earliest occurrence
          of any of the following:
        </p>
        <ul>
          <li>The order is transmitted to Atlas or one of its service providers;</li>
          <li>
            An applicant invitation, authorization request, or scheduling
            instruction is issued;
          </li>
          <li>
            An automated search, database query, verification request, or manual
            review begins;
          </li>
          <li>
            A request is transmitted to a court, agency, laboratory, employer,
            school, licensing authority, repository, or other source; or
          </li>
          <li>
            Atlas or a third-party provider incurs any cost associated with the
            order.
          </li>
        </ul>
        <p>
          The client remains responsible for all charges associated with a
          submitted order even if the client later determines that the report is no
          longer needed, the applicant is no longer under consideration, or the
          order was submitted using incorrect information.
        </p>
      </LegalSection>

      <LegalSection
        id="client-responsibility"
        title="2. Client Responsibility Before Ordering"
      >
        <p>Before submitting an order, the client is responsible for confirming:</p>
        <ul>
          <li>The applicant&rsquo;s identity and information;</li>
          <li>The screening package, services, and jurisdictions selected;</li>
          <li>That the order is not duplicative;</li>
          <li>
            That the client has a permissible purpose under the Fair Credit
            Reporting Act (&ldquo;FCRA&rdquo;) and other applicable laws;
          </li>
          <li>
            That all required disclosures, authorizations, certifications, notices,
            and consents have been properly obtained; and
          </li>
          <li>
            That the requested screening is lawful and appropriate for its intended
            purpose.
          </li>
        </ul>
        <p>
          Orders submitted with incorrect, incomplete, outdated, duplicative, or
          unauthorized information remain payable. Atlas is not responsible for
          errors resulting from information supplied by the client, applicant, or
          another authorized user of the client&rsquo;s account.
        </p>
      </LegalSection>

      <LegalSection
        id="applicant-non-completion"
        title="3. Applicant Non-Completion"
      >
        <p>No refund or credit will be issued when an applicant:</p>
        <ul>
          <li>
            Fails or refuses to provide required information, identification,
            authorization, consent, or documentation;
          </li>
          <li>Fails to respond to an invitation or verification request;</li>
          <li>
            Fails to attend a scheduled collection, examination, or drug test;
          </li>
          <li>
            Provides inaccurate, incomplete, inconsistent, or unverifiable
            information;
          </li>
          <li>Withdraws from consideration;</li>
          <li>Is no longer being considered by the client; or</li>
          <li>
            Fails to complete the screening process within the required timeframe.
          </li>
        </ul>
        <p>
          Atlas may close such an order as incomplete, expired, canceled, or unable
          to verify. All charges and third-party costs already incurred remain
          payable.
        </p>
      </LegalSection>

      <LegalSection id="third-party-fees" title="4. Third-Party & Pass-Through Fees">
        <p>
          Court-access charges, clerk fees, motor vehicle agency fees, government
          charges, laboratory and collection-site fees, registry charges,
          international search fees, verification fees, vendor charges, and other
          third-party expenses are non-refundable once incurred or submitted. No
          refund or credit will be issued merely because:
        </p>
        <ul>
          <li>A search returns no records;</li>
          <li>Requested information cannot be located or verified;</li>
          <li>
            A source is unavailable, delayed, closed, nonresponsive, or requires
            additional information;
          </li>
          <li>
            A result is reported as pending, incomplete, inconclusive, canceled,
            unavailable, or unable to verify;
          </li>
          <li>The client does not use the report;</li>
          <li>
            The report does not contain the result anticipated by the client; or
          </li>
          <li>Completion takes longer than an estimated turnaround time.</li>
        </ul>
        <p>
          Turnaround times are estimates and are not guaranteed. Atlas is not
          responsible for delays caused by applicants, courts, government agencies,
          laboratories, employers, educational institutions, vendors, record
          repositories, or other sources outside Atlas&rsquo;s reasonable control.
        </p>
      </LegalSection>

      <LegalSection id="billing-adjustments" title="5. Limited Billing Adjustments">
        <p>Atlas will consider a billing adjustment only when Atlas verifies that:</p>
        <ul>
          <li>
            An Atlas system error generated and charged for a duplicate service
            without a corresponding client submission;
          </li>
          <li>
            Atlas charged the client for a service that was never initiated or
            performed;
          </li>
          <li>
            Atlas charged an incorrect amount because of a verified Atlas billing
            error; or
          </li>
          <li>A refund or adjustment is required by applicable law.</li>
        </ul>
        <p>
          Client-submitted duplicate orders, incorrect package selections, incorrect
          applicant information, changed hiring or leasing decisions, and orders
          submitted by an authorized account user are not Atlas billing errors. Any
          approved adjustment will be limited to the specific erroneous charge or
          unperformed component. All other charges remain payable.
        </p>
        <p>
          To the extent permitted by law, Atlas may provide an approved adjustment as
          an account credit rather than a cash refund. When applicable law or
          payment-network requirements require a refund, the refund will ordinarily
          be returned to the original payment method.
        </p>
      </LegalSection>

      <LegalSection id="billing-review" title="6. Billing-Review Requests">
        <p>
          A client requesting review of an alleged billing error must notify Atlas
          in writing within thirty (30) calendar days after the invoice or
          transaction date. The request must include:
        </p>
        <ul>
          <li>The client&rsquo;s name and account number;</li>
          <li>The applicant or Order ID;</li>
          <li>The invoice or transaction number;</li>
          <li>The specific charge and disputed amount;</li>
          <li>A description of the alleged error; and</li>
          <li>Any supporting documentation reasonably requested by Atlas.</li>
        </ul>
        <p>Billing contact:</p>
        <ul>
          <li>
            <strong>Atlas Screening LLC</strong>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@atlasscreening.com"
              className="text-[#058B74] hover:underline"
            >
              contact@atlasscreening.com
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
          <li>
            <strong>Mailing address:</strong> 108B New South Rd, Hicksville, NY
            11801
          </li>
        </ul>
        <p>
          Submitting a billing-review request does not suspend the client&rsquo;s
          obligation to pay any undisputed amount. Atlas will review the request
          using its ordering records, system logs, vendor records, communications,
          and other relevant information.
        </p>
      </LegalSection>

      <LegalSection id="consumer-disputes" title="7. Consumer Disputes & FCRA Rights">
        <p>
          This policy governs cancellations, refunds, billing adjustments, and
          financial transactions between Atlas and its clients. It does not limit,
          waive, condition, or interfere with any applicant&rsquo;s or
          consumer&rsquo;s rights under the FCRA or other applicable law.
        </p>
        <p>
          Consumers may dispute information in an Atlas consumer report that they
          believe is inaccurate or incomplete. Atlas will conduct qualifying
          reinvestigations without charge and take any correction, modification,
          deletion, notification, or disclosure action required by the FCRA.
          Consumers will not be charged for submitting a dispute or for any
          reinvestigation required by law.
        </p>
        <p>Consumer dispute contact:</p>
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
          <li>
            <strong>Mailing address:</strong> 108B New South Rd, Hicksville, NY
            11801
          </li>
        </ul>
        <p>
          A consumer dispute, reinvestigation, correction, modification, update, or
          deletion does not automatically establish a billing error or entitle the
          ordering client to a refund or account credit. Atlas&rsquo;s fulfillment of
          its FCRA responsibilities does not eliminate the client&rsquo;s obligation
          to pay for services properly ordered and performed. For full details, see
          our{" "}
          <a
            href="/dispute-resolution"
            className="text-[#058B74] hover:underline"
          >
            Dispute Resolution Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="chargebacks" title="8. Payment Disputes & Chargebacks">
        <p>
          Clients should submit alleged billing errors to Atlas for review before
          initiating a payment dispute or chargeback. A chargeback does not
          automatically eliminate the client&rsquo;s contractual payment obligation.
          Atlas reserves the right to provide order records, client certifications,
          authorization records, system logs, reports, communications, third-party
          invoices, and related documentation to the applicable payment processor,
          financial institution, or card network.
        </p>
        <p>
          Atlas may suspend account access or ordering privileges while an
          undisputed past-due balance or payment dispute remains unresolved, subject
          to applicable law and the applicable client agreement.
        </p>
      </LegalSection>

      <LegalSection
        id="controlling-agreements"
        title="9. Controlling Agreements"
      >
        <p>
          This policy supplements the Atlas Client Service Agreement, Terms of Use,
          pricing schedule, order form, and other applicable written agreements. If
          an executed written agreement directly conflicts with this policy, the
          executed agreement will control. Otherwise, this policy applies to all
          orders. See also our{" "}
          <a href="/terms" className="text-[#058B74] hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/client-certification" className="text-[#058B74] hover:underline">
            Client Certification
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="policy-changes" title="10. Policy Changes & Severability">
        <p>
          Atlas may update this policy prospectively. The version in effect when an
          order is submitted will govern that order unless applicable law requires
          otherwise. If any provision is determined to be invalid or unenforceable,
          it will be enforced to the maximum extent permitted by law, and the
          remaining provisions will remain in effect.
        </p>
        <p>
          <strong>Client acknowledgment.</strong> By submitting an order, the client
          acknowledges that processing may begin shortly after submission and agrees
          that, once an order is submitted and processing has commenced, the order is
          final, non-cancellable, and non-refundable, except as expressly provided in
          this policy or required by applicable law.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
