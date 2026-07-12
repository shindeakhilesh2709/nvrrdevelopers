"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import { getOptimizedImageProps } from "@/lib/imageProps";

export function AboutSection() {
  const aboutProps = getOptimizedImageProps(images.about);

  return (
    <section className="section-padding bg-surface dark:bg-navy-dark">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <div className="relative overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={images.about}
                  alt="NVRR Developers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  {...aboutProps}
                />
              </div>
              <div className="absolute bottom-4 right-4 rounded-2xl bg-primary p-6 text-white shadow-luxury-lg md:bottom-auto md:-bottom-6 md:-right-6 lg:-bottom-8 lg:-right-8">
                <p className="font-heading text-4xl font-bold">2018</p>
                <p className="font-button text-sm uppercase tracking-wider opacity-80">
                  Established
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <SectionHeading
              label="About NVRR"
              title="Transforming Land Into Integrated Smart Communities"
              align="left"
            />
            <div className="space-y-4 text-navy/70 dark:text-white/70 leading-relaxed">
              <p>
                Established in {siteConfig.founded} under the visionary leadership
                of {siteConfig.chairman}, NVRR Developers was founded with a
                singular purpose — to transform land into integrated smart
                communities that redefine modern living.
              </p>
              <p>
                The company has strategically acquired thousands of acres across
                Andhra Pradesh, Telangana, and Maharashtra, with long-term plans
                to develop world-class townships, hospitals, educational
                institutions, commercial districts, and smart infrastructure.
              </p>
              <p>
                Our objective extends far beyond selling plots. We are building
                complete ecosystems where people can{" "}
                <strong className="text-navy dark:text-white">
                  Live, Work, Learn, Heal, and Grow
                </strong>
                .
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="navy" className="w-full sm:w-auto">
                Discover Our Story
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
