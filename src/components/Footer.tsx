import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/site";
import { PRODUCTS, productHref } from "@/lib/products";

const SOCIAL_ICONS: Record<string, string> = {
  Instagram: "IG",
  YouTube: "YT",
  Threads: "TH",
  Facebook: "FB",
};

/** Enhanced site footer with premium cyberpunk aesthetic. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto">
      {/* Top glow line */}
      <div aria-hidden="true" className="footer-glow-line" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #03090d 0%, #02060a 60%, #010305 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-guild relative z-10 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">

          {/* Brand column */}
          <div>
            <Link href="/" className="group flex items-center gap-3" aria-label="Growth Guild Labs home">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: "rgba(0,229,255,0.3)" }}
                />
                <Image
                  src="/brand/growth-guild-labs-logo.png"
                  alt="Growth Guild Labs logo"
                  width={46}
                  height={46}
                  className="relative rounded-xl border border-cyan-electric/40 bg-void/80 p-1 nav-logo-glow"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-lg font-semibold tracking-wide text-ice-white group-hover:text-cyan-electric transition-colors">
                  GROWTH GUILD LABS
                </span>
                <span className="font-mono text-micro uppercase tracking-[0.3em] text-cyan-electric">
                  Build More. Grow Together.
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-mist">
              An independent software project by Zaid Uddin and Idrees Uddin —
              a guild of five working AI applications and the companions that
              connect them.
            </p>

            {/* Social buttons */}
            <div className="mt-6 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.name} on ${s.platform}`}
                  className={`social-btn social-btn--${s.platform.toLowerCase()}`}
                >
                  <span
                    className="grid size-5 place-items-center rounded-md font-mono text-[0.6rem] font-bold"
                    style={{ color: "#00e5ff" }}
                    aria-hidden="true"
                  >
                    {SOCIAL_ICONS[s.platform] ?? s.platform.slice(0, 2).toUpperCase()}
                  </span>
                  {s.platform}
                  <span aria-hidden="true" className="text-[0.65rem] text-muted-grey">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Ecosystem links */}
          <nav aria-label="Footer products">
            <p className="font-mono text-micro uppercase tracking-[0.3em] text-muted-grey">
              Ecosystem
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
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
                        background: p.accent === "gold" ? "#ffb300" :
                          p.accent === "cyan" ? "#00e5ff" :
                          p.accent === "red" ? "#ff1744" : "#7c5cff",
                        boxShadow: `0 0 6px ${p.accent === "gold" ? "#ffb300" :
                          p.accent === "cyan" ? "#00e5ff" :
                          p.accent === "red" ? "#ff1744" : "#7c5cff"}88`,
                      }}
                    />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Project links */}
          <nav aria-label="Footer project">
            <p className="font-mono text-micro uppercase tracking-[0.3em] text-muted-grey">
              Project
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-glow text-sm text-mist hover:text-ice-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="link-glow text-sm text-mist hover:text-ice-white transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Guild info */}
          <div>
            <p className="font-mono text-micro uppercase tracking-[0.3em] text-muted-grey">
              The Guild
            </p>
            <div className="mt-4 flex flex-col gap-4">
              {[
                { name: "Zaid Uddin", role: "CEO & Founder", initials: "ZU" },
                { name: "Idrees Uddin", role: "Co-founder", initials: "IU" },
              ].map((person) => (
                <div
                  key={person.name}
                  className="flex items-center gap-3 rounded-xl border border-hairline bg-void/50 px-4 py-3 hover:border-cyan-electric/30 transition-colors"
                >
                  <span
                    className="grid size-9 place-items-center shrink-0 rounded-lg border border-cyan-electric/40 bg-cyan-electric/10 font-display text-xs font-bold text-cyan-electric"
                  >
                    {person.initials}
                  </span>
                  <div>
                    <p className="font-display text-sm text-ice-white">{person.name}</p>
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-grey">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats mini */}
            <div className="mt-6 grid grid-cols-2 gap-2">
              {[
                { n: "5", label: "Apps" },
                { n: "2", label: "Platforms" },
                { n: "56+", label: "Modules" },
                { n: "100%", label: "Independent" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-hairline bg-void/50 p-2.5 text-center"
                >
                  <p className="font-display text-base font-bold text-cyan-electric" style={{ textShadow: "0 0 12px #00e5ff66" }}>
                    {s.n}
                  </p>
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-muted-grey">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14">
          <div className="section-divider mb-6" />
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-[13px] text-muted-grey">
              © {year} {SITE.name}. An independent personal software project.
            </p>
            <p className="font-mono text-micro uppercase tracking-[0.24em] text-muted-grey">
              The future is built. Not waited for.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
