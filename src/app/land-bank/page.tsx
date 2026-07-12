import { Metadata } from "next";
import { LandBankSection } from "@/components/sections/LandBankSection";
import { PageHero } from "@/components/ui/PageHero";
import { generateSEO } from "@/lib/seo";
import { images } from "@/config/images";

export const metadata: Metadata = generateSEO({
  title: "Land Bank",
  description: "Explore NVRR Developers' 4,405 acre strategic land bank across Andhra Pradesh and Telangana.",
  path: "/land-bank",
});

export default function LandBankPage() {
  return (
    <>
      <PageHero
        label="Land Bank"
        title="Strategic Land Holdings"
        subtitle="4,405 acres positioned in India's fastest-growing corridors."
        image={images.landBankHero}
      />
      <LandBankSection />
    </>
  );
}
