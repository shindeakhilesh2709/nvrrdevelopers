import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/navigation";
import { siteConfig, socialLinks } from "@/config/site";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { FooterHashLink } from "@/components/ui/FooterHashLink";
import { isHashLink } from "@/lib/scroll";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone } from "lucide-react";

function FooterLink({ href, label }: { href: string; label: string }) {
  const className = "text-sm text-white/70 hover:text-primary transition-colors";

  if (isHashLink(href)) {
    return (
      <FooterHashLink href={href} className={className}>
        {label}
      </FooterHashLink>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom section-padding !pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/logo-mark.png"
                alt="NVRR Developers logo"
                width={68}
                height={44}
                className="h-11 w-auto rounded-md"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-heading text-xl font-bold tracking-wide text-white">
                  NVRR
                </span>
                <span className="font-button text-xs font-medium uppercase tracking-[0.18em] text-white/75">
                  Developers
                </span>
              </span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phoneAlt.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                  {siteConfig.phoneAlt}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-button mb-4 text-sm font-semibold uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-button mb-4 text-sm font-semibold uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-button mb-4 text-sm font-semibold uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-white/70">
              Stay updated with our latest developments and land bank news.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { icon: Facebook, href: socialLinks.facebook },
              { icon: Instagram, href: socialLinks.instagram },
              { icon: Linkedin, href: socialLinks.linkedin },
              { icon: Twitter, href: socialLinks.twitter },
              { icon: Youtube, href: socialLinks.youtube },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-primary hover:text-primary hover:bg-primary/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="text-center text-sm text-white/50 md:text-left">
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
