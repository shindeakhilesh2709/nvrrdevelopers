import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { MasterPlanSection } from "@/components/sections/MasterPlanSection";
import { generateSEO } from "@/lib/seo";
import { images } from "@/config/images";

export const metadata: Metadata = generateSEO({
  title: "Amenities",
  description: "World-class amenities in every NVRR township — from healthcare and education to recreation and commercial.",
  path: "/amenities",
});

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        label="Amenities"
        title="World-Class Township Amenities"
        subtitle="Every amenity you need, thoughtfully integrated into our master plans."
        image={images.amenitiesHero}
      />
      <AmenitiesSection />
      <MasterPlanSection />
    </>
  );
}
