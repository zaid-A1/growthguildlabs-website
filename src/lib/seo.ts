import {
  PRODUCTS,
  productHref,
  type AccentKey,
  type Product,
} from "./products";
import { SITE } from "./site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
};

type MetadataResult = {
  title: string;
  description: string;
  alternates: { canonical: string };
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    type: "website";
    images: { url: string; width: number; height: number; alt: string }[];
  };
  twitter: {
    card: "summary_large_image";
    title: string;
    description: string;
    images: string[];
  };
};

/**
 * Build a complete page metadata object from a small input, including OG /
 * Twitter cards, canonical URL, and sensible OG fallbacks.
 */
export function buildMetadata(input: MetadataInput): MetadataResult {
  const base = SITE.url.replace(/\/$/, "");
  const path = input.path || "/";
  const url = `${base}${path === "/" ? "" : path}`;

  // Prefer a supplied image; otherwise fall back to the in-repo OG artwork.
  const image = input.image ?? "/products/social-card.png";
  const imageAlt = input.imageAlt ?? `${SITE.name} — ${SITE.tagline}`;

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: path },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: SITE.name,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}

/** Metadata for a product detail page, derived from the typed product. */
export function productMetadata(product: Product): MetadataResult {
  return buildMetadata({
    title: `${product.name} — ${SITE.name}`,
    description: product.seo.description,
    path: productHref(product.id),
    image: product.image,
    imageAlt: product.imageAlt,
  });
}

export const PRODUCT_IDS = PRODUCTS.map((p) => p.id);
export { productHref };
export type { AccentKey, Product };
