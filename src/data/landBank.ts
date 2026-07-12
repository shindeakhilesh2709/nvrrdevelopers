import { LandBankProject } from "@/types";

export const landBankProjects: LandBankProject[] = [
  {
    id: "hyderabad",
    name: "Hyderabad",
    location: "Hyderabad",
    state: "Telangana",
    acres: 650,
    coordinates: { lat: 17.385, lng: 78.4867 },
    markerPosition: { left: 47.2, top: 38.5 },
    status: "acquired",
    description:
      "Metropolitan land bank in Telangana's thriving capital, designed for integrated smart city development with world-class infrastructure.",
  },
  {
    id: "sangareddy",
    name: "Sangareddy",
    location: "Sangareddy",
    state: "Telangana",
    acres: 1800,
    coordinates: { lat: 17.6244, lng: 78.0867 },
    markerPosition: { left: 42.8, top: 32.5 },
    status: "acquired",
    description:
      "Our crown jewel — 1,800 acres near Hyderabad's western growth corridor, envisioned as a self-sustaining mega township.",
  },
  {
    id: "karimnagar",
    name: "Karimnagar",
    location: "Karimnagar",
    state: "Telangana",
    acres: 350,
    coordinates: { lat: 18.4386, lng: 79.1288 },
    markerPosition: { left: 54.2, top: 21.5 },
    status: "acquired",
    description:
      "Strategically acquired land in northern Telangana's commercial hub, planned for community-centric township development.",
  },
  {
    id: "khammam",
    name: "Khammam",
    location: "Khammam",
    state: "Telangana",
    acres: 55,
    coordinates: { lat: 17.2473, lng: 80.1514 },
    markerPosition: { left: 57.2, top: 34.2 },
    status: "acquired",
    description:
      "Prime land parcel in eastern Telangana with strong connectivity and growth potential for residential development.",
  },
  {
    id: "visakhapatnam",
    name: "Visakhapatnam",
    location: "Visakhapatnam",
    state: "Andhra Pradesh",
    acres: 600,
    coordinates: { lat: 17.6868, lng: 83.2185 },
    markerPosition: { left: 71.2, top: 43.8 },
    status: "acquired",
    description:
      "Premium coastal land in India's largest port city, offering unparalleled opportunities for luxury residential and hospitality development.",
  },
  {
    id: "kakinada",
    name: "Kakinada",
    location: "Kakinada",
    state: "Andhra Pradesh",
    acres: 400,
    coordinates: { lat: 16.9891, lng: 82.2475 },
    markerPosition: { left: 67.2, top: 55.2 },
    status: "acquired",
    description:
      "Flagship land acquisition near the port city of Kakinada, positioned for a world-class smart township with commercial districts.",
  },
  {
    id: "rajahmundry",
    name: "Rajahmundry",
    location: "Rajahmundry",
    state: "Andhra Pradesh",
    acres: 125,
    coordinates: { lat: 17.0005, lng: 81.804 },
    markerPosition: { left: 64.2, top: 61.5 },
    status: "acquired",
    description:
      "Strategically positioned along the Godavari corridor, offering exceptional potential for integrated township development with riverfront vistas.",
  },
  {
    id: "bhimavaram",
    name: "Bhimavaram",
    location: "Bhimavaram",
    state: "Andhra Pradesh",
    acres: 175,
    coordinates: { lat: 16.5449, lng: 81.5212 },
    markerPosition: { left: 57.5, top: 68.2 },
    status: "acquired",
    description:
      "Located in one of Andhra Pradesh's fastest-growing urban centres, earmarked for mixed-use development with healthcare infrastructure.",
  },
  {
    id: "kaldindi",
    name: "Kaldindi",
    location: "Kaldindi",
    state: "Andhra Pradesh",
    acres: 75,
    coordinates: { lat: 16.5211, lng: 81.2156 },
    markerPosition: { left: 51.2, top: 75.5 },
    status: "acquired",
    description:
      "A pristine land parcel in coastal Andhra Pradesh, ideal for sustainable residential communities surrounded by natural landscapes.",
  },
  {
    id: "amaravati",
    name: "Amaravati",
    location: "Amaravati",
    state: "Andhra Pradesh",
    acres: 175,
    coordinates: { lat: 16.5062, lng: 80.648 },
    markerPosition: { left: 43.8, top: 71.2 },
    status: "acquired",
    description:
      "Strategic land holding in the capital region, envisioned for integrated development aligned with Andhra Pradesh's growth vision.",
  },
];

export const totalLandBankAcres = 4405;

export const STATUS_LABELS: Record<LandBankProject["status"], string> = {
  acquired: "Acquired",
  development: "Development",
  planned: "Planned",
};

export const STATUS_STYLES: Record<
  LandBankProject["status"],
  { badge: string; ring: string }
> = {
  acquired: {
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    ring: "ring-emerald-400/50",
  },
  development: {
    badge: "bg-blue-50 text-blue-700 ring-blue-200",
    ring: "ring-blue-400/50",
  },
  planned: {
    badge: "bg-orange-50 text-orange-700 ring-orange-200",
    ring: "ring-orange-400/50",
  },
};
