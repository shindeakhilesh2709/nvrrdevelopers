"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { masterPlanItems, masterPlanCategories } from "@/data/masterPlan";
import { cn } from "@/lib/utils";

export function MasterPlanSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? masterPlanItems
      : masterPlanItems.filter((item) => item.category === activeCategory);

  return (
    <section className="section-padding bg-surface dark:bg-navy-dark">
      <div className="container-custom">
        <SectionHeading
          label="Master Plan"
          title="Integrated Smart Township Vision"
          subtitle="A comprehensive ecosystem designed for modern living — from luxury residences to world-class healthcare, education, and recreation."
        />

        <FadeIn className="mb-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "min-h-11 rounded-full px-4 py-2.5 font-button text-xs font-medium transition-all",
              activeCategory === "all"
                ? "bg-navy text-white"
                : "bg-white dark:bg-navy-light text-navy dark:text-white hover:bg-navy/10"
            )}
          >
            All
          </button>
          {masterPlanCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "min-h-11 rounded-full px-4 py-2.5 font-button text-xs font-medium transition-all",
                activeCategory === cat.id
                  ? "bg-navy text-white"
                  : "bg-white dark:bg-navy-light text-navy dark:text-white hover:bg-navy/10"
              )}
            >
              {cat.label}
            </button>
          ))}
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <StaggerItem key={item.id}>
              <div className="group luxury-card p-5 dark:bg-navy-light">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                  <DynamicIcon
                    name={item.icon}
                    className="h-5 w-5 text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <h4 className="font-heading text-sm font-semibold text-navy dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-navy/50 dark:text-white/50 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
