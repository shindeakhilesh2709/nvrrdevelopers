import dynamic from "next/dynamic";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { AboutSection } from "@/components/sections/AboutSection";

const ChairmanSection = dynamic(
  () => import("@/components/sections/ChairmanSection").then((m) => ({ default: m.ChairmanSection })),
  { loading: () => <SectionSkeleton /> }
);
const VisionMissionSection = dynamic(
  () => import("@/components/sections/VisionMissionSection").then((m) => ({ default: m.VisionMissionSection })),
  { loading: () => <SectionSkeleton /> }
);
const WhyChooseSection = dynamic(
  () => import("@/components/sections/WhyChooseSection").then((m) => ({ default: m.WhyChooseSection })),
  { loading: () => <SectionSkeleton /> }
);
const MasterPlanSection = dynamic(
  () => import("@/components/sections/MasterPlanSection").then((m) => ({ default: m.MasterPlanSection })),
  { loading: () => <SectionSkeleton /> }
);
const AmenitiesSection = dynamic(
  () => import("@/components/sections/AmenitiesSection").then((m) => ({ default: m.AmenitiesSection })),
  { loading: () => <SectionSkeleton /> }
);
const LandBankSection = dynamic(
  () => import("@/components/sections/LandBankSection").then((m) => ({ default: m.LandBankSection })),
  { loading: () => <SectionSkeleton /> }
);
const LocationsSection = dynamic(
  () => import("@/components/sections/LocationsSection").then((m) => ({ default: m.LocationsSection })),
  { loading: () => <SectionSkeleton /> }
);
const ConstructionSection = dynamic(
  () => import("@/components/sections/ConstructionSection").then((m) => ({ default: m.ConstructionSection })),
  { loading: () => <SectionSkeleton /> }
);
const SustainabilitySection = dynamic(
  () => import("@/components/sections/SustainabilitySection").then((m) => ({ default: m.SustainabilitySection })),
  { loading: () => <SectionSkeleton /> }
);
const CSRSection = dynamic(
  () => import("@/components/sections/CSRSection").then((m) => ({ default: m.CSRSection })),
  { loading: () => <SectionSkeleton /> }
);
const GallerySection = dynamic(
  () => import("@/components/sections/GallerySection").then((m) => ({ default: m.GallerySection })),
  { loading: () => <SectionSkeleton /> }
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection").then((m) => ({ default: m.TestimonialsSection })),
  { loading: () => <SectionSkeleton /> }
);
const CalculatorsSection = dynamic(
  () => import("@/components/sections/CalculatorsSection").then((m) => ({ default: m.CalculatorsSection })),
  { loading: () => <SectionSkeleton /> }
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then((m) => ({ default: m.ContactSection })),
  { loading: () => <SectionSkeleton /> }
);

export default function HomePage() {
  return (
    <>
      <SectionAnchor id="home">
        <HeroSection />
        <StatsBar />
      </SectionAnchor>
      <SectionAnchor id="about">
        <AboutSection />
      </SectionAnchor>
      <SectionAnchor id="vision">
        <SectionAnchor id="chairman-message">
          <ChairmanSection />
        </SectionAnchor>
        <VisionMissionSection />
      </SectionAnchor>
      <WhyChooseSection />
      <MasterPlanSection />
      <SectionAnchor id="amenities">
        <AmenitiesSection />
      </SectionAnchor>
      <SectionAnchor id="land-bank">
        <LandBankSection />
      </SectionAnchor>
      <SectionAnchor id="locations">
        <LocationsSection />
      </SectionAnchor>
      <ConstructionSection />
      <SustainabilitySection />
      <SectionAnchor id="csr">
        <CSRSection />
      </SectionAnchor>
      <SectionAnchor id="gallery">
        <GallerySection />
      </SectionAnchor>
      <TestimonialsSection />
      <SectionAnchor id="investors">
        <CalculatorsSection />
      </SectionAnchor>
      <SectionAnchor id="contact">
        <ContactSection />
      </SectionAnchor>
    </>
  );
}
