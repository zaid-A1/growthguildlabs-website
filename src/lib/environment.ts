/**
 * Keyboard / Focus helpers shared across the header, mobile menu and journey.
 */

/** Does this environment support WebGL? Guarded for SSR. */
export function hasWebGLSupport(): boolean {
  if (typeof window === "undefined" || typeof document === "undefined")
    return false;
  try {
    const probe = document.createElement("canvas");
    return Boolean(
      probe.getContext("webgl2") || probe.getContext("webgl")
    );
  } catch {
    return false;
  }
}

/** True when the visitor prefers reduced motion. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** True for small/touch viewports — we lower 3D complexity there. */
export function isSmallViewport(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(max-width: 767px)").matches;
}
