"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { categories } from "../../lib/posts";
import { createPost, updatePost, type PostInput } from "../actions";

const CATEGORY_OPTIONS = categories.filter((c) => c !== "All");

export type EditorValues = PostInput;

const fieldClass =
  "w-full rounded-lg border border-[#E3EAE7] bg-white px-3.5 py-2.5 text-sm text-[#0F1D19] outline-none transition placeholder:text-[#A9B4AF] focus:border-[#058B74] focus:ring-2 focus:ring-[#058B74]/20";
const labelClass = "mb-1.5 block text-xs font-medium text-[#5B6B64]";

export default function PostEditor({
  mode,
  id,
  initial,
}: {
  mode: "new" | "edit";
  id?: string;
  initial: EditorValues;
}) {
  const router = useRouter();
  const [values, setValues] = useState<EditorValues>(initial);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const set = <K extends keyof EditorValues>(key: K, value: EditorValues[K]) =>
    setValues((v) => ({ ...v, [key]: value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    startTransition(async () => {
      const res =
        mode === "new" ? await createPost(values) : await updatePost(id!, values);
      if (res.ok) {
        router.push("/admin/posts");
        router.refresh();
      } else {
        setError(res.error ?? "Could not save the post.");
      }
    });
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-[1fr_300px]">
      {/* Main column */}
      <div className="space-y-5">
        <div className="rounded-2xl border border-[#E3EAE7] bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className={labelClass}>Title</label>
              <input
                id="title"
                required
                value={values.title}
                onChange={(e) => set("title", e.target.value)}
                className={fieldClass}
                placeholder="The 2026 FCRA adverse-action checklist"
              />
            </div>
            <div>
              <label htmlFor="slug" className={labelClass}>Slug <span className="text-[#A9B4AF]">(URL — leave blank to auto-generate)</span></label>
              <input
                id="slug"
                value={values.slug}
                onChange={(e) => set("slug", e.target.value)}
                className={fieldClass}
                placeholder="fcra-adverse-action-checklist-2026"
              />
            </div>
            <div>
              <label htmlFor="excerpt" className={labelClass}>Excerpt <span className="text-[#A9B4AF]">(card + meta description)</span></label>
              <textarea
                id="excerpt"
                rows={2}
                value={values.excerpt}
                onChange={(e) => set("excerpt", e.target.value)}
                className={fieldClass}
                placeholder="A practical walkthrough of pre-adverse and adverse-action requirements…"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E3EAE7] bg-white p-6 shadow-sm">
          <label htmlFor="body" className={labelClass}>Body</label>
          <p className="mb-2 text-xs text-[#8A968F]">
            Separate paragraphs with a blank line — each becomes its own paragraph on the post.
          </p>
          <textarea
            id="body"
            rows={18}
            value={values.body}
            onChange={(e) => set("body", e.target.value)}
            className={`${fieldClass} font-[family-name:var(--font-geist-mono)] leading-relaxed`}
            placeholder={"First paragraph…\n\nSecond paragraph…"}
          />
        </div>
      </div>

      {/* Sidebar column */}
      <div className="space-y-5">
        <div className="rounded-2xl border border-[#E3EAE7] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#0F1D19]">Published</span>
            <button
              type="button"
              role="switch"
              aria-checked={values.published}
              onClick={() => set("published", !values.published)}
              className={`relative h-6 w-11 rounded-full transition ${values.published ? "bg-[#058B74]" : "bg-[#D6E0DC]"}`}
            >
              <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${values.published ? "left-[22px]" : "left-0.5"}`} />
            </button>
          </div>
          <p className="mt-1.5 text-xs text-[#8A968F]">
            {values.published ? "Visible on the public blog." : "Hidden — saved as a draft."}
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="published_at" className={labelClass}>Date</label>
              <input
                id="published_at"
                type="date"
                value={values.published_at}
                onChange={(e) => set("published_at", e.target.value)}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="category" className={labelClass}>Category</label>
              <select
                id="category"
                value={values.category}
                onChange={(e) => set("category", e.target.value)}
                className={fieldClass}
              >
                {CATEGORY_OPTIONS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="author" className={labelClass}>Author</label>
              <input
                id="author"
                value={values.author}
                onChange={(e) => set("author", e.target.value)}
                className={fieldClass}
                placeholder="Atlas Compliance Team"
              />
            </div>
            <div>
              <label htmlFor="read_time" className={labelClass}>Read time <span className="text-[#A9B4AF]">(auto if blank)</span></label>
              <input
                id="read_time"
                value={values.read_time}
                onChange={(e) => set("read_time", e.target.value)}
                className={fieldClass}
                placeholder="8 min read"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E3EAE7] bg-white p-5 shadow-sm">
          <div className="space-y-4">
            <div>
              <label htmlFor="image" className={labelClass}>Cover image path</label>
              <input
                id="image"
                value={values.image}
                onChange={(e) => set("image", e.target.value)}
                className={fieldClass}
                placeholder="/assets/images/Criminal-background-checks.webp"
              />
              {values.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={values.image} alt="" className="mt-2 aspect-[16/9] w-full rounded-lg border border-[#E3EAE7] object-cover" />
              )}
            </div>
            <div>
              <label htmlFor="image_alt" className={labelClass}>Image alt text</label>
              <input
                id="image_alt"
                value={values.image_alt}
                onChange={(e) => set("image_alt", e.target.value)}
                className={fieldClass}
                placeholder="A hiring manager reviewing a background report."
              />
            </div>
          </div>
        </div>

        {error && (
          <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700 ring-1 ring-inset ring-red-600/10">
            {error}
          </p>
        )}

        <div className="flex items-center gap-2">
          <button
            type="submit"
            disabled={pending}
            className="flex-1 rounded-lg bg-[#058B74] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#01463A] disabled:opacity-60"
          >
            {pending ? "Saving…" : mode === "new" ? "Create post" : "Save changes"}
          </button>
          <Link
            href="/admin/posts"
            className="rounded-lg border border-[#E3EAE7] px-4 py-2.5 text-sm font-medium text-[#5B6B64] transition hover:bg-[#F6F8F7]"
          >
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
}
