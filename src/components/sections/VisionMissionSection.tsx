"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { coreValues } from "@/data/company";
import { Target, Eye } from "lucide-react";

export function VisionMissionSection() {
  return (
    <section className="section-padding bg-surface dark:bg-navy-dark">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <FadeIn direction="left">
            <div className="luxury-card h-full p-8 md:p-10 dark:bg-navy-light">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="heading-md mb-4 text-navy dark:text-white">Our Vision</h3>
              <p className="text-navy/70 dark:text-white/70 leading-relaxed">
                To be India&apos;s most trusted developer of integrated smart
                townships, creating sustainable communities that set global
                benchmarks in quality, innovation, and liveability — where every
                development becomes a landmark of progress and prosperity.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="luxury-card h-full p-8 md:p-10 dark:bg-navy-light">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="heading-md mb-4 text-navy dark:text-white">Our Mission</h3>
              <p className="text-navy/70 dark:text-white/70 leading-relaxed">
                To acquire, plan, and develop land into world-class integrated
                communities featuring residential, healthcare, educational, and
                commercial infrastructure — delivering exceptional value to
                investors, residents, and society through sustainable practices,
                technological innovation, and unwavering integrity.
              </p>
            </div>
          </FadeIn>
        </div>

        <SectionHeading
          label="Core Values"
          title="The Principles That Guide Us"
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => (
            <StaggerItem key={value.id}>
              <div className="group luxury-card p-6 dark:bg-navy-light">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-white">
                  <DynamicIcon
                    name={value.icon}
                    className="h-6 w-6 text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <h4 className="font-heading text-lg font-semibold text-navy dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-navy/60 dark:text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
