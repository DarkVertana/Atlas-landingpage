"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LABELS: { match: (p: string) => boolean; label: string }[] = [
  { match: (p) => p === "/admin", label: "Dashboard" },
  { match: (p) => p.startsWith("/admin/posts/new"), label: "Blog posts · New" },
  { match: (p) => /^\/admin\/posts\/[^/]+$/.test(p) && !p.endsWith("/new"), label: "Blog posts · Edit" },
  { match: (p) => p.startsWith("/admin/posts"), label: "Blog posts" },
  { match: (p) => p.startsWith("/admin/leads"), label: "Contact leads" },
  { match: (p) => p.startsWith("/admin/subscribers"), label: "Subscribers" },
];

export default function Topbar() {
  const pathname = usePathname() ?? "/admin";
  const section = LABELS.find((l) => l.match(pathname))?.label ?? "Admin";

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-[#E7EDEA] bg-[#F7F9F8]/80 px-8 backdrop-blur">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        <span className="text-[#94A19B]">Atlas</span>
        <span className="text-[#CBD5D0]">/</span>
        <span className="font-medium text-[#0E1A16]">{section}</span>
      </nav>
      <Link
        href="/"
        target="_blank"
        className="inline-flex items-center gap-1.5 rounded-lg border border-[#E7EDEA] bg-white px-3 py-1.5 text-sm font-medium text-[#3A463F] transition hover:border-[#058B74]/40 hover:text-[#058B74]"
      >
        View site
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      </Link>
    </header>
  );
}
