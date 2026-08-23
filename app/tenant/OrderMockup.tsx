"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * A faithful, looping mockup of the REAL Atlas Screening order flow
 * (app/order/new) for a TENANT screening. It mirrors that flow's design: one
 * question per screen, a centered eyebrow + title + hint, a thin top progress
 * line, and a Back / Continue footer — no phase rail, no step numbers.
 *
 * Values are typed in character-by-character (a real typewriter effect), and it
 * walks every step: applicant → contact → build the check → reason → consent →
 * review & pay → confirmation, then resets.
 *
 * A single 50 ms interval advances an elapsed clock so typing stays smooth and
 * everything stays in sync. Purely decorative (aria-hidden); snaps to the
 * confirmation under prefers-reduced-motion.
 *
 * Palette matches the app: ink #0F2A24 · muted #5B6B66 · faint #9BAAA4 ·
 * brand #01463A · accent #0E7C5A · input border #DDE6E1 · tint #E7F0ED.
 */

const STEP_MS = 50;
const LOOP = 15600;

const NAME = "Jordan A. Rivera";
const EMAIL = "jordan.rivera@email.com";
const PHONE = "(415) 555-0142";
const DOB = "04 / 19 / 1990";
const ORDER = "ATL-2026-4048";

// Timeline (ms into the loop).
const T = {
  contact: 3500,
  checks: 6600,
  reason: 8600,
  consent: 9900,
  review: 11200,
  done: 13800,
  nameS: 300, nameE: 1500,
  emailS: 1750, emailE: 3050,
  phoneS: 3800, phoneE: 4900,
  dobS: 5100, dobE: 6100,
  planAt: 7100, addonAt: 7900,
  tenantAt: 9000,
  consentAt: 10300,
  sigS: 11700, sigE: 12800, payAt: 13200,
};

const input = "w-full rounded-md border bg-white px-3.5 py-2.5 text-[13px] text-[#0F2A24]";
const labelCls = "block text-[12px] font-medium text-[#3C4C47] mb-1.5";

// Reveal a substring of `target` based on the elapsed clock.
function typed(target: string, start: number, end: number, e: number) {
  if (e < start) return "";
  if (e >= end) return target;
  const n = Math.floor(((e - start) / (end - start)) * target.length);
  return target.slice(0, n);
}
const between = (e: number, a: number, b: number) => e >= a && e < b;

export default function OrderMockup() {
  const [e, setE] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) {
      setE(T.done + 400);
      return;
    }
    const id = setInterval(() => setE((v) => (v + STEP_MS) % LOOP), STEP_MS);
    return () => clearInterval(id);
  }, []);

  const step = e < T.contact ? 0 : e < T.checks ? 1 : e < T.reason ? 2 : e < T.consent ? 3 : e < T.review ? 4 : e < T.done ? 5 : 6;
  const done = step === 6;
  const progressPct = Math.round((Math.min(step + 1, 7) / 7) * 100);
  const continueLabel = step === 5 ? "Pay $48 & submit" : "Continue";
  const pressing = between(e, T.payAt, T.payAt + 400);

  return (
    <div
      aria-hidden
      className="flex h-[540px] w-full max-w-full flex-col overflow-hidden rounded-2xl border border-[#ECEDE6] bg-white shadow-[0_40px_100px_-35px_rgba(1,70,58,0.5)] select-none"
    >
      {/* Header — Atlas logo + Tenant lockup, progress line */}
      <div className="relative flex flex-shrink-0 items-center justify-center gap-2.5 px-6 py-4">
        <Image src="/assets/atlas-logo.svg" alt="Atlas Screening" width={92} height={24} className="h-6 w-auto" />
        <span className="h-4 w-px bg-[#DDE6E1]" />
        <span className="text-[13px] font-semibold tracking-tight text-[#0E7C5A]">Tenant</span>
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#EDF1EF]">
          <div className="h-full rounded-r-full bg-[#01463A] transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      {/* Content — screens are stacked and cross-fade into each other for a
          smooth blended transition (pure opacity, no movement or zoom). */}
      <div className="relative min-h-0 flex-1 overflow-hidden">
        {[
          <Identity key="0" e={e} />,
          <Contact key="1" e={e} />,
          <Checks key="2" e={e} />,
          <Reason key="3" e={e} />,
          <Consent key="4" e={e} />,
          <Review key="5" e={e} />,
          <Done key="6" />,
        ].map((node, i) => (
          <div
            key={i}
            className="absolute inset-0 flex flex-col justify-center px-5 py-6 sm:px-8 transition-opacity duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ opacity: step === i ? 1 : 0 }}
          >
            {node}
          </div>
        ))}
      </div>

      {/* Footer — Back / Continue */}
      {!done && (
        <div className="flex flex-shrink-0 items-center justify-between border-t border-[#ECEDE6] px-5 py-4 sm:px-8">
          <span className={`text-[13px] font-medium text-[#5B6B66] ${step === 0 ? "opacity-0" : ""}`}>Back</span>
          <span className={`rounded-lg px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 ${pressing ? "scale-95 bg-[#0E7C5A]" : "bg-[#01463A]"}`}>
            {continueLabel}
          </span>
        </div>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- steps --- */

function Head({ eyebrow, title, hint }: { eyebrow: string; title: string; hint: string }) {
  return (
    <div className="mb-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0E7C5A]">{eyebrow}</p>
      <h3 className="mt-1.5 text-[22px] font-bold leading-tight tracking-tight text-[#0F2A24]">{title}</h3>
      <p className="mt-1.5 text-[13px] text-[#5B6B66]">{hint}</p>
    </div>
  );
}

function Field({ id, labelText, opt, value, typing }: { id: string; labelText: string; opt?: boolean; value: string; typing: boolean }) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {labelText} {opt ? <span className="text-[#9BAAA4]">(optional)</span> : <span className="text-[#B4462F]">*</span>}
      </label>
      <div className={`${input} flex min-h-[42px] items-center transition-all duration-300 ${typing ? "border-[#01463A] ring-2 ring-[#01463A]/10" : "border-[#DDE6E1]"}`}>
        <span className="truncate">{value}</span>
        {typing && <span className="ml-px inline-block h-4 w-px animate-pulse bg-[#01463A]" />}
      </div>
    </div>
  );
}

