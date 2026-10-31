"use client";

import { useState } from "react";
import Link from "next/link";
import { type ReleaseArtifact } from "@/lib/releases";

interface DownloadAppCardProps {
  release: ReleaseArtifact;
  accentColor?: string;
}

export function DownloadAppCard({ release, accentColor = "#00e5ff" }: DownloadAppCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(release.sha256);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const isWindows = release.platform === "Windows";
  const pillColor = isWindows ? "#00e5ff" : "#00FF88";

  return (
    <div
      className="app-card flex flex-col justify-between gap-6 transition-all duration-500 hover:border-cyan-electric/40"
      style={{
        boxShadow: `0 20px 50px rgba(0, 0, 0, 0.4)`,
      }}
    >
      {/* Header with Title and Platform Pill */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span
            className="platform-pill border font-semibold"
            style={{
              color: pillColor,
              borderColor: `${pillColor}44`,
              backgroundColor: `${pillColor}10`,
            }}
          >
            {release.platform} · {release.architecture}
          </span>
          <div className="flex items-center gap-2 font-mono text-[0.72rem] text-mist/80">
            <span className="spec-chip text-mist/90 bg-white/5 border-white/10">v{release.version}</span>
            <span className="spec-chip font-bold text-ice-white bg-white/5 border-white/10">{release.fileSizeFormatted}</span>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ice-white tracking-tight">
            {release.productName}
          </h3>
          <p className="mt-1 font-mono text-xs text-muted-grey">
            Package: <span className="text-mist">{release.fileName}</span>
          </p>
        </div>
      </div>

      {/* Copyable SHA-256 Hash Block */}
      <div className="rounded-xl border border-white/10 bg-black/50 p-3.5 backdrop-blur-md">
        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted-grey flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            SHA-256 CHECKSUM
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="font-mono text-[0.68rem] uppercase tracking-wider text-cyan-electric hover:text-emerald-400 transition-colors flex items-center gap-1"
          >
            {copied ? (
              <span className="text-emerald-400 font-bold">✓ COPIED</span>
            ) : (
              <span>COPY HASH</span>
            )}
          </button>
        </div>
        <div className="mt-2.5 overflow-x-auto">
          <code className="block font-mono text-[0.7rem] text-mist/90 select-all break-all leading-relaxed">
            {release.sha256}
          </code>
        </div>
      </div>

      {/* System Requirements / Shipped Highlights */}
      <div className="space-y-2 border-t border-white/5 pt-4">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-grey">
          Primary Requirements
        </p>
        <ul className="space-y-1 text-xs text-mist/80">
          {release.systemRequirements.slice(0, 2).map((req) => (
            <li key={req} className="flex items-start gap-2">
              <span className="text-cyan-electric mt-0.5">▸</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Download Action & Profile Link */}
      <div className="flex flex-col gap-3 pt-2">
        {release.directDownloadAvailable ? (
          <a
            href={release.downloadUrl}
            download={release.fileName}
            className="group/btn inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#00FF88] to-[#39FF65] py-3.5 px-6 font-mono text-xs font-bold uppercase tracking-widest text-black shadow-[0_0_25px_rgba(0,255,136,0.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,136,0.55)] hover:brightness-110 active:scale-[0.99]"
          >
            <span>DIRECT DOWNLOAD</span>
            <span className="text-sm font-black transition-transform duration-300 group-hover/btn:translate-y-0.5">
              ↓
            </span>
          </a>
        ) : (
          <button
            disabled
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-3.5 px-6 font-mono text-xs font-bold uppercase tracking-widest text-muted-grey border border-white/10 cursor-not-allowed"
          >
            <span>COMING SOON</span>
            <span>⏳</span>
          </button>
        )}

        <div className="flex items-center justify-between px-1 text-xs font-mono">
          <Link
            href={`/products/${release.productId}`}
            className="text-muted-grey hover:text-cyan-electric transition-colors"
          >
            View Architecture Profile →
          </Link>
          <span className="text-muted-grey/60 text-[0.65rem]">
            Released {release.releaseDate}
          </span>
        </div>
      </div>
    </div>
  );
}
