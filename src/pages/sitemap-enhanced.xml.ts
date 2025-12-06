import type { APIRoute } from 'astro';
import parseTomlToJson from "@/lib/utils/parseTomlToJson";
import { getLocaleUrlCTM, supportedLanguages } from "@/lib/utils/languageParser.ts";

const config = parseTomlToJson("./src/config/config.toml");

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site?.href || config.site.base_url;
  
  // Priority and frequency settings for different page types
  const pages = [
    // High priority pages
    { url: '', changefreq: 'daily', priority: '1.0' }, // Homepage
    { url: 'pricing/', changefreq: 'weekly', priority: '0.9' },
    { url: 'contact/', changefreq: 'monthly', priority: '0.8' },
    
    // Product pages
    { url: 'ai-red-team/', changefreq: 'weekly', priority: '0.9' },
    
    // Language versions - High priority
    { url: 'en/', changefreq: 'daily', priority: '1.0' },
    { url: 'es/', changefreq: 'daily', priority: '1.0' },
    { url: 'fr/', changefreq: 'daily', priority: '1.0' },
    
    // Pricing in all languages
    { url: 'en/pricing/', changefreq: 'weekly', priority: '0.9' },
    { url: 'es/pricing/', changefreq: 'weekly', priority: '0.9' },
    { url: 'fr/pricing/', changefreq: 'weekly', priority: '0.9' },
    
    // Contact in all languages  
    { url: 'en/contact/', changefreq: 'monthly', priority: '0.8' },
    { url: 'es/contact/', changefreq: 'monthly', priority: '0.8' },
    { url: 'fr/contact/', changefreq: 'monthly', priority: '0.8' },
    
    // Product pages in all languages
    { url: 'en/ai-red-team/', changefreq: 'weekly', priority: '0.9' },
    { url: 'es/ai-red-team/', changefreq: 'weekly', priority: '0.9' },
    { url: 'fr/ai-red-team/', changefreq: 'weekly', priority: '0.9' },
    
    // Blog sections
    { url: 'blog/', changefreq: 'daily', priority: '0.8' },
    { url: 'en/blog/', changefreq: 'daily', priority: '0.8' },
    { url: 'es/blog/', changefreq: 'daily', priority: '0.8' },
    { url: 'fr/blog/', changefreq: 'daily', priority: '0.8' },
    
    // Integration pages
    { url: 'integration/', changefreq: 'weekly', priority: '0.7' },
    { url: 'en/integration/', changefreq: 'weekly', priority: '0.7' },
    { url: 'es/integration/', changefreq: 'weekly', priority: '0.7' },
    { url: 'fr/integration/', changefreq: 'weekly', priority: '0.7' },
    
    // FAQ pages
    { url: 'faq/', changefreq: 'monthly', priority: '0.6' },
    { url: 'en/faq/', changefreq: 'monthly', priority: '0.6' },
    { url: 'es/faq/', changefreq: 'monthly', priority: '0.6' },
    { url: 'fr/faq/', changefreq: 'monthly', priority: '0.6' },
    
    // Legal pages
    { url: 'privacy-policy/', changefreq: 'yearly', priority: '0.3' },
    { url: 'terms-conditions/', changefreq: 'yearly', priority: '0.3' },
    { url: 'security-policy/', changefreq: 'monthly', priority: '0.5' },
    
    // Legal pages in all languages
    { url: 'en/privacy-policy/', changefreq: 'yearly', priority: '0.3' },
    { url: 'es/privacy-policy/', changefreq: 'yearly', priority: '0.3' },
    { url: 'fr/privacy-policy/', changefreq: 'yearly', priority: '0.3' },
    
    { url: 'en/terms-conditions/', changefreq: 'yearly', priority: '0.3' },
    { url: 'es/terms-conditions/', changefreq: 'yearly', priority: '0.3' },
    { url: 'fr/terms-conditions/', changefreq: 'yearly', priority: '0.3' },
    
    { url: 'en/security-policy/', changefreq: 'monthly', priority: '0.5' },
    { url: 'es/security-policy/', changefreq: 'monthly', priority: '0.5' },
    { url: 'fr/security-policy/', changefreq: 'monthly', priority: '0.5' },
  ];
  
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => {
  const absolute = new URL(page.url, baseUrl).href;
  const alternates = (supportedLanguages || []).map((l: any) => {
    const href = getLocaleUrlCTM(absolute, l.languageCode);
    return `    <xhtml:link rel="alternate" hreflang="${l.languageCode}" href="${href}" />`;
  }).join('\n');
  const xDefault = getLocaleUrlCTM(absolute, config.settings.multilingual.default_language);
  return `  <url>
    <loc>${absolute}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}" />
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
    }
  });
};