function Identity({ e }: { e: number }) {
  return (
    <div>
      <Head eyebrow="The applicant" title="Who are you screening?" hint="Start with your prospective tenant's name. Add an email to send them a copy." />
      <div className="mb-5 inline-flex rounded-full border border-[#E3ECE8] bg-[#F5F8F6] p-1 text-[12px]">
        <span className="rounded-full px-4 py-1.5 font-medium text-[#5B6B66]">Myself</span>
        <span className="rounded-full bg-[#01463A] px-4 py-1.5 font-medium text-white shadow-[0_1px_2px_rgba(15,42,36,0.18)]">The applicant</span>
      </div>
      <div className="space-y-4">
        <Field id="n" labelText="Applicant's full legal name" value={typed(NAME, T.nameS, T.nameE, e)} typing={between(e, T.nameS, T.nameE)} />
        <Field id="em" labelText="Email" opt value={typed(EMAIL, T.emailS, T.emailE, e)} typing={between(e, T.emailS, T.emailE)} />
      </div>
    </div>
  );
}

function Contact({ e }: { e: number }) {
  return (
    <div>
      <Head eyebrow="The applicant" title="Phone & date of birth" hint="Date of birth is required — it's how records are matched to the right person." />
      <div className="space-y-4">
        <Field id="ph" labelText="Phone" opt value={typed(PHONE, T.phoneS, T.phoneE, e)} typing={between(e, T.phoneS, T.phoneE)} />
        <Field id="db" labelText="Date of birth" value={typed(DOB, T.dobS, T.dobE, e)} typing={between(e, T.dobS, T.dobE)} />
      </div>
    </div>
  );
}

