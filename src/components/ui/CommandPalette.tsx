"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { PRODUCTS } from "@/lib/products";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/site";
import { sound } from "@/lib/soundFx";

interface SearchItem {
  id: string;
  category: "Navigation" | "Product" | "Release" | "Social";
  title: string;
  subtitle: string;
  url: string;
  badge?: string;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const items: SearchItem[] = useMemo(() => {
    const list: SearchItem[] = [];

    // Products
    PRODUCTS.forEach((p) => {
      list.push({
        id: `prod-${p.id}`,
        category: "Product",
        title: p.name,
        subtitle: `${p.platform} · ${p.role}`,
        url: `/products/${p.id}`,
        badge: p.status.state,
      });
    });

    // Navigation
    NAV_LINKS.forEach((n) => {
      list.push({
        id: `nav-${n.href}`,
        category: "Navigation",
        title: n.label,
        subtitle: `Jump to ${n.label} page`,
        url: n.href,
      });
    });

    // Releases & Downloads
    list.push(
      {
        id: "rel-center",
        category: "Release",
        title: "Download Centre",
        subtitle: "Direct verified APK downloads & Windows mirrors",
        url: "/downloads",
        badge: "VERIFIED",
      },
      {
        id: "rel-ultron-apk",
        category: "Release",
        title: "ULTRON 2.0 Connector APK",
        subtitle: "Android companion direct APK (26.87 MB)",
        url: "/downloads#pkg-ultron-connector",
        badge: "APK",
      },
      {
        id: "rel-jarvis-apk",
        category: "Release",
        title: "JARVIS 2.0 Phone APK",
        subtitle: "Android voice client direct APK (94.82 MB)",
        url: "/downloads#pkg-jarvis-phone",
        badge: "APK",
      }
    );

    // Socials
    SOCIAL_LINKS.forEach((s) => {
      list.push({
        id: `soc-${s.platform}`,
        category: "Social",
        title: `${s.platform} — ${s.handle}`,
        subtitle: `Official Growth Guild Labs ${s.platform}`,
        url: s.href,
        badge: "EXTERNAL",
      });
    });

    return list;
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => {
          if (!prev) sound.play("warp");
          return !prev;
        });
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleSelect = (item: SearchItem) => {
    sound.play("click");
    setOpen(false);
    if (item.url.startsWith("http")) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.url);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
      sound.play("hover");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      sound.play("hover");
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  return (
    <>
      {/* Quick Launch Trigger Button in Header or HUD */}
      <button
        type="button"
        onClick={() => {
          sound.play("warp");
          setOpen(true);
        }}
        className="group hidden items-center gap-2 rounded-full border border-hairline bg-void/60 px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted-grey transition-all hover:border-cyan-electric/50 hover:text-ice-white md:inline-flex"
        aria-label="Open Command Palette (Ctrl+K)"
        title="Open Command Palette (Ctrl+K)"
      >
        <svg
          className="size-3.5 text-cyan-electric transition-transform group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden xl:inline">QUICK SEARCH</span>
        <kbd className="rounded border border-hairline-strong bg-panel px-1.5 py-0.5 text-[0.6rem] text-cyan-electric">
          Ctrl K
        </kbd>
      </button>

      {/* Modal Backdrop & Dialog */}
      {open && (
        <div className="fixed inset-0 z-[150] flex items-start justify-center p-4 pt-20 sm:pt-28 backdrop-blur-md bg-void/85 animate-[fade-in_0.2s_ease-out]">
          <div
            className="fixed inset-0"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command search palette"
            className="panel relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-cyan-electric/40 bg-panel-strong/95 shadow-[0_0_50px_rgba(0,229,255,0.2)]"
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 border-b border-hairline px-4 py-3.5">
              <svg
                className="size-5 shrink-0 text-cyan-electric animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                autoFocus
                type="text"
                placeholder="Search products, downloads, routes, telemetry..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent font-sans text-sm text-ice-white placeholder:text-muted-grey focus:outline-none"
              />
              <span className="font-mono text-[0.62rem] text-muted-grey border border-hairline px-2 py-0.5 rounded">
                ESC
              </span>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 scrollbar-thin">
              {filtered.length === 0 ? (
                <div className="p-8 text-center font-mono text-sm text-muted-grey">
                  No matching telemetry or route found.
                </div>
              ) : (
                <ul className="flex flex-col gap-1">
                  {filtered.map((item, idx) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => {
                          setSelectedIndex(idx);
                          sound.play("hover");
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left transition-all ${
                          idx === selectedIndex
                            ? "bg-cyan-electric/15 text-ice-white border-l-2 border-cyan-electric"
                            : "text-mist hover:bg-white/5"
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="font-display text-sm font-medium">
                            {item.title}
                          </span>
                          <span className="text-xs text-muted-grey">
                            {item.subtitle}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {item.badge && (
                            <span className="rounded-full border border-hairline px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-cyan-electric">
                              {item.badge}
                            </span>
                          )}
                          <span className="font-mono text-xs text-muted-grey">
                            {idx === selectedIndex ? "↵" : ""}
                          </span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer Status */}
            <div className="flex items-center justify-between border-t border-hairline px-4 py-2 font-mono text-[0.62rem] text-muted-grey">
              <span>GROWTH GUILD LABS // TELEMETRY DIRECTORY</span>
              <div className="flex gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Open</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
