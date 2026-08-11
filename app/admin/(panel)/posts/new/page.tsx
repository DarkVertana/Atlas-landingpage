import Link from "next/link";
import PostEditor, { type EditorValues } from "../../../_components/PostEditor";
import { PageHeader } from "../../../_components/ui";

export const dynamic = "force-dynamic";

export default function NewPostPage() {
  const today = new Date().toISOString().slice(0, 10);

  const initial: EditorValues = {
    slug: "",
    title: "",
    excerpt: "",
    category: "Compliance",
    author: "Atlas Compliance Team",
    read_time: "",
    image: "",
    image_alt: "",
    body: "",
    published: true,
    published_at: today,
  };

  return (
    <>
      <PageHeader
        title="New post"
        subtitle="Write a new article for the Atlas blog."
        action={
          <Link href="/admin/posts" className="text-sm font-medium text-[#5B6B64] hover:text-[#0F1D19]">
            ← All posts
          </Link>
        }
      />
      <PostEditor mode="new" initial={initial} />
    </>
  );
}
