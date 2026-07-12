import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CalculatorsSection } from "@/components/sections/CalculatorsSection";
import { generateSEO } from "@/lib/seo";
import { images } from "@/config/images";
import { totalLandBankAcres, landBankProjects } from "@/data/landBank";
import { officeStats } from "@/data/offices";
import { FileText, TrendingUp, Users, Building } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Investor Relations",
  description: "NVRR Developers investor relations — financial highlights, land bank value, and investment opportunities.",
  path: "/investor-relations",
});

const highlights = [
  {
    icon: Building,
    title: "Land Bank Value",
    description: "4,405 acres of strategically acquired land across high-growth corridors in South India.",
  },
  {
    icon: TrendingUp,
    title: "Growth Trajectory",
    description: "Consistent land acquisition and master planning driving exponential portfolio growth since 2018.",
  },
  {
    icon: Users,
    title: "Stakeholder Trust",
    description: "Transparent business practices and documented processes ensuring investor confidence.",
  },
  {
    icon: FileText,
    title: "Regulatory Compliance",
    description: "Full compliance with RERA, environmental clearances, and all applicable regulations.",
  },
];

export default function InvestorRelationsPage() {
  return (
    <>
      <PageHero
        label="Investors"
        title="Investor Relations"
        subtitle="Partner with India's emerging leader in integrated township development."
        image={images.investorHero}
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4 mb-16 md:mb-20">
            <AnimatedCounter end={totalLandBankAcres} suffix="+" label="Acres Land Bank" />
            <AnimatedCounter end={landBankProjects.length} label="Land Locations" />
            <AnimatedCounter end={officeStats.totalOffices} label="Office Locations" />
            <AnimatedCounter end={2018} label="Since" />
          </div>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 mb-20">
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="luxury-card p-8 dark:bg-navy-light">
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-navy dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-navy/60 dark:text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="rounded-2xl bg-navy p-8 md:p-12 text-white text-center">
              <h3 className="font-heading text-2xl font-semibold mb-4">
                Investment Opportunities
              </h3>
              <p className="max-w-2xl mx-auto text-white/70 leading-relaxed mb-6">
                NVRR Developers offers multiple investment avenues including land parcels,
                township units, and commercial spaces. Our investor relations team is available
                to discuss opportunities tailored to your portfolio requirements.
              </p>
              <a href="/contact" className="btn-primary w-full sm:w-auto">
                Contact Investor Relations
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      <CalculatorsSection />
    </>
  );
}
