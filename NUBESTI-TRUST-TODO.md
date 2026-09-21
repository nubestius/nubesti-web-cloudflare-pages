# NUBESTI-TRUST-TODO

Información real que hace falta **antes** de poder mostrarla en público. No rellenar con placeholders.

## Clientes y prueba social

- Lista de clientes que autorizan logo, nombre, cargo y cita (o texto NDA explícito).
- Case studies con números que el cliente firme.
- Confirmación de que Tecnoayudas / Escala / Hostiva / Inspira no deben volver a usarse como “trusted by”.

## Certificaciones y ratings

- SOC 2 / ISO 27001 / PCI / HIPAA / FedRAMP: estado real (ninguno / readiness / certificado + fecha + alcance).
- Si hay reviews verificadas: número, fuente y URL. Hasta entonces no hay 4.9.

## Producto (AVAILABLE / BETA / PLANNED)

Clasificar cada conector (Slack, Jira, GitHub, AWS, Azure, GCP, Splunk, ServiceNow, PagerDuty, Teams, Discord, email, DigitalOcean). Hoy el sitio **no** los presenta como todos en producción.
- On-prem, air-gap, private cloud: ¿existen?
- Auto-PR / parches IaC: ¿AVAILABLE o draft-only?
- Risk Index 0–10: ¿publicado en producto?
- Trial: legal dice 14 días; no volver a afirmar 30.

## Arquitectura (página /security/)

Para un briefing CISO bajo NDA, documentar internamente:

- Dónde se ejecutan los agentes
- Aislamiento de workloads y tenants
- Almacén de secretos y si Nubesti ve credenciales de objetivo
- Retención exacta de evidencias
- Rate limiting real
- Kill switch / halt: comportamiento medido
- Borrado de cuenta paso a paso

## Presencia

- Confirmar que `https://www.linkedin.com/company/nubesti` es el perfil corporativo activo.
- GitHub org real (`nubestius` vs `nubesti`) — no enlazar repos vacíos.
- Lista Mailchimp propia si se reactiva el footer.
- `docs.nubesti.com` y `status.nubesti.com` cuando existan (API, dashboard, motor, auth, webhooks, historial de incidentes).

## Research / benchmark

- Autores reales y fechas para `/research/`.
- Dataset de laboratorio + metodología antes de publicar precisión/recall.

## Leadership

- Personas reales (nombre, cargo, LinkedIn opcional) que acepten aparecer en `/about/`.

## CSP / performance

- Quitar `'unsafe-eval'` del CSP si Preline/AOS lo permiten.
- Acotar `connect-src` (hoy `https:`).
- Medir LCP/CLS/INP en producción tras el recorte de trackers.
