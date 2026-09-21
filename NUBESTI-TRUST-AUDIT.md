# Auditoría de confianza — nubesti.com

Fecha: 2026-09-21  
Alcance: repositorio `nubesti-web-cloudflare-pages` y URLs públicas que genera.  
Regla aplicada: no inventar clientes, métricas, certificaciones, empleados, reviews ni benchmarks.

---

## Inventario de URLs legales antiguas

Estas rutas existieron como páginas de contenido (`src/content/pages/{lang}/privacy-policy.md`, `terms-conditions.md`, `security-policy.md`). El generador `[...lang]/[page].astro` ya las excluye, pero **los markdown siguen en el repo** con Palo Alto, teléfono 555 y `[Nombre del Representante]`. Si alguien reactiva la colección, vuelven a publicarse.

| URL antigua | Destino 301 correcto | Estado al auditar |
| --- | --- | --- |
| `/privacy-policy/` | `/legal/privacy/` | Redirect en `_redirects`; archivo markdown sigue vivo |
| `/terms-conditions/` | `/legal/terms/` | Igual |
| `/security-policy/` | `/legal/security/` | Igual |
| `/en/privacy-policy/` | `/legal/privacy/` | Redirect; EN no usa prefijo por defecto |
| `/en/terms-conditions/` | `/legal/terms/` | Igual |
| `/en/security-policy/` | `/legal/security/` | Igual |
| `/es/privacy-policy/` | `/es/legal/privacy/` | Redirect; **contenido obsoleto en el markdown** |
| `/es/terms-conditions/` | `/es/legal/terms/` | Redirect; **Palo Alto + 555 + SOC 2 certificado** |
| `/es/security-policy/` | `/es/legal/security/` | Redirect |
| `/fr/privacy-policy/` | `/fr/legal/privacy/` | Redirect |
| `/fr/terms-conditions/` | `/fr/legal/terms/` | Redirect |
| `/fr/security-policy/` | `/fr/legal/security/` | Redirect |
| `/pt/privacy-policy/` | `/pt/legal/privacy/` | Redirect (PT no tenía todos los markdown, pero la URL debe quedar cubierta) |
| `/pt/terms-conditions/` | `/pt/legal/terms/` | Cubrir |
| `/pt/security-policy/` | `/pt/legal/security/` | Cubrir |
| `/cookies/` `/cookie-policy/` `/gdpr/` `/refund-policy/` `/refunds/` `/dpa/` `/legal-notice/` `/imprint/` | equivalentes en `/legal/` | **No había redirects** |
| `/privacy/` `/terms/` `/security/` (raíz) | `/legal/privacy/`, `/legal/terms/`, y `/security/` técnico (nuevo) vs `/legal/security/` | Conflicto semántico: `/security/` debe ser Trust técnico; la política legal queda en `/legal/security/` |

Canonical: las páginas del Legal Center ya pueden emitir canonical propio. Las antiguas no deben generarse ni entrar en sitemap.

---

## CRITICAL

### Issue: Páginas legales antiguas con datos corporativos falsos
- **Location:** `src/content/pages/{english,spanish,french}/privacy-policy.md`, `terms-conditions.md`, `security-policy.md`
- **Current behavior:** Afirman que Nubesti es una “corporación de Delaware” en `2345 Yale Street, Suite 200, Palo Alto, CA 94306`, teléfono `+1 (650) 555-0123`, y `[Nombre del Representante]`. Contradicen el Legal Center (Nubesti LLC, Dover DE).
- **Why this damages trust:** Un CISO o abogado compara dos documentos y ve una empresa distinta. Es el fallo más grave de credibilidad legal.
- **Recommended change:** Borrar los markdown, ampliar 301, `noindex`/`Disallow` de las rutas antiguas, quitar de sitemaps y enlaces.
- **Files affected:** `src/content/pages/**/{privacy-policy,terms-conditions,security-policy}.md`, `public/_redirects`, `src/pages/robots.txt.ts`, `src/pages/[...lang]/[page].astro`

