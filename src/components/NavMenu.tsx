"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Primary navigation with active-route indication and an accessible
 * mobile menu (aria-expanded, Escape-to-close, focus management).
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
    <>
      {/* Mobile toggle */}
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
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
        <span
          aria-hidden="true"
          className="relative block h-3 w-4.5"
        >
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

      {/* Desktop nav */}
      <nav
        aria-label="Primary"
        className="hidden items-center gap-1 lg:flex"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
            className={cn(
              "relative rounded-full px-4 py-2 font-mono text-[0.74rem] uppercase tracking-[0.22em]",
              "transition-colors duration-300",
              isActive(link.href)
                ? "text-ice-white"
                : "text-muted-grey hover:text-ice-white"
            )}
          >
            {link.label}
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-x-4 bottom-1 h-px origin-left bg-gradient-to-r from-cyan-electric to-transparent transition-transform duration-500 ease-(--ease-cinematic)",
                isActive(link.href) ? "scale-x-100" : "scale-x-0"
              )}
            />
          </Link>
        ))}
      </nav>

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
        <div className="panel overflow-hidden p-2 backdrop-blur-xl">
          <nav aria-label="Primary mobile">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5",
                      "font-display text-lg text-ice-white transition-colors",
                      "hover:bg-cyan-electric/10",
                      isActive(link.href) && "bg-cyan-electric/8"
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
                className="spec-chip"
              >
                {s.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/** Header shell (client because the nav needs scroll state). */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-(--ease-cinematic)",
        scrolled ? "py-2" : "py-4"
      )}
      style={{ "--header-h": "4.5rem" } as React.CSSProperties}
    >
      <div className="container-guild">
        <div
          className={cn(
            "flex items-center justify-between gap-6 rounded-2xl border px-4 py-2.5 backdrop-blur-xl transition-colors duration-500",
            scrolled
              ? "border-hairline bg-void/78 shadow-card"
              : "border-transparent bg-transparent"
          )}
        >
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Growth Guild Labs — home"
          >
            {/* Brand mark */}
            <span className="relative grid size-9 place-items-center">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-lg bg-cyan-electric/18 blur-[6px] transition-opacity duration-500 group-hover:opacity-100"
              />
              <span
                aria-hidden="true"
                className="relative grid size-9 place-items-center rounded-lg border border-cyan-electric/45 bg-void/80 font-display text-[0.7rem] font-bold tracking-widest text-cyan-electric"
              >
                GGL
              </span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[0.95rem] font-semibold tracking-wide text-ice-white">
                GROWTH GUILD LABS
              </span>
              <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.3em] text-muted-grey">
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
