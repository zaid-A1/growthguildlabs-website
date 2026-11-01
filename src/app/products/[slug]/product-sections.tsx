"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import { CtaLink } from "@/components/ui/CtaLink";
import { Hologram3DCanvas } from "@/components/fx/Hologram3DCanvas";
import { getReleaseByProductId } from "@/lib/releases";
import {
  ACCENTS,
  getProduct,
  productHref,
  type AccentTokens,
  type Product,
} from "@/lib/products";
import { cn } from "@/lib/utils";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Per-product hero layouts — five distinct design compositions. Each product
   gets its own visual identity while sharing one data source (lib/products.ts).
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function HeroHeader({
  product,
  accent,
  align = "left",
}: {
  product: Product;
  accent: AccentTokens;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center"
      )}
    >
      <span className="eyebrow">{product.platform}</span>
      <h1 className="font-display text-[clamp(2.6rem,5.4vw,5.4rem)] font-bold leading-[1.0] text-ice-white text-balance">
        {product.name}
      </h1>
      <p className="-mt-3 max-w-2xl font-display text-[clamp(1.05rem,1.9vw,1.35rem)] leading-snug text-ice-white/85 text-balance">
        {product.role}
      </p>
      <p
        className="font-mono text-[0.78rem] uppercase tracking-[0.3em]"
        style={{ color: accent.color }}
      >
        {product.packaging}
      </p>
      <p className="max-w-2xl text-lg leading-relaxed text-mist text-pretty">
        {product.summary}
      </p>
    </div>
  );
}