### Issue: JSON-LD con teléfono, redes y certificaciones inventadas
- **Location:** `src/layouts/components/seo/AdvancedSchema.astro`, `CybersecuritySchema.astro`, `FAQSchema.astro`, `TestimonialSchema.astro`, `PricingSchema.astro`, `src/config/config.toml` `[seo.schema]`
- **Current behavior:** Teléfono `+57-320-545-1915` (retirado del legal), `foundingDate: 2024` no evidenciado, `sameAs` a Twitter/GitHub no verificados, FAQ schema “Yes, Nubesti supports compliance testing for SOC 2 Type II…”, reviews 4.9/5, SearchAction a `/search` inexistente.
- **Why this damages trust:** Google y un buyer leen structured data como hechos. Afirmar SOC 2 / ISO / 4.9 en schema es peor que en copy.
- **Recommended change:** Un único Organization desde `src/lib/company.ts`. Solo LinkedIn. Sin teléfono. Sin rating. Sin certificaciones.
- **Files affected:** schemas en `src/layouts/components/seo/*`, `Head.astro`, `config.toml`

### Issue: Redes sociales del theme Upstart
- **Location:** `src/config/social.json`
- **Current behavior:** Facebook, Twitter, Instagram y LinkedIn apuntan a perfiles `/upstart`.
- **Why this damages trust:** El footer de una empresa de offensive security enlaza a otra marca. Parece un theme sin terminar.
- **Recommended change:** Solo LinkedIn corporativo real. Desactivar el resto.
- **Files affected:** `src/config/social.json`, `Footer.astro`, `config.toml` `same_as`

### Issue: Claim de 99% de precisión y cobertura absoluta
- **Location:** FAQ EN/ES/FR/PT; menú “Full coverage of MITRE ATT&CK”; pricing “Full MITRE ATT&CK”; features “surgical precision”; `llms.txt`
- **Current behavior:** “over 99% accuracy”, “thousands of assets simultaneously”, “Complete coverage”, “Zero-Day Protection”, “SOC 2 Type II Certified”.
- **Why this damages trust:** Ninguna de esas métricas tiene metodología pública. “Certified” es una afirmación legal.
- **Recommended change:** Sustituir por lenguaje de método (validación de exploitabilidad, mapeo ATT&CK, pruebas más allá de CVE conocidos).
- **Files affected:** `src/content/faq/**`, `src/content/sections/**`, `src/config/menu.*.json`, `src/pages/llms.txt.ts`

### Issue: 4.9/5 sin fuente
- **Location:** `src/content/sections/*/call-to-action.md`, `TestimonialSchema.astro`
- **Current behavior:** “4.9 / 5 — From Enterprise Security Teams” y `aggregateRating` 4.9.
- **Why this damages trust:** Rating fabricado. En enterprise es descalificante.
- **Recommended change:** Eliminar. No sustituir por otra cifra.
- **Files affected:** CTA en 4 idiomas, schema, `CallToAction.astro`

### Issue: Testimonios y logos de clientes no verificables
- **Location:** `src/content/sections/*/testimonial.md`, `customers.md`, `home-banner.md` (“Trusted By Thousands of Companies”, alts Quotient/Catalog/Sisphus/Hourglass/Layers)
- **Current behavior:** Ocho citas con nombres genéricos; logos de theme; “thousands of companies”.
- **Why this damages trust:** Un procurement verifica LinkedIn/empresa y no encuentra autorización. Los alts del theme delatan plantilla.
- **Recommended change:** Quitar testimonios y logos. No inventar reemplazos. Página `/customers/` honesta (vacía de casos hasta que existan).
- **Files affected:** testimonios, customers, homepage, schema

### Issue: FAQ y schema afirman que Nubesti está certificada SOC 2 / ISO 27001
- **Location:** `src/content/faq/*/ -index.md`, `FAQSchema.astro`, pricing Enterprise, `ai-red-team.md`, old legal
- **Current behavior:** “SOC 2 Type II Certified”, “ISO 27001 Compliant”, “Regular Security Audits: Quarterly assessments by independent security firms”.
- **Why this damages trust:** Certificación falsa. Riesgo legal además de reputacional.
- **Recommended change:** Eliminar. Como máximo: controles alineados / informes que el cliente puede usar en *su* auditoría, sin logos de sello.
- **Files affected:** FAQ, pricing, schemas, páginas de producto

---

## HIGH

### Issue: Changelog del theme (Lorem + vídeo de prueba)
- **Location:** `src/content/sections/*/changelog-section.md`
- **Current behavior:** Versión 0.12.5 (2024), “semper libero…”, `/videos/test-video.mp4`.
- **Why this damages trust:** La página que debería demostrar producto vivo demuestra un theme.
- **Recommended change:** Sustituir por cambios reales del producto/sitio. Sin lorem.
- **Files affected:** changelog-section EN/ES/FR/PT

