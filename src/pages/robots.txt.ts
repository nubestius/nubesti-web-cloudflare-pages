import parseTomlToJson from "@/lib/utils/parseTomlToJson";
import type { APIRoute } from "astro";

const config = parseTomlToJson("./src/config/config.toml");
const { enable } = config.seo.robots_txt;

const retired = [
  "/privacy-policy/",
  "/terms-conditions/",
  "/security-policy/",
  "/cookie-policy/",
  "/gdpr/",
  "/refund-policy/",
  "/en/privacy-policy/",
  "/en/terms-conditions/",
  "/en/security-policy/",
  "/es/privacy-policy/",
  "/es/terms-conditions/",
  "/es/security-policy/",
  "/fr/privacy-policy/",
  "/fr/terms-conditions/",
  "/fr/security-policy/",
  "/pt/privacy-policy/",
  "/pt/terms-conditions/",
  "/pt/security-policy/",
];

const getRobotsTxt = (sitemapURL: URL) => `# Nubesti LLC
User-agent: *
Allow: /
${retired.map((path) => `Disallow: ${path}`).join("\n")}
Disallow: /admin/
Disallow: /api/
Disallow: /_astro/

Sitemap: ${sitemapURL.href}
Sitemap: ${new URL("sitemap-enhanced.xml", sitemapURL.origin).href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return enable
    ? new Response(getRobotsTxt(sitemapURL), {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      })
    : new Response(null, { status: 404 });
};
