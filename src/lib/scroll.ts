import Lenis from "lenis";

export const NAVBAR_OFFSET = 88;
export const SCROLL_DURATION = 0.55;

export function getSectionElement(id: string): HTMLElement | null {
  return document.getElementById(id);
}

export function getSectionScrollTop(id: string): number | null {
  const element = getSectionElement(id);
  if (!element) return null;
  return element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
}

export function scrollToSection(
  id: string,
  lenis?: Lenis | null,
  options?: { immediate?: boolean }
): boolean {
  const top = getSectionScrollTop(id);
  if (top === null) return false;

  if (lenis) {
    lenis.scrollTo(top, {
      duration: options?.immediate ? 0 : SCROLL_DURATION,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  } else {
    window.scrollTo({
      top,
      behavior: options?.immediate ? "auto" : "smooth",
    });
  }

  return true;
}

export function getSectionIdFromHref(href: string): string | null {
  if (href.startsWith("/#")) return href.slice(2);
  if (href.startsWith("#")) return href.slice(1);
  return null;
}

export function isHashLink(href: string): boolean {
  return href.startsWith("/#") || href.startsWith("#");
}
