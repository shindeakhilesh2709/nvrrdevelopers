import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/animations/FadeIn";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import Image from "next/image";
import { getOptimizedImageProps } from "@/lib/imageProps";

export const metadata: Metadata = generateSEO({
  title: "About Us",
  description: "Learn about NVRR Developers — transforming land into integrated smart communities since 2018.",
  path: "/about",
});

export default function AboutPage() {
  const buildingProps = getOptimizedImageProps(images.aboutBuilding);

  return (
    <>
      <PageHero
        label="About NVRR"
        title="Building India's Smart Cities"
        subtitle="A legacy of vision, integrity, and transformative development."
        image={images.about}
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="space-y-6 text-navy/70 dark:text-white/70 leading-relaxed">
                <p className="text-lg">
                  Established in {siteConfig.founded} under the visionary leadership of{" "}
                  <strong className="text-navy dark:text-white">{siteConfig.chairman}</strong>,
                  NVRR Developers Pvt Ltd was founded with a singular purpose — to transform
                  land into integrated smart communities that redefine modern living.
                </p>
                <p>
                  From our headquarters in Mumbai, we have strategically acquired 4,405 acres
                  across Andhra Pradesh and Telangana. Our land bank
                  represents not just an asset, but a commitment to creating self-sustaining
                  ecosystems where families thrive and businesses flourish.
                </p>
                <p>
                  NVRR focuses on sustainable development, quality construction, technological
                  innovation, and long-term value creation. Our objective extends far beyond
                  selling plots — we are building complete ecosystems where people can Live,
                  Work, Learn, Heal, and Grow.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={images.aboutBuilding}
                  alt="NVRR Development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  {...buildingProps}
                />
              </div>
            </FadeIn>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-3">
            {[
              { value: "2018", label: "Year Established" },
              { value: "4,405+", label: "Acres Land Bank" },
              { value: "9", label: "Office Locations" },
            ].map((stat) => (
              <FadeIn key={stat.label}>
                <div className="luxury-card p-8 text-center dark:bg-navy-light">
                  <p className="font-heading text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 font-button text-sm uppercase tracking-wider text-navy/60 dark:text-white/60">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
