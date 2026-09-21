export const LEGAL_SLUGS = [
  "terms",
  "privacy",
  "cookies",
  "acceptable-use",
  "refunds",
  "dmca",
  "sla",
  "dpa",
  "subprocessors",
  "security",
  "billing",
  "engagement",
  "accessibility",
  "ethics",
  "imprint",
] as const;

export type LegalSlug = (typeof LEGAL_SLUGS)[number];

export interface LegalDocument {
  slug: LegalSlug;
  title: string;
  summary: string;
  meta_description: string;
  body: string;
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
  phone: string;
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
}
