"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import { getOptimizedImageProps } from "@/lib/imageProps";
import { Quote } from "lucide-react";

export function ChairmanSection() {
  const directorProps = getOptimizedImageProps(images.director);

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="relative rounded-3xl bg-gradient-luxury p-8 md:p-16 lg:p-20">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-5">
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="relative mx-auto max-w-sm">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={images.director}
                    alt={siteConfig.chairman}
                    fill
                    className="object-cover object-[65%_20%]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    {...directorProps}
                  />
                </div>
                <div className="absolute -bottom-4 left-4 right-4 rounded-xl glass p-4 text-center">
                  <p className="font-heading text-lg font-semibold text-white">
                    {siteConfig.chairman}
                  </p>
                  <p className="font-button text-xs text-primary uppercase tracking-wider">
                    Founder & Chairman
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" className="lg:col-span-3">
              <SectionHeading
                label="Chairman's Message"
                title="A Vision Rooted in Purpose"
                align="left"
                dark
              />
              <Quote className="mb-4 h-10 w-10 text-primary opacity-50" />
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  When I founded NVRR Developers in 2018, I envisioned more than a
                  real estate company. I envisioned a movement — one that would
                  transform how India thinks about land development and community
                  building.
                </p>
                <p>
                  Our land bank of 4,405 acres is not merely an asset on a
                  balance sheet. It represents our commitment to creating
                  self-sustaining ecosystems where families thrive, businesses
                  flourish, and communities grow stronger with every passing
                  generation.
                </p>
                <p>
                  We invite you to be part of this extraordinary journey as we
                  build the smart cities of tomorrow, today.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/chairman-message" variant="primary">
                  Read Full Message
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
