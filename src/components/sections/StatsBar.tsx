"use client";

import { memo } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { homeStats } from "@/data/stats";

function StatsBarComponent() {
  return (
    <section className="relative z-20 -mt-20">
      <div className="container-custom">
        <div className="luxury-card grid grid-cols-2 gap-4 p-4 sm:gap-6 sm:p-6 md:grid-cols-4 md:gap-8 md:p-12 dark:bg-navy-light">
          {homeStats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const StatsBar = memo(StatsBarComponent);
