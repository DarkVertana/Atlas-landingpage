/**
 * A rendered (not screenshotted) mock of the "Order Details" panel a client
 * sees after a candidate submits. Built as real markup so the fields — subject
 * info, email, package, and included checks — stay crisp at any size instead of
 * a low-res screenshot with a modal awkwardly layered over a table.
 *
 * The data here is illustrative sample content only. Per Atlas' CRA position,
 * the panel reports what was found and requested; it does not render a hiring
 * decision.
 */
export default function OrderDetailsMockup() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#F4F7F5] text-left">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-[#E1E6E2] bg-white px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E3E7E4]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E3E7E4]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E3E7E4]" />
        <span className="ml-3 text-[11px] font-semibold text-[#5B6B64]">Order details</span>
        <span className="ml-auto font-mono text-[10px] text-[#9AA8A1]">BGC-2026-003</span>
      </div>

      {/* body */}
      <div className="flex-1 space-y-3 overflow-hidden px-4 py-3.5 sm:px-5">
        {/* status banner */}
        <div className="flex items-center gap-2.5 rounded-xl border border-[#058B74]/20 bg-[#058B74]/[0.07] px-3.5 py-2.5">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#058B74] text-white">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5 9-11" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-[12px] font-semibold text-[#01463A]">Submission received</p>
            <p className="truncate text-[10.5px] text-[#5B6B64]">Applicant completed the secure flow</p>
          </div>
          <span className="ml-auto text-[10.5px] font-semibold text-[#058B74]">View report</span>
        </div>

        {/* subject information */}
        <div>
          <p className="mb-1.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#9AA8A1]">
            Subject information
          </p>
          <div className="grid grid-cols-2 gap-2.5 rounded-xl border border-[#E1E6E2] bg-white p-3">
            <Field label="Full name" value="Michael Wilson" />
            <Field label="Email address" value="m.wilson@example.com" />
            <Field label="Phone" value="(415) 555-0148" />
            <Field label="Address history" value="3 addresses · 7 yrs" />
          </div>
        </div>

        {/* order information */}
        <div>
          <p className="mb-1.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#9AA8A1]">
            Order information
          </p>
          <div className="grid grid-cols-4 gap-2.5 rounded-xl border border-[#E1E6E2] bg-white p-3">
            <Field label="Package" value="Starter" />
            <Field label="Ordered" value="Jan 15, 2026" />
            <Field label="Order ID" value="BGC-2026-003" mono />
            <Field label="Amount" value="$59.00" />
          </div>
        </div>

        {/* checks included */}
        <div>
          <p className="mb-1.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#9AA8A1]">
            Checks included
          </p>
          <div className="grid grid-cols-2 gap-2 rounded-xl border border-[#E1E6E2] bg-white p-3">
            <Check label="National Criminal Database" />
            <Check label="Sex Offender Registry" />
            <Check label="SSN Trace & Verification" />
            <Check label="Government ID + Selfie" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="min-w-0">
      <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-[#9AA8A1]">{label}</p>
      <p className={`mt-0.5 truncate text-[12px] font-semibold text-[#1B2C25] ${mono ? "font-mono" : ""}`}>
        {value}
      </p>
    </div>
  );
}

function Check({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#058B74]/10 text-[#058B74]">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12l5 5 9-11" />
        </svg>
      </span>
      <span className="truncate text-[11px] font-medium text-[#1B2C25]">{label}</span>
    </div>
  );
}
