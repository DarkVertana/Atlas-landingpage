"use client";

import { useRef, useCallback, useEffect, useState } from "react";

type Candidate = {
  name: string;
  role: string;
  status: "Complete" | "Pending" | "Flagged";
  risk: number | null;
  checks: { name: string; done: boolean }[];
  date: string;
};

const allCandidates: Candidate[] = [
  {
    name: "Sarah Johnson", role: "Software Engineer", status: "Complete", risk: 12, date: "Mar 24",
    checks: [
      { name: "Identity Verification", done: true },
      { name: "Criminal Record", done: true },
      { name: "Employment History", done: true },
      { name: "Education Check", done: true },
      { name: "Reference Check", done: true },
    ],
  },
  {
    name: "Michael Chen", role: "Product Manager", status: "Pending", risk: null, date: "Mar 26",
    checks: [
      { name: "Identity Verification", done: true },
      { name: "Criminal Record", done: true },
      { name: "Employment History", done: true },
      { name: "Education Check", done: false },
      { name: "Reference Check", done: false },
    ],
  },
  {
    name: "Emily Rodriguez", role: "Data Analyst", status: "Flagged", risk: 67, date: "Mar 22",
    checks: [
      { name: "Identity Verification", done: true },
      { name: "Criminal Record", done: true },
      { name: "Employment History", done: true },
      { name: "Education Check", done: true },
      { name: "Reference Check", done: true },
    ],
  },
  {
    name: "James Wilson", role: "UX Designer", status: "Complete", risk: 8, date: "Mar 25",
    checks: [
      { name: "Identity Verification", done: true },
      { name: "Criminal Record", done: true },
      { name: "Employment History", done: true },
      { name: "Education Check", done: true },
      { name: "Reference Check", done: true },
    ],
  },
  {
    name: "Aisha Patel", role: "DevOps Engineer", status: "Pending", risk: null, date: "Mar 27",
    checks: [
      { name: "Identity Verification", done: true },
      { name: "Criminal Record", done: false },
      { name: "Employment History", done: false },
      { name: "Education Check", done: false },
      { name: "Reference Check", done: false },
    ],
  },
];

const statusStyle: Record<string, { bg: string; text: string; dot: string }> = {
  Complete: { bg: "bg-emerald-50", text: "text-emerald-600", dot: "bg-emerald-500" },
  Pending: { bg: "bg-amber-50", text: "text-amber-600", dot: "bg-amber-400" },
  Flagged: { bg: "bg-red-50", text: "text-red-500", dot: "bg-red-400" },
};

