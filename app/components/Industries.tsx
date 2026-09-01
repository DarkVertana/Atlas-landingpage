"use client";

import { useEffect, useState } from "react";
import SectionHeader from "./ui/SectionHeader";

/* The platform — built to screen at scale. Distinct from HowItWorks (the
   per-hire lifecycle) and Services (the check types): this section sells the
   software's leverage — order in bulk, automate the chasing, plug into your
   stack — so one hire or hundreds costs the same effort. Left = three capability
   pillars; right = a purpose-built HTML visual per pillar (not a screenshot). */

type Stage = {
  key: string;
  num: string;
  title: string;
  blurb: string;
};

const STAGES: Stage[] = [
  {
    key: "bulk",
    num: "01",
    title: "Order in bulk",
    blurb:
      "Add a whole batch of candidates at once, pick one package, and send. No re-keying, no spreadsheets. One order covers your entire hiring round.",
  },
  {
    key: "auto",
    num: "02",
    title: "Invites that follow up for you",
    blurb:
      "Atlas sends each candidate a secure invite and chases with automatic reminders, so checks keep moving without you following up with anyone.",
  },
  {
    key: "api",
    num: "03",
    title: "Fits your stack, at any volume",
    blurb:
      "Connect your ATS or HRIS, trigger checks by API, and get results back the moment they're ready. Most checks clear within 24 hours, whether it's one or a hundred.",
  },
];

const AUTOPLAY_MS = 5200;

/* ── Designed visuals (not screenshots) ─────────────────────────────── */

const CARD = "rounded-2xl border border-[#E4EAE6] bg-white shadow-[0_30px_70px_-40px_rgba(1,70,58,0.4)]";

const initials = (n: string) => n.split(" ").map((w) => w[0]).join("");

/* One looping elapsed-clock per visual (same engine as the tenant OrderMockup):
   a single interval advances `e` in ms, and every animated state is derived from
   time thresholds — no per-element timers. Only the active card is mounted, so
   exactly one interval ever runs. Reduced-motion snaps to the resolved frame. */
const CLOCK_STEP = 60;
function useClock(loop: number) {
  const [e, setE] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setE(loop - 1);
      return;
    }
    const id = window.setInterval(() => setE((v) => (v + CLOCK_STEP) % loop), CLOCK_STEP);
    return () => window.clearInterval(id);
  }, [loop]);
  return e;
}

const between = (e: number, a: number, b: number) => e >= a && e < b;

// Reveal a substring of `target` based on the elapsed clock (typewriter).
function typed(target: string, start: number, end: number, e: number) {
  if (e < start) return "";
  if (e >= end) return target;
  const n = Math.floor(((e - start) / (end - start)) * target.length);
  return target.slice(0, n);
}

// Blinking caret shown while a field is actively typing.
function Caret() {
  return <span className="ml-px inline-block h-3.5 w-px animate-pulse bg-current align-middle" />;
}

/* 01 — a batch of candidates gets added, checked, and sent, on a loop. */
const BULK_PEOPLE = [
  { n: "Taylor Brooks", e: "taylor.brooks@email.com" },
  { n: "Sam Rivera", e: "sam.rivera@email.com" },
  { n: "Casey Nguyen", e: "casey.nguyen@email.com" },
  { n: "Jordan Lee", e: "jordan.lee@email.com" },
];
const BULK_APPEAR = [500, 1150, 1800, 2450]; // when each row slides in
const BULK_LOOP = 6800;
const BULK_PRESS = 4300; // Send button press
const BULK_SENT = 4750; // switches to the sent confirmation

