import { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Vision", href: "/#vision", sectionId: "vision" },
  { label: "Land Bank", href: "/#land-bank", sectionId: "land-bank" },
  { label: "Amenities", href: "/#amenities", sectionId: "amenities" },
  { label: "Locations", href: "/#locations", sectionId: "locations" },
  { label: "CSR", href: "/#csr", sectionId: "csr" },
  { label: "Gallery", href: "/#gallery", sectionId: "gallery" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Vision & Mission", href: "/#vision" },
    { label: "Chairman's Message", href: "/#chairman-message" },
    { label: "Investor Relations", href: "/#investors" },
  ],
  explore: [
    { label: "Land Bank", href: "/#land-bank" },
    { label: "Amenities", href: "/#amenities" },
    { label: "Gallery", href: "/#gallery" },
    { label: "CSR", href: "/#csr" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
