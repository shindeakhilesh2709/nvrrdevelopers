import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Contact Us",
  description: "Get in touch with NVRR Developers for project inquiries, investments, and partnerships.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Get In Touch"
        subtitle="We'd love to hear from you. Reach out for inquiries, investments, or partnerships."
      />
      <ContactSection />
    </>
  );
}
