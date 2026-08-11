import { createSupabaseServerClient } from "../../../lib/supabase/server";
import { PageHeader, PrimaryLink } from "../../_components/ui";
import PostsTable, { type PostRow } from "../../_components/PostsTable";

export const dynamic = "force-dynamic";

export default async function PostsPage() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("posts")
    .select("id, slug, title, category, author, image, published, published_at")
    .order("published_at", { ascending: false });

  const posts = (data as PostRow[] | null) ?? [];

  return (
    <>
      <PageHeader
        title="Blog posts"
        subtitle={`${posts.length} ${posts.length === 1 ? "post" : "posts"} total`}
        action={<PrimaryLink href="/admin/posts/new">+ New post</PrimaryLink>}
      />
      <PostsTable posts={posts} />
    </>
  );
}
