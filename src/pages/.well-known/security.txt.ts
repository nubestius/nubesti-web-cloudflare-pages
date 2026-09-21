import type { APIRoute } from "astro";

const getSecurityTxt = () => `# Security Policy for Nubesti
# https://securitytxt.org/

Contact: mailto:security@nubesti.com
Expires: 2027-09-21T23:59:59.000Z
Policy: https://nubesti.com/legal/vulnerability-disclosure/
Acknowledgments: https://nubesti.com/legal/vulnerability-disclosure/
Canonical: https://nubesti.com/.well-known/security.txt
Preferred-Languages: en, es, fr, pt
`;

export const GET: APIRoute = () => {
  return new Response(getSecurityTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
