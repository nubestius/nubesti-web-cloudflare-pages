export const LEGAL_SLUGS = [
  "terms",
  "billing",
  "refunds",
  "sla",
  "acceptable-use",
  "engagement",
  "authorization",
  "kyc",
  "ai-policy",
  "export-controls",
  "privacy",
  "cookies",
  "dpa",
  "subprocessors",
  "security",
  "vulnerability-disclosure",
  "dmca",
  "accessibility",
  "ethics",
  "imprint",
] as const;

export type LegalSlug = (typeof LEGAL_SLUGS)[number];

export const LEGAL_GROUP_IDS = [
  "commercial",
  "testing",
  "privacy",
  "trust",
  "company",
] as const;

export type LegalGroupId = (typeof LEGAL_GROUP_IDS)[number];

export const LEGAL_GROUPS: { id: LegalGroupId; slugs: LegalSlug[] }[] = [
  { id: "commercial", slugs: ["terms", "billing", "refunds", "sla"] },
  {
    id: "testing",
    slugs: [
      "acceptable-use",
      "engagement",
      "authorization",
      "kyc",
      "ai-policy",
      "export-controls",
    ],
  },
  { id: "privacy", slugs: ["privacy", "cookies", "dpa", "subprocessors"] },
  { id: "trust", slugs: ["security", "vulnerability-disclosure"] },
  { id: "company", slugs: ["dmca", "accessibility", "ethics", "imprint"] },
];

export interface LegalDocument {
  slug: LegalSlug;
  title: string;
  summary: string;
  meta_description: string;
  body: string;
  updated?: string;
}

export interface LegalCompany {
  name: string;
  legalName: string;
  addressLines: string[];
  addressInline: string;
  jurisdiction: string;
  email: string;
  privacyEmail: string;
  securityEmail: string;
  dpoEmail: string;
  website: string;
  portal: string;
}

export interface LegalHubCopy {
  eyebrow: string;
  title: string;
  intro: string;
  last_updated: string;
  on_this_page: string;
  company: string;
  back: string;
  home: string;
  breadcrumb: string;
  print: string;
  groups: Record<LegalGroupId, string>;
}
