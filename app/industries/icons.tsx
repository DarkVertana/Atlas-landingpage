import type { ReactNode } from "react";

/* One line-icon set shared by every industry page. Keys are referenced by the
   industry data so the page data stays pure/serializable and the icon
   treatment matches the rest of the site (1.5–1.6 stroke, rounded joins). */

const stroke = (paths: ReactNode, size = "w-6 h-6") => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={size}>
    {paths}
  </svg>
);

export type IconKey =
  | "shield"
  | "clock"
  | "doc"
  | "id"
  | "car"
  | "scale"
  | "heart"
  | "cart"
  | "book"
  | "hands"
  | "chart"
  | "alert"
  | "refresh"
  | "users"
  | "lock"
  | "globe"
  | "briefcase"
  | "search"
  | "badge"
  | "building";

export const ICONS: Record<IconKey, ReactNode> = {
  shield: stroke(<><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" /><path d="M9 12l2 2 4-4" /></>),
  clock: stroke(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  doc: stroke(<><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>),
  id: stroke(<><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="12" r="2" /><path d="M14 10h4M14 14h4" /></>),
  car: stroke(<><path d="M5 13l1.5-4.5A2 2 0 018.4 7h7.2a2 2 0 011.9 1.5L19 13M5 13h14v4H5zM7 17v2M17 17v2" /><circle cx="7.5" cy="15" r=".8" /><circle cx="16.5" cy="15" r=".8" /></>),
  scale: stroke(<><path d="M12 3v18M5 21h14M7 7l-3 6a3 3 0 006 0l-3-6zM17 7l-3 6a3 3 0 006 0l-3-6zM7 7h10M12 4l5 3M12 4L7 7" /></>),
  heart: stroke(<><path d="M20.8 8.6a5 5 0 00-8.8-3.2 5 5 0 00-8.8 3.2c0 5 8.8 10.4 8.8 10.4s8.8-5.4 8.8-10.4z" /><path d="M8 12h2l1.5-2.5L13 14l1-2h2" /></>),
  cart: stroke(<><circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /><path d="M3 4h2l2.2 11.2a1 1 0 001 .8h8.8a1 1 0 001-.8L20 7H6" /></>),
  book: stroke(<><path d="M4 5a2 2 0 012-2h8a2 2 0 012 2v15l-6-3-6 3V5z" /><path d="M16 3h2a2 2 0 012 2v13" /></>),
  hands: stroke(<><path d="M12 21c-5-3-9-6.5-9-11a4.5 4.5 0 019-1 4.5 4.5 0 019 1c0 2-.8 3.7-2 5" /><path d="M13 13l2 2 4-4" /></>),
  chart: stroke(<><path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6" /></>),
  alert: stroke(<><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h16.9a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" /><path d="M12 9v4M12 17h.01" /></>),
  refresh: stroke(<><path d="M3 12a9 9 0 0115.5-6.3L21 8M21 3v5h-5M21 12a9 9 0 01-15.5 6.3L3 16M3 21v-5h5" /></>),
  users: stroke(<><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0112 0M16 5.5a3 3 0 010 5.8M21 20a6 6 0 00-4-5.6" /></>),
  lock: stroke(<><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 018 0v3M12 15v2" /></>),
  globe: stroke(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></>),
  briefcase: stroke(<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" /></>),
  search: stroke(<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>),
  badge: stroke(<><circle cx="12" cy="9" r="5" /><path d="M9 13.5L8 21l4-2 4 2-1-7.5M10 9l1.3 1.3L14 8" /></>),
  building: stroke(<><path d="M3 21h18M5 21V5a2 2 0 012-2h6a2 2 0 012 2v16M15 9h2a2 2 0 012 2v10M8 7h2M8 11h2M8 15h2" /></>),
};
