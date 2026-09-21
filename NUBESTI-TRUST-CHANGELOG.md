# NUBESTI-TRUST-CHANGELOG

Cambios de esta pasada de credibilidad (2026-09-21).

## Eliminado

- Markdown legales antiguos (`privacy-policy`, `terms-conditions`, `security-policy` en EN/ES/FR) con Palo Alto, 2345 Yale Street, teléfono 555 y `[Nombre del Representante]`.
- Testimonios genéricos de la homepage (sección desactivada; schema de reviews 4.9 quitado del `<head>`).
- Carrusel “Trusted by thousands” / logos de theme (Quotient, Catalog, Sisphus…).
- Rating 4.9/5 (EN/ES/PT) y 4.8/5 “12000+ avis” (FR).
- Claims públicos de 99% accuracy, Full MITRE ATT&CK coverage, Zero-Day Protection, SOC 2 Type II Certified / ISO 27001 Compliant.
- Redes Facebook / Twitter / Instagram / LinkedIn que apuntaban a **Upstart**.
- Newsletter Mailchimp del theme (formulario desactivado).
- Página stub `/how-it-works` que redirigía a `/demo/` con HTML placeholder.
- Posts FR de Allium Johnson marcados `draft: true`.
- Integraciones FR de theme (Zapier, Loom, Raycast, Vercel, etc.) marcadas `draft: true`.
- Changelog Lorem + vídeo de prueba.
- Copy FR de plantilla “Upstart” (why-us, features, precios $10/$20, lorem).
- Teléfono +57 y `hi@nubesti.com` / `example@gmail.com` en contacto.
- Schema de testimonios con 4.9 y citas Tecnoayudas / Escala / Hostiva (componente vacío).
- Página producto AI Red Team con 10.000 scans concurrentes, 50+ datacenters y “cobertura completa”.
- Comparativa de precios “50+ / 300+ técnicas” y “cobertura completa”.

## Redirigido (301)

Inventario en `NUBESTI-TRUST-AUDIT.md` y reglas en `public/_redirects`:

- `/privacy-policy/`, `/terms-conditions/`, `/security-policy/` y variantes `en|es|fr|pt` → Legal Center.
- `/privacy/`, `/terms/`, `/cookies/`, `/cookie-policy/`, `/gdpr/`, `/refund-policy/`, `/dpa/`, `/legal-notice/`, `/imprint/`, `/subprocessors/` → slugs `/legal/...`.

`robots.txt` hace `Disallow` de las rutas legales retiradas. Sitemap enhanced ya no lista `/en/` ni las políticas viejas.

## Añadido

| Ruta | Rol |
| --- | --- |
| `/trust/` | Trust Center |
| `/security/` | Seguridad de plataforma (CISO); distinto de `/legal/security/` |
| `/methodology/` | Cómo se prueba, sin métricas inventadas |
| `/how-it-works/` | Seis pasos + finding de lab |
| `/demo/` | Lab etiquetado + walkthrough |
| `/benchmark/` | “Aún no hay números” |
| `/customers/` | Sin casos hasta autorización |
| `/research/` | Índice vacío honesto |
| `/about/` | Nubesti LLC, sin equipo ficticio |
| `/docs/` | Índice (portal + legal + metodología) |
| `/changelog/` | Cambios reales del sitio/legal |

Homepage: hero sobrio → lab finding → how it works → capacidades → precios → trust strip → FAQ honesta → CTA sin estrellas.

Contacto: canales Security / Sales / Vuln / Privacy / Legal.

## Modificado

- Fuente única `src/lib/company.ts` (Nubesti LLC, Dover DE, emails `@nubesti.com`).
- JSON-LD Organization: `legalName`, dirección real, `sameAs` solo LinkedIn. Sin teléfono, sin foundingDate inventado, sin SearchAction a `/search`, sin FAQ de compliance falsa.
- Footer: Product / Trust / Legal; copyright **Nubesti LLC**; solo LinkedIn.
- Menús EN/ES/FR/PT: Trust y Methodology; badge “NEW” apagado; mega menú sin “cobertura completa”.
- Home y `/ai-red-team/` FR/PT alineados con el copy honesto EN/ES.
- Contacto: solo emails oficiales y LinkedIn. Fallback del formulario a `alexis@nubesti.com`.
- `llms.txt` y `sitemap-enhanced.xml` alineados.
- CSP/headers existentes se mantienen (HSTS, nosniff, DENY, Permissions-Policy). No se apretó `unsafe-eval` en este paso para no romper Preline.

## No inventado (a propósito)

Clientes, logos, reviews, certificaciones, benchmark, leadership, status page, docs.nubesti.com, métricas de precisión.
