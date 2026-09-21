import { COMPANY } from "@/lib/company";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: COMPANY.website,
    logo: `${COMPANY.website}/images/logo-nubesti.svg`,
    description:
      "Nubesti LLC provides continuous autonomous security testing against customer-authorized assets.",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.postalAddress.streetAddress,
      addressLocality: COMPANY.postalAddress.addressLocality,
      addressRegion: COMPANY.postalAddress.addressRegion,
      postalCode: COMPANY.postalAddress.postalCode,
      addressCountry: COMPANY.postalAddress.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: COMPANY.emails.security,
        contactType: "security",
        availableLanguage: ["English", "Spanish", "French", "Portuguese"],
      },
      {
        "@type": "ContactPoint",
        email: COMPANY.emails.privacy,
        contactType: "privacy",
        availableLanguage: ["English", "Spanish", "French", "Portuguese"],
      },
      {
        "@type": "ContactPoint",
        email: COMPANY.emails.legal,
        contactType: "legal",
        availableLanguage: ["English", "Spanish", "French", "Portuguese"],
      },
    ],
    sameAs: [...COMPANY.sameAs],
  };
}
