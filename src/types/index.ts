export interface NavItem {
  label: string;
  href: string;
  sectionId?: string;
  children?: NavItem[];
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  prefix?: string;
}

export interface LandBankProject {
  id: string;
  name: string;
  location: string;
  state: string;
  acres: number;
  coordinates: { lat: number; lng: number };
  markerPosition: { left: number; top: number };
  status: "acquired" | "development" | "planned";
  description: string;
}

export interface Office {
  id: string;
  city: string;
  state: string;
  type: "head" | "domestic" | "international";
  mapPosition?: { x: number; y: number };
}

export interface MasterPlanItem {
  id: string;
  title: string;
  category: "residential" | "healthcare" | "education" | "commercial" | "recreation" | "infrastructure" | "sustainability" | "technology";
  icon: string;
  description: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SustainabilityItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CSRItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ConstructionStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}