### Issue: Blog francés del theme (Allium Johnson)
- **Location:** `src/content/blog/french/post-1.mdx` … `post-12.mdx`, `src/content/author/*/allium-johnson.md`
- **Current behavior:** Posts de “tendances 2024”, autor ficticio, `draft: false`.
- **Why this damages trust:** Contenido de plantilla indexable en `/fr/blog/`.
- **Recommended change:** `draft: true` o borrar. No presentar autores ficticios.
- **Files affected:** blog FR, author files

### Issue: Integraciones francesas de otro producto
- **Location:** `src/content/integration/french/{zapier,vercel,loom,raycast,fillout,...}.mdx`
- **Current behavior:** El FR lista conectores de un theme SaaS, distintos del EN (Slack, Jira, AWS…).
- **Why this damages trust:** Inconsistencia entre idiomas; logos que Nubesti no necesariamente soporta.
- **Recommended change:** No mostrar conectores no AVAILABLE. Homogeneizar o marcar draft. Confirmar lista real (TODO interno).
- **Files affected:** `src/content/integration/french/*`, homepage `IntegrationSection`

### Issue: Copy de startup / superlativos
- **Location:** homepage, footer i18n, why-us (“Revolutionize”), demo.md (“unprecedented”), menús
- **Current behavior:** cutting-edge, revolutionize, surgical precision, Complete Coverage of Enterprise Security.
- **Why this damages trust:** Suena a landing generada, no a CrowdStrike/Wiz.
- **Recommended change:** Voz precisa: alcance autorizado, validación, evidencia, retest.
- **Files affected:** i18n, sections, menus, demo, llms.txt

### Issue: Homepage no demuestra el producto
- **Location:** `src/pages/[...lang]/index.astro`
- **Current behavior:** Hero → features → why-us → pricing → testimonios → integraciones → FAQ → CTA con 4.9. No hay flujo, finding de laboratorio ni Trust.
- **Why this damages trust:** Capacidades sin evidencia. Un CISO no ve cómo se autoriza o se detiene una prueba.
- **Recommended change:** Reordenar: hero, (sin logos falsos), finding de lab, how-it-works, capacidades honestas, trust, CTA.
- **Files affected:** `index.astro`, nuevas secciones

### Issue: `/how-it-works` es un redirect roto/placeholder a `/demo/`
- **Location:** `src/pages/how-it-works.astro`, `public/_redirects`
- **Current behavior:** HTML de refresh a demo; imports inválidos (`import { Astro } from 'astro'`).
- **Why this damages trust:** Página técnica clave no existe.
- **Recommended change:** Página real `/how-it-works/` + ancla en home.
- **Files affected:** `how-it-works.astro`, redirects, nueva página i18n

### Issue: Datos corporativos repetidos y no canónicos
- **Location:** schemas, i18n copyright “By Nubesti”, legal company, imprint
- **Current behavior:** A veces “Nubesti”, a veces LLC, a veces “Delaware corporation”.
- **Why this damages trust:** Inconsistencia societaria.
- **Recommended change:** `src/lib/company.ts` como única fuente.
- **Files affected:** `company.ts`, `legal/company.ts`, schemas, footer i18n

### Issue: Contacto único genérico
- **Location:** `/contact/`, footer, CTA
- **Current behavior:** Formulario Formsubmit + HubSpot Meetings. No hay canales Security / Privacy / Legal / Vuln visibles.
- **Why this damages trust:** Una empresa de offensive security debe hacer trivial reportar un bug o pedir DPA.
- **Recommended change:** Bloque de contactos `@nubesti.com` en contact, footer y `/trust/`.
- **Files affected:** contact, footer, trust, about

---

## MEDIUM

### Issue: Falta Trust Center y página de seguridad de producto
- **Location:** no existen `/trust/`, `/security/` (producto), `/methodology/`, `/benchmark/`, `/customers/`, `/research/`, `/about/`
- **Current behavior:** La política de seguridad legal está en `/legal/security/`. No hay página CISO de arquitectura.
- **Why this damages trust:** El buyer no tiene un sitio donde ver controles, RoE, KYC y “qué no afirmamos”.
- **Recommended change:** Crear esas rutas con solo hechos ya documentados en legal. Lo no implementado va a TODO, no a la web.
- **Files affected:** nuevas páginas bajo `src/pages/[...lang]/`

### Issue: `/demo/` vende breakthrough sin lab etiquetado
- **Location:** `src/content/pages/*/demo.md`
- **Current behavior:** Embed Supademo + copy “unprecedented protection”.
- **Why this damages trust:** No queda claro que un finding no es de un cliente real.
- **Recommended change:** Finding sanitizado “Nubesti Security Lab” + embed si es demo real del producto.
- **Files affected:** demo pages, nueva sección homepage

