import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Locations",
  description: "NVRR Developers offices — 1 head office, 5 domestic and 3 international corporate offices.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <PageHero
        label="Locations"
        title="Our Presence Across India & Beyond"
        subtitle="A strategic network of 9 offices across India and key global markets."
      />
      <LocationsSection />
    </>
  );
}