/* Distinct composition 1 — ULTRON 2.0: split deck with 3D hologram */
function HeroSplitDeck({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(60% 55% at 82% 12%, ${accent.soft} 0%, transparent 70%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="cyber-grid opacity-[0.02] pointer-events-none absolute inset-0"
      />
      <div className="container-guild relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <HeroHeader product={product} accent={accent} />
        <div className="relative mx-auto w-72 max-w-full sm:w-96 flex items-center justify-center">
          <Hologram3DCanvas color={accent.color} size={420} />
        </div>
      </div>
    </section>
  );
}

/* Distinct composition 2 — Connector: centered pairing ceremony */
function HeroCenterPairing({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(50% 60% at 50% 0%, ${accent.soft} 0%, transparent 65%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="cyber-grid opacity-[0.02] pointer-events-none absolute inset-0"
      />
      <div className="container-guild relative flex flex-col items-center gap-10 text-center">
        <div className="relative flex items-center justify-center">
          <Hologram3DCanvas color={accent.color} size={340} />
        </div>
        <HeroHeader product={product} accent={accent} align="center" />
      </div>
    </section>
  );
}

/* Distinct composition 3 — JARVIS 2.0: immersive full-bleed dark panel */
function HeroImmersiveDark({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  return (
    <section
      className="relative overflow-hidden pt-40 pb-20"
      style={{
        background: `linear-gradient(135deg, #0a0206 0%, #03090d 60%, #0a020a 100%)`,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(50% 50% at 70% 20%, ${accent.soft} 0%, transparent 70%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="cyber-grid opacity-[0.025] pointer-events-none absolute inset-0"
      />
      <div className="container-guild relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-72 max-w-full sm:w-96 flex items-center justify-center">
          <Hologram3DCanvas color={accent.color} size={420} />
        </div>
        <HeroHeader product={product} accent={accent} />
      </div>
    </section>
  );
}

/* Distinct composition 4 — JARVIS Phone: compact mobile-first hero */
function HeroMobileFirst({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(60% 55% at 18% 18%, ${accent.soft} 0%, transparent 70%)`,
        }}
      />
      <div className="container-guild relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <HeroHeader product={product} accent={accent} />
        <div className="relative mx-auto w-56 max-w-full sm:w-72 flex items-center justify-center">
          <Hologram3DCanvas color={accent.color} size={360} />
        </div>
      </div>
    </section>
  );
}

/* Distinct composition 5 — F.R.I.D.A.Y.: arc reactor centre-stage */
function HeroArcReactor({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  return (
    <section
      className="relative overflow-hidden pt-40 pb-20"
      style={{
        background: `radial-gradient(ellipse 90% 70% at 50% 0%, #041f2b 0%, #03090d 60%)`,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(40% 50% at 50% 50%, ${accent.soft} 0%, transparent 70%)`,
        }}
      />
      <div className="container-guild relative flex flex-col items-center gap-10 text-center">
        <div className="relative flex items-center justify-center">
          <Hologram3DCanvas color={accent.color} size={380} />
        </div>
        <HeroHeader product={product} accent={accent} align="center" />
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Public ProductHero — routes each product to its distinct composition.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function ProductHero({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}): ReactElement {
  switch (product.id) {
    case "ultron-2":
      return <HeroSplitDeck product={product} accent={accent} />;
    case "ultron-2-connector":
      return <HeroCenterPairing product={product} accent={accent} />;
    case "jarvis-2":
      return <HeroImmersiveDark product={product} accent={accent} />;
    case "jarvis-2-phone":
      return <HeroMobileFirst product={product} accent={accent} />;
    case "friday-ai":
      return <HeroArcReactor product={product} accent={accent} />;
    default:
      return <HeroSplitDeck product={product} accent={accent} />;
  }
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ProductSections — animated feature groups with hover effects
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function ProductSections({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  return (
    <div className="flex flex-col gap-20">
      {product.featureGroups.map((group, gi) => (
        <div key={gi} className="flex flex-col gap-8">
          {/* Group heading */}
          <div className="flex items-center gap-4">
            <div
              className="h-px flex-1 max-w-[3rem]"
              style={{ background: `linear-gradient(90deg, ${accent.color}99, transparent)` }}
            />
            <h2
              className="font-display text-2xl sm:text-3xl font-bold text-ice-white"
              style={{ textShadow: `0 0 24px ${accent.color}55` }}
            >
              {group.heading}
            </h2>
          </div>

          {/* Capability cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {group.capabilities.map((cap, ci) => (
              <div
                key={ci}
                className="group relative rounded-2xl border border-white/10 bg-panel p-6 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_32px_var(--accent-glow)] hover:-translate-y-1"
                style={
                  {
                    "--accent": `${accent.color}66`,
                    "--accent-glow": `${accent.color}20`,
                  } as React.CSSProperties
                }
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute inset-x-0 top-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent.color}, transparent)` }}
                />
                <h3
                  className="font-display text-base font-semibold text-ice-white mb-2 group-hover:text-[var(--cap-color)] transition-colors duration-300"
                  style={{ "--cap-color": accent.color } as React.CSSProperties}
                >
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-mist/90 font-light">
                  {cap.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HudPanel — premium HUD showcase
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function HudPanel({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  if (!product.hud?.length) return null;

  return (
    <section className="py-24 border-t border-hairline">
      <div className="container-guild">
        <div className="flex items-center gap-4 mb-12">
          <div
            className="h-px flex-1 max-w-[3rem]"
            style={{ background: `linear-gradient(90deg, ${accent.color}99, transparent)` }}
          />
          <h2
            className="font-display text-2xl sm:text-3xl font-bold text-ice-white"
            style={{ textShadow: `0 0 24px ${accent.color}55` }}
          >
            HUD Interface
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {product.hud.map((hud, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border bg-panel p-7 flex flex-col gap-4"
              style={{
                borderColor: `${accent.color}33`,
                boxShadow: `0 0 40px ${accent.color}10`,
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20"
                style={{ background: `radial-gradient(circle at top right, ${accent.color}, transparent)` }}
              />

              <h3
                className="font-display text-xl font-bold"
                style={{ color: accent.color }}
              >
                {hud.name}
              </h3>
              <p className="text-sm leading-relaxed text-mist/90 font-light">
                {hud.detail}
              </p>

              {/* Palette swatches */}
              <div className="flex gap-2 mt-auto">
                {hud.palette.map((hex) => (
                  <span
                    key={hex}
                    className="size-6 rounded-full border border-white/20"
                    style={{ background: hex, boxShadow: `0 0 8px ${hex}99` }}
                    title={hex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Verified tech spec table — glowing rows
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function SpecTable({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  return (
    <section className="py-24 border-t border-hairline">
      <div className="container-guild">
        <div className="flex items-center gap-4 mb-12">
          <div
            className="h-px flex-1 max-w-[3rem]"
            style={{ background: `linear-gradient(90deg, ${accent.color}99, transparent)` }}
          />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ice-white">
            Verified Tech Stack
          </h2>
        </div>

        <div
          className="overflow-hidden rounded-2xl border"
          style={{ borderColor: `${accent.color}22` }}
        >
          <table className="w-full text-sm">
            <tbody>
              {product.stack.map((row, i) => (
                <tr
                  key={i}
                  className="group border-b border-hairline last:border-0 transition-colors duration-200 hover:bg-white/[0.03]"
                >
                  <td
                    className="w-1/3 px-6 py-4 font-mono text-[0.75rem] uppercase tracking-widest font-semibold"
                    style={{ color: accent.color }}
                  >
                    {row.label}
                  </td>
                  <td className="px-6 py-4 text-mist leading-relaxed">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ProductDownloadSection — premium download with SHA badge
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function ProductDownloadSection({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  const release = getReleaseByProductId(product.id);
  if (!release) return null;

  return (
    <section
      className="relative overflow-hidden py-24 border-t border-hairline"
      style={{
        background: `radial-gradient(60% 70% at 50% 100%, ${accent.soft} 0%, transparent 70%)`,
      }}
    >
      <div className="container-guild relative z-10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3">
            <span
              className="font-mono text-[0.72rem] uppercase tracking-[0.3em]"
              style={{ color: accent.color }}
            >
              Official Release · {release.releaseDate}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ice-white">
              Download {product.name}
            </h2>
            <p className="text-base text-mist font-light">
              {release.fileSizeFormatted} · {release.platform} · {release.architecture}
            </p>
          </div>

          {/* SHA badge */}
          <div
            className="w-full max-w-lg rounded-xl border bg-void/80 px-6 py-4 font-mono text-[0.72rem] flex flex-col gap-2"
            style={{ borderColor: `${accent.color}33` }}
          >
            <span
              className="uppercase tracking-widest text-[0.65rem]"
              style={{ color: accent.color }}
            >
              SHA-256 Checksum
            </span>
            <span className="text-neon-green break-all leading-relaxed">
              {release.sha256}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {release.directDownloadAvailable ? (
              <a
                href={release.downloadUrl}
                className="btn-neon font-bold text-xs tracking-widest px-10 py-4 inline-flex items-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>↓</span>
                <span>Download {release.fileName}</span>
              </a>
            ) : (
              <div className="text-sm text-muted-grey font-mono">
                {release.hostingNotice}
              </div>
            )}
            <Link
              href="/downloads"
              className="font-mono text-xs uppercase tracking-widest text-mist hover:text-cyan-electric transition-colors"
            >
              Full Download Center →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   RelatedStrip — sibling products with accent dots
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function RelatedStrip({
  product,
}: {
  product: Product;
}) {
  const related = product.related
    .map((id) => getProduct(id))
    .filter((p): p is Product => Boolean(p))
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-20 border-t border-hairline">
      <div className="container-guild">
        <p className="mb-8 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-grey">
          Also in the ecosystem
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => {
            const acc = ACCENTS[p.accent];
            return (
              <Link
                key={p.id}
                href={productHref(p.id)}
                className="group flex items-center gap-4 rounded-2xl border border-hairline bg-panel px-6 py-5 transition-all duration-300 hover:border-[var(--r-accent)] hover:-translate-y-0.5 hover:shadow-[0_0_24px_var(--r-glow)]"
                style={
                  {
                    "--r-accent": `${acc.color}55`,
                    "--r-glow": `${acc.color}15`,
                  } as React.CSSProperties
                }
              >
                <span
                  className="size-3 rounded-full shrink-0"
                  style={{
                    background: acc.color,
                    boxShadow: `0 0 10px ${acc.color}`,
                  }}
                />
                <div className="min-w-0">
                  <span className="block font-display text-sm font-bold text-ice-white group-hover:text-[var(--r-accent)] transition-colors duration-300">
                    {p.name}
                  </span>
                  <span className="block font-mono text-[0.65rem] text-muted-grey truncate">
                    {p.role}
                  </span>
                </div>
                <span className="ml-auto font-mono text-muted-grey group-hover:text-ice-white group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
