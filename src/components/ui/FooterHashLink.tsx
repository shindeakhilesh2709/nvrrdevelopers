"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getSectionIdFromHref, isHashLink, scrollToSection } from "@/lib/scroll";
import { useLenis } from "@/providers/SmoothScrollProvider";
import { SectionId } from "@/config/sections";

interface FooterHashLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function FooterHashLink({ href, children, className }: FooterHashLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!isHashLink(href)) return;

      const sectionId = getSectionIdFromHref(href) as SectionId | null;
      if (!sectionId) return;

      e.preventDefault();

      if (pathname === "/") {
        scrollToSection(sectionId, lenis);
        window.history.pushState(null, "", href);
      } else {
        router.push(href);
      }
    },
    [href, pathname, router, lenis]
  );

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
