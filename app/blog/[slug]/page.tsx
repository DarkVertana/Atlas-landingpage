import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "../../components/Reveal";
import { getPost, posts } from "../../lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Post not found — Atlas Screening" };
  }

  return {
    title: `${post.title} — Atlas Screening`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white text-[#01463A]">
      {/* Header hero — deep-green gradient to match landing/legal heroes */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74] pt-36 pb-16 px-6">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-24 w-[30rem] h-[30rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-2xl">
          <Reveal as="div">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
            >
              <span aria-hidden="true">&larr;</span> Back to the blog
            </Link>
          </Reveal>

          <Reveal
            as="span"
            delay={80}
            className="mt-8 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70"
          >
            <span className="h-px w-8 bg-white/30" />
            {post.category}
          </Reveal>

          <Reveal
            as="h1"
            delay={160}
            className="mt-5 text-[2.25rem] font-semibold leading-[1.04] md:text-[3.25rem] text-white"
          >
            {post.title}
          </Reveal>

          <Reveal
            as="div"
            delay={220}
            className="mt-6 flex flex-wrap items-center gap-2 text-[13px] text-white/60"
          >
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" aria-hidden="true" />
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" aria-hidden="true" />
            <span>{post.readTime}</span>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 -mt-10">
        <div className="mx-auto max-w-3xl">
          <Reveal variant="scale" className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-xl shadow-[#058B74]/10 aspect-[16/9] bg-[#01463A]/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <article className="px-6 py-16">
        <div className="mx-auto max-w-2xl space-y-6">
          {post.body.map((paragraph, i) => (
            <Reveal
              as="p"
              key={i}
              delay={Math.min(i, 6) * 40}
              className="text-[16px] text-[#5B6B64] leading-relaxed"
            >
              {paragraph}
            </Reveal>
          ))}
        </div>
      </article>

      {/* Footer CTA */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-2xl border-t border-gray-200 pt-10">
          <Reveal as="div">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#058B74] hover:text-[#01463A] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
            >
              <span aria-hidden="true">&larr;</span> Back to all posts
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
