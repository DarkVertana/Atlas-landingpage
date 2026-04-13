const faqs = [
  {
    q: "How long does a background check take?",
    a: "Most reports are delivered within 24 hours. Criminal record searches, identity verification, and motor vehicle records often complete within minutes, while employment and education verifications may take 1–3 business days depending on the source.",
  },
  {
    q: "Are Atlas reports FCRA compliant?",
    a: "Yes. Every report follows strict Fair Credit Reporting Act (FCRA) guidelines, EEOC guidance, and applicable state and local laws. We provide applicant consent, adverse action workflows, and audit logging by default.",
  },
  {
    q: "What industries do you serve?",
    a: "Atlas supports employers, property managers, staffing agencies, healthcare, transportation, financial services, education, and nonprofit organizations. Packages can be tailored to industry-specific risk profiles.",
  },
  {
    q: "How is AI used in your screening?",
    a: "Machine learning assists with document verification, anomaly detection across identity and employment data, risk scoring, and continuous post-hire monitoring. Every AI-assisted decision remains fully reviewable and FCRA-compliant.",
  },
  {
    q: "Is candidate data secure?",
    a: "All data is encrypted in transit and at rest, hosted on SOC 2 Type II certified infrastructure, with role-based access controls and full audit trails. Candidate information is retained only as long as legally required.",
  },
  {
    q: "Do you integrate with existing HR or ATS tools?",
    a: "Yes. Atlas offers a REST API and native integrations with common applicant tracking systems and property-management platforms, plus bulk-order CSV workflows for high-volume hiring.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
            Frequently asked questions.
          </h2>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Answers to the most common questions about Atlas Screening — from turnaround times
            to compliance. Still stuck?{" "}
            <a href="/contact" className="text-[#058B74] font-semibold hover:underline">
              Get in touch
            </a>.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-gray-200 bg-white hover:border-[#058B74]/40 hover:shadow-md hover:shadow-[#058B74]/5 open:border-[#058B74]/40 open:shadow-md open:shadow-[#058B74]/5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5">
                <span className="text-sm md:text-base font-semibold text-[#01463A] group-hover:text-[#058B74] group-open:text-[#058B74] transition-colors">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#058B74]/10 text-[#058B74] flex items-center justify-center ring-1 ring-inset ring-[#058B74]/10 transition-all duration-300 group-open:rotate-45 group-open:bg-[#058B74] group-open:text-white group-open:ring-[#058B74]">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 -mt-1 text-sm text-gray-500 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
