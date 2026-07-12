"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { constructionSteps } from "@/data/content";

export function ConstructionSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Construction Process"
          title="From Vision to Reality"
          subtitle="Our systematic approach ensures quality, transparency, and timely delivery at every stage."
        />

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary via-primary/50 to-transparent lg:block" />

          <StaggerContainer className="space-y-8 lg:space-y-0">
            {constructionSteps.map((step, index) => (
              <StaggerItem key={step.id}>
                <div
                  className={`relative flex flex-col items-center gap-6 lg:flex-row ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="lg:w-5/12">
                    <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                      <div className="luxury-card p-6 dark:bg-navy-light">
                        <span className="font-button text-xs font-semibold text-primary uppercase tracking-wider">
                          Step {step.step}
                        </span>
                        <h4 className="font-heading text-lg font-semibold text-navy dark:text-white mt-2 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-sm text-navy/60 dark:text-white/60 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </FadeIn>
                  </div>

                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-glow">
                    <DynamicIcon name={step.icon} className="h-6 w-6" />
                  </div>

                  <div className="hidden lg:block lg:w-5/12" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
