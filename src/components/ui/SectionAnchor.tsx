import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionAnchorProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionAnchor({ id, children, className }: SectionAnchorProps) {
  return (
    <section id={id} className={cn("scroll-mt-[88px]", className)}>
      {children}
    </section>
  );
}
