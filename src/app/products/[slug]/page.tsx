import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaLink } from "@/components/ui/CtaLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProductPageJSONLD } from "@/components/seo/ProductPageJSONLD";
import {
  ACCENTS,
  PRODUCTS,
  productHref,
  getProduct,
} from "@/lib/products";
import { productMetadata } from "@/lib/seo";
import {
  ProductHero,
  ProductSections,
  HudPanel,
  ProductDownloadSection,
  RelatedStrip,
} from "./product-sections";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return productMetadata(product);
}

/**
 * One product route, five distinct data-driven compositions.
 * All product copy/claims come from lib/products.ts (the single source).
 */
export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const accent = ACCENTS[product.accent];

  return (
    <>
      <ProductPageJSONLD product={product} />

      {/* ── Hero (unique layout per product) ── */}
      <ProductHero product={product} accent={accent} />

      {/* ── Honest status strip ── */}
      <section
        className="relative border-y border-hairline bg-[linear-gradient(90deg,#071d24ee,#03090d)]"
        aria-label="Availability status"
      >
        <div className="container-guild flex flex-col items-start gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge label={product.status.state} />
            {product.chips.map((chip) => (
              <span key={chip} className="spec-chip">
                {chip}
              </span>
            ))}
          </div>
          <p className="max-w-md text-[13px] leading-[1.6] text-muted-grey">
            {product.status.note}
          </p>
        </div>
      </section>

      {/* ── Verified capability grid (per-product grouping) ── */}
      <section className="py-24">
        <div className="container-guild">
          <ProductSections product={product} accent={accent} />
        </div>
      </section>

      {/* ── Real UI artefacts ── */}
      {product.hud && product.hud.length > 0 && (
        <section className="border-t border-hairline bg-[linear-gradient(180deg,#03090d,#071d24_160%)] py-24">
          <div className="container-guild">
            <HudPanel product={product} accent={accent} />
          </div>
        </section>
      )}

      {/* ── Ecosystem bridge ── */}
      {product.bridge && (
        <section className="py-20">
          <div className="container-guild">
            <div
              className="panel flex flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between"
              style={{ borderColor: `${accent.color}33` }}
            >
              <div className="max-w-2xl">
                <p
                  className="font-mono text-micro uppercase tracking-[0.28em]"
                  style={{ color: accent.color }}
                >
                  Inside the ecosystem
                </p>
                <h2 className="mt-3 font-display text-[1.45rem] text-ice-white">
                  {product.bridge.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-mist">
                  {product.bridge.detail}
                </p>
              </div>
              <CtaLink
                href={productHref(product.bridge.partnerId)}
                variant="secondary"
                className="shrink-0 self-start sm:self-auto"
              >
                Open the partner page
              </CtaLink>
            </div>
          </div>
        </section>
      )}

      {/* ── Official Download Section ── */}
      <ProductDownloadSection product={product} accent={accent} />

      {/* ── Related + next action ── */}
      <RelatedStrip product={product} accent={accent} />
    </>
  );
}
