import type { APIRoute } from "astro";
import parseTomlToJson from "@/lib/utils/parseTomlToJson";
import { getLocaleUrlCTM, supportedLanguages } from "@/lib/utils/languageParser.ts";
import { LEGAL_SLUGS } from "@/lib/legal";

const config = parseTomlToJson("./src/config/config.toml");

const CORE = [
  "",
  "trust/",
  "security/",
  "methodology/",
  "how-it-works/",
  "demo/",
  "pricing/",
  "contact/",
  "about/",
  "docs/",
  "benchmark/",
  "customers/",
  "research/",
  "changelog/",
  "faq/",
  "ai-red-team/",
  "legal/",
  "blog/",
];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site?.href || config.site.base_url;
  const langs = ["", "es", "fr", "pt"];
  const pages = [
    ...langs.flatMap((lang) =>
      CORE.map((path) => ({
        url: lang ? `${lang}/${path}` : path,
        changefreq: path === "" ? "weekly" : "monthly",
        priority: path === "" || path === "trust/" ? "1.0" : "0.6",
      })),
    ),
    ...LEGAL_SLUGS.map((slug) => ({
      url: `legal/${slug}/`,
      changefreq: "yearly",
      priority: slug === "kyc" || slug === "security" ? "0.5" : "0.3",
    })),
    ...["es", "fr", "pt"].flatMap((lang) =>
      LEGAL_SLUGS.map((slug) => ({
        url: `${lang}/legal/${slug}/`,
        changefreq: "yearly",
        priority: "0.3",
      })),
    ),
  ];

  const currentDate = new Date().toISOString().split("T")[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map((page) => {
    const absolute = new URL(page.url, baseUrl).href;
    const alternates = (supportedLanguages || [])
      .map((l: any) => {
        const href = getLocaleUrlCTM(absolute, l.languageCode);
        return `    <xhtml:link rel="alternate" hreflang="${l.languageCode}" href="${href}" />`;
      })
      .join("\n");
    const xDefault = getLocaleUrlCTM(
      absolute,
      config.settings.multilingual.default_language,
    );
    return `  <url>
    <loc>${absolute}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}" />
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
