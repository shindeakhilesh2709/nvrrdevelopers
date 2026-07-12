"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { SCROLL_SPY_SECTIONS, SectionId } from "@/config/sections";
import { NAVBAR_OFFSET } from "@/lib/scroll";
import { useLenis } from "@/providers/SmoothScrollProvider";
import { throttle } from "@/lib/performance";

export function useScrollSpy(enabled: boolean = true) {
  const [activeSection, setActiveSection] = useState<SectionId | null>("home");
  const lenis = useLenis();
  const sectionsRef = useRef<{ id: SectionId; top: number }[]>([]);

  const updateActiveSection = useCallback(() => {
    if (!enabled) return;

    const scrollPosition = window.scrollY + NAVBAR_OFFSET + 80;

    let current: SectionId | null = "home";

    for (const { id, top } of sectionsRef.current) {
      if (scrollPosition >= top) {
        current = id;
      }
    }

    setActiveSection((prev) => (prev === current ? prev : current));
  }, [enabled]);

  const cacheSectionPositions = useCallback(() => {
    sectionsRef.current = SCROLL_SPY_SECTIONS.map((id) => {
      const el = document.getElementById(id);
      return { id, top: el?.offsetTop ?? 0 };
    });
  }, []);

  useEffect(() => {
    if (!enabled) return;

    cacheSectionPositions();
    updateActiveSection();

    const throttledUpdate = throttle(updateActiveSection, 100);
    const throttledResize = throttle(() => {
      cacheSectionPositions();
      updateActiveSection();
    }, 200);

    window.addEventListener("scroll", throttledUpdate, { passive: true });
    window.addEventListener("resize", throttledResize, { passive: true });

    if (lenis) {
      lenis.on("scroll", throttledUpdate);
    }

    return () => {
      window.removeEventListener("scroll", throttledUpdate);
      window.removeEventListener("resize", throttledResize);
      if (lenis) {
        lenis.off("scroll", throttledUpdate);
      }
    };
  }, [enabled, updateActiveSection, cacheSectionPositions, lenis]);

  return activeSection;
}
