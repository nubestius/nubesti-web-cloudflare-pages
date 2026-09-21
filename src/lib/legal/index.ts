import { extraLegalDocuments as enExtra } from "./content/en-extra";
import { extraLegalDocuments as esExtra } from "./content/es-extra";
import { extraLegalDocuments as frExtra } from "./content/fr-extra";
import { extraLegalDocuments as ptExtra } from "./content/pt-extra";
import { legalDocuments as en } from "./content/en";
import { legalDocuments as es } from "./content/es";
import { legalDocuments as fr } from "./content/fr";
import { legalDocuments as pt } from "./content/pt";
import { LEGAL_SLUGS, type LegalDocument, type LegalSlug } from "./types";

const catalogs: Record<string, LegalDocument[]> = {
  en: [...en, ...enExtra],
  es: [...es, ...esExtra],
  fr: [...fr, ...frExtra],
  pt: [...pt, ...ptExtra],
};

export function getLegalCatalog(locale?: string): LegalDocument[] {
  const docs = catalogs[locale || "en"] || catalogs.en;
  const order = new Map(LEGAL_SLUGS.map((slug, index) => [slug, index]));
  return [...docs].sort(
    (a, b) => (order.get(a.slug) ?? 99) - (order.get(b.slug) ?? 99),
  );
}

export function getLegalDocument(
  slug: string,
  locale?: string,
): LegalDocument | undefined {
  const docs = getLegalCatalog(locale);
  const match = docs.find((doc) => doc.slug === slug);
  if (match) return match;
  return catalogs.en.find((doc) => doc.slug === slug);
}

export function isLegalSlug(slug: string): slug is LegalSlug {
  return LEGAL_SLUGS.includes(slug as LegalSlug);
}

export { LEGAL_SLUGS } from "./types";
export { LEGAL_UPDATED, legalCompany } from "./company";
export { getLegalHubCopy, groupLegalDocuments } from "./hub";
export {
  extractLegalToc,
  formatLegalDate,
  renderLegalMarkdown,
} from "./render";
