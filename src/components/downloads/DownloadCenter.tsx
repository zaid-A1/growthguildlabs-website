"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type ReleaseArtifact } from "@/lib/releases";
import { ACCENTS, getProduct } from "@/lib/products";
import { cn } from "@/lib/utils";

export function DownloadCenter({ releases }: { releases: ReleaseArtifact[] }) {
  const [filter, setFilter] = useState<"all" | "Windows" | "Android">("all");
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const filtered = releases.filter((r) =>
    filter === "all" ? true : r.platform === filter
  );

  const copyToClipboard = (hash: string) => {
    navigator.clipboard?.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2500);
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Platform Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-6">
        <div className="flex gap-2 rounded-full border border-hairline bg-void/80 p-1.5 backdrop-blur-md">
          {[
            { id: "all", label: "All Releases", count: releases.length },
            { id: "Windows", label: "Windows 64-bit", count: releases.filter((r) => r.platform === "Windows").length },
            { id: "Android", label: "Android APK", count: releases.filter((r) => r.platform === "Android").length },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as typeof filter)}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2 font-mono text-[0.75rem] uppercase tracking-[0.2em] transition-all duration-300",
                filter === tab.id
                  ? "bg-cyan-electric/15 text-cyan-electric shadow-glow-cyan border border-cyan-electric/50"
                  : "text-muted-grey hover:text-ice-white hover:bg-white/5 border border-transparent"
              )}
            >
              <span>{tab.label}</span>
              <span className="grid size-4.5 place-items-center rounded-full bg-void/80 text-[0.62rem] font-bold text-muted-grey">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 font-mono text-micro text-muted-grey">
          <span className="size-2 rounded-full bg-neon-green animate-pulse" />
          <span>5 / 5 GENUINE PACKAGES VERIFIED</span>
        </div>
      </div>

      {/* Release Cards Grid */}
      <div className="grid gap-8">
        {filtered.map((release) => {
          const product = getProduct(release.productId);
          const accent = product ? ACCENTS[product.accent] : ACCENTS.cyan;

          return (
            <div
              key={release.productId}
              className="panel group relative overflow-hidden p-6 sm:p-9 transition-all duration-500 hover:border-cyan-electric/40"
              style={{ borderColor: `${accent.color}26` }}
            >
              {/* Top ambient highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${accent.color}, transparent)`,
                  opacity: 0.5,
                }}
              />

              <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
                {/* Left Column: Product info, image, specs */}
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="spec-chip font-bold"
                        style={{ color: accent.color, borderColor: `${accent.color}55` }}
                      >
                        {release.platform}
                      </span>
                      <span className="spec-chip">v{release.version}</span>
                      <span className="spec-chip font-mono">{release.fileSizeFormatted}</span>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      {product && (
                        <div
                          className="hud-frame relative size-16 shrink-0 overflow-hidden rounded-xl border border-hairline bg-void/80 p-2"
                          style={{ "--frame-accent": `${accent.color}88` } as React.CSSProperties}
                        >
                          <Image
                            src={product.image}
                            alt={product.imageAlt}
                            fill
                            sizes="64px"
                            className="object-contain p-1"
                          />
                        </div>
                      )}
                      <div>
                        <h2 className="font-display text-2xl font-bold text-ice-white sm:text-3xl">
                          {release.productName}
                        </h2>
                        <p className="mt-1 font-mono text-micro uppercase tracking-[0.24em] text-muted-grey">
                          {release.architecture} · Released {release.releaseDate}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-[14px] leading-relaxed text-mist">
                      {product?.summary}
                    </p>
                  </div>

                  {/* Checksum box */}
                  <div className="rounded-xl border border-hairline-strong bg-void/70 p-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-micro uppercase tracking-[0.28em] text-muted-grey">
                        SHA-256 CHECKSUM
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(release.sha256)}
                        className="font-mono text-[0.68rem] uppercase tracking-wider text-cyan-electric hover:underline"
                        title="Copy SHA-256 hash"
                      >
                        {copiedHash === release.sha256 ? "✓ Copied!" : "Copy"}
                      </button>
                    </div>
                    <code className="mt-2 block break-all font-mono text-[0.72rem] leading-relaxed text-muted-grey/90">
                      {release.sha256}
                    </code>
                  </div>

                  {/* Actions: Download Button & Product Page */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={release.downloadUrl}
                      download={release.fileName}
                      className="group/btn relative inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-ice-white transition-all duration-300"
                      style={{
                        background: `${accent.color}1f`,
                        border: `1px solid ${accent.color}88`,
                        boxShadow: `0 0 24px ${accent.color}22`,
                      }}
                    >
                      <span>Download {release.fileName.endsWith(".apk") ? "APK" : "ZIP"}</span>
                      <span className="font-mono text-xs transition-transform duration-300 group-hover/btn:translate-y-0.5">
                        ↓
                      </span>
                    </a>

                    <Link
                      href={`/products/${release.productId}`}
                      className="inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.2em] text-mist transition-colors hover:text-ice-white"
                    >
                      <span>Product profile</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Requirements & Installation Guide */}
                <div className="flex flex-col gap-5 border-t border-hairline pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  {/* System Requirements */}
                  <div>
                    <h3 className="font-mono text-micro uppercase tracking-[0.28em] text-muted-grey">
                      System Requirements
                    </h3>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {release.systemRequirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-[13px] text-mist">
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full"
                            style={{ background: accent.color }}
                          />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Installation Guide */}
                  <div className="rounded-xl border border-hairline bg-void/50 p-4">
                    <h3 className="font-mono text-micro uppercase tracking-[0.28em] text-ice-white">
                      Installation Steps
                    </h3>
                    <ol className="mt-3 flex flex-col gap-2.5">
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

                  {/* Release Notes */}
                  <div>
                    <h3 className="font-mono text-micro uppercase tracking-[0.28em] text-muted-grey">
                      Verified Shipped Features
                    </h3>
                    <ul className="mt-2.5 flex flex-col gap-1.5">
                      {release.releaseNotes.map((note) => (
                        <li key={note} className="flex items-start gap-2 text-[12.5px] text-muted-grey">
                          <span className="text-cyan-electric">▸</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
