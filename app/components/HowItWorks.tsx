"use client";

import Reveal from "./Reveal";
import SectionHeader from "./ui/SectionHeader";

// Oversized numerals are the whole design device. One brand accent (green),
// spent through a single satisfying interaction: the numeral fills on hover.
type Step = {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Select a package",
    desc: "Choose a predefined package or build a custom bundle from your dashboard.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Enter applicant details",
    desc: "Provide the candidate's name and email, and the system handles the rest.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="12" r="2.5" />
        <path d="M6 17c0-2 1.5-3 3-3s3 1 3 3" />
        <path d="M15 10h4M15 13h4M15 16h3" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Automated invitation",
    desc: "Atlas dispatches a secure, time-limited access link to the applicant.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M12 18v-6M9 15l3-3 3 3" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Secure submission",
    desc: "The candidate consents, verifies identity, and payment is processed.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M8 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Report delivery",
    desc: "Email and dashboard alerts fire the moment the branded PDF is ready.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13l2 2 4-4" />
      </svg>
    ),
  },
];

function Row({ step }: { step: Step }) {
  return (
    <div className="group relative grid cursor-default grid-cols-[auto_1fr] items-center gap-6 border-t border-[#E1E6E2] py-7 transition-colors duration-300 hover:border-[#058B74]/40 sm:gap-10 sm:py-9">
      {/* Oversized numeral — outline base + green fill that wipes up on hover */}
      <span className="relative block select-none text-[56px] font-extrabold leading-none tracking-tight sm:text-[84px] md:text-[104px]">
        <span className="block [-webkit-text-stroke:1.5px_#CDD4CF] [color:transparent] transition-all duration-300 group-hover:[-webkit-text-stroke-color:#058B74]">
          {step.num}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block text-[#058B74] [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[clip-path:inset(0%_0_0_0)]"
        >
          {step.num}
        </span>
      </span>

      {/* Copy */}
      <div className="transition-transform duration-300 group-hover:translate-x-1">
        <div className="flex items-center gap-2.5 text-[#0F1B17]">
          <span className="text-[#5B6B64] transition-colors duration-300 group-hover:text-[#058B74]">
            {step.icon}
          </span>
          <h3 className="text-[17px] font-semibold sm:text-[19px]">{step.title}</h3>
        </div>
        <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-[#5B6B64] sm:text-sm">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#F7F8F6] px-5 py-16 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="How it works"
          title="Five steps, one seamless route."
          intro="From invitation to cleared report: automated, tracked, and mobile-first the whole way."
        />

        {/* Numbered rows */}
        <div className="mt-16 border-b border-[#E1E6E2]">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 80} variant="up">
              <Row step={step} />
            </Reveal>
          ))}
        </div>

        <p className="mt-16 max-w-3xl text-[11px] leading-relaxed text-[#5B6B64]">
          All screenings are conducted in accordance with the Fair Credit Reporting Act (FCRA), EEOC, and applicable state laws.
          By using Atlas Screening you agree to our{" "}
          <a href="/terms" className="text-[#5B6B64] underline underline-offset-2 transition-colors hover:text-[#058B74]">Terms of Service</a>{" "}
          and{" "}
          <a href="/privacy" className="text-[#5B6B64] underline underline-offset-2 transition-colors hover:text-[#058B74]">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}
