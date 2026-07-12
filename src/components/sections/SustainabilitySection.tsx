"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { sustainabilityItems } from "@/data/company";

export function SustainabilitySection() {
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container-custom">
        <SectionHeading
          label="Sustainability"
          title="Building Responsibly for Future Generations"
          subtitle="Environmental stewardship is embedded in every aspect of our development philosophy."
          dark
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sustainabilityItems.map((item) => (
            <StaggerItem key={item.id}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:border-primary/30">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 transition-colors group-hover:bg-primary">
                  <DynamicIcon
                    name={item.icon}
                    className="h-6 w-6 text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <h4 className="font-heading text-base font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-white/60 leading-relaxed">
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
