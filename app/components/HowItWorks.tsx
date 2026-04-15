const steps = [
  {
    num: "01",
    title: "Select Package",
    desc: "Choose a predefined package or build a custom bundle in your dashboard.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Enter Applicant Details",
    desc: "Provide only the candidate name and email — the system handles the rest.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="12" r="2.5" />
        <path d="M6 17c0-2 1.5-3 3-3s3 1 3 3" />
        <path d="M15 10h4M15 13h4M15 16h3" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Automated Invitation",
    desc: "Atlas instantly dispatches a secure, time-limited access link to the applicant.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M12 18v-6M9 15l3-3 3 3" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Secure Submission",
    desc: "Candidate gives consent, verifies identity, and triggers smart payment processing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M8 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Final Report Delivery",
    desc: "Receive email and dashboard alerts the moment the branded PDF report is ready.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13l2 2 4-4" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-20 pb-4 px-6 bg-[#01463A] overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#058B74] mb-3">
            Process
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            How the Atlas workflow operates.
          </h2>
          <p className="mt-5 text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            Move candidates from an initial invitation to a completed report in a matter
            of days. We guide applicants through a secure, mobile-optimized process so
            you can hire and lease with total confidence.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-0 relative z-10">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group flex flex-col items-center text-center cursor-default"
              >
                {/* Icon box */}
                <div className="relative mb-8">
                  {/* Glow halo */}
                  <div className="absolute inset-0 rounded-2xl bg-[#058B74] opacity-0 blur-xl scale-90 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500" />

                  <div className="relative w-[76px] h-[76px] rounded-2xl flex items-center justify-center bg-white/10 text-white ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:bg-[#058B74] group-hover:ring-[#058B74] group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#058B74]/40">
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                    </span>
                  </div>

                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center bg-[#058B74] text-white ring-2 ring-[#01463A] transition-all duration-300 group-hover:bg-white group-hover:text-[#058B74] group-hover:scale-110">
                    {step.num}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold mb-2 text-white transition-colors group-hover:text-[#058B74]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed max-w-[180px] text-white/50 line-clamp-2 transition-colors group-hover:text-white/70">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-24 text-center text-[9px] leading-relaxed text-white/30">
          *All screenings are conducted in accordance with the Fair Credit Reporting Act (FCRA), EEOC, and applicable state laws.
          By using Atlas Screening you agree to our{" "}
          <a href="/terms" className="underline hover:text-white/60 transition-colors">Terms of Service</a>{" "}
          and{" "}
          <a href="/privacy" className="underline hover:text-white/60 transition-colors">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}