function BulkVisual() {
  const e = useClock(BULK_LOOP);
  const revealed = BULK_APPEAR.filter((t) => e >= t).length;
  const pressing = between(e, BULK_PRESS, BULK_SENT);
  const sent = e >= BULK_SENT;

  return (
    <div className={`${CARD} p-5 sm:p-6`}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#5B6B64]">Bulk order</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF3EF] px-2.5 py-1 text-[11px] font-semibold tabular-nums text-[#0B7A4B]">
          Standard × {20 + revealed}
        </span>
      </div>
      <div className="mt-4 space-y-2">
        {BULK_PEOPLE.map((p, i) => {
          const shown = i < revealed;
          const checked = e >= BULK_APPEAR[i] + 280;
          return (
            <div
              key={p.e}
              className="flex items-center gap-3 rounded-lg border border-[#EEF2EF] bg-[#FBFCFB] px-3 py-2.5 transition-all duration-500 ease-out"
              style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(8px)" }}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#01463A]/[0.06] text-[11px] font-semibold text-[#01463A]">
                {initials(p.n)}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-medium text-[#122019]">{p.n}</div>
                <div className="truncate font-mono text-[11px] text-[#6B7A73]">{p.e}</div>
              </div>
              <span
                className="flex h-4 w-4 items-center justify-center rounded-full bg-[#058B74]/10 text-[#058B74] transition-all duration-300"
                style={{ opacity: checked ? 1 : 0, transform: checked ? "scale(1)" : "scale(0.4)" }}
              >
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          );
        })}
        <div className="px-3 py-1 text-center font-mono text-[11px] tabular-nums text-[#6B7A73]">
          + {24 - revealed} more candidates
        </div>
      </div>
      <button
        className={`mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 ${
          sent ? "bg-[#0B7A4B]" : "bg-[#01463A]"
        } ${pressing ? "scale-[0.98]" : ""}`}
      >
        {sent ? (
          <>
            24 secure invites sent
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        ) : (
          <>
            Send 24 secure invites
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </>
        )}
      </button>
    </div>
  );
}

/* 02 — invites and reminders that fire automatically, on a loop. Each row walks
   Invited → Reminded (a live ping fires) → Completed at its own time. */
type AutoStatus = "invited" | "remind" | "done";
const AUTO_PILL: Record<AutoStatus, { t: string; b: string; d: string; label: string; meta: string }> = {
  invited: { t: "text-[#1E5A8A]", b: "bg-[#E6F0F8]", d: "#3E92CC", label: "Invited", meta: "Invite sent · 9:02 AM" },
  remind: { t: "text-[#875D0F]", b: "bg-[#FBF2E0]", d: "#E9A23B", label: "Reminded", meta: "Reminder sent · +48h" },
  done: { t: "text-[#0B7A4B]", b: "bg-[#E4F5EC]", d: "#12A365", label: "Completed", meta: "Completed · just now" },
};
const AUTO_LOOP = 7200;
const AUTO_ROWS = [
  { n: "Jordan Lee", to: (e: number): AutoStatus => (e < 1300 ? "invited" : "done") },
  { n: "Priya Nair", to: (e: number): AutoStatus => (e < 2600 ? "invited" : e < 4200 ? "remind" : "done") },
  { n: "Marcus Cole", to: (e: number): AutoStatus => (e < 4000 ? "invited" : e < 5900 ? "remind" : "done") },
];

function AutoVisual() {
  const e = useClock(AUTO_LOOP);
  return (
    <div className={`${CARD} p-5 sm:p-6`}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#5B6B64]">Automations</span>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF3EF] px-2.5 py-1 text-[11px] font-semibold text-[#0B7A4B]">
          Auto-remind
          <span className="relative inline-flex h-3.5 w-6 items-center rounded-full bg-[#058B74]">
            <span className="absolute right-0.5 h-2.5 w-2.5 rounded-full bg-white" />
          </span>
        </span>
      </div>
      <div className="mt-4 space-y-2">
        {AUTO_ROWS.map((r) => {
          const s = r.to(e);
          const p = AUTO_PILL[s];
          return (
            <div key={r.n} className="flex items-center gap-3 rounded-lg border border-[#EEF2EF] bg-[#FBFCFB] px-3 py-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#01463A]/[0.06] text-[11px] font-semibold text-[#01463A]">
                {initials(r.n)}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-medium text-[#122019]">{r.n}</div>
                <div className="font-mono text-[11px] text-[#6B7A73] transition-colors duration-300">{p.meta}</div>
              </div>
              <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-300 ${p.b} ${p.t}`}>
                <span className="relative flex h-1.5 w-1.5">
                  {s === "remind" && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: p.d }} />
                  )}
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ backgroundColor: p.d }} />
                </span>
                {p.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#F1F6F3] px-3 py-2.5 text-[12px] text-[#3A5B50]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8v4l3 2" /><circle cx="12" cy="12" r="9" />
        </svg>
        Reminders fire automatically, with no follow-up on your end.
      </div>
    </div>
  );
}

/* 03 — connect your stack / trigger by API. The request types itself out, then
   the webhook response resolves from processing → cleared, on a loop. */
const API_LOOP = 7400;
const API_T = {
  pathS: 300, pathE: 900,
  open: 1100,
  pkgS: 1300, pkgE: 2300,
  candS: 2500, candE: 3900,
  close: 4100,
  resp: 4700, // 200 processing
  cleared: 5900, // status flips to cleared + footer confirms
};

function ApiVisual() {
  const e = useClock(API_LOOP);
  const path = typed("/v1/checks", API_T.pathS, API_T.pathE, e);
  const pkg = typed("standard", API_T.pkgS, API_T.pkgE, e);
  const cand = typed("taylor@email.com", API_T.candS, API_T.candE, e);
  const cleared = e >= API_T.cleared;

  return (
    <div className={`${CARD} overflow-hidden`}>
      <div className="flex flex-wrap items-center gap-2 border-b border-[#EEF2EF] px-5 py-4 sm:px-6">
        {["Your ATS", "HRIS", "Webhooks"].map((c) => (
          <span key={c} className="inline-flex items-center gap-1.5 rounded-lg border border-[#E4EAE6] bg-[#FBFCFB] px-2.5 py-1.5 text-[12px] font-medium text-[#3A4A43]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#058B74]" />
            {c}
          </span>
        ))}
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-[#6B7A73]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#12A365]" />
          Connected
        </span>
      </div>
      {/* API snippet — typed out on the clock */}
      <div className="min-h-[168px] bg-[#02120d] px-5 py-4 font-mono text-[12px] leading-relaxed sm:px-6">
        <div className="text-[#5EE3C0]">
          POST <span className="text-white/85">{path}</span>
          {between(e, API_T.pathS, API_T.pathE) && <Caret />}
        </div>
        <div className="text-white/50" style={{ opacity: e >= API_T.open ? 1 : 0 }}>{"{"}</div>
        <div className="pl-4 text-white/80" style={{ opacity: e >= API_T.pkgS ? 1 : 0 }}>
          {'"package": '}<span className="text-[#bff7e8]">{`"${pkg}"`}</span>,
          {between(e, API_T.pkgS, API_T.pkgE) && <Caret />}
        </div>
        <div className="pl-4 text-white/80" style={{ opacity: e >= API_T.candS ? 1 : 0 }}>
          {'"candidate": '}<span className="text-[#bff7e8]">{`"${cand}"`}</span>
          {between(e, API_T.candS, API_T.candE) && <Caret />}
        </div>
        <div className="text-white/50" style={{ opacity: e >= API_T.close ? 1 : 0 }}>{"}"}</div>
        <div className="mt-2 transition-opacity duration-300" style={{ opacity: e >= API_T.resp ? 1 : 0 }}>
          <span className="text-white/40">→ 200 </span>
          <span className={cleared ? "text-[#5EE3C0]" : "text-[#E9C46A]"}>
            {cleared ? '{ "status": "cleared" }' : '{ "status": "processing" }'}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-[#EEF2EF] bg-[#FBFCFB] px-5 py-4 sm:px-6">
        <span className="font-mono text-[11px] text-[#6B7A73]">Results by webhook the moment they clear</span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold transition-all duration-300 ${
            cleared ? "bg-[#E4F5EC] text-[#0B7A4B]" : "bg-[#F1F3F2] text-[#9BAAA4]"
          }`}
        >
          Most clear &lt;24h
        </span>
      </div>
    </div>
  );
}

const VISUALS: Record<string, () => React.ReactElement> = {
  bulk: BulkVisual,
  auto: AutoVisual,
  api: ApiVisual,
};

export default function Industries() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % STAGES.length), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused]);

  const Visual = VISUALS[STAGES[active].key];

  return (
    <section id="platform" className="relative overflow-hidden bg-white px-5 py-16 sm:px-6 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-24 h-[460px] w-[640px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(5,139,116,0.08), transparent)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          align="center"
          eyebrow="The platform"
          title="Built to screen at scale."
          intro="One hire or a hundred, the effort is the same. Order in bulk, let Atlas chase the invites, and plug results straight into the tools you already use."
        />

        <div
          className="mt-16 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* ── Left: workflow selector ── */}
          <div className="flex flex-col">
            {STAGES.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setActive(i)}
                  onFocus={() => { setPaused(true); setActive(i); }}
                  onBlur={() => setPaused(false)}
                  aria-pressed={on}
                  className="group relative border-t border-[#E4EAE6] py-6 text-left last:border-b focus-visible:outline-none sm:py-7"
                >
                  {/* active rail */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-0 h-full w-0.5 bg-[#058B74] transition-transform duration-500 ease-out ${on ? "scale-y-100" : "scale-y-0"}`}
                    style={{ transformOrigin: "top" }}
                  />
                  <div className="flex items-start gap-4 pl-5">
                    <span className={`mt-0.5 font-mono text-[13px] font-semibold tabular-nums transition-colors ${on ? "text-[#058B74]" : "text-[#6B7A73]"}`}>
                      {s.num}
                    </span>
                    <div className="flex-1">
                      <h3 className={`text-[19px] font-semibold transition-colors sm:text-[21px] ${on ? "text-[#01463A]" : "text-[#4A5C55] group-hover:text-[#01463A]"}`}>
                        {s.title}
                      </h3>
                      {/* expand copy + facts only for the active stage */}
                      <div className={`grid transition-all duration-500 ease-out ${on ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="overflow-hidden">
                          <p className="max-w-md text-[13.5px] leading-relaxed text-[#5B6B64]">{s.blurb}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}

            <a
              href="/contact"
              className="group mt-8 inline-flex w-max items-center gap-2 rounded-xl bg-[#01463A] px-6 py-3 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#058B74]"
            >
              Start screening
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          {/* ── Right: designed visual for the active stage ── */}
          <div className="relative lg:sticky lg:top-28">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#058B74]/8 to-transparent blur-2xl" />
            <div key={active} className="platform-visual-in">
              <Visual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
