import { Office } from "@/types";

export const headOffice: Office = {
  id: "mumbai",
  city: "Mumbai",
  state: "Maharashtra",
  type: "head",
  mapPosition: { x: 545, y: 268 },
};

export const domesticOffices: Office[] = [
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    type: "domestic",
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "domestic",
  },
  {
    id: "amaravati",
    city: "Amaravati",
    state: "Andhra Pradesh",
    type: "domestic",
  },
  {
    id: "gurugram",
    city: "Gurugram",
    state: "Haryana",
    type: "domestic",
  },
  {
    id: "patna",
    city: "Patna",
    state: "Bihar",
    type: "domestic",
  },
];

export const internationalOffices: Office[] = [
  {
    id: "singapore",
    city: "Singapore",
    state: "Singapore",
    type: "international",
    mapPosition: { x: 735, y: 332 },
  },
  {
    id: "tokyo",
    city: "Tokyo",
    state: "Japan",
    type: "international",
    mapPosition: { x: 865, y: 215 },
  },
  {
    id: "malaysia",
    city: "Malaysia",
    state: "Malaysia",
    type: "international",
    mapPosition: { x: 748, y: 338 },
  },
];

export const worldMapMarkers = [
  headOffice,
  ...internationalOffices,
].filter((o) => o.mapPosition);

export const officeStats = {
  headOffice: 1,
  domesticOffices: domesticOffices.length,
  internationalOffices: internationalOffices.length,
  totalOffices:
    1 + domesticOffices.length + internationalOffices.length,
};
