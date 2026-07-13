"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { featuredMasterPlanItems } from "@/data/masterPlan";
import { MasterPlanModal } from "@/components/sections/MasterPlanModal";

export function MasterPlanSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="section-padding !py-20 bg-surface dark:bg-navy-dark md:!py-36 lg:!py-44">
      <div className="container-custom">
        <SectionHeading
          label="Master Plan"
          title="Integrated Smart Township Vision"
          subtitle="A curated ecosystem for modern living — luxury residences, world-class healthcare, education, and commerce."
          className="!mb-14 md:!mb-20"
          subtitleClassName="max-w-[700px]"
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {featuredMasterPlanItems.map((item) => (
            <StaggerItem key={item.id}>
              <article className="group flex h-full flex-col rounded-2xl border border-gray-100/80 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxury-lg dark:border-white/10 dark:bg-navy-light sm:p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary">
                  <DynamicIcon
                    name={item.icon}
                    className="h-7 w-7 text-primary transition-colors duration-500 group-hover:text-white"
                  />
                </div>
                <h4 className="mb-2 font-heading text-lg font-semibold text-navy dark:text-white">
                  {item.title}
                </h4>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-navy/55 dark:text-white/55 line-clamp-2">
                  {item.description}
                </p>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group/link inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary transition-colors hover:text-primary-dark"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </button>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-14 flex justify-center md:mt-16" duration={0.5}>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="font-button inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-10 py-3.5 text-sm font-medium text-navy shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-luxury dark:border-white/15 dark:bg-navy-light dark:text-white"
          >
            View Complete Master Plan
          </button>
        </FadeIn>
      </div>

      <MasterPlanModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
