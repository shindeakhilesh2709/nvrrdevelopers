"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageLoader } from "@/components/ui/PageLoader";
import { BackToTop } from "@/components/ui/BackToTop";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { HashScrollHandler } from "@/components/layout/HashScrollHandler";

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
