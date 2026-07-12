import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CSRSection } from "@/components/sections/CSRSection";
import { SustainabilitySection } from "@/components/sections/SustainabilitySection";
import { generateSEO } from "@/lib/seo";
import { images } from "@/config/images";

export const metadata: Metadata = generateSEO({
  title: "CSR",
  description: "NVRR Developers' corporate social responsibility initiatives in education, healthcare, and community welfare.",
  path: "/csr",
});

export default function CSRPage() {
  return (
    <>
      <PageHero
        label="CSR"
        title="Corporate Social Responsibility"
        subtitle="Building communities beyond construction — investing in people and the planet."
        image={images.csrHero}
      />
      <CSRSection />
      <SustainabilitySection />
    </>
  );
}
