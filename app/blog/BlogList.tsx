"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { categories } from "../lib/posts";
import { subscribeNewsletter } from "../lib/actions";
import type { BlogPost } from "../lib/blog";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<string>("All");
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [subMsg, setSubMsg] = useState("");

  const visiblePosts = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [active, posts]
  );

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const res = await subscribeNewsletter(email);
    if (res.ok) {
      setSubscribed(true);
      setSubMsg("Thanks, you're on the list. New posts land in your inbox.");
      setEmail("");
    } else {
      setSubMsg(res.error ?? "Something went wrong.");
    }
  };

  return (
    <>
      {/* Filters */}
      <section className="bg-white py-10 px-6 border-b border-gray-100">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter posts by category">
            {categories.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={isActive}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-[#01463A] text-white border border-[#01463A]"
                      : "text-[#01463A] border border-gray-200 bg-white hover:border-[#058B74]/40 hover:bg-[#058B74]/5 hover:text-[#058B74]"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="bg-white py-14 sm:py-20 px-6">
        <div className="mx-auto max-w-6xl">
          {visiblePosts.length === 0 ? (
            <p className="text-center text-gray-500">No posts in this category yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-[#058B74]/50 hover:shadow-xl hover:shadow-[#058B74]/10 hover:-translate-y-1 transition-all duration-300 text-left flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2"
                >
                  <div className="relative h-52 overflow-hidden bg-[#01463A]/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.imageAlt}
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
                    <div className="flex items-center gap-2 text-[11px] text-gray-600 mb-2">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-400" aria-hidden="true" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#01463A] leading-snug group-hover:text-[#058B74] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <p className="mt-auto pt-4 text-[11px] font-semibold uppercase tracking-widest text-gray-600">
                      By {post.author}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <Reveal
            variant="scale"
            className="relative overflow-hidden rounded-2xl px-8 md:px-16 py-10 md:py-14 flex items-center shadow-lg bg-[#01463A]"
          >
            {/* Background image + green gradient overlay — matches the homepage CTA */}
            <Image
              src="/assets/banner_cta.webp"
              alt=""
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top right, #01463A 30%, transparent 100%)" }}
            />

            <div className="relative z-10 max-w-xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-3">
                Stay ahead
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                New posts, once a<br className="hidden md:block" /> fortnight.
              </h2>
              <p className="mt-4 text-white/60 text-base leading-relaxed max-w-md">
                Compliance updates and hiring playbooks, straight to your inbox.
                Unsubscribe any time.
              </p>
              <form onSubmit={handleSubscribe} className="mt-6 flex flex-wrap gap-3 max-w-md">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 min-w-[220px] bg-white/95 text-[#01463A] placeholder-gray-500 border border-white/10 rounded-lg px-4 py-2.5 text-[16px] outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-all"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-white text-[#01463A] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#01463A]"
                >
                  Subscribe
                </button>
              </form>
              <p aria-live="polite" className="mt-3 text-sm text-white/80 min-h-[1.25rem]">
                {subscribed ? subMsg : subMsg}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
