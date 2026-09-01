import Reveal from "../components/Reveal";
import BlogList from "./BlogList";
import { getPublishedPosts } from "../lib/blog";

// Posts are managed in the admin panel, so re-fetch periodically rather than
// baking them in at build time.
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <main id="main" className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-6 sm:pt-36 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal as="p" className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            The Atlas Blog
          </Reveal>
          <Reveal as="h1" delay={80} className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Field notes on compliant screening.
          </Reveal>
          <Reveal as="p" delay={160} className="mt-5 text-white/70 max-w-xl text-sm leading-relaxed">
            Compliance updates, hiring playbooks, and product deep-dives, written
            by the people who build and run Atlas every day.
          </Reveal>
        </div>
      </section>

      <BlogList posts={posts} />
    </main>
  );
}