### Issue: Headers CSP permisivos (`unsafe-eval`, `connect-src https:`)
- **Location:** `public/_headers`, `astro.config.mjs`
- **Current behavior:** Hay HSTS, nosniff, DENY, Permissions-Policy. CSP permite `'unsafe-inline' 'unsafe-eval'` y `connect-src https:`.
- **Why this damages trust:** Una web de cybersecurity con CSP laxo se audita mal. No romper HubSpot/Supademo/Intercom/Cloudflare.
- **Recommended change:** Endurecer sin romper: quitar `unsafe-eval` si el build lo permite; acotar `connect-src`; documentar excepciones.
- **Files affected:** `public/_headers`, `astro.config.mjs`

### Issue: Mailchimp del theme en footer
- **Location:** `config.toml` `settings.subscription.form_action` → `gmail.us11.list-manage.com` (lista genérica)
- **Current behavior:** Newsletter posiblemente no es de Nubesti.
- **Why this damages trust:** Datos de email a una lista ajena / placeholder.
- **Recommended change:** Desactivar hasta confirmar lista propia. Ya está en subprocessors.
- **Files affected:** `config.toml`, footer, legal cookies/subprocessors si se apaga

### Issue: Sitemap enhanced incompleto e incluye `/en/` que no es canónico
- **Location:** `src/pages/sitemap-enhanced.xml.ts`
- **Current behavior:** Lista `/en/` aunque el default no usa prefijo. Falta PT en varios bloques. No incluye trust/methodology.
- **Why this damages trust:** Duplicados y omisiones.
- **Recommended change:** Generar desde rutas reales + idiomas soportados.
- **Files affected:** sitemaps, `robots.txt.ts`

### Issue: robots.txt excesivo y contradictorio
- **Location:** `src/pages/robots.txt.ts`
- **Current behavior:** `Disallow: /*.xml$` y `/*.txt$` puede chocar con sitemaps; bloquea Ahrefs; no bloquea legales viejos.
- **Why this damages trust:** Señal de SEO template, no de un programa de seguridad.
- **Recommended change:** Robots simple: allow, disallow admin/api, disallow legales legacy, sitemap.
- **Files affected:** `robots.txt.ts`

---

## LOW

### Issue: Badge “NEW” en Contact y copy “Faq”
- **Location:** `menu.*.json`
- **Current behavior:** Contacto con badge de startup; “Faq” sin mayúsculas consistentes.
- **Recommended change:** Quitar badge; “FAQ”; añadir Trust / Methodology al nav.
- **Files affected:** menus

### Issue: Console.log de debug en homepage
- **Location:** `src/pages/[...lang]/index.astro`
- **Current behavior:** `console.log("INDEX.ASTRO - lang:", lang)`
- **Why this damages trust:** Descuido de producción.
- **Recommended change:** Eliminar.
- **Files affected:** `index.astro`

### Issue: Preconnect a Google Fonts aunque el legal dice minimizar terceros
- **Location:** `Head.astro`
- **Recommended change:** Confirmar si las fonts son self-hosted; si sí, quitar preconnect.
- **Files affected:** `Head.astro`

### Issue: `llms.txt` y `.well-known/ai-*` repiten claims de compliance
- **Location:** `src/pages/llms.txt.ts`, `ai-site-info.json.ts`, `ai-sitemap.json.ts`
- **Recommended change:** Alinear con copy honesto y nuevas URLs.
- **Files affected:** esos endpoints

---

## Qué se puede corregir sin inventar (implementación)

1. Borrar legales antiguos + 301 + robots + sitemap.
2. Fuente única `COMPANY`.
3. Quitar placeholders, 4.9, testimonios, logos theme, redes Upstart, Allium Johnson indexado, changelog lorem.
4. Reformular claims.
5. Crear `/trust/`, `/security/`, `/methodology/`, `/benchmark/`, `/customers/`, `/research/`, `/about/`, `/how-it-works/`, `/docs/` (índice honesto).
6. Finding de laboratorio etiquetado.
7. Footer y contacto empresarial.
8. Schema Organization real.
9. Solo LinkedIn.

## Qué no se implementa en público (va a NUBESTI-TRUST-TODO.md)

Certificaciones, rating, clientes con logo, case studies, benchmark numérico, leadership, status.nubesti.com, docs.nubesti.com completo, lista AVAILABLE vs PLANNED de integraciones, arquitectura interna no documentada (dónde corren los agentes, retención exacta de evidencias, etc.).
