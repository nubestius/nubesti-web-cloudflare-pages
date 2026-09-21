import { marked, Renderer } from "marked";
import { slugifyyy } from "@/lib/utils/textConverter";
import type { TocHeading } from "@/types";

export function formatLegalDate(date: string, locale = "en"): string {
  const localeMap: Record<string, string> = {
    en: "en-US",
    es: "es-ES",
    fr: "fr-FR",
    pt: "pt-PT",
  };

  return new Intl.DateTimeFormat(localeMap[locale] || "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export function extractLegalToc(markdown: string): TocHeading[] {
  const headings: TocHeading[] = [];
  const pattern = /^##\s+(.+)$/gm;

  for (const match of markdown.matchAll(pattern)) {
    const text = match[1].replace(/\*\*/g, "").trim();
    headings.push({
      depth: 2,
      text,
      slug: slugifyyy(text),
      subheadings: [],
    });
  }

  return headings;
}

export function renderLegalMarkdown(markdown: string, locale = "en"): string {
  const renderer = new Renderer();

  renderer.heading = function heading({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const slug = slugifyyy(text.replace(/<[^>]+>/g, ""));
    return `<h${depth} id="${slug}">${text}</h${depth}>\n`;
  };

  renderer.link = function link({ href, title, text }) {
    const localizedHref = localizeLegalHref(href, locale);
    const isExternal = localizedHref.startsWith("http");
    const titleAttr = title ? ` title="${title}"` : "";
    const targetAttrs = isExternal
      ? ` target="_blank" rel="noopener noreferrer"`
      : "";
    return `<a href="${localizedHref}"${titleAttr}${targetAttrs}>${text}</a>`;
  };

  return marked.parse(markdown, { renderer, async: false }) as string;
}

function localizeLegalHref(href: string, locale: string): string {
  if (!href.startsWith("/legal")) return href;
  if (!locale || locale === "en") return href;
  return `/${locale}${href}`;
}
