import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Sitemap for all real routes. Falls back to localhost when
 * NEXT_PUBLIC_SITE_URL is not set (documented in the README — set it in
 * production so search engines see the real domain).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/ecosystem`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/downloads`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/lab-notes`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/feedback`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${base}/products/${p.id}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
