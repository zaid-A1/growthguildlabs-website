import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import { CtaLink } from "@/components/ui/CtaLink";
import { getReleaseByProductId } from "@/lib/releases";
import {
  ACCENTS,
  getProduct,
  productHref,
  type AccentTokens,
  type Product,
} from "@/lib/products";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────────────────
   Per-product hero layouts — five distinct design compositions. Each product
   gets its own visual identity while sharing one data source (lib/products.ts).
   ──────────────────────────────────────────────────────────────────────────── */

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

/* Distinct composition 1 — ULTRON 2.0: split deck with an amber discipline */
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
      <div className="container-guild relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <HeroHeader product={product} accent={accent} />
        <div className="relative mx-auto w-64 max-w-full sm:w-80">
          <span
            aria-hidden="true"
            className="absolute -inset-6 rounded-full blur-2xl"
            style={{
              background: `radial-gradient(50% 50% at 50% 42%, ${accent.soft}, transparent 70%)`,
            }}
          />
          <span
            className="hud-frame relative block aspect-square w-full overflow-hidden rounded-3xl border bg-[radial-gradient(75%_75%_at_50%_30%,#120b06_0%,#03090d_100%)]"
            style={
              {
                borderColor: `${accent.color}44`,
                "--frame-accent": `${accent.color}aa`,
              } as React.CSSProperties
            }
          >
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 1024px) 80vw, 30vw"
              priority
              className="object-contain p-5 sm:p-8"
            />
          </span>
          <p className="mt-4 text-center text-[12px] leading-relaxed text-muted-grey">
            {product.imageCaption}
          </p>
        </div>
      </div>
    </section>
  );
}

/* Distinct composition 2 — Connector: a centered pairing ceremony */
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
          background: `radial-gradient(55% 60% at 50% 0%, ${accent.soft} 0%, transparent 72%)`,
        }}
      />
      <div className="container-guild relative flex flex-col items-center gap-10">
        <HeroHeader product={product} accent={accent} align="center" />

        {/* Phone mock with pairing rings */}
        <div className="relative flex flex-col items-center">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[26rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed opacity-40"
            style={{ borderColor: `${accent.color}55` }}
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-50"
            style={{
              borderColor: `${accent.color}44`,
              boxShadow: `0 0 60px ${accent.soft}`,
            }}
          />
          <div className="relative w-48 rounded-[2.2rem] border border-hairline-strong bg-void p-3 shadow-card sm:w-56">
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-6 h-4 w-16 -translate-x-1/2 rounded-full bg-void"
            />
            <div
              className="relative mt-9 aspect-[9/19] w-full overflow-hidden rounded-[1.6rem]"
              style={{
                background: `radial-gradient(120% 90% at 50% 12%, ${accent.soft} 0%, #03090d 60%)`,
              }}
            >
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="224px"
                priority
                className="animate-float-slow object-contain p-10"
              />
            </div>
          </div>
          <p className="mt-5 text-center text-[12px] text-muted-grey">
            {product.imageCaption}
          </p>
        </div>
      </div>
    </section>
  );
}

