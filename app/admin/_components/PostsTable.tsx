"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge, Th, formatDate, EmptyState, PrimaryLink } from "./ui";
import { bulkDeletePosts, bulkSetPublished, deletePost } from "../actions";

export type PostRow = {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  image: string;
  published: boolean;
  published_at: string;
};

const CATEGORY_TINT: Record<string, string> = {
  Compliance: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
  Hiring: "bg-sky-50 text-sky-700 ring-sky-600/15",
  Product: "bg-violet-50 text-violet-700 ring-violet-600/15",
  Industry: "bg-amber-50 text-amber-700 ring-amber-600/15",
  Guides: "bg-slate-100 text-slate-600 ring-slate-400/15",
};

function CategoryChip({ category }: { category: string }) {
  const cls = CATEGORY_TINT[category] ?? "bg-slate-100 text-slate-600 ring-slate-400/15";
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${cls}`}>
      {category}
    </span>
  );
}

function Thumb({ src }: { src: string }) {
  if (!src) {
    return (
      <div className="grid h-11 w-16 shrink-0 place-items-center rounded-md border border-[#E7EDEA] bg-[#F1F5F3] text-[#B6C2BC]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" />
        </svg>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className="h-11 w-16 shrink-0 rounded-md border border-[#E7EDEA] object-cover" />
  );
}

const FILTERS = ["All", "Published", "Drafts"] as const;

export default function PostsTable({ posts }: { posts: PostRow[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [pending, startTransition] = useTransition();

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (filter === "Published" && !p.published) return false;
      if (filter === "Drafts" && p.published) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
      );
    });
  }, [posts, query, filter]);

  const visibleIds = visible.map((p) => p.id);
  const allSelected = visibleIds.length > 0 && visibleIds.every((id) => selected.has(id));
  const someSelected = selected.size > 0;

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const toggleAll = () =>
    setSelected((prev) => {
      if (allSelected) return new Set();
      return new Set(visibleIds);
    });

  const runBulk = (fn: () => Promise<void>) =>
    startTransition(async () => {
      await fn();
      setSelected(new Set());
      router.refresh();
    });

  const ids = [...selected];

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="relative">
          <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94A19B]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts…"
            className="w-64 rounded-lg border border-[#E7EDEA] bg-white py-2 pl-9 pr-3 text-sm text-[#0E1A16] outline-none transition placeholder:text-[#94A19B] focus:border-[#058B74] focus:ring-2 focus:ring-[#058B74]/15"
          />
        </div>

        <div className="inline-flex rounded-lg border border-[#E7EDEA] bg-white p-0.5">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                filter === f ? "bg-[#01463A] text-white" : "text-[#61706A] hover:text-[#0E1A16]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <EmptyState
          title={query || filter !== "All" ? "No posts match" : "No posts yet"}
          hint={
            query || filter !== "All"
              ? "Try a different search or filter."
              : "Create your first post, or import the starter articles from the dashboard."
          }
          action={!query && filter === "All" ? <PrimaryLink href="/admin/posts/new">+ New post</PrimaryLink> : undefined}
        />
      ) : (
        <div className="overflow-hidden rounded-xl border border-[#E7EDEA] bg-white shadow-sm">
          {/* Bulk action bar — appears when rows are selected (Shopify-style) */}
          {someSelected && (
            <div className="flex flex-wrap items-center gap-3 border-b border-[#E7EDEA] bg-[#F3FAF7] px-4 py-2.5">
              <span className="text-sm font-medium text-[#0E1A16]">{selected.size} selected</span>
              <div className="h-4 w-px bg-[#D7E1DD]" />
              <button
                type="button"
                disabled={pending}
                onClick={() => runBulk(() => bulkSetPublished(ids, true))}
                className="rounded-md px-2.5 py-1 text-sm font-medium text-[#058B74] transition hover:bg-[#058B74]/10 disabled:opacity-50"
              >
                Publish
              </button>
              <button
                type="button"
                disabled={pending}
                onClick={() => runBulk(() => bulkSetPublished(ids, false))}
                className="rounded-md px-2.5 py-1 text-sm font-medium text-[#61706A] transition hover:bg-black/5 disabled:opacity-50"
              >
                Set as draft
              </button>
              <button
                type="button"
                disabled={pending}
                onClick={() => {
                  if (confirm(`Delete ${selected.size} post${selected.size > 1 ? "s" : ""}? This can't be undone.`))
                    runBulk(() => bulkDeletePosts(ids));
                }}
                className="rounded-md px-2.5 py-1 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => setSelected(new Set())}
                className="ml-auto text-sm text-[#94A19B] hover:text-[#0E1A16]"
              >
                Clear
              </button>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-[#EEF3F1] bg-[#FBFDFC]">
                <tr>
                  <th className="w-10 px-4 py-3">
                    <Checkbox checked={allSelected} onChange={toggleAll} aria-label="Select all" />
                  </th>
                  <Th>Title</Th>
                  <Th>Author</Th>
                  <Th>Category</Th>
                  <Th>Status</Th>
                  <Th>Date</Th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF3F1]">
                {visible.map((p) => {
                  const isSel = selected.has(p.id);
                  return (
                    <tr key={p.id} className={`group transition ${isSel ? "bg-[#F3FAF7]" : "hover:bg-[#FBFDFC]"}`}>
                      <td className="px-4 py-3 align-top">
                        <Checkbox checked={isSel} onChange={() => toggle(p.id)} aria-label={`Select ${p.title}`} />
                      </td>
                      <td className="max-w-md py-3 pr-5 align-top">
                        <div className="flex gap-3">
                          <Thumb src={p.image} />
                          <div className="min-w-0">
                            <Link href={`/admin/posts/${p.id}`} className="line-clamp-1 font-semibold text-[#0E1A16] hover:text-[#058B74]">
                              {p.title}
                            </Link>
                            <p className="truncate font-[family-name:var(--font-geist-mono)] text-xs text-[#94A19B]">
                              /{p.slug}
                            </p>
                            {/* WordPress-style row actions, revealed on hover */}
                            <div className="mt-1 flex items-center gap-2 text-xs text-[#94A19B] opacity-0 transition group-hover:opacity-100">
                              <Link href={`/admin/posts/${p.id}`} className="font-medium text-[#058B74] hover:underline">Edit</Link>
                              <span className="text-[#D7E1DD]">|</span>
                              <Link href={`/blog/${p.slug}`} target="_blank" className="hover:text-[#0E1A16] hover:underline">View</Link>
                              <span className="text-[#D7E1DD]">|</span>
                              <RowDelete id={p.id} title={p.title} onDone={() => router.refresh()} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 pr-5 align-top text-[#61706A]">{p.author}</td>
                      <td className="py-3 pr-5 align-top"><CategoryChip category={p.category} /></td>
                      <td className="py-3 pr-5 align-top"><Badge status={p.published ? "published" : "draft"} /></td>
                      <td className="whitespace-nowrap py-3 pr-5 align-top text-[#61706A]">{formatDate(p.published_at)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function Checkbox({
  checked,
  onChange,
  ...rest
}: { checked: boolean; onChange: () => void } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 cursor-pointer rounded border-[#CBD5D0] text-[#058B74] accent-[#058B74] focus:ring-2 focus:ring-[#058B74]/30"
      {...rest}
    />
  );
}

function RowDelete({ id, title, onDone }: { id: string; title: string; onDone: () => void }) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (confirm(`Delete "${title}"? This can't be undone.`))
          startTransition(async () => {
            await deletePost(id);
            onDone();
          });
      }}
      className="font-medium text-red-600 hover:underline disabled:opacity-50"
    >
      {pending ? "Deleting…" : "Trash"}
    </button>
  );
}
