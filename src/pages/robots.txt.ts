import parseTomlToJson from "@/lib/utils/parseTomlToJson";
import type { APIRoute } from "astro";
const config = parseTomlToJson("./src/config/config.toml");

const { enable, disallow } = config.seo.robots_txt;

const getRobotsTxt = (
  sitemapURL: URL,
) => `# Robots.txt file for Nubesti - AI-Powered Cybersecurity Platform
# SEO-optimized configuration for better search engine indexing
# Last updated: ${new Date().toISOString().split('T')[0]}

User-agent: *

# Allowed pages - Prioritize important content for SEO
Allow: /
Allow: /en/
Allow: /es/ 
Allow: /fr/
Allow: /pt/
Allow: /pricing/
Allow: /contact/
Allow: /blog/
Allow: /integration/
Allow: /ai-red-team/
Allow: /faq/
Allow: /changelog/

# Explicitly allow important resources
Allow: /images/
Allow: /fonts/
Allow: /favicon.ico
Allow: /site.webmanifest
Allow: /sitemap*.xml
Allow: /robots.txt
Allow: /.well-known/
Allow: /.well-known/ai-site-info.json
Allow: /.well-known/ai-sitemap.json

# Security - Disallow sensitive paths
Disallow: /admin/
Disallow: /api/
Disallow: /.env
Disallow: /config/
Disallow: /logs/
Disallow: /backup/
Disallow: /uploads/
Disallow: /temp/
Disallow: /.git/
Disallow: /.svn/
Disallow: /node_modules/
Disallow: /_astro/
Disallow: /src/
Disallow: /dist/
Disallow: /.vscode/
Disallow: /.vercel/
Disallow: /private/

# SEO - Disallow duplicate content and low-value pages
Disallow: /search?
Disallow: /*?utm_*
Disallow: /*?ref=*
Disallow: /*?fbclid=*
Disallow: /*?gclid=*
Disallow: /*?src=*
Disallow: /*?campaign=*
Disallow: /404/
Disallow: /draft/
Disallow: /test/
Disallow: /staging/
Disallow: /dev/
Disallow: /preview/
Disallow: /*.json$
Disallow: /*.xml$ 
Disallow: /*.txt$
Disallow: /wp-admin/
Disallow: /wp-content/
Disallow: /wp-includes/
Disallow: /cgi-bin/

# Disallowed pages from configuration
${disallow.map((item: string) => `Disallow: ${item}`).join("\n")}

# Special crawlers with specific rules
User-agent: Googlebot
Allow: /
Crawl-delay: 1
Request-rate: 1/10s

User-agent: Bingbot  
Allow: /
Crawl-delay: 1
Request-rate: 1/10s

User-agent: Slurp
Allow: /
Crawl-delay: 2

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

User-agent: facebookexternalhit
Allow: /
# No crawl delay for social media bots

User-agent: Twitterbot
Allow: /
# No crawl delay for social media bots

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

User-agent: TelegramBot
Allow: /

# Block aggressive crawlers and scrapers
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: BLEXBot
Disallow: /

User-agent: SemrushBot
Crawl-delay: 10
Disallow: /api/

User-agent: MauiBot
Disallow: /

User-agent: SiteAuditBot
Disallow: /

User-agent: SpiderBot
Disallow: /

User-agent: DigExt
Disallow: /

User-agent: CCBot
Disallow: /

# AI Training bots - Strategic access for LLMs
User-agent: ChatGPT-User
Allow: /
Allow: /blog/
Allow: /faq/
Allow: /pricing/
Allow: /integration/
Allow: /ai-red-team/
Allow: /changelog/
Allow: /en/
Allow: /es/
Allow: /fr/
Disallow: /contact/
Disallow: /admin/
Disallow: /api/
Disallow: /private/

User-agent: GPTBot
Allow: /
Allow: /blog/
Allow: /faq/
Allow: /pricing/
Allow: /integration/
Allow: /ai-red-team/
Allow: /changelog/
Allow: /en/
Allow: /es/
Allow: /fr/
Disallow: /contact/
Disallow: /admin/
Disallow: /api/
Disallow: /private/

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude
Allow: /

User-agent: Bard
Allow: /
Allow: /blog/
Allow: /faq/
Allow: /pricing/
Allow: /integration/
Allow: /ai-red-team/
Disallow: /contact/
Disallow: /admin/

User-agent: CCBot
Allow: /blog/
Allow: /faq/
Allow: /pricing/
Allow: /integration/
Allow: /ai-red-team/
Allow: /changelog/
Disallow: /contact/
Disallow: /admin/
Disallow: /api/

User-agent: Google-Extended
Allow: /blog/
Allow: /faq/
Allow: /pricing/
Allow: /integration/
Disallow: /contact/
Disallow: /admin/

User-agent: PerplexityBot
Allow: /
Allow: /blog/
Allow: /faq/
Allow: /pricing/
Allow: /integration/
Allow: /ai-red-team/
Disallow: /contact/
Disallow: /admin/

User-agent: YouBot
Allow: /blog/
Allow: /faq/
Allow: /pricing/
Allow: /integration/
Disallow: /contact/
Disallow: /admin/

# Crawl delay for better server performance and SEO
Crawl-delay: 1

# Host directive for preferred domain (if applicable)
# Host: nubesti.com

# Clean-param directive for better URL handling
# Clean-param: utm_source&utm_medium&utm_campaign&utm_term&utm_content

# Sitemap locations for search engines - Multiple sitemaps for comprehensive coverage
Sitemap: ${sitemapURL.href}
Sitemap: ${new URL("sitemap.xml", sitemapURL.origin).href}
Sitemap: ${new URL("sitemap-enhanced.xml", sitemapURL.origin).href}

# AI-specific resources for better analysis and understanding
# AI Site Information: ${new URL(".well-known/ai-site-info.json", sitemapURL.origin).href}
# AI Sitemap: ${new URL(".well-known/ai-sitemap.json", sitemapURL.origin).href}

# Additional metadata for SEO
# Generator: Astro
# Technology: AI-Powered Cybersecurity Platform
# Industry: Information Security, Penetration Testing, Red Team Operations
# Languages: English, Spanish, French
# Geographic Coverage: Global
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return enable
    ? new Response(getRobotsTxt(sitemapURL))
    : new Response(null, { status: 404 });
};