/* Distinct composition 3 — JARVIS 2.0: banner with reactor rings */
function HeroReactorBanner({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      {/* Reactor rings backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-52 top-1/2 size-[42rem] -translate-y-1/2 rounded-full opacity-50"
          style={{
            border: `1px solid ${accent.color}44`,
            boxShadow: `inset 0 0 90px ${accent.soft}, 0 0 90px ${accent.soft}`,
          }}
        />
        <div
          className="absolute -right-24 top-1/2 size-[28rem] -translate-y-1/2 rounded-full opacity-40"
          style={{ border: `1px dashed #ffb30055` }}
        />
      </div>
      <div className="container-guild relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto w-60 sm:w-72">
            <span
              className="hud-frame relative block aspect-square w-full overflow-hidden rounded-full border"
              style={
                {
                  borderColor: `${accent.color}55`,
                  "--frame-accent": `${accent.color}bb`,
                } as React.CSSProperties
              }
            >
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="288px"
                priority
                className="animate-float-slow object-contain p-4"
              />
            </span>
            <p className="mt-4 text-center text-[12px] text-muted-grey">
              {product.imageCaption}
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <HeroHeader product={product} accent={accent} />
        </div>
      </div>
    </section>
  );
}

/* Distinct composition 4 — Phone: full-bleed portrait device */
function HeroDevicePortrait({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(50% 45% at 16% 8%, ${accent.soft} 0%, transparent 68%)`,
        }}
      />
      <div className="container-guild relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <HeroHeader product={product} accent={accent} />
        <div className="relative mx-auto w-52 sm:w-60">
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-full blur-2xl"
            style={{
              background: `radial-gradient(50% 50% at 50% 50%, ${accent.soft}, transparent 72%)`,
            }}
          />
          <div className="relative rounded-[2.4rem] border border-hairline-strong bg-void p-3 shadow-card">
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-5 h-4 w-14 -translate-x-1/2 rounded-full bg-void"
            />
            <div
              className="relative mt-9 aspect-[9/19] w-full overflow-hidden rounded-[1.8rem]"
              style={{
                background: `radial-gradient(130% 100% at 50% 0%, ${accent.soft} 0%, #04070b 62%)`,
              }}
            >
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="240px"
                priority
                className="animate-float-slow object-contain p-12"
              />
              {/* HUD scanline */}
              <span
                aria-hidden="true"
                className="absolute inset-x-8 top-14 h-px"
                style={{ background: `${accent.color}55` }}
              />
            </div>
          </div>
          <p className="mt-4 text-center text-[12px] text-muted-grey">
            {product.imageCaption}
          </p>
        </div>
      </div>
    </section>
  );
}

/* Distinct composition 5 — F.R.I.D.A.Y.: cinematic wide banner */
function HeroWideBanner({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            `linear-gradient(100deg, ${accent.soft} 0%, transparent 42%),` +
            `radial-gradient(70% 60% at 88% 10%, #ff17441f 0%, transparent 66%)`,
        }}
      />
      <div className="container-guild relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative mx-auto w-56 sm:w-72 lg:w-80">
          <span
            aria-hidden="true"
            className="absolute -inset-8 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(50% 50% at 50% 45%, ${accent.soft}, transparent 74%)`,
            }}
          />
          <span
            className="hud-frame relative block aspect-square w-full overflow-hidden rounded-3xl border bg-[radial-gradient(75%_70%_at_50%_28%,#081822_0%,#03090d_100%)]"
            style={
              {
                borderColor: `${accent.color}44`,
                "--frame-accent": `${accent.color}aa`,
              } as React.CSSProperties
            }
          >
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 1024px) 70vw, 30vw"
              priority
              className="animate-float-slow object-contain p-6 sm:p-10"
            />
          </span>
          <p className="mt-4 text-center text-[12px] text-muted-grey">
            {product.imageCaption}
          </p>
        </div>
        <HeroHeader product={product} accent={accent} />
      </div>
    </section>
  );
}

const HERO_LAYOUTS: Record<
  string,
  (props: { product: Product; accent: AccentTokens }) => ReactElement
> = {
  "ultron-2-0": HeroSplitDeck,
  "ultron-2-0-connector": HeroCenterPairing,
  "jarvis-2-0": HeroReactorBanner,
  "jarvis-2-0-phone": HeroDevicePortrait,
  "friday-ai": HeroWideBanner,
};

