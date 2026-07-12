"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { amenities } from "@/data/content";

export function AmenitiesSection() {
  return (
    <section className="section-padding bg-surface dark:bg-navy-dark">
      <div className="container-custom">
        <SectionHeading
          label="Township Features"
          title="World-Class Amenities"
          subtitle="Every NVRR township is designed as a self-contained ecosystem with premium amenities."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {amenities.map((item) => (
            <StaggerItem key={item.id}>
              <div className="group flex items-start gap-4 rounded-xl border border-gray-100 dark:border-white/10 p-4 transition-all hover:border-primary/30 hover:shadow-card dark:hover:bg-navy-light">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary transition-colors">
                  <DynamicIcon
                    name={item.icon}
                    className="h-5 w-5 text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-navy dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-navy/50 dark:text-white/50 mt-0.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