function Checks({ e }: { e: number }) {
  const base = [
    { n: "Starter", p: "$24.99" },
    { n: "Essential", p: "$34.99", on: e >= T.planAt },
    { n: "Complete", p: "$44.99" },
  ];
  const addons = [
    { n: "Identity Protection", p: "+$2.95", on: e >= T.addonAt },
    { n: "Rental history verification", p: "+$9.99", on: false },
  ];
  return (
    <div>
      <Head eyebrow="The screening" title="Build the tenant check" hint="Choose a base plan, then layer on any additional verifications you need." />
      <p className="mb-2 text-[12px] font-semibold text-[#0F2A24]">Base plan</p>
      <div className="grid grid-cols-3 gap-2.5">
        {base.map((b) => (
          <div key={b.n} className={`rounded-lg border p-3 text-center transition-all duration-500 ${b.on ? "border-[#01463A] bg-[#E7F0ED] ring-1 ring-[#01463A]/20" : "border-[#DDE6E1] bg-white"}`}>
            <p className={`text-[12px] font-semibold ${b.on ? "text-[#01463A]" : "text-[#5B6B66]"}`}>{b.n}</p>
            <p className={`text-[12px] ${b.on ? "text-[#0E7C5A]" : "text-[#9BAAA4]"}`}>{b.p}</p>
          </div>
        ))}
      </div>
      <p className="mb-2 mt-5 text-[12px] font-semibold text-[#0F2A24]">Add-ons</p>
      <div className="space-y-2.5">
        {addons.map((a) => (
          <div key={a.n} className={`flex items-center gap-3 rounded-lg border p-3 transition-all duration-500 ${a.on ? "border-[#01463A] bg-[#E7F0ED]" : "border-[#DDE6E1] bg-white"}`}>
            <span className={`flex h-5 w-5 items-center justify-center rounded border-2 ${a.on ? "border-[#01463A] bg-[#01463A]" : "border-[#DDE6E1]"}`}>{a.on && <Tick />}</span>
            <span className="flex-1 text-[12px] font-medium text-[#0F2A24]">{a.n}</span>
            <span className="text-[12px] font-semibold text-[#0E7C5A]">{a.p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Reason({ e }: { e: number }) {
  const reasons = [
    { n: "Employment", d: "Pre-employment screening" },
    { n: "Tenant", d: "Background check for renters", on: e >= T.tenantAt },
    { n: "Personal", d: "Check your own background" },
    { n: "Other", d: "Other purposes" },
  ];
  return (
    <div>
      <Head eyebrow="Compliance" title="Why are you running this check?" hint="Federal law requires a permissible purpose for every background check." />
      <div className="grid grid-cols-2 gap-2.5">
        {reasons.map((r) => (
          <div key={r.n} className={`rounded-lg border p-3.5 transition-all duration-500 ${r.on ? "border-[#01463A] bg-[#E7F0ED] ring-1 ring-[#01463A]/20" : "border-[#DDE6E1] bg-white"}`}>
            <div className="flex items-center justify-between">
              <p className={`text-[13px] font-semibold ${r.on ? "text-[#01463A]" : "text-[#0F2A24]"}`}>{r.n}</p>
              <span className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${r.on ? "border-[#01463A] bg-[#01463A]" : "border-[#DDE6E1]"}`}>{r.on && <Tick sm />}</span>
            </div>
            <p className="mt-1 text-[11px] text-[#5B6B66]">{r.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Consent({ e }: { e: number }) {
  const items = ["FCRA Disclosure", "Background Check Authorization", "Privacy Policy", "Electronic Consent"];
  const on = e >= T.consentAt;
  return (
    <div>
      <Head eyebrow="Compliance" title="Authorization & consent" hint="Please review each disclosure, then confirm your agreement to continue." />
      <div className="space-y-2.5">
        {items.map((c) => (
          <div key={c} className="flex items-center gap-3 rounded-lg border border-[#ECEDE6] bg-[#F6F8F6] px-3.5 py-3">
            <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-colors duration-300 ${on ? "border-[#01463A] bg-[#01463A]" : "border-[#DDE6E1]"}`}>{on && <Tick />}</span>
            <span className="flex-1 text-[12.5px] font-medium text-[#0F2A24]">{c}</span>
            <span className={`text-[11px] transition-colors ${on ? "text-[#0E7C5A]" : "text-[#9BAAA4]"}`}>{on ? "Reviewed" : "Review"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Review({ e }: { e: number }) {
  const rows = [
    { l: "Applicant", r: NAME },
    { l: "Purpose", r: "Tenant" },
    { l: "Plan", r: "Essential" },
    { l: "Add-ons", r: "Identity Protection" },
  ];
  return (
    <div>
      <Head eyebrow="Confirm" title="Review, sign & pay" hint="Give everything a final look, sign, and authorize the check." />
      <div className="divide-y divide-[#ECEDE6] rounded-lg border border-[#ECEDE6]">
        {rows.map((row) => (
          <div key={row.l} className="flex items-center justify-between gap-4 px-4 py-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#9BAAA4]">{row.l}</span>
            <span className="text-[12.5px] font-medium text-[#0F2A24]">{row.r}</span>
          </div>
        ))}
        <div className="flex items-center justify-between gap-4 bg-[#F6F8F6] px-4 py-3">
          <span className="text-[12px] font-semibold text-[#0F2A24]">Total</span>
          <span className="text-[17px] font-extrabold text-[#01463A]">$47.93</span>
        </div>
      </div>
      <div className="mt-4 rounded-md border border-[#DDE6E1] bg-white px-4 py-3">
        <p className="text-[11px] text-[#9BAAA4]">Signature</p>
        <p className="flex items-center font-[cursive] text-[16px] text-[#0F2A24]">
          {typed(NAME, T.sigS, T.sigE, e)}
          {between(e, T.sigS, T.sigE) && <span className="ml-px inline-block h-4 w-px animate-pulse bg-[#01463A]" />}
        </p>
      </div>
    </div>
  );
}

function Done() {
  return (
    <div className="flex flex-col items-center justify-center py-4 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E7F0ED] text-[#0E7C5A]">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11" /></svg>
      </span>
      <h3 className="mt-4 text-[22px] font-bold tracking-tight text-[#0F2A24]">Tenant check submitted</h3>
      <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-[#5B6B66]">
        {NAME} has been invited to complete their details. You&apos;ll be notified
        as database results and the verified report come in.
      </p>
      <span className="mt-4 rounded-full bg-[#F6F8F6] px-4 py-1.5 text-[11px] font-semibold text-[#01463A]">Order {ORDER}</span>
    </div>
  );
}

function Tick({ sm }: { sm?: boolean }) {
  const s = sm ? 8 : 10;
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5l3 3 7-7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
