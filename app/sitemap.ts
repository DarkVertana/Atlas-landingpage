import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/app/lib/blog";

const BASE = "https://atlasscreening.com";

// Static, public, indexable routes in sitemap priority order.
// /trust intentionally redirects to /compliance and /admin is noindexed,
// so neither is listed here.
const staticRoutes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/criminal-background-checks", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ssn-trace", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/employment-verification", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/tenant-screening", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/credit-report", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/mvr", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/sex-offender-registry", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/global-watchlist", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/social-media-screening", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-it-works", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/resources/cost-calculator", priority: 0.5, changeFrequency: "yearly" },
  { path: "/resources/package-recommender", priority: 0.5, changeFrequency: "yearly" },
  { path: "/compliance", priority: 0.4, changeFrequency: "yearly" },
  { path: "/client-certification", priority: 0.3, changeFrequency: "yearly" },
  { path: "/dispute-resolution", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Blog posts — from Supabase when configured, static seed posts otherwise.
  const posts = await getPublishedPosts();
  for (const post of posts) {
    entries.push({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