function DashboardUI() {
  const [activeTab, setActiveTab] = useState<"All" | "Complete" | "Pending" | "Flagged">("All");
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [showNotif, setShowNotif] = useState(false);

  // Simulate a live notification after 3s
  useEffect(() => {
    const t = setTimeout(() => setShowNotif(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const tabs: ("All" | "Complete" | "Pending" | "Flagged")[] = ["All", "Complete", "Pending", "Flagged"];
  const filtered = activeTab === "All" ? allCandidates : allCandidates.filter((c) => c.status === activeTab);
  const selected = selectedRow !== null ? filtered[selectedRow] : null;

  const stats = [
    { label: "Total Checks", value: allCandidates.length.toString(), sub: "Active" },
    { label: "Completed", value: allCandidates.filter((c) => c.status === "Complete").length.toString(), sub: `${Math.round((allCandidates.filter((c) => c.status === "Complete").length / allCandidates.length) * 100)}%` },
    { label: "Avg. Time", value: "4.2h", sub: "Per check" },
    { label: "Flagged", value: allCandidates.filter((c) => c.status === "Flagged").length.toString(), sub: "Needs review" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-black/8 border border-gray-100 overflow-hidden w-full max-w-[720px] select-none">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50/80 border-b border-gray-100">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1 text-[10px] text-gray-400 border border-gray-100 w-52">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M8 1v4M8 11v4M1 8h4M11 8h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            app.atlasscreening.com
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Notification toast */}
        {showNotif && (
          <div
            className="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg bg-emerald-50 border border-emerald-100 cursor-pointer"
            onClick={() => setShowNotif(false)}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[10px] text-emerald-700 flex-1">
              <span className="font-semibold">James Wilson</span> — all checks complete. Report ready.
            </p>
            <span className="text-[9px] text-emerald-400">Just now</span>
          </div>
        )}

        {/* Header + actions */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-[13px] font-semibold text-[#01463A]">Screening Dashboard</h4>
            <p className="text-[10px] text-gray-400">{allCandidates.length} candidates &middot; {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
          </div>
          <div className="flex gap-1.5">
            <button className="px-2.5 py-1.5 rounded-lg bg-[#01463A] text-white text-[10px] font-medium hover:bg-[#01463A]/90 transition-colors">
              + New Check
            </button>
            <button className="px-2.5 py-1.5 rounded-lg bg-white text-gray-500 text-[10px] font-medium border border-gray-150 hover:bg-gray-50 transition-colors">
              Export
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-xl px-3 py-2.5">
              <p className="text-[8px] text-gray-400 uppercase tracking-wider font-medium">{s.label}</p>
              <div className="flex items-baseline gap-1 mt-0.5">
                <p className="text-base font-bold text-[#01463A]">{s.value}</p>
                <p className="text-[8px] text-[#058B74]">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-1 mb-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setSelectedRow(null); }}
              className={`px-3 py-1 rounded-lg text-[10px] font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#01463A] text-white"
                  : "bg-gray-50 text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
              {tab !== "All" && (
                <span className="ml-1 opacity-60">
                  {allCandidates.filter((c) => c.status === tab).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Table + Detail split */}
        <div className="flex gap-3">
          {/* Table */}
          <div className={`rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 ${selected ? "flex-1" : "w-full"}`}>
            {/* Header */}
            <div className="grid grid-cols-12 gap-1 px-3 py-2 bg-gray-50 text-[8px] font-semibold text-gray-400 uppercase tracking-wider">
              <div className="col-span-4">Candidate</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Risk</div>
              <div className="col-span-3">Progress</div>
              <div className="col-span-1">Date</div>
            </div>

            {filtered.map((c, i) => {
              const s = statusStyle[c.status];
              const doneCount = c.checks.filter((ch) => ch.done).length;
              const isSelected = selectedRow === i;

              return (
                <div
                  key={`${c.name}-${activeTab}`}
                  onClick={() => setSelectedRow(isSelected ? null : i)}
                  className={`grid grid-cols-12 gap-1 px-3 py-2.5 items-center border-t border-gray-50 cursor-pointer transition-all ${
                    isSelected ? "bg-[#058B74]/5" : "hover:bg-gray-50/70"
                  }`}
                >
                  <div className="col-span-4">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold ${isSelected ? "bg-[#058B74] text-white" : "bg-[#01463A]/8 text-[#01463A]"}`}>
                        {c.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-[10px] font-medium text-[#01463A] leading-tight">{c.name}</p>
                        <p className="text-[8px] text-gray-400">{c.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-medium ${s.bg} ${s.text}`}>
                      <span className={`w-1 h-1 rounded-full ${s.dot}`} />
                      {c.status}
                    </span>
                  </div>

                  <div className="col-span-2">
                    {c.risk !== null ? (
                      <div className="flex items-center gap-1">
                        <div className="w-8 h-1 rounded-full bg-gray-100 overflow-hidden">
                          <div className={`h-full rounded-full ${c.risk > 50 ? "bg-red-400" : "bg-emerald-400"}`} style={{ width: `${c.risk}%` }} />
                        </div>
                        <span className={`text-[9px] font-medium ${c.risk > 50 ? "text-red-500" : "text-emerald-600"}`}>{c.risk}</span>
                      </div>
                    ) : (
                      <span className="text-[9px] text-gray-300">--</span>
                    )}
                  </div>

                  <div className="col-span-3">
                    <div className="flex items-center gap-1.5">
                      <div className="flex-1 h-1 rounded-full bg-gray-100 overflow-hidden">
                        <div className="h-full rounded-full bg-[#058B74]" style={{ width: `${(doneCount / c.checks.length) * 100}%`, transition: "width 0.5s ease" }} />
                      </div>
                      <span className="text-[8px] text-gray-400">{doneCount}/{c.checks.length}</span>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <span className="text-[8px] text-gray-400">{c.date}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detail panel */}
          {selected && (
            <div className="w-[200px] flex-shrink-0 rounded-xl border border-gray-100 p-3 bg-gray-50/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#058B74] flex items-center justify-center text-[10px] font-bold text-white">
                  {selected.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#01463A]">{selected.name}</p>
                  <p className="text-[9px] text-gray-400">{selected.role}</p>
                </div>
              </div>

              {/* Status + Risk */}
              <div className="flex gap-2 mb-3">
                <div className={`flex-1 rounded-lg px-2 py-1.5 ${statusStyle[selected.status].bg}`}>
                  <p className="text-[8px] text-gray-400">Status</p>
                  <p className={`text-[10px] font-semibold ${statusStyle[selected.status].text}`}>{selected.status}</p>
                </div>
                <div className="flex-1 rounded-lg px-2 py-1.5 bg-gray-100">
                  <p className="text-[8px] text-gray-400">Risk</p>
                  <p className={`text-[10px] font-semibold ${selected.risk !== null ? (selected.risk > 50 ? "text-red-500" : "text-emerald-600") : "text-gray-400"}`}>
                    {selected.risk !== null ? `${selected.risk}/100` : "N/A"}
                  </p>
                </div>
              </div>

              {/* Checks timeline */}
              <p className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Checks Timeline</p>
              <div className="space-y-1.5">
                {selected.checks.map((ch) => (
                  <div key={ch.name} className="flex items-center gap-1.5">
                    <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${ch.done ? "bg-emerald-100" : "bg-gray-100"}`}>
                      {ch.done ? (
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M3 6l2 2 4-4" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      ) : (
                        <div className="w-1 h-1 rounded-full bg-gray-300" />
                      )}
                    </div>
                    <span className={`text-[9px] ${ch.done ? "text-[#01463A]" : "text-gray-300"}`}>{ch.name}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <button className="w-full mt-3 px-2 py-1.5 rounded-lg bg-[#01463A] text-white text-[9px] font-medium hover:bg-[#01463A]/90 transition-colors">
                View Full Report
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DashboardPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const windowH = window.innerHeight;
    const raw = (windowH - rect.top) / (windowH + rect.height * 0.3);
    setScrollProgress(Math.max(0, Math.min(raw, 1)));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const eased = 1 - Math.pow(1 - Math.min(scrollProgress * 2, 1), 3);
  const rotateX = 8 - 8 * eased;
  const rotateY = -4 + 4 * eased;
  const opacity = Math.min(eased * 1.5, 1);

  return (
    <section ref={sectionRef} className="py-28 px-6 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#058B74] mb-3">
            Dashboard
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
            Everything you need.{" "}
            <span className="text-[#058B74]">One dashboard.</span>
          </h2>
          <p className="mt-5 text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Monitor applicants end-to-end: see status, results, and flags at a
            glance. Click any candidate to see their full screening timeline.
          </p>
        </div>

        {/* Dashboard */}
        <div
          className="flex justify-center"
          style={{ perspective: "1400px", opacity }}
        >
          <div
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: "transform 0.15s ease-out",
              transformOrigin: "center center",
            }}
          >
            <DashboardUI />
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-14">
          {[
            "Real-time status tracking",
            "Risk score analysis",
            "Check-by-check timeline",
            "One-click report export",
            "Candidate filtering",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8.5l3 3 7-7" stroke="#058B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs text-gray-600">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
