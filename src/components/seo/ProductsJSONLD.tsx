import { SITE } from "@/lib/site";
import type { Product } from "@/lib/products";

/**
 * ItemList of the five applications. Only factual properties are used —
 * no ratings, offers, or download URLs, because none exist publicly yet.
 */
export function ProductsJSONLD({ products }: { products: Product[] }) {
  const base = SITE.url.replace(/\/$/, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Growth Guild Labs applications",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: p.name,
        description: p.summary,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: p.platform,
        author: {
          "@type": "Organization",
          name: SITE.name,
          url: base,
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
