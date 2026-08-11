import Link from "next/link";
import { notFound } from "next/navigation";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import PostEditor, { type EditorValues } from "../../../_components/PostEditor";
import { PageHeader } from "../../../_components/ui";

export const dynamic = "force-dynamic";

type Row = {
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

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from("posts").select("*").eq("id", id).maybeSingle();

  if (!data) notFound();
  const row = data as Row;

  const initial: EditorValues = {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    author: row.author,
    read_time: row.read_time,
    image: row.image,
    image_alt: row.image_alt,
    body: (row.body ?? []).join("\n\n"),
    published: row.published,
    published_at: row.published_at ? row.published_at.slice(0, 10) : "",
  };

  return (
    <>
      <PageHeader
        title="Edit post"
        subtitle={row.title}
        action={
          <div className="flex items-center gap-4">
            {row.published && (
              <Link href={`/blog/${row.slug}`} target="_blank" className="text-sm font-medium text-[#058B74] hover:underline">
                View live ↗
              </Link>
            )}
            <Link href="/admin/posts" className="text-sm font-medium text-[#5B6B64] hover:text-[#0F1D19]">
              ← All posts
            </Link>
          </div>
        }
      />
      <PostEditor mode="edit" id={id} initial={initial} />
    </>
  );
}
