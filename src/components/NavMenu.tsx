"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { AudioToggle } from "@/components/ui/AudioToggle";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { sound } from "@/lib/soundFx";

/**
 * Primary navigation with active-route indication, audio feedback,
 * Command Palette (Ctrl+K), and accessible mobile drawer.
 */
export function NavMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  // Escape closes, focus returns to the toggle
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        !toggleRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="flex items-center gap-3">
      {/* Command Palette Trigger */}
      <CommandPalette />

      {/* Audio FX Toggle */}
      <AudioToggle />

      {/* Desktop nav links */}
      <nav
        aria-label="Primary"
        className="hidden items-center gap-1 lg:flex"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
            onMouseEnter={() => sound.play("hover")}
            onClick={() => sound.play("click")}
            className={cn(
              "relative rounded-full px-3.5 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.2em]",
              "transition-colors duration-300",
              isActive(link.href)
                ? "text-cyan-electric"
                : "text-muted-grey hover:text-ice-white"
            )}
          >
            {link.label}
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-x-3 bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-cyan-electric via-neon-green to-transparent transition-transform duration-500 ease-(--ease-cinematic)",
                isActive(link.href) ? "scale-x-100 shadow-[0_0_8px_#00e5ff]" : "scale-x-0"
              )}
            />
          </Link>
        ))}
      </nav>

      {/* Mobile toggle */}
      <button
        ref={toggleRef}
        type="button"
        onClick={() => {
          sound.play("click");
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className={cn(
          "relative z-50 inline-flex size-10 items-center justify-center rounded-full border border-hairline-strong",
          "bg-void/70 text-ice-white transition-colors hover:border-cyan-electric/60 lg:hidden"
        )}
      >
        <span aria-hidden="true" className="sr-only">
          Menu
        </span>
        <span aria-hidden="true" className="relative block h-3 w-4.5">
          <span
            className={cn(
              "absolute left-0 block h-px w-full bg-current transition-all duration-300 ease-(--ease-cinematic)",
              open ? "top-1.5 rotate-45" : "top-0"
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-1.5 block h-px w-full bg-current transition-all duration-300 ease-(--ease-cinematic)",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "absolute left-0 block h-px w-full bg-current transition-all duration-300 ease-(--ease-cinematic)",
              open ? "top-1.5 -rotate-45" : "top-3"
            )}
          />
        </span>
      </button>

      {/* Mobile panel */}
      <div
        id="site-menu"
        ref={panelRef}
        hidden={!open}
        className={cn(
          "absolute inset-x-0 top-(--header-h,4.5rem) z-40 lg:hidden",
          "px-4 pt-2"
        )}
      >
        <div className="panel overflow-hidden p-3 backdrop-blur-xl border border-cyan-electric/30">
          <nav aria-label="Primary mobile">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    onClick={() => {
                      sound.play("click");
                      setOpen(false);
                    }}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3",
                      "font-display text-base text-ice-white transition-colors",
                      "hover:bg-cyan-electric/10",
                      isActive(link.href) && "bg-cyan-electric/15 text-cyan-electric border-l-2 border-cyan-electric"
                    )}
                  >
                    {link.label}
                    <span aria-hidden="true" className="font-mono text-sm text-muted-grey">
                      {isActive(link.href) ? "●" : "→"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mx-2 my-2 divider-scan" aria-hidden="true" />
          <div className="flex flex-wrap gap-2 p-2">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.play("click")}
                className="spec-chip"
              >
                {s.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Header shell (client because the nav needs scroll state). */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-(--ease-cinematic)",
        scrolled ? "py-2" : "py-3.5"
      )}
      style={{ "--header-h": "4.5rem" } as React.CSSProperties}
    >
      <div className="container-guild">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 backdrop-blur-xl transition-all duration-500",
            scrolled
              ? "border-cyan-electric/25 bg-void/85 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              : "border-hairline bg-void/50"
          )}
        >
          <Link
            href="/"
            onClick={() => sound.play("click")}
            className="group flex items-center gap-3"
            aria-label="Growth Guild Labs — home"
          >
            {/* Brand mark — logo image with glow */}
            <span className="relative flex items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-xl bg-cyan-electric/25 blur-[10px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              <Image
                src="/brand/growth-guild-labs-logo.png"
                alt="Growth Guild Labs"
                width={38}
                height={38}
                className="relative rounded-xl border border-cyan-electric/40 bg-void/80 p-0.5 transition-transform duration-300 group-hover:scale-105 nav-logo-glow"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[0.95rem] font-bold tracking-wider text-ice-white group-hover:text-cyan-electric transition-colors">
                GROWTH GUILD LABS
              </span>
              <span className="mt-1 font-mono text-[0.56rem] uppercase tracking-[0.28em] text-muted-grey">
                BUILD MORE. GROW TOGETHER.
              </span>
            </span>
          </Link>

          <NavMenu />
        </div>
      </div>
    </div>
  );
}
