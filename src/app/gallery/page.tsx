import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { GallerySection } from "@/components/sections/GallerySection";
import { generateSEO } from "@/lib/seo";
import { images } from "@/config/images";

export const metadata: Metadata = generateSEO({
  title: "Gallery",
  description: "Visual journey through NVRR Developers' projects — drone views, architecture, and construction progress.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        title="Visual Gallery"
        subtitle="Explore our developments through stunning photography and aerial views."
        image={images.about}
      />
      <GallerySection />
    </>
  );
}
