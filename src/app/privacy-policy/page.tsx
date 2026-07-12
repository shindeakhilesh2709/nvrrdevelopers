import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/animations/FadeIn";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generateSEO({
  title: "Privacy Policy",
  description: "NVRR Developers privacy policy — how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="Last updated: January 2025" />
      <section className="section-padding">
        <div className="container-custom max-w-3xl prose prose-navy dark:prose-invert">
          <FadeIn>
            <div className="space-y-6 text-navy/70 dark:text-white/70 leading-relaxed">
              <p>
                {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or interact with our services.
              </p>
              <h2 className="font-heading text-xl font-semibold text-navy dark:text-white">Information We Collect</h2>
              <p>We may collect personal information including your name, email address, phone number, and any other information you voluntarily provide through our contact forms, newsletter subscriptions, or inquiry submissions.</p>
              <h2 className="font-heading text-xl font-semibold text-navy dark:text-white">How We Use Your Information</h2>
              <p>We use collected information to respond to inquiries, provide project information, send newsletters (with your consent), improve our website, and comply with legal obligations.</p>
              <h2 className="font-heading text-xl font-semibold text-navy dark:text-white">Data Security</h2>
              <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>
              <h2 className="font-heading text-xl font-semibold text-navy dark:text-white">Contact Us</h2>
              <p>For privacy-related inquiries, please contact us at {siteConfig.email}.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
