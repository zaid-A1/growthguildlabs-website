import { productHref, type Product } from "@/lib/products";
import { SITE } from "@/lib/site";

/**
 * Per-product structured data. Only verifiable properties are included:
 * no offers, ratings or aggregate reviews — none of those exist publicly yet.
 */
export function ProductPageJSONLD({ product }: { product: Product }) {
  const base = SITE.url.replace(/\/$/, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    alternateName: product.display,
    description: product.summary,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: product.platform,
    url: `${base}${productHref(product.id)}`,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: base,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
