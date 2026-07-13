"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { PageLoader } from "@/components/ui/PageLoader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { HashScrollHandler } from "@/components/layout/HashScrollHandler";

const Footer = dynamic(
  () => import("./Footer").then((m) => ({ default: m.Footer })),
  { loading: () => <footer className="bg-navy min-h-24" aria-hidden /> }
);

const BackToTop = dynamic(
  () => import("@/components/ui/BackToTop").then((m) => ({ default: m.BackToTop })),
  { ssr: false }
);

const CursorGlow = dynamic(
  () => import("@/components/ui/CursorGlow").then((m) => ({ default: m.CursorGlow })),
  { ssr: false }
);

const AIChatPlaceholder = dynamic(
  () =>
    import("@/components/ui/AIChatPlaceholder").then((m) => ({
      default: m.AIChatPlaceholder,
    })),
  { ssr: false }
);

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HashScrollHandler />
      <PageLoader />
      <CursorGlow />
      <Navbar />
      <main className="overflow-x-clip">{children}</main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <AIChatPlaceholder />
    </>
  );
}
