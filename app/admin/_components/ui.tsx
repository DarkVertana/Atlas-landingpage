import Link from "next/link";

/* ── Admin design tokens (kept in one place for a consistent, clean look) ──
   surface  #FFFFFF        page  #F7F9F8
   border   #E7EDEA        line  #EEF3F1
   ink      #0E1A16        muted #61706A   faint #94A19B
   accent   #058B74        deep  #01463A   mint  #3EE8BE
   radius   cards rounded-xl · controls rounded-lg
   shadow   single soft tier (shadow-sm)                                   */

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-[1.7rem] font-semibold leading-tight tracking-tight text-[#0E1A16]">
          {title}
        </h1>
        {subtitle && <p className="mt-1 text-sm text-[#61706A]">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-[#E7EDEA] bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  icon,
}: {
  label: string;
  value: number | string;
  hint?: string;
  icon?: React.ReactNode;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#61706A]">{label}</p>
        {icon && (
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#058B74]/8 text-[#058B74]">
            {icon}
          </span>
        )}
      </div>
      <p className="mt-3 text-[2rem] font-semibold leading-none tracking-tight text-[#0E1A16]">
        {value}
      </p>
      {hint && <p className="mt-2 text-xs text-[#94A19B]">{hint}</p>}
    </Card>
  );
}

const STATUS_STYLES: Record<string, string> = {
  new: "bg-amber-50 text-amber-700 ring-amber-600/20",
  read: "bg-sky-50 text-sky-700 ring-sky-600/20",
  archived: "bg-slate-100 text-slate-500 ring-slate-400/20",
  published: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  draft: "bg-slate-100 text-slate-500 ring-slate-400/20",
};

export function Badge({ status }: { status: string }) {
  const cls = STATUS_STYLES[status] ?? "bg-slate-100 text-slate-600 ring-slate-400/20";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ring-1 ring-inset ${cls}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 rounded-lg bg-[#058B74] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#01463A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
    >
      {children}
    </Link>
  );
}

/* A titled table container so lists read as one clean, self-explaining block. */
export function TableCard({
  title,
  meta,
  children,
}: {
  title?: string;
  meta?: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="overflow-hidden">
      {(title || meta) && (
        <div className="flex items-center justify-between border-b border-[#EEF3F1] px-5 py-3.5">
          {title && <h2 className="text-sm font-semibold text-[#0E1A16]">{title}</h2>}
          {meta && <span className="text-xs text-[#94A19B]">{meta}</span>}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">{children}</table>
      </div>
    </Card>
  );
}

export function Th({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <th className={`px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8A968F] ${className}`}>
      {children}
    </th>
  );
}

export function EmptyState({
  title,
  hint,
  action,
}: {
  title: string;
  hint?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#D7E1DD] bg-[#FBFDFC] px-6 py-20 text-center">
      <div className="mb-3 grid h-11 w-11 place-items-center rounded-full bg-[#058B74]/8 text-[#058B74]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
        </svg>
      </div>
      <p className="text-sm font-semibold text-[#0E1A16]">{title}</p>
      {hint && <p className="mt-1 max-w-sm text-sm text-[#61706A]">{hint}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function formatDateTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
