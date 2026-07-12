"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { whyChooseItems } from "@/data/company";

export function WhyChooseSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Why Choose NVRR"
          title="The NVRR Advantage"
          subtitle="Discover what sets us apart as India's premier integrated township developer."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {whyChooseItems.map((item) => (
            <StaggerItem key={item.id}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-white/10 p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-luxury dark:hover:bg-navy-light">
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <DynamicIcon name={item.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-heading text-base font-semibold text-navy dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-navy/60 dark:text-white/60 leading-relaxed">
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
