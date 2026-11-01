import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaLink } from "@/components/ui/CtaLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProductPageJSONLD } from "@/components/seo/ProductPageJSONLD";
import {
  ACCENTS,
  PRODUCTS,
  getProduct,
} from "@/lib/products";
import { productMetadata } from "@/lib/seo";
import {
  ProductHero,
  ProductSections,
  HudPanel,
  SpecTable,
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

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const accent = ACCENTS[product.accent];

  return (
    <>
      <ProductPageJSONLD product={product} />

      {/* ── Hero with 3D hologram ── */}
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

      {/* ── Verified capability grid ── */}
      <section className="py-24">
        <div className="container-guild">
          <ProductSections product={product} accent={accent} />
        </div>
      </section>

      {/* ── HUD showcase ── */}
      <HudPanel product={product} accent={accent} />

      {/* ── Tech spec table ── */}
      <SpecTable product={product} accent={accent} />

      {/* ── Download section ── */}
      <ProductDownloadSection product={product} accent={accent} />

      {/* ── Related products ── */}
      <RelatedStrip product={product} />

      {/* ── Final CTA ── */}
      <section className="py-20 border-t border-hairline text-center">
        <div className="container-guild flex flex-col items-center gap-6">
          <p className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-grey">
            {product.nextAction.note}
          </p>
          <CtaLink href={product.nextAction.href} ariaLabel={product.nextAction.label}>
            {product.nextAction.label}
          </CtaLink>
        </div>
      </section>
    </>
  );
}
