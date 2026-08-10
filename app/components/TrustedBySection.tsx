"use client";

/**
 * Honest trust strip. We do NOT claim specific companies as customers —
 * instead we surface the compliance standards and safeguards the platform
 * actually operates under. Replace/adjust any badge that is not yet true for
 * your organization (see notes in the component prompt).
 */
export default function TrustedBySection() {
  const standards = [
    { label: "FCRA compliant", detail: "Fair Credit Reporting Act" },
    { label: "SOC 2", detail: "Security controls" },
    { label: "AES-256", detail: "Encryption at rest" },
    { label: "EEOC aligned", detail: "Adjudication guidelines" },
    { label: "PBSA member", detail: "Prof. Background Screening Assoc." },
  ];

  return (
    <section className="relative bg-white pt-6 pb-14 sm:pt-8 sm:pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-gray-600">
            Built for compliance and data security
          </p>
        </div>

        <ul className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4">
          {standards.map((s) => (
            <li
              key={s.label}
              className="flex min-w-[150px] flex-1 flex-col items-center rounded-xl border border-gray-200 bg-white px-5 py-4 text-center"
            >
              <span className="flex items-center gap-2 text-base font-bold text-[#01463A]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="text-[#058B74]"
                >
                  <path
                    d="M3 8.5l3 3 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {s.label}
              </span>
              <span className="mt-1 text-xs text-gray-600">{s.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
