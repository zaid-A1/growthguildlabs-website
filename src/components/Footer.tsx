import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/site";
import { PRODUCTS, productHref } from "@/lib/products";

const SOCIAL_ICONS: Record<string, string> = {
  Instagram: "📸",
  YouTube: "▶️",
  Threads: "🧵",
  Facebook: "👥",
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-hairline bg-[#010407] overflow-hidden">
      {/* Top glowing divider line */}
      <div aria-hidden="true" className="divider-glow" />

      {/* Cyber grid & nebula overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden="true"
        className="nebula-blob"
        style={{
          width: "40vw",
          height: "30vh",
          bottom: "-10%",
          right: "10%",
          background: "radial-gradient(ellipse, rgba(0,229,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-guild relative z-10 py-16 sm:py-20">
        {/* Main Grid: Brand summary + 3 Columns (Products | Pages | Connect) */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">

          {/* Brand block */}
          <div className="flex flex-col items-start gap-5">
            <Link href="/" className="group flex items-center gap-3.5" aria-label="Growth Guild Labs home">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: "rgba(0,229,255,0.4)" }}
                />
                <Image
                  src="/brand/growth-guild-labs-logo.png"
                  alt="Growth Guild Labs logo"
                  width={48}
                  height={48}
                  className="relative rounded-2xl border border-cyan-electric/50 bg-void/90 p-1.5 nav-logo-glow"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-wide text-ice-white group-hover:text-cyan-electric transition-colors">
                  GROWTH GUILD LABS
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-cyan-electric">
                  Build More. Grow Together.
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-mist font-light">
              An independent software guild founded by Zaid Uddin and Idrees Uddin.
              Five working AI applications and verified companion gateways designed for real utility.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[0.68rem] uppercase tracking-widest text-muted-grey">
                5 Active Production Builds
              </span>
            </div>
          </div>

          {/* Column 1: Products */}
          <nav aria-label="Footer Products">
            <h4 className="font-mono text-micro uppercase tracking-[0.28em] text-ice-white font-bold mb-4">
              Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link
                    href={productHref(p.id)}
                    className="group flex items-center gap-2 text-sm text-mist hover:text-ice-white transition-colors"
                  >
                    <span
                      aria-hidden="true"
                      className="size-1 rounded-full transition-all group-hover:size-1.5 shrink-0"
                      style={{
                        background:
                          p.accent === "gold" ? "#FFD700" :
                          p.accent === "cyan" ? "#00E5FF" :
                          p.accent === "red" ? "#FF1744" : "#7C5CFF",
                        boxShadow: `0 0 6px ${
                          p.accent === "gold" ? "#FFD700" :
                          p.accent === "cyan" ? "#00E5FF" :
                          p.accent === "red" ? "#FF1744" : "#7C5CFF"
                        }`,
                      }}
                    />
                    <span>{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 2: Pages */}
          <nav aria-label="Footer Navigation">
            <h4 className="font-mono text-micro uppercase tracking-[0.28em] text-ice-white font-bold mb-4">
              Pages
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/ecosystem" className="text-sm text-mist hover:text-cyan-electric transition-colors">
                  Ecosystem Directory
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-sm text-mist hover:text-cyan-electric transition-colors">
                  Download Center
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-mist hover:text-cyan-electric transition-colors">
                  About the Guild
                </Link>
              </li>
              <li>
                <Link href="/lab-notes" className="text-sm text-mist hover:text-cyan-electric transition-colors">
                  Engineering Notes
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-sm text-mist hover:text-cyan-electric transition-colors">
                  Feedback Channels
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-mist hover:text-cyan-electric transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: Connect & GitHub */}
          <div>
            <h4 className="font-mono text-micro uppercase tracking-[0.28em] text-ice-white font-bold mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {/* GitHub Official Repository Link */}
              <a
                href="https://github.com/zaid-A1/growthguildlabs-website"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-ice-white hover:border-cyan-electric/50 hover:bg-cyan-electric/10 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">🐙</span>
                  <div>
                    <p className="font-mono font-bold text-ice-white group-hover:text-cyan-electric">GitHub Repository</p>
                    <p className="font-mono text-[0.62rem] text-muted-grey">zaid-A1/growthguildlabs-website</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-muted-grey group-hover:text-cyan-electric">↗</span>
              </a>

              {/* Social Channels List */}
              <div className="grid grid-cols-2 gap-2 mt-1">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs font-mono text-mist hover:text-ice-white hover:border-white/20 transition-all"
                  >
                    <span>{SOCIAL_ICONS[s.platform] ?? "🔗"}</span>
                    <span className="truncate">{s.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted-grey">
            © {year} {SITE.name}. An independent personal software project.
          </p>
          <p className="font-mono text-xs tracking-widest text-cyan-electric font-semibold uppercase">
            Build More. Grow Together.
          </p>
        </div>
      </div>
    </footer>
  );
}