export function ProductHero({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  const Layout = HERO_LAYOUTS[product.id] ?? HeroSplitDeck;
  return <Layout product={product} accent={accent} />;
}

/* ────────────────────────────────────────────────────────────────────────────
   ProductSections — verified capability groups + technology fact table.
   ──────────────────────────────────────────────────────────────────────────── */

export function ProductSections({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <span className="eyebrow">CONFIRMED CAPABILITIES</span>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] text-ice-white">
          What <span style={{ color: accent.color }}>{product.name}</span> can
          actually do
        </h2>
        <p className="max-w-3xl text-[15px] leading-relaxed text-mist">
          Every block below is verified against the shipped package itself —
          its modules, configs, HUD files and bundled documentation. Nothing
          here is promised on behalf of a future release.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {product.featureGroups.map((group) => (
          <div key={group.heading} className="panel flex flex-col gap-5 p-7">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8"
                style={{ background: accent.color }}
              />
              <h3 className="font-mono text-micro uppercase tracking-[0.28em] text-ice-white">
                {group.heading}
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {group.capabilities.map((cap) => (
                <li key={cap.title}>
                  <p className="text-[0.95rem] font-semibold text-ice-white">
                    {cap.title}
                  </p>
                  <p className="mt-1 text-[14px] leading-relaxed text-mist">
                    {cap.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Technology facts table */}
      <div className="mt-14 overflow-hidden rounded-2xl border border-hairline">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{`Technology facts verified inside the ${product.name} package by Growth Guild Labs.`}</caption>
          <thead>
            <tr className="border-b border-hairline bg-[#071218]">
              <th
                scope="col"
                className="px-5 py-3 font-mono text-micro uppercase tracking-[0.24em] text-muted-grey"
              >
                Layer
              </th>
              <th
                scope="col"
                className="px-5 py-3 font-mono text-micro uppercase tracking-[0.24em] text-muted-grey"
              >
                What ships
              </th>
            </tr>
          </thead>
          <tbody>
            {product.stack.map((row) => (
              <tr
                key={row.label}
                className="border-b border-hairline/60 last:border-0"
              >
                <th
                  scope="row"
                  className="px-5 py-3.5 align-top text-[13px] font-medium text-ice-white"
                >
                  {row.label}
                </th>
                <td className="px-5 py-3.5 align-top text-[13px] leading-relaxed text-mist">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   HudPanel — real UI artefacts found inside the shipped package.
   ──────────────────────────────────────────────────────────────────────────── */

export function HudPanel({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <span className="eyebrow">REAL UI ARTEFACTS</span>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] text-ice-white">
          Interfaces found inside the package
        </h2>
        <p className="max-w-3xl text-[15px] leading-relaxed text-mist">
          These are not concepts — they are shipped UI pieces: HUD themes,
          avatars and bundled web components, described exactly as packaged.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {product.hud?.map((hud) => (
          <div
            key={hud.name}
            className="panel flex flex-col gap-4 p-7"
            style={{ borderColor: `${accent.color}26` }}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-lg text-ice-white">
                {hud.name}
              </h3>
              <div className="flex gap-1.5" aria-hidden="true">
                {hud.palette.map((c) => (
                  <span
                    key={c}
                    className="size-4 rounded-full border border-white/10"
                    style={{ background: c, boxShadow: `0 0 12px ${c}55` }}
                  />
                ))}
              </div>
            </div>
            <p className="text-[14px] leading-relaxed text-mist">
              {hud.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   RelatedStrip — next action + the rest of the guild.
   ──────────────────────────────────────────────────────────────────────────── */

export function RelatedStrip({
  product,
  accent,
}: {
  product: Product;
  accent: AccentTokens;
}) {
  const related = product.related
    .map((id) => getProduct(id))
    .filter((p): p is Product => Boolean(p));

  return (
    <aside aria-label="Continue through the ecosystem" className="py-24">
      {/* Next action */}
      <div className="container-guild">
        <div
          className="panel flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10"
          style={{ borderColor: `${accent.color}33` }}
        >
          <div className="max-w-2xl">
            <p
              className="font-mono text-micro uppercase tracking-[0.28em]"
              style={{ color: accent.color }}
            >
              Next move
            </p>
            <p className="mt-3 font-display text-[1.45rem] leading-snug text-ice-white">
              {product.nextAction.label}
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-mist">
              {product.nextAction.note}
            </p>
          </div>
          <CtaLink
            href={product.nextAction.href}
            className="shrink-0 self-start sm:self-auto"
          >
            {product.nextAction.label}
          </CtaLink>
        </div>
      </div>

      {/* Related products */}
      <div className="container-guild mt-16">
        <div className="flex flex-col gap-6">
          <span className="eyebrow">ALSO IN THE GUILD</span>
          <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] text-ice-white">
            Keep moving through the ecosystem
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {related.map((p) => {
            const a = ACCENTS[p.accent];
            return (
              <Link
                key={p.id}
                href={productHref(p.id)}
                className="panel group flex items-center gap-5 p-6 transition-transform duration-500 ease-(--ease-cinematic) hover:-translate-y-1"
                style={{ borderColor: `${a.color}26` }}
              >
                <span className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-hairline bg-void/70">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-contain p-1.5"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[1.15rem] text-ice-white">
                    {p.name}
                  </span>
                  <span className="mt-0.5 block text-[13px] text-muted-grey">
                    {p.role}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="ml-auto font-mono text-sm transition-transform duration-500 group-hover:translate-x-1"
                  style={{ color: a.color }}
                >
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   ProductDownloadSection — verified download release package for this product.
   ──────────────────────────────────────────────────────────────────────────── */

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
    <section className="border-t border-hairline py-24 bg-void/50">
      <div className="container-guild">
        <div
          className="panel group relative overflow-hidden p-8 sm:p-12 transition-all duration-500"
          style={{ borderColor: `${accent.color}40`, boxShadow: `0 0 42px ${accent.soft}` }}
        >
          {/* Ambient glow header */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${accent.color}, transparent)`,
            }}
          />

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: Release header, specs, download CTA */}
            <div className="flex flex-col justify-between gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="spec-chip font-bold"
                    style={{ color: accent.color, borderColor: `${accent.color}66` }}
                  >
                    OFFICIAL RELEASE PACKAGE
                  </span>
                  <span className="spec-chip">v{release.version}</span>
                  <span className="spec-chip font-mono">{release.fileSizeFormatted}</span>
                </div>

                <h2 className="mt-5 font-display text-[clamp(1.9rem,3.2vw,3rem)] font-bold text-ice-white">
                  Download {release.productName}
                </h2>
                <p className="mt-2 font-mono text-[0.8rem] uppercase tracking-[0.22em] text-muted-grey">
                  Platform: {release.platform} ({release.architecture}) · Released {release.releaseDate}
                </p>

                <p className="mt-4 text-[15px] leading-relaxed text-mist">
                  Genuine verified release build compiled by Growth Guild Labs.
                  SHA-256 verified, malware-free, and packaged for instant deployment.
                </p>
              </div>

              {/* SHA-256 Box */}
              <div className="rounded-xl border border-hairline-strong bg-void/80 p-4">
                <span className="font-mono text-micro uppercase tracking-[0.28em] text-muted-grey">
                  VERIFIED SHA-256 CHECKSUM
                </span>
                <code className="mt-2 block break-all font-mono text-[0.74rem] leading-relaxed text-ice-white/90">
                  {release.sha256}
                </code>
              </div>

              {/* CTA row */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={release.downloadUrl}
                  download={release.fileName}
                  className="group/btn relative inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-mono text-[0.82rem] font-bold uppercase tracking-[0.22em] text-ice-white transition-all duration-300"
                  style={{
                    background: `${accent.color}26`,
                    border: `1px solid ${accent.color}`,
                    boxShadow: `0 0 32px ${accent.color}40`,
                  }}
                >
                  <span>Download {release.fileName}</span>
                  <span className="font-mono text-sm transition-transform duration-300 group-hover/btn:translate-y-0.5">
                    ↓
                  </span>
                </a>

                <Link
                  href="/downloads"
                  className="inline-flex items-center gap-2 font-mono text-[0.76rem] uppercase tracking-[0.2em] text-mist transition-colors hover:text-ice-white"
                >
                  <span>All downloads & guides</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Right: Installation & Requirements */}
            <div className="flex flex-col gap-6 rounded-2xl border border-hairline bg-void/60 p-6 sm:p-8">
              <div>
                <h3 className="font-mono text-micro uppercase tracking-[0.28em] text-ice-white">
                  Installation Guide
                </h3>
                <ol className="mt-3.5 flex flex-col gap-2.5">
                  {release.installationSteps.map((step, idx) => (
                    <li key={step} className="flex items-start gap-3 text-[13px] text-mist leading-relaxed">
                      <span className="font-mono text-micro font-bold text-cyan-electric">
                        0{idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-hairline pt-5">
                <h3 className="font-mono text-micro uppercase tracking-[0.28em] text-muted-grey">
                  System Requirements
                </h3>
                <ul className="mt-2.5 flex flex-col gap-1.5">
                  {release.systemRequirements.map((req) => (
                    <li key={req} className="flex items-center gap-2 text-[12.5px] text-muted-grey">
                      <span style={{ color: accent.color }}>✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
