"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  getSectionIdFromHref,
  isHashLink,
  scrollToSection,
} from "@/lib/scroll";
import { useLenis } from "@/providers/SmoothScrollProvider";
import { SectionId } from "@/config/sections";

interface NavLinkProps {
  href: string;
  sectionId?: string;
  label: string;
  isActive?: boolean;
  scrolled?: boolean;
  onNavigate?: () => void;
  className?: string;
  variant?: "desktop" | "mobile" | "dropdown" | "button";
  showUnderline?: boolean;
}

export function NavLink({
  href,
  sectionId,
  label,
  isActive = false,
  scrolled = false,
  onNavigate,
  className,
  variant = "desktop",
  showUnderline = true,
}: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const targetId = (sectionId || getSectionIdFromHref(href)) as SectionId | null;

      if (isHashLink(href) && targetId) {
        e.preventDefault();
        onNavigate?.();

        const navigateToSection = () => {
          const success = scrollToSection(targetId, lenis);
          if (success) {
            window.history.pushState(null, "", `/#${targetId}`);
          }
        };

        if (pathname === "/") {
          setTimeout(navigateToSection, mobileCloseDelay(onNavigate));
        } else {
          router.push(`/#${targetId}`);
        }
        return;
      }

      onNavigate?.();
    },
    [href, sectionId, pathname, router, lenis, onNavigate]
  );

  const baseStyles = {
    desktop: cn(
      "font-button relative flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-700",
      isActive
        ? "text-primary"
        : scrolled
          ? "text-navy dark:text-white hover:text-primary"
          : "text-white hover:text-primary"
    ),
    mobile: cn(
      "font-button relative block py-4 text-lg font-medium transition-colors duration-700",
      isActive ? "text-primary" : "text-white hover:text-primary"
    ),
    dropdown: cn(
      "font-button relative block w-full rounded-lg px-4 py-2.5 text-left text-sm transition-colors duration-700",
      isActive
        ? "text-primary bg-primary/5"
        : "text-navy dark:text-white hover:bg-surface dark:hover:bg-navy hover:text-primary"
    ),
    button: cn(
      "font-button inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-medium text-white transition-all duration-700 hover:bg-primary-dark hover:shadow-glow hover:scale-105 active:scale-95 sm:px-5 sm:py-2.5"
    ),
  };

  return (
    <a href={href} onClick={handleClick} className={cn(baseStyles[variant], className)}>
      {showUnderline && variant !== "button" ? (
        <span className="relative inline-block">
          {label}
          <span
            className={cn(
              "absolute -bottom-0.5 left-0 h-0.5 bg-primary transition-all duration-700 ease-out",
              isActive ? "w-full" : "w-0"
            )}
            aria-hidden="true"
          />
        </span>
      ) : (
        label
      )}
    </a>
  );
}

function mobileCloseDelay(onNavigate?: () => void): number {
  return onNavigate ? 50 : 0;
}
