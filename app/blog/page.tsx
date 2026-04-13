type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  gradient: string;
};

const categories = ["All", "Compliance", "Hiring", "Product", "Industry", "Guides"];

const posts: Post[] = [
  {
    slug: "fcra-adverse-action-checklist-2026",
    title: "The 2026 FCRA adverse-action checklist for hiring teams",
    excerpt:
      "A practical walkthrough of pre-adverse and adverse-action requirements — with the exact letters, timelines, and applicant rights you need.",
    category: "Compliance",
    date: "Apr 10, 2026",
    readTime: "8 min read",
    author: "Atlas Compliance Team",
    image: "/assets/images/Criminal-background-checks.webp",
    gradient: "from-[#01463A] to-[#058B74]",
  },
  {
    slug: "tenant-screening-best-practices",
    title: "Tenant screening that respects applicants — and protects your portfolio",
    excerpt:
      "How property managers can balance thorough vetting with a candidate-friendly experience in 2026.",
    category: "Industry",
    date: "Apr 3, 2026",
    readTime: "6 min read",
    author: "Atlas Industry Desk",
    image: "/assets/images/Tenant-screening.webp",
    gradient: "from-[#058B74] to-[#0aa88a]",
  },
  {
    slug: "ai-in-background-checks",
    title: "What AI actually does (and doesn't do) in a background check",
    excerpt:
      "Separating the real applications of machine learning in screening from the vendor marketing fluff.",
    category: "Product",
    date: "Mar 27, 2026",
    readTime: "7 min read",
    author: "Atlas Engineering",
    image: "/assets/images/Ai-section.webp",
    gradient: "from-[#01463A] to-[#0aa88a]",
  },
  {
    slug: "mvr-fleet-compliance",
    title: "Motor vehicle record compliance for fleet and gig operators",
    excerpt:
      "A state-by-state primer on MVR data, refresh cadence, and how to automate continuous monitoring.",
    category: "Compliance",
    date: "Mar 18, 2026",
    readTime: "5 min read",
    author: "Atlas Compliance Team",
    image: "/assets/images/Motor-vehicle-records.webp",
    gradient: "from-[#058B74] to-[#01463A]",
  },
  {
    slug: "hiring-velocity-without-risk",
    title: "How to speed up hiring without cutting screening corners",
    excerpt:
      "Five concrete changes we've seen high-volume hiring teams make to reduce time-to-offer by 40%.",
    category: "Hiring",
    date: "Mar 11, 2026",
    readTime: "6 min read",
    author: "Atlas Customer Success",
    image: "/assets/images/Employment-verification.webp",
    gradient: "from-[#0aa88a] to-[#01463A]",
  },
  {
    slug: "ssn-trace-explained",
    title: "SSN trace, explained: what it tells you and what it doesn't",
    excerpt:
      "The foundation check that anchors every background report — and why it's often misunderstood.",
    category: "Guides",
    date: "Mar 4, 2026",
    readTime: "4 min read",
    author: "Atlas Research",
    image: "/assets/images/SSN-trace-%26-address-history.webp",
    gradient: "from-[#01463A] to-[#058B74]",
  },
  {
    slug: "ban-the-box-state-map",
    title: "Ban-the-box in 2026: the state and city map employers need",
    excerpt:
      "Jurisdictions that restrict when and how you can consider criminal history — updated for 2026 legislation.",
    category: "Compliance",
    date: "Feb 25, 2026",
    readTime: "9 min read",
    author: "Atlas Compliance Team",
    image: "/assets/images/Criminal-background-checks.webp",
    gradient: "from-[#058B74] to-[#0aa88a]",
  },
  {
    slug: "onboarding-checklist-new-hires",
    title: "The onboarding checklist that catches compliance gaps on day one",
    excerpt:
      "Seven items to verify between offer letter and first day — without slowing down the applicant experience.",
    category: "Hiring",
    date: "Feb 18, 2026",
    readTime: "5 min read",
    author: "Atlas Customer Success",
    image: "/assets/images/Employment-verification.webp",
    gradient: "from-[#01463A] to-[#058B74]",
  },
  {
    slug: "data-retention-in-screening",
    title: "Data retention for background reports: what the law requires",
    excerpt:
      "The minimum retention windows, purge cadence, and audit expectations for modern CRA workflows.",
    category: "Guides",
    date: "Feb 11, 2026",
    readTime: "6 min read",
    author: "Atlas Research",
    image: "/assets/images/SSN-trace-%26-address-history.webp",
    gradient: "from-[#058B74] to-[#0aa88a]",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white text-[#01463A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#01463A] to-[#058B74]">
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#0aa88a]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#058B74]/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
            The Atlas Blog
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Field notes on compliant screening.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            Compliance updates, hiring playbooks, and product deep-dives — written
            by the people who build and run Atlas every day.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-10 px-6 border-b border-gray-100">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c, i) => (
              <a
                key={c}
                href="#all"
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${
                  i === 0
                    ? "bg-[#01463A] text-white border border-[#01463A]"
                    : "text-[#01463A] border border-gray-200 bg-white hover:border-[#058B74]/40 hover:bg-[#058B74]/5 hover:text-[#058B74]"
                }`}
              >
                {c}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section id="all" className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-[#058B74]/50 hover:shadow-xl hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300 text-left flex flex-col"
              >
                <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${post.gradient}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#058B74]">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#01463A] leading-snug group-hover:text-[#058B74] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="mt-auto pt-4 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                    By {post.author}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Load more */}
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-gray-200 text-[#01463A] px-6 py-3 rounded-xl text-sm font-semibold hover:border-[#058B74]/40 hover:bg-[#058B74]/5 hover:text-[#058B74] transition-all"
            >
              Load more posts
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl px-8 md:px-16 py-10 md:py-14 flex items-center shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/banner_cta.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top right, #01463A 30%, transparent 100%)",
              }}
            />
            <div className="relative z-10 max-w-xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-3">
                Stay ahead
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                New posts, once a<br className="hidden md:block" /> fortnight.
              </h2>
              <p className="mt-4 text-white/60 text-base leading-relaxed max-w-md">
                Compliance updates and hiring playbooks — straight to your inbox.
                Unsubscribe any time.
              </p>
              <form className="mt-6 flex flex-wrap gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 min-w-[220px] bg-white/95 text-[#01463A] placeholder-gray-400 border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-white/40 transition-all"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-white text-[#01463A] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
