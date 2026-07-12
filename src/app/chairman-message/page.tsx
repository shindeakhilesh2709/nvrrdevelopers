import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/animations/FadeIn";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import Image from "next/image";
import { getOptimizedImageProps } from "@/lib/imageProps";
import { Quote } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Chairman's Message",
  description: `A message from ${siteConfig.chairman}, Founder & Chairman of NVRR Developers.`,
  path: "/chairman-message",
});

export default function ChairmanMessagePage() {
  const directorProps = getOptimizedImageProps(images.director, { priority: true });

  return (
    <>
      <PageHero
        label="Leadership"
        title="Chairman's Message"
        subtitle="A vision rooted in purpose and progress."
        image={images.chairmanHero}
      />
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <div className="flex flex-col items-center md:flex-row gap-8 mb-12">
              <div className="relative mx-auto aspect-square w-full max-w-64 shrink-0 overflow-hidden rounded-2xl sm:max-w-xs">
                <Image
                  src={images.director}
                  alt={siteConfig.chairman}
                  fill
                  className="object-cover object-[65%_20%]"
                  sizes="256px"
                  {...directorProps}
                />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-navy dark:text-white">
                  {siteConfig.chairman}
                </h2>
                <p className="text-primary font-button text-sm uppercase tracking-wider mt-1">
                  Founder & Chairman
                </p>
                <p className="mt-4 text-navy/60 dark:text-white/60">
                  NVRR Developers Pvt Ltd
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <Quote className="h-12 w-12 text-primary/30 mb-6" />
            <div className="space-y-6 text-base text-navy/70 dark:text-white/70 leading-relaxed break-words sm:text-lg">
              <p>Dear Stakeholders, Partners, and Friends,</p>
              <p>
                When I founded NVRR Developers in 2018, I envisioned more than a real estate
                company. I envisioned a movement — one that would transform how India thinks
                about land development and community building.
              </p>
              <p>
                Having witnessed the rapid urbanisation of our nation, I recognised a critical
                gap: developments that sold plots without creating communities. Families were
                buying land but waiting decades for basic infrastructure. Businesses were
                setting up in isolation, far from the residential ecosystems they needed to
                thrive.
              </p>
              <p>
                NVRR was born to bridge this gap. Our approach is fundamentally different. We
                do not simply acquire land and sell plots. We acquire land, master-plan
                integrated townships, and develop complete ecosystems — with hospitals,
                schools, commercial districts, recreational facilities, and smart
                infrastructure — all conceived from day one.
              </p>
              <p>
                Today, our land bank of 4,405 acres across ten strategic locations
                stands as testament to this vision. From the 1,800-acre mega township in
                Sangareddy to our coastal developments in Visakhapatnam and Kakinada, every
                project reflects our commitment to quality, sustainability, and long-term
                value creation.
              </p>
              <p>
                Our international offices in Singapore, Tokyo, and Kuala Lumpur reflect our
                global outlook and our commitment to bringing world-class standards to Indian
                real estate development. We invite global investors and partners to be part
                of this extraordinary journey.
              </p>
              <p>
                As we look to the future, our focus remains unwavering: to build smart cities
                where people can truly live, work, learn, heal, and grow. I invite you to
                join us in constructing not just buildings, but legacies.
              </p>
              <p className="font-heading text-navy dark:text-white pt-4">
                With warm regards,
                <br />
                <span className="text-primary">{siteConfig.chairman}</span>
                <br />
                <span className="text-base font-body text-navy/60 dark:text-white/60">
                  Founder & Chairman, NVRR Developers Pvt Ltd
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
