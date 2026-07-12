import { StatItem } from "@/types";
import { officeStats } from "@/data/offices";
import { totalLandBankAcres } from "@/data/landBank";

export const heroStats: StatItem[] = [
  { value: totalLandBankAcres, suffix: "+", label: "Acres Land Bank" },
  { value: officeStats.domesticOffices, label: "Domestic Offices" },
  { value: officeStats.internationalOffices, label: "International Offices" },
  { value: officeStats.totalOffices, label: "Total Offices" },
];

export const homeStats: StatItem[] = [
  { value: totalLandBankAcres, suffix: "+", label: "Acres" },
  { value: officeStats.headOffice, label: "Head Office" },
  { value: officeStats.domesticOffices, label: "Domestic Offices" },
  { value: officeStats.internationalOffices, label: "International Offices" },
];

export const officeStatItems: StatItem[] = [
  { value: officeStats.headOffice, label: "Head Office" },
  { value: officeStats.domesticOffices, label: "Domestic Corporate Offices" },
  { value: officeStats.internationalOffices, label: "International Corporate Offices" },
  { value: officeStats.totalOffices, label: "Total Offices" },
];
