"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, Sun, Moon } from "lucide-react";
import { navigation } from "@/data/navigation";
import { useTheme } from "@/providers/ThemeProvider";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useMounted } from "@/hooks/useMounted";
import { NavLink } from "@/components/ui/NavLink";
import { scrollToSection } from "@/lib/scroll";
import { useLenis } from "@/providers/SmoothScrollProvider";
import { NavItem } from "@/types";
import { SectionId } from "@/config/sections";
import { cn } from "@/lib/utils";

function isNavItemActive(item: NavItem, activeSection: SectionId | null): boolean {
  if (!activeSection) return false;
  if (item.sectionId === activeSection) return true;
  if (item.sectionId === "vision" && activeSection === "chairman-message") return true;
  return item.children?.some((child) => child.sectionId === activeSection) ?? false;
}

function isChildActive(child: NavItem, activeSection: SectionId | null): boolean {
  return !!activeSection && child.sectionId === activeSection;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, mounted: themeMounted, toggleTheme } = useTheme();
  const mounted = useMounted();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useScrollSpy(isHome);
  const lenis = useLenis();

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLogoClick = useCallback(() => {
    closeMobile();
    if (isHome) {
      scrollToSection("home", lenis);
      window.history.pushState(null, "", "/#home");
    } else {
      window.location.href = "/#home";
    }
  }, [isHome, lenis, closeMobile]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/90 dark:bg-navy/90 backdrop-blur-xl shadow-card py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <button
            type="button"
            onClick={handleLogoClick}
            className="relative z-10 flex items-center gap-3"
            aria-label="NVRR Developers - Home"
            suppressHydrationWarning
          >
            <Image
              src="/logo-mark.png"
              alt="NVRR Developers logo"
              width={62}
              height={40}
              className="h-10 w-auto rounded-md"
              priority
            />
            <span className="flex flex-col leading-tight">
              <span
                className={cn(
                  "font-heading text-lg font-bold tracking-wide transition-colors",
                  scrolled ? "text-navy dark:text-white" : "text-white"
                )}
              >
                NVRR
              </span>
              <span
                className={cn(
                  "font-button text-[11px] font-medium uppercase tracking-[0.18em] transition-colors",
                  scrolled ? "text-navy/70 dark:text-white/70" : "text-white/85"
                )}
              >
                Developers
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const itemActive = isHome && isNavItemActive(item, activeSection);

              return (
                <div
                  key={item.href}
                  className="group relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center">
                    <NavLink
                      href={item.href}
                      sectionId={item.sectionId}
                      label={item.label}
                      isActive={itemActive}
                      scrolled={scrolled}
                      variant="desktop"
                    />
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 -ml-1",
                          itemActive
                            ? "text-primary"
                            : scrolled
                              ? "text-navy dark:text-white"
                              : "text-white"
                        )}
                      />
                    )}
                  </div>

                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={false}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 min-w-[220px] rounded-xl bg-white dark:bg-navy-light p-2 shadow-luxury-lg"
                      >
                        {item.children.map((child) => (
                          <NavLink
                            key={child.href}
                            href={child.href}
                            sectionId={child.sectionId}
                            label={child.label}
                            isActive={isHome && isChildActive(child, activeSection)}
                            variant="dropdown"
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className={cn(
                "hidden min-h-11 min-w-11 items-center justify-center rounded-lg transition-colors md:flex",
                scrolled
                  ? "text-navy dark:text-white hover:bg-surface"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Search"
              suppressHydrationWarning
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className={cn(
                "flex min-h-11 min-w-11 items-center justify-center rounded-lg transition-colors",
                scrolled
                  ? "text-navy dark:text-white hover:bg-surface"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle theme"
              suppressHydrationWarning
            >
              {themeMounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <NavLink
              href="/#contact"
              sectionId="contact"
              label="Contact Us"
              variant="button"
              showUnderline={false}
              onNavigate={closeMobile}
              className="hidden md:inline-flex"
            />
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "flex min-h-11 min-w-11 items-center justify-center rounded-lg lg:hidden",
                scrolled ? "text-navy dark:text-white" : "text-white"
              )}
              aria-label="Toggle menu"
              suppressHydrationWarning
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mounted && searchOpen && (
            <motion.div
              initial={false}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-white/95 dark:bg-navy/95 backdrop-blur-xl"
            >
              <div className="container-custom py-4">
                <input
                  type="text"
                  placeholder="Search locations, land bank..."
                  className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-surface dark:bg-navy-light px-5 py-3 text-navy dark:text-white outline-none focus:border-primary"
                  suppressHydrationWarning
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mounted && mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-navy lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto pt-24 pb-8 px-4 sm:px-6">
              {navigation.map((item) => (
                <div key={item.href} className="border-b border-white/10">
                  <NavLink
                    href={item.href}
                    sectionId={item.sectionId}
                    label={item.label}
                    isActive={isHome && isNavItemActive(item, activeSection)}
                    onNavigate={closeMobile}
                    variant="mobile"
                  />
                  {item.children && (
                    <div className="pb-3 pl-4">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          href={child.href}
                          sectionId={child.sectionId}
                          label={child.label}
                          isActive={isHome && isChildActive(child, activeSection)}
                          onNavigate={closeMobile}
                          variant="mobile"
                          className="!py-3 !text-sm !text-white/70 min-h-11"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <NavLink
                href="/#contact"
                sectionId="contact"
                label="Contact Us"
                isActive={isHome && activeSection === "contact"}
                onNavigate={closeMobile}
                variant="button"
                showUnderline={false}
                className="mt-6 w-full !inline-flex justify-center"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
