"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection, getSectionIdFromHref } from "@/lib/scroll";
import { useLenis } from "@/providers/SmoothScrollProvider";

export function HashScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (pathname !== "/") return;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const sectionId = getSectionIdFromHref(hash);
      if (!sectionId) return;

      const attemptScroll = (retries = 0) => {
        const success = scrollToSection(sectionId, lenis, {
          immediate: retries === 0,
        });
        if (!success && retries < 10) {
          setTimeout(() => attemptScroll(retries + 1), 100);
        }
      };

      setTimeout(() => attemptScroll(), 100);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname, lenis]);

  return null;
}
