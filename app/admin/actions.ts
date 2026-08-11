"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../lib/supabase/server";
import { posts as staticPosts } from "../lib/posts";

export type PostInput = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  read_time: string;
  image: string;
  image_alt: string;
  body: string; // blank-line-separated paragraphs from the editor
  published: boolean;
  published_at: string; // yyyy-mm-dd
};

export type SaveResult = { ok: boolean; error?: string; id?: string };

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function estimateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

// Split the editor's textarea into an array of paragraphs (blank line = break).
function toParagraphs(body: string): string[] {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

function normalize(input: PostInput) {
  const paragraphs = toParagraphs(input.body);
  return {
    slug: input.slug.trim() ? slugify(input.slug) : slugify(input.title),
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    category: input.category.trim() || "Guides",
    author: input.author.trim() || "Atlas Team",
    read_time: input.read_time.trim() || estimateReadTime(paragraphs.join(" ")),
    image: input.image.trim(),
    image_alt: input.image_alt.trim(),
    body: paragraphs,
    published: input.published,
    published_at: input.published_at
      ? new Date(input.published_at).toISOString()
      : new Date().toISOString(),
  };
}

export async function createPost(input: PostInput): Promise<SaveResult> {
  if (!input.title.trim()) return { ok: false, error: "A title is required." };
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("posts")
    .insert(normalize(input))
    .select("id")
    .single();

  if (error) {
    return {
      ok: false,
      error:
        error.code === "23505"
          ? "That slug is already used by another post."
          : error.message,
    };
  }
  revalidatePath("/blog");
  revalidatePath("/admin/posts");
  return { ok: true, id: data.id };
}

export async function updatePost(id: string, input: PostInput): Promise<SaveResult> {
  if (!input.title.trim()) return { ok: false, error: "A title is required." };
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("posts").update(normalize(input)).eq("id", id);

  if (error) {
    return {
      ok: false,
      error:
        error.code === "23505"
          ? "That slug is already used by another post."
          : error.message,
    };
  }
  revalidatePath("/blog");
  revalidatePath(`/blog/${input.slug}`);
  revalidatePath("/admin/posts");
  return { ok: true, id };
}

export async function deletePost(id: string): Promise<void> {
  const supabase = await createSupabaseServerClient();
  await supabase.from("posts").delete().eq("id", id);
  revalidatePath("/blog");
  revalidatePath("/admin/posts");
}

// Bulk actions (Shopify/WordPress-style multi-select).
export async function bulkDeletePosts(ids: string[]): Promise<void> {
  if (ids.length === 0) return;
  const supabase = await createSupabaseServerClient();
  await supabase.from("posts").delete().in("id", ids);
  revalidatePath("/blog");
  revalidatePath("/admin/posts");
}

export async function bulkSetPublished(ids: string[], published: boolean): Promise<void> {
  if (ids.length === 0) return;
  const supabase = await createSupabaseServerClient();
  await supabase.from("posts").update({ published }).in("id", ids);
  revalidatePath("/blog");
  revalidatePath("/admin/posts");
}

// One-click import of the original 9 starter posts into an empty table.
export async function seedStarterPosts(): Promise<SaveResult> {
  const supabase = await createSupabaseServerClient();
  const { count } = await supabase
    .from("posts")
    .select("id", { count: "exact", head: true });

  if ((count ?? 0) > 0) {
    return { ok: false, error: "Posts already exist — seeding was skipped." };
  }

  const rows = staticPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    author: p.author,
    read_time: p.readTime,
    image: p.image,
    image_alt: p.imageAlt,
    body: p.body,
    published: true,
    published_at: new Date(p.date).toISOString(),
  }));

  const { error } = await supabase.from("posts").insert(rows);
  if (error) return { ok: false, error: error.message };
  revalidatePath("/blog");
  revalidatePath("/admin/posts");
  return { ok: true };
}

export async function updateLeadStatus(id: string, status: string): Promise<void> {
  const supabase = await createSupabaseServerClient();
  await supabase.from("contact_submissions").update({ status }).eq("id", id);
  revalidatePath("/admin/leads");
}

export async function deleteLead(id: string): Promise<void> {
  const supabase = await createSupabaseServerClient();
  await supabase.from("contact_submissions").delete().eq("id", id);
  revalidatePath("/admin/leads");
}

export async function deleteSubscriber(id: string): Promise<void> {
  const supabase = await createSupabaseServerClient();
  await supabase.from("newsletter_signups").delete().eq("id", id);
  revalidatePath("/admin/subscribers");
}

export async function signOut(): Promise<void> {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
