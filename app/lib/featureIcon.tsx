import type { ReactNode } from "react";

/**
 * featureIcon — maps a feature/label string to a meaningful line icon.
 *
 * Purpose: the app leaned on a single check-mark for every bullet, feature, and
 * chip. This picks an icon that actually relates to the text (a car for motor
 * vehicle records, a shield for criminal search, a document for reports, etc.)
 * so lists read as intentional rather than a wall of ticks.
 *
 * Keyword rules are evaluated in order; the first match wins. Anything
 * unmatched falls back to a small, neutral "point" mark (not a tick).
 */

type Rule = { test: RegExp; paths: ReactNode };

// Each entry draws inside a 24x24 viewBox with round caps.
const RULES: Rule[] = [
  { test: /\bssn|identity|date of birth|\bdob\b/i, paths: <><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="12" r="2" /><path d="M14 10h4M14 14h4" /></> },
  { test: /address|trace|history/i, paths: <><path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2" /></> },
  { test: /motor vehicle|\bmvr\b|driving|\bdriver/i, paths: <><path d="M5 13l1.5-4.5A2 2 0 018.4 7h7.2a2 2 0 011.9 1.5L19 13M5 13h14v4H5zM7 17v2M17 17v2" /><circle cx="7.5" cy="15" r=".8" /><circle cx="16.5" cy="15" r=".8" /></> },
  { test: /federal/i, paths: <><path d="M3 21h18M4 21V10h16v11M12 3L4 8h16l-8-5zM8 21v-7M12 21v-7M16 21v-7" /></> },
  { test: /county|court/i, paths: <><path d="M3 21h18M5 21V10M19 21V10M4 10l8-5 8 5M9 21v-6h6v6" /></> },
  { test: /sex offender|registry|watchlist|alert|flag/i, paths: <><path d="M12 3l9 4v5c0 5-3.5 8-9 9-5.5-1-9-4-9-9V7l9-4z" /><path d="M12 8v4M12 16h.01" /></> },
  { test: /criminal|background check/i, paths: <><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></> },
  { test: /database/i, paths: <><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></> },
  { test: /global|nationwide|all[- ]state|all 50|territor|state registr|coverage|jurisdic/i, paths: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></> },
  { test: /social/i, paths: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></> },
  { test: /education/i, paths: <><path d="M12 4L2 9l10 5 10-5-10-5z" /><path d="M6 11v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5" /></> },
  { test: /employment|\bwork\b|hiring/i, paths: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" /></> },
  { test: /pdf|report|document|record/i, paths: <><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z" /><path d="M14 3v6h6M9 13h6M9 17h4" /></> },
  { test: /audit|log|export/i, paths: <><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 12h6M9 16h4" /></> },
  { test: /adjudicat|custom|rules|configur/i, paths: <><path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4" /><circle cx="16" cy="6" r="2" /><circle cx="8" cy="12" r="2" /><circle cx="14" cy="18" r="2" /></> },
  { test: /\bapi\b|\bats\b|integrat/i, paths: <><path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 01-10 0V7zM12 16v5" /></> },
  { test: /volume|pricing|\bprice|cost/i, paths: <><path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L3 13V3h10z" /><circle cx="8" cy="8" r="1.5" /></> },
  { test: /refresh|daily|updated|real[- ]time/i, paths: <><path d="M21 12a9 9 0 11-3.5-7.1" /><path d="M21 4v5h-5" /></> },
  { test: /fast|instant|result|minute|turnaround|speed|priority/i, paths: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></> },
  { test: /verif|review|human|match|accura/i, paths: <><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></> },
  { test: /package|bundle|suite|everything in|tier/i, paths: <><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></> },
  { test: /support|account|team|manager|dedicated|concierge/i, paths: <><path d="M4 18v-1a4 4 0 014-4h1M20 18v-1a4 4 0 00-4-4h-1M9 8a3 3 0 106 0 3 3 0 10-6 0" /><path d="M3 18a9 9 0 0118 0" /></> },
  { test: /complian|fcra|legal|defensib|secure|encrypt/i, paths: <><path d="M12 3l8 4v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z" /><path d="M9 12l2 2 4-4" /></> },
];

const FALLBACK: ReactNode = <><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" opacity="0.4" /></>;

export function featureIcon(label: string, className = "h-4 w-4"): ReactNode {
  const match = RULES.find((r) => r.test.test(label));
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {match ? match.paths : FALLBACK}
    </svg>
  );
}
