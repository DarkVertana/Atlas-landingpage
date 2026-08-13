import "server-only";
import { createSupabaseServerClient } from "./supabase/server";
import { isSupabaseConfigured } from "./supabase/config";
import { posts as staticPosts, type Post } from "./posts";

// The shape the public blog pages render. Same fields as the original static
// Post, but the id may be a uuid string once posts live in Supabase.
export type BlogPost = Omit<Post, "id"> & { id: string | number; published?: boolean };

// Raw row shape from the `posts` table.
type PostRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  read_time: string;
  image: string;
  image_alt: string;
  body: string[];
  published: boolean;
  published_at: string;
};

export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function rowToPost(row: PostRow): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    date: formatPostDate(row.published_at),
    readTime: row.read_time,
    author: row.author,
    image: row.image,
    imageAlt: row.image_alt,
    body: row.body ?? [],
    published: row.published,
  };
}

// All published posts, newest first — used by the public blog.
export async function getPublishedPosts(): Promise<BlogPost[]> {
  if (!isSupabaseConfigured()) return staticPosts;

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error || !data) return staticPosts;
  return data.map(rowToPost);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (!isSupabaseConfigured()) {
    return staticPosts.find((p) => p.slug === slug);
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  // Supabase unreachable or the post is missing there — fall back to the
  // static seed posts so published routes never 404 in production.
  if (error || !data) return staticPosts.find((p) => p.slug === slug);
  return rowToPost(data as PostRow);
}
