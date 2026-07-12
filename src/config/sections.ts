export const SECTION_IDS = [
  "home",
  "about",
  "vision",
  "chairman-message",
  "land-bank",
  "amenities",
  "locations",
  "csr",
  "gallery",
  "investors",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

/** Ordered list of homepage sections used for scroll-spy highlighting in the navbar. */
export const SCROLL_SPY_SECTIONS: SectionId[] = [
  "home",
  "about",
  "vision",
  "amenities",
  "land-bank",
  "locations",
  "csr",
  "gallery",
  "investors",
  "contact",
];
