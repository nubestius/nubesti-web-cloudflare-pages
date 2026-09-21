export const LEGAL_UPDATED = "2026-09-21";

export const COMPANY = {
  name: "Nubesti",
  legalName: "Nubesti LLC",
  entityType: "Limited Liability Company",
  country: "United States",
  state: "Delaware",
  jurisdiction: "Delaware, United States",
  addressLines: [
    "1111B S Governors Ave STE 23840",
    "Dover, DE 19904, USA",
  ],
  addressInline: "1111B S Governors Ave STE 23840, Dover, DE 19904, USA",
  postalAddress: {
    streetAddress: "1111B S Governors Ave STE 23840",
    addressLocality: "Dover",
    addressRegion: "DE",
    postalCode: "19904",
    addressCountry: "US",
  },
  emails: {
    legal: "legal@nubesti.com",
    privacy: "privacy@nubesti.com",
    security: "security@nubesti.com",
    dpo: "dpo@nubesti.com",
    sales: "alexis@nubesti.com",
  },
  website: "https://nubesti.com",
  portal: "https://app.nubesti.com",
  demoMeetings: "https://meetings.hubspot.com/alexis307",
  social: {
    linkedin: "https://www.linkedin.com/company/nubesti",
  },
  sameAs: ["https://www.linkedin.com/company/nubesti"] as string[],
} as const;

export type Company = typeof COMPANY;
