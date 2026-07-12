"use client";

import { memo, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/useMounted";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  className?: string;
  dark?: boolean;
}

function AnimatedCounterComponent({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  label,
  className,
  dark = false,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const mounted = useMounted();
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div
        className={cn(
          "font-heading text-3xl font-bold sm:text-4xl md:text-5xl",
          dark ? "text-white" : "text-navy"
        )}
      >
        {prefix}
        {mounted && isInView ? (
          <CountUp end={end} duration={duration} separator="," useEasing />
        ) : (
          "0"
        )}
        {suffix}
      </div>
      <p
        className={cn(
          "mt-2 font-button text-sm font-medium uppercase tracking-wider",
          dark ? "text-white/70" : "text-navy/60"
        )}
      >
        {label}
      </p>
    </div>
  );
}

export const AnimatedCounter = memo(AnimatedCounterComponent);
