const faqs = [
  {
    q: "How long does a background check take?",
    a: "Most standard background checks and SSN traces complete within 24 hours. Complex investigative verifications require two to three business days. Our platform provides real-time status tracking directly in your dashboard so your team always knows where a candidate stands.",
  },
  {
    q: "Are Atlas reports FCRA compliant?",
    a: "Yes. Strict adherence to the Fair Credit Reporting Act is engineered directly into our platform. We automate candidate consent and deliver all mandated disclosure documents before initiating any database search.",
  },
  {
    q: "What is required from the employer to start a check?",
    a: "We designed our platform for absolute minimal client effort. You only need to log into your dashboard, select your preferred screening package, and submit the applicant name and email address. The automated system handles the entire data collection process from there.",
  },
  {
    q: "How does the billing and payment system work?",
    a: "Our smart payment processing ensures you only pay for active screenings. Automated billing triggers exactly when the applicant completes their submission flow and provides consent, so you never pay for candidates who drop out of onboarding early.",
  },
  {
    q: "Are applicant documents and selfies secure?",
    a: "We secure all applicant and employer information using advanced encryption protocols. Sensitive data is stored on encrypted servers, with strict role-based access controls so only authorized personnel can view completed consumer reports.",
  },
  {
    q: "What additional screening add-ons are available?",
    a: "You can customize any predefined package with specific verifications. We offer Global Watchlist checks, Tenant Screening, and complete Credit Reports at an upfront and transparent price of $39.99 each.",
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
