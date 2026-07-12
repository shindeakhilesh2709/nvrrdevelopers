import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { VisionMissionSection } from "@/components/sections/VisionMissionSection";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Vision & Mission",
  description: "Discover NVRR Developers' vision to build India's most trusted integrated smart townships.",
  path: "/vision-mission",
});

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        label="Our Purpose"
        title="Vision & Mission"
        subtitle="Guiding principles that shape every decision we make."
      />
      <VisionMissionSection />
    </>
  );
}
