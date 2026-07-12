import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/animations/FadeIn";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generateSEO({
  title: "Terms of Service",
  description: "Terms and conditions for using the NVRR Developers website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" subtitle="Last updated: January 2025" />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <FadeIn>
            <div className="space-y-6 text-navy/70 dark:text-white/70 leading-relaxed">
              <p>
                Welcome to the website of {siteConfig.name}. By accessing and using this
                website, you agree to be bound by these Terms of Service.
              </p>
              <h2 className="font-heading text-xl font-semibold text-navy dark:text-white">Use of Website</h2>
              <p>This website is provided for informational purposes about our projects, land bank, and services. Content is subject to change without notice. Images and renderings are for representational purposes only.</p>
              <h2 className="font-heading text-xl font-semibold text-navy dark:text-white">Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and images, is the property of {siteConfig.name} and is protected by applicable intellectual property laws.</p>
              <h2 className="font-heading text-xl font-semibold text-navy dark:text-white">Disclaimer</h2>
              <p>While we strive for accuracy, we do not warrant that all information on this website is complete, current, or error-free. Project details, pricing, and availability are subject to change.</p>
              <h2 className="font-heading text-xl font-semibold text-navy dark:text-white">Contact</h2>
              <p>For questions about these terms, contact us at {siteConfig.email}.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
