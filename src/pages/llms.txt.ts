import type { APIRoute } from "astro";
import { COMPANY } from "@/lib/company";

export const GET: APIRoute = () => {
  const body = `# Nubesti
> ${COMPANY.legalName} — continuous autonomous security testing of customer-authorized assets.

## Company
- Legal name: ${COMPANY.legalName} (${COMPANY.entityType})
- Jurisdiction: ${COMPANY.jurisdiction}
- Address: ${COMPANY.addressInline}
- Website: ${COMPANY.website}
- Portal: ${COMPANY.portal}
- LinkedIn: ${COMPANY.social.linkedin}

## What the product is
Authorized, scheduled offensive testing with evidence and retest. Paid KYC is required before tests launch. Humans keep scope, halt, and patch decisions.

## What we do not claim here
- No public 99% accuracy figure
- No “full MITRE ATT&CK coverage”
- No current SOC 2 / ISO 27001 / PCI / HIPAA certification logos
- No named customer stories until authorized
- No invented benchmark scores

## Public documents
- Trust Center: ${COMPANY.website}/trust/
- Platform security: ${COMPANY.website}/security/
- Methodology: ${COMPANY.website}/methodology/
- Legal center: ${COMPANY.website}/legal/
- KYC: ${COMPANY.website}/legal/kyc/
- Vulnerability disclosure: ${COMPANY.website}/legal/vulnerability-disclosure/
- security.txt: ${COMPANY.website}/.well-known/security.txt

## Contact
- Security: ${COMPANY.emails.security}
- Privacy: ${COMPANY.emails.privacy}
- Legal: ${COMPANY.emails.legal}
- Sales: ${COMPANY.emails.sales}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
