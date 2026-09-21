import { COMPANY, LEGAL_UPDATED } from "@/lib/company";
import type { LegalCompany } from "./types";

export { LEGAL_UPDATED };

export const legalCompany: LegalCompany = {
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  addressLines: [...COMPANY.addressLines],
  addressInline: COMPANY.addressInline,
  jurisdiction: COMPANY.jurisdiction,
  email: COMPANY.emails.legal,
  privacyEmail: COMPANY.emails.privacy,
  securityEmail: COMPANY.emails.security,
  dpoEmail: COMPANY.emails.dpo,
  website: COMPANY.website,
  portal: COMPANY.portal,
};
