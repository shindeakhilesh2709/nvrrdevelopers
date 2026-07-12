"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { csrItems } from "@/data/company";
import { Button } from "@/components/ui/Button";

export function CSRSection() {
  return (
    <section className="section-padding bg-surface dark:bg-navy-dark">
      <div className="container-custom">
        <SectionHeading
          label="Corporate Social Responsibility"
          title="Giving Back to Communities"
          subtitle="Our commitment to society extends beyond construction — we invest in people, education, and the environment."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {csrItems.map((item) => (
            <StaggerItem key={item.id}>
              <div className="luxury-card p-6 dark:bg-navy-light">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <DynamicIcon name={item.icon} className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-navy dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-navy/60 dark:text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 text-center">
          <Button href="/csr" variant="navy">
            Learn More About Our CSR
          </Button>
        </div>
      </div>
    </section>
  );
}
