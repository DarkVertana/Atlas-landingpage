/* Coded recreation of the Atlas customer dashboard "Good evening" screen —
   replaces the static screenshot in ProductShowcase so it stays crisp at any
   size. Purely presentational: fixed sample data, no interactivity. The names
   and numbers here are illustrative sample data, not a real consumer report. */

const nav = ["Home", "Reports", "Order Checks", "Packages", "Support"];

const steps = [
  { label: "Submitted", state: "done" },
  { label: "Verifying", state: "done" },
  { label: "Final review", state: "active" },
  { label: "Ready", state: "todo" },
] as const;

function AtlasWordmark() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[13px] font-bold tracking-tight text-[#01463A]">Atlas</span>
      <span className="h-1.5 w-1.5 rounded-full bg-[#058B74]" />
    </div>
  );
}

export default function CustomerDashboardMockup() {
  return (
    <div className="w-full select-none overflow-hidden rounded-2xl bg-white text-left ring-1 ring-gray-200">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
        <AtlasWordmark />
        <nav className="hidden items-center gap-4 text-[11px] font-medium text-gray-500 md:flex">
          {nav.map((n, i) => (
            <span key={n} className={i === 0 ? "text-[#01463A]" : ""}>
              {n}
            </span>
          ))}
        </nav>
        <div className="flex h-6 w-24 items-center rounded-full bg-gray-100 px-2.5 text-[10px] text-gray-400">
          Search
        </div>
      </div>

      <div className="space-y-4 p-5">
        {/* Green welcome card */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#01463A] to-[#058B74] p-5 text-white">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          <div className="relative">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Atlas Screening
            </p>
            <div className="mt-2 flex items-start justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold leading-tight">Good evening, Jordan</h4>
                <p className="mt-1 max-w-xs text-[11px] leading-relaxed text-white/70">
                  Your background check is on its way. Here&apos;s exactly where it
                  stands today.
                </p>
              </div>
              <span className="hidden shrink-0 items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-[11px] font-semibold text-[#01463A] sm:inline-flex">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                New background check
              </span>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3EE8BE]" />
                Bank-level encryption
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3EE8BE]" />
                FCRA compliant
              </span>
            </div>
          </div>
        </div>

        {/* Candidate row */}
        <div className="rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#058B74]/10 text-[12px] font-semibold text-[#058B74]">
                AM
              </span>
              <div>
                <p className="text-[13px] font-semibold text-[#01463A]">Alex Morgan</p>
                <p className="text-[10.5px] text-gray-400">Standard · #9002-0026-4042</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#058B74]/10 px-2.5 py-1 text-[10px] font-semibold text-[#058B74]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#058B74]" />
              On track
            </span>
          </div>

          {/* Progress tracker */}
          <div className="mt-5 flex items-center">
            {steps.map((s, i) => (
              <div key={s.label} className="flex flex-1 flex-col items-center last:flex-none">
                <div className="flex w-full items-center">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white ${
                      s.state === "todo" ? "bg-gray-200 text-gray-400" : "bg-[#058B74]"
                    }`}
                  >
                    {s.state === "active" ? (
                      <span className="h-2 w-2 rounded-full bg-white" />
                    ) : s.state === "done" ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5 9-11" />
                      </svg>
                    ) : (
                      <span className="text-[10px] font-semibold">{i + 1}</span>
                    )}
                  </span>
                  {i < steps.length - 1 && (
                    <span
                      className={`h-0.5 flex-1 ${
                        steps[i + 1].state === "todo" ? "bg-gray-200" : "bg-[#058B74]"
                      }`}
                    />
                  )}
                </div>
                <span
                  className={`mt-2 text-[9.5px] font-medium ${
                    s.state === "todo" ? "text-gray-400" : "text-[#01463A]"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10.5px] leading-relaxed text-gray-400">
            Most checks finish within two to three days. We&apos;ll email you when
            it&apos;s done.
          </p>
          <span className="shrink-0 rounded-lg border border-gray-200 px-3 py-1.5 text-[10.5px] font-semibold text-[#01463A]">
            Track details
          </span>
        </div>
      </div>
    </div>
  );
}
