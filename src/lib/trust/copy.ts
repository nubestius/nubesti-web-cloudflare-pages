import { COMPANY } from "@/lib/company";
import type {
  LabFindingCopy,
  TrustBundle,
  TrustLocale,
  TrustPageCopy,
  TrustPageId,
} from "./index";

function localeOf(locale?: string): TrustLocale {
  const code = (locale || "en").split("-")[0];
  if (code === "es" || code === "fr" || code === "pt") return code;
  return "en";
}

const labShared = {
  asset: "api.lab.nubesti.test",
  finding: "Broken object-level authorization",
  severity: "Critical",
  mitre: "T1190 — Exploit Public-Facing Application",
  evidence: "Request / Response pair from a controlled replay against the lab API",
  exploitability: "Validated in the lab (object ID swapped; another tenant record returned)",
  impact: "Unauthorized read of another account’s records in the lab dataset",
  remediation: "Enforce object-level authorization on every record access; add regression tests",
  status: "Fixed in lab build 2026.09",
  retest: "Passed",
};

const pagesEn = (): Record<TrustPageId, TrustPageCopy> => ({
  trust: {
    id: "trust",
    eyebrow: "Trust Center",
    title: "How Nubesti treats authorization, data, and platform security.",
    intro:
      "This page is the public index for security, privacy, and responsible offensive-testing controls. It links to binding legal documents. It does not claim certifications Nubesti does not hold.",
    meta_title: "Trust Center — Nubesti",
    meta_description:
      "Nubesti Trust Center: platform security, privacy, KYC, authorization, and vulnerability disclosure. No implied SOC 2 or ISO certification.",
    crumb: "Trust",
    sections: [
      {
        heading: "Security",
        body: `Production marketing and application traffic is served over TLS through Cloudflare. Legal documents describe encryption in transit, encryption at rest where we control the store, unique administrative identities with MFA, role-based access in the product, and security-relevant logging.

Details that belong in a CISO review: [Platform security](/security/). Binding language: [Security overview](/legal/security/).`,
      },
      {
        heading: "Privacy",
        body: `Account, billing, website, and support data are handled as described in the [Privacy Policy](/legal/privacy/). When we process customer personal data as a processor, the [DPA](/legal/dpa/) applies. Current subprocessors: [Subprocessors](/legal/subprocessors/). Cookie use: [Cookie Policy](/legal/cookies/).

Privacy requests: [${COMPANY.emails.privacy}](mailto:${COMPANY.emails.privacy}) · [${COMPANY.emails.dpo}](mailto:${COMPANY.emails.dpo}).`,
      },
      {
        heading: "Responsible security",
        body: `Report vulnerabilities in **Nubesti systems** (not customer targets) under the [Vulnerability Disclosure Policy](/legal/vulnerability-disclosure/). Email [${COMPANY.emails.security}](mailto:${COMPANY.emails.security}). Canonical researcher file: [/.well-known/security.txt](https://nubesti.com/.well-known/security.txt).`,
      },
      {
        heading: "Offensive-security safety",
        body: `Paid access and test launches require KYC. Tests run only against assets the customer authorizes and owns or has written permission to test. Rules of Engagement, an authorization letter, and an acceptable-use policy apply. You can stop in-progress jobs from the portal.

See [KYC](/legal/kyc/), [Authorization](/legal/authorization/), [Rules of Engagement](/legal/engagement/), and [Acceptable Use](/legal/acceptable-use/).`,
      },
      {
        heading: "Compliance posture",
        body: `Nubesti is **not** presenting SOC 2, ISO 27001, PCI DSS, HIPAA, or FedRAMP as current certifications. Controls are described in legal documents so customers can map them to *their* programs. Formal reports, if they exist later, will be stated exactly and dated.`,
      },
    ],
  },
  security: {
    id: "security",
    eyebrow: "Platform security",
    title: "What we can say about how Nubesti is run — and what we will not invent.",
    intro:
      "This page is for CISOs and security engineers. It repeats only controls already stated in our legal security materials or that are observable on this site. Internal architecture that is not published stays unpublished.",
    meta_title: "Platform security — Nubesti",
    meta_description:
      "Nubesti platform security for CISOs: encryption, access control, KYC, authorization, logging, and what we do not disclose publicly.",
    crumb: "Security",
    sections: [
      {
        heading: "Where this sits",
        body: `The marketing site and customer portal are separate from customer-designated targets. Binding overview: [Security overview](/legal/security/). Trust index: [Trust Center](/trust/).`,
      },
      {
        heading: "What we state today",
        body: `- TLS 1.2+ on production web properties, served through Cloudflare, with security headers
- Data in transit encrypted with TLS
- Data at rest encrypted with industry-standard algorithms (AES-256 where we control the store)
- Administrative access uses unique identities and multi-factor authentication
- Role-based access in the product so customers can limit who launches tests or sees reports
- Logging of security-relevant events for investigation
- Backups of platform configuration and workspace data, access-restricted, retained for a limited rotation
- Customer Personal Data deleted from production within 60 days after termination, except rotating encrypted backups or legal holds ([DPA](/legal/dpa/))`,
      },
      {
        heading: "Authorization and scope",
        body: `Tests require a designated scope, asset ownership or written owner permission, and completed paid KYC. We design the platform so authorized testing of your systems does not become unauthorized access to anyone else’s. Tenant isolation, least privilege, and auditability are baseline *requirements* — not a certification claim.

Emergency contact and revocation are described in the [authorization letter](/legal/authorization/). Running jobs are halted as soon as reasonably possible after you stop them in the portal.`,
      },
      {
        heading: "What we do not publish here",
        body: `We do **not** publish a full agent-runtime diagram, secret-store internals, exact evidence retention schedules beyond the DPA window, or a claim that Nubesti never holds credentials. Those topics belong in a scoped architecture review.

Email [${COMPANY.emails.security}](mailto:${COMPANY.emails.security}) for a written briefing under NDA. If a control is not listed above, assume it is not a public claim.`,
      },
      {
        heading: "Human accountability",
        body: `Autonomous testing still runs under Rules of Engagement, customer authorization, KYC, and acceptable use. Platform abuse and unauthorized targeting can be reported to [${COMPANY.emails.security}](mailto:${COMPANY.emails.security}).`,
      },
    ],
  },
  methodology: {
    id: "methodology",
    eyebrow: "Methodology",
    title: "How autonomous testing is supposed to work.",
    intro:
      "This describes the intended testing loop. It is not a benchmark and it does not claim complete ATT&CK coverage or a published accuracy rate.",
    meta_title: "Testing methodology — Nubesti",
    meta_description:
      "Nubesti testing methodology: authorized scope, reconnaissance, validation, ATT&CK/OWASP mapping, evidence, remediation, and retest.",
    crumb: "Methodology",
    sections: [
      {
        heading: "Autonomous testing",
        body: `After a customer verifies assets and authorization, Nubesti can run repeatable test playbooks against that scope without waiting for a quarterly manual pentest. Humans still define scope, pay for KYC, can halt jobs, and decide what to patch.`,
      },
      {
        heading: "The loop",
        body: `1. **Authorized scope** — only listed assets  
2. **Reconnaissance** — map the authorized attack surface  
3. **Testing and validation** — probe exploitable paths; prefer evidence over scanner noise  
4. **Evidence** — findings should include technical context a reviewer can replay or reject  
5. **Remediation** — recommendations or draft fixes when the product can produce them; drafts are a starting point, not a guarantee  
6. **Retest** — the same finding can be tested again after a change`,
      },
      {
        heading: "Mapping, not “full coverage”",
        body: `Workflows can be mapped to MITRE ATT&CK techniques and to OWASP risk classes. Mapping is not the same as exercising every technique in the matrix. Reports should show which mapped techniques ran and which did not.`,
      },
      {
        heading: "Severity",
        body: `Severity is contextual. Where a Risk Index or CVSS-like score appears in the product, treat it as decision support for a change window — not as a legal rating or a promise of completeness.`,
      },
      {
        heading: "False positives",
        body: `We aim to reduce noise with exploitability checks and evidence. We do not claim zero false positives or a public 99% accuracy figure.`,
      },
    ],
  },
  benchmark: {
    id: "benchmark",
    eyebrow: "Benchmark",
    title: "A public, reproducible benchmark is not published yet.",
    intro:
      "We will not invent precision, recall, or “vulnerabilities found” numbers. This page exists so the URL is honest when those results exist.",
    meta_title: "Benchmark — Nubesti",
    meta_description:
      "Nubesti public benchmark status. No invented precision, recall, or vulnerability counts.",
    crumb: "Benchmark",
    sections: [
      {
        heading: "Intent",
        body: `A useful benchmark would state target count, true positives, false positives, false negatives, precision, recall, exploit-validation rate, and time-to-detection — plus enough methodology for someone else to reproduce the run.`,
      },
      {
        heading: "Current status",
        body: `**No public dataset or score is available.** When we publish one, it will use labeled lab targets (Nubesti Security Lab), not unnamed “enterprise customers,” and it will include the methodology next to the numbers.`,
      },
    ],
  },
  customers: {
    id: "customers",
    eyebrow: "Customers",
    title: "Named stories only when we can authorize them.",
    intro:
      "We do not list companies, logos, or quotes here unless the customer has approved the use. There are no public case studies on this page today.",
    meta_title: "Customers — Nubesti",
    meta_description:
      "Nubesti customer stories. Named case studies are published only with authorization.",
    crumb: "Customers",
    sections: [
      {
        heading: "What a story will include",
        body: `Who they are (or an NDA-safe description), the security problem, environment (web / API / cloud), how Nubesti was used, and results that can be evidenced. Quotes will be attributed to a real role.`,
      },
      {
        heading: "If identity must stay private",
        body: `We will say so plainly, for example: “Security team at a European SaaS company. Customer identity withheld under NDA.” We will not invent a stand-in name or logo.`,
      },
      {
        heading: "Case studies",
        body: `Individual stories will live at \`/customers/[slug]/\` when they exist. That folder is empty on purpose.`,
      },
    ],
  },
  research: {
    id: "research",
    eyebrow: "Research",
    title: "Nubesti Labs publishes when there is original work to show.",
    intro:
      "This is the index for future research notes, CVEs, and lab write-ups. Nothing is listed yet. We will not fill it with recycled theme posts.",
    meta_title: "Research — Nubesti",
    meta_description:
      "Nubesti Labs research index. No placeholder papers or invented CVEs.",
    crumb: "Research",
    sections: [
      {
        heading: "What belongs here",
        body: `Vulnerability research, attack-technique notes, AI-security write-ups, and later benchmark methods — each with a date and an author we can stand behind.`,
      },
    ],
  },
  about: {
    id: "about",
    eyebrow: "Company",
    title: `${COMPANY.legalName}`,
    intro: `${COMPANY.legalName} is a ${COMPANY.entityType} formed in ${COMPANY.jurisdiction}. We build autonomous security-testing software for authorized assets.`,
    meta_title: "About — Nubesti LLC",
    meta_description:
      "About Nubesti LLC: Delaware limited liability company providing autonomous security testing.",
    crumb: "About",
    sections: [
      {
        heading: "What we do",
        body: `Continuous autonomous testing against a customer-defined scope, with evidence, remediation guidance, and retest. Access is gated by paid KYC.`,
      },
      {
        heading: "Registered office",
        body: `${COMPANY.addressInline}`,
      },
      {
        heading: "Leadership",
        body: `We do not publish a team grid of stock photos or invented titles. Named leadership will appear here only for real people who agree to be listed.`,
      },
      {
        heading: "Contact",
        body: `Legal: [${COMPANY.emails.legal}](mailto:${COMPANY.emails.legal})  
Privacy: [${COMPANY.emails.privacy}](mailto:${COMPANY.emails.privacy})  
Security: [${COMPANY.emails.security}](mailto:${COMPANY.emails.security})  
Sales: [${COMPANY.emails.sales}](mailto:${COMPANY.emails.sales})  
Portal: [${COMPANY.portal}](${COMPANY.portal})`,
      },
    ],
  },
  docs: {
    id: "docs",
    eyebrow: "Documentation",
    title: "Start with the portal, the methodology, and the legal set.",
    intro:
      "A standalone docs host is not published yet. These are the documents that exist today.",
    meta_title: "Documentation — Nubesti",
    meta_description:
      "Nubesti documentation index: portal, methodology, trust, and legal policies.",
    crumb: "Docs",
    sections: [
      {
        heading: "Product",
        body: `Operational guides live in the [customer portal](${COMPANY.portal}) after you sign in. Marketing-site references: [How it works](/how-it-works/), [Methodology](/methodology/), [See a lab finding](/demo/).`,
      },
      {
        heading: "Trust and legal",
        body: `[Trust Center](/trust/) · [Platform security](/security/) · [Legal center](/legal/) · [KYC](/legal/kyc/) · [Authorization](/legal/authorization/)`,
      },
      {
        heading: "Not here yet",
        body: `Public API reference, webhook catalog, and a full RBAC guide will be linked when they are written. They are not listed as available.`,
      },
    ],
  },
  "how-it-works": {
    id: "how-it-works",
    eyebrow: "How it works",
    title: "Authorized scope, then a repeatable test loop.",
    intro:
      "Six steps. No implied completeness. Humans keep authorization, halt, and patch decisions.",
    meta_title: "How it works — Nubesti",
    meta_description:
      "How Nubesti autonomous testing works: authorized scope, reconnaissance, validation, evidence, remediation, retest.",
    crumb: "How it works",
    sections: [
      {
        heading: "Before a test starts",
        body: `Complete paid [KYC](/legal/kyc/), designate assets, and confirm ownership or written permission. [Authorization](/legal/authorization/) and [Rules of Engagement](/legal/engagement/) apply.`,
      },
      {
        heading: "See a finding",
        body: `The homepage and [demo](/demo/) show a **Nubesti Security Lab** example. It is not a customer report.`,
      },
    ],
  },
});

const howEn = {
  eyebrow: "How it works",
  title: "Authorized scope, then evidence.",
  intro: "A test does not start because a form was filled. It starts when the customer can show they may test the asset.",
  steps: [
    { step: "01", title: "Define authorized scope", body: "The customer verifies assets and authorization. KYC must be complete and paid." },
    { step: "02", title: "Autonomous reconnaissance", body: "Nubesti maps the authorized attack surface — not the open internet." },
    { step: "03", title: "Attack simulation and validation", body: "Agents test exploitable paths inside that scope and keep evidence." },
    { step: "04", title: "Evidence", body: "Each finding should include technical context a reviewer can accept or reject." },
    { step: "05", title: "Remediation", body: "Recommendations or draft fixes when available. Drafts are a starting point." },
    { step: "06", title: "Retest", body: "The same finding can be tested again after a change." },
  ],
};

const labEn: LabFindingCopy = {
  eyebrow: "Nubesti Security Lab",
  title: "See a finding — clearly fictional.",
  notice:
    "This record is from a controlled lab application. It is not a customer, not a production hostname, and not a disclosed vulnerability in a third party.",
  ...labShared,
};

const channelsEn = [
  { title: "Talk to Security", detail: "Architecture reviews, platform incidents, abuse of tests.", href: `mailto:${COMPANY.emails.security}`, label: COMPANY.emails.security },
  { title: "Talk to Sales", detail: "Plans, KYC onboarding, and a live walkthrough.", href: COMPANY.demoMeetings, label: "Book a meeting" },
  { title: "Report a Vulnerability", detail: "Issues in Nubesti systems only — not customer targets.", href: "/legal/vulnerability-disclosure/", label: "Disclosure policy" },
  { title: "Privacy request", detail: "Access, deletion, DPA questions.", href: `mailto:${COMPANY.emails.privacy}`, label: COMPANY.emails.privacy },
  { title: "Legal", detail: "Contracts, authorization letters, notices.", href: `mailto:${COMPANY.emails.legal}`, label: COMPANY.emails.legal },
];

function pagesEs(): Record<TrustPageId, TrustPageCopy> {
  return {
    trust: {
      id: "trust",
      eyebrow: "Centro de confianza",
      title: "Cómo Nubesti trata la autorización, los datos y la seguridad de la plataforma.",
      intro:
        "Índice público de seguridad, privacidad y controles de pruebas ofensivas. Enlaza documentos legales vinculantes. No afirma certificaciones que Nubesti no tiene.",
      meta_title: "Centro de confianza — Nubesti",
      meta_description:
        "Centro de confianza de Nubesti: seguridad, privacidad, KYC, autorización y divulgación de vulnerabilidades. Sin certificación SOC 2 o ISO implícita.",
      crumb: "Confianza",
      sections: [
        {
          heading: "Seguridad",
          body: `El tráfico de marketing y de la aplicación va por TLS a través de Cloudflare. Los documentos legales describen cifrado en tránsito, cifrado en reposo donde controlamos el almacén, identidades administrativas únicas con MFA, RBAC en el producto y registro de eventos de seguridad.

Para una revisión CISO: [Seguridad de plataforma](/security/). Texto vinculante: [Resumen de seguridad](/legal/security/).`,
        },
        {
          heading: "Privacidad",
          body: `[Política de privacidad](/legal/privacy/) · [DPA](/legal/dpa/) · [Subprocesadores](/legal/subprocessors/) · [Cookies](/legal/cookies/).

Solicitudes: [${COMPANY.emails.privacy}](mailto:${COMPANY.emails.privacy}) · [${COMPANY.emails.dpo}](mailto:${COMPANY.emails.dpo}).`,
        },
        {
          heading: "Seguridad responsable",
          body: `Reporte fallos en **sistemas Nubesti** (no en objetivos de clientes): [Divulgación de vulnerabilidades](/legal/vulnerability-disclosure/). [${COMPANY.emails.security}](mailto:${COMPANY.emails.security}) · [security.txt](https://nubesti.com/.well-known/security.txt).`,
        },
        {
          heading: "Seguridad de las pruebas ofensivas",
          body: `El acceso de pago y el lanzamiento de pruebas exigen KYC. Solo se prueban activos autorizados y propios o con permiso escrito. Aplican reglas de engagement, carta de autorización y uso aceptable. Puede detener trabajos en el portal.

[KYC](/legal/kyc/) · [Autorización](/legal/authorization/) · [Engagement](/legal/engagement/) · [Uso aceptable](/legal/acceptable-use/).`,
        },
        {
          heading: "Postura de cumplimiento",
          body: `Nubesti **no** presenta SOC 2, ISO 27001, PCI DSS, HIPAA ni FedRAMP como certificaciones vigentes. Los controles están descritos para que el cliente los mapee a *su* programa.`,
        },
      ],
    },
    security: {
      id: "security",
      eyebrow: "Seguridad de plataforma",
      title: "Lo que podemos afirmar sobre cómo se opera Nubesti — y lo que no inventamos.",
      intro:
        "Para CISO e ingenieros de seguridad. Solo controles ya dichos en material legal u observables en este sitio.",
      meta_title: "Seguridad de plataforma — Nubesti",
      meta_description:
        "Seguridad de la plataforma Nubesti: cifrado, acceso, KYC, autorización, logs y lo que no se publica.",
      crumb: "Seguridad",
      sections: [
        {
          heading: "Qué afirmamos hoy",
          body: `- TLS 1.2+ en propiedades web de producción, Cloudflare y cabeceras de seguridad
- Datos en tránsito con TLS
- Datos en reposo con algoritmos de industria (AES-256 donde controlamos el almacén)
- Acceso administrativo con identidades únicas y MFA
- RBAC en el producto
- Registro de eventos de seguridad
- Copias de seguridad restringidas y con rotación limitada
- Borrado de datos de cliente en producción a 60 días del término, salvo backups cifrados en rotación u obligación legal ([DPA](/legal/dpa/))`,
        },
        {
          heading: "Autorización y alcance",
          body: `Las pruebas requieren alcance designado, titularidad o permiso escrito, y KYC pagado. El aislamiento entre tenants, el mínimo privilegio y la auditoría son requisitos de diseño, no un sello.

[Autorización](/legal/authorization/) · [KYC](/legal/kyc/).`,
        },
        {
          heading: "Lo que no publicamos aquí",
          body: `No publicamos el diagrama completo de runtime de agentes, el detalle del almacén de secretos, ni una afirmación de que Nubesti nunca trata credenciales. Pida un briefing por escrito bajo NDA a [${COMPANY.emails.security}](mailto:${COMPANY.emails.security}).`,
        },
        {
          heading: "Responsabilidad humana",
          body: `Las pruebas autónomas siguen reglas de engagement, autorización del cliente, KYC y uso aceptable.`,
        },
      ],
    },
    methodology: {
      id: "methodology",
      eyebrow: "Metodología",
      title: "Cómo debe funcionar una prueba autónoma.",
      intro:
        "Describe el bucle previsto. No es un benchmark ni una promesa de cobertura ATT&CK completa.",
      meta_title: "Metodología — Nubesti",
      meta_description:
        "Metodología de pruebas Nubesti: alcance autorizado, reconocimiento, validación, mapeo ATT&CK/OWASP, evidencia, remediación y retest.",
      crumb: "Metodología",
      sections: [
        {
          heading: "El bucle",
          body: `1. Alcance autorizado  
2. Reconocimiento  
3. Prueba y validación con evidencia  
4. Evidencia revisable  
5. Remediación o borradores de parche — punto de partida  
6. Retest`,
        },
        {
          heading: "Mapeo, no “cobertura total”",
          body: `Los flujos pueden mapearse a técnicas MITRE ATT&CK y a clases OWASP. Mapear no es ejecutar toda la matriz.`,
        },
        {
          heading: "Falsos positivos",
          body: `Buscamos reducir ruido con comprobaciones de explotabilidad. No afirmamos cero falsos positivos ni un 99% de precisión público.`,
        },
      ],
    },
    benchmark: {
      id: "benchmark",
      eyebrow: "Benchmark",
      title: "Aún no hay un benchmark público reproducible.",
      intro: "No inventaremos precisión, recall ni recuentos de vulnerabilidades.",
      meta_title: "Benchmark — Nubesti",
      meta_description: "Estado del benchmark público de Nubesti. Sin cifras inventadas.",
      crumb: "Benchmark",
      sections: [
        {
          heading: "Estado",
          body: `**No hay dataset ni puntuación pública.** Cuando exista, usará objetivos de laboratorio etiquetados y publicará la metodología junto a los números.`,
        },
      ],
    },
    customers: {
      id: "customers",
      eyebrow: "Clientes",
      title: "Historias con nombre solo si están autorizadas.",
      intro: "No listamos empresas, logos ni citas sin aprobación. Hoy no hay casos públicos.",
      meta_title: "Clientes — Nubesti",
      meta_description: "Historias de clientes Nubesti. Solo con autorización.",
      crumb: "Clientes",
      sections: [
        {
          heading: "Si la identidad es confidencial",
          body: `Lo diremos con claridad: “Equipo de seguridad de una SaaS europea. Identidad retenida por NDA.” No inventaremos un nombre de reemplazo.`,
        },
      ],
    },
    research: {
      id: "research",
      eyebrow: "Investigación",
      title: "Nubesti Labs publica cuando hay trabajo original.",
      intro: "Índice para notas futuras. Vacío a propósito. Sin posts de plantilla.",
      meta_title: "Investigación — Nubesti",
      meta_description: "Índice de investigación de Nubesti Labs. Sin CVE inventados.",
      crumb: "Investigación",
      sections: [
        {
          heading: "Qué irá aquí",
          body: `Investigación de vulnerabilidades, técnicas y, más adelante, métodos de benchmark — con fecha y autor real.`,
        },
      ],
    },
    about: {
      id: "about",
      eyebrow: "Empresa",
      title: COMPANY.legalName,
      intro: `${COMPANY.legalName} es una ${COMPANY.entityType} constituida en ${COMPANY.jurisdiction}. Construimos software de pruebas de seguridad autónomas para activos autorizados.`,
      meta_title: "Acerca de — Nubesti LLC",
      meta_description: "Nubesti LLC: sociedad de responsabilidad limitada de Delaware.",
      crumb: "Acerca de",
      sections: [
        {
          heading: "Domicilio",
          body: COMPANY.addressInline,
        },
        {
          heading: "Liderazgo",
          body: `No publicamos un organigrama con fotos de stock ni cargos inventados.`,
        },
        {
          heading: "Contacto",
          body: `Legal: [${COMPANY.emails.legal}](mailto:${COMPANY.emails.legal})  
Privacidad: [${COMPANY.emails.privacy}](mailto:${COMPANY.emails.privacy})  
Seguridad: [${COMPANY.emails.security}](mailto:${COMPANY.emails.security})  
Ventas: [${COMPANY.emails.sales}](mailto:${COMPANY.emails.sales})`,
        },
      ],
    },
    docs: {
      id: "docs",
      eyebrow: "Documentación",
      title: "Portal, metodología y paquete legal.",
      intro: "Aún no hay un host de docs separado. Esto es lo que existe hoy.",
      meta_title: "Documentación — Nubesti",
      meta_description: "Índice de documentación Nubesti.",
      crumb: "Docs",
      sections: [
        {
          heading: "Producto",
          body: `Las guías operativas están en el [portal](${COMPANY.portal}). En el sitio: [Cómo funciona](/how-it-works/), [Metodología](/methodology/), [Finding de laboratorio](/demo/).`,
        },
        {
          heading: "Confianza y legal",
          body: `[Centro de confianza](/trust/) · [Seguridad](/security/) · [Centro legal](/legal/)`,
        },
      ],
    },
    "how-it-works": {
      id: "how-it-works",
      eyebrow: "Cómo funciona",
      title: "Alcance autorizado y un bucle repetible.",
      intro: "Seis pasos. Sin completitud implícita.",
      meta_title: "Cómo funciona — Nubesti",
      meta_description: "Cómo funcionan las pruebas autónomas de Nubesti.",
      crumb: "Cómo funciona",
      sections: [
        {
          heading: "Antes de una prueba",
          body: `[KYC](/legal/kyc/) pagado, activos designados y permiso. [Autorización](/legal/authorization/) y [engagement](/legal/engagement/).`,
        },
      ],
    },
  };
}

function pagesFr(): Record<TrustPageId, TrustPageCopy> {
  return {
    trust: {
      id: "trust",
      eyebrow: "Centre de confiance",
      title: "Autorisation, données et sécurité de la plateforme.",
      intro:
        "Index public. Aucune certification SOC 2 ou ISO n’est revendiquée.",
      meta_title: "Centre de confiance — Nubesti",
      meta_description: "Centre de confiance Nubesti : sécurité, confidentialité, KYC, divulgation.",
      crumb: "Confiance",
      sections: [
        {
          heading: "Sécurité et confidentialité",
          body: `[Sécurité plateforme](/security/) · [Aperçu sécurité](/legal/security/) · [Confidentialité](/legal/privacy/) · [DPA](/legal/dpa/) · [Sous-traitants](/legal/subprocessors/).`,
        },
        {
          heading: "Tests offensifs",
          body: `KYC payant obligatoire. Actifs autorisés uniquement. [KYC](/legal/kyc/) · [Autorisation](/legal/authorization/).`,
        },
        {
          heading: "Divulgation",
          body: `[Politique](/legal/vulnerability-disclosure/) · [${COMPANY.emails.security}](mailto:${COMPANY.emails.security}).`,
        },
      ],
    },
    security: {
      id: "security",
      eyebrow: "Sécurité plateforme",
      title: "Ce que nous publions — rien de plus.",
      intro: "Contrôles déjà décrits dans les documents légaux ou observables ici.",
      meta_title: "Sécurité plateforme — Nubesti",
      meta_description: "Sécurité de la plateforme Nubesti pour les CISO.",
      crumb: "Sécurité",
      sections: [
        {
          heading: "Contrôles publics",
          body: `TLS, Cloudflare, chiffrement en transit et au repos (AES-256 lorsque nous contrôlons le stockage), MFA admin, RBAC, journaux, sauvegardes à rotation limitée, suppression à 60 jours selon le [DPA](/legal/dpa/).`,
        },
        {
          heading: "Non publié",
          body: `Pas de schéma d’exécution des agents ni de détail des secrets. Briefing sous NDA : [${COMPANY.emails.security}](mailto:${COMPANY.emails.security}).`,
        },
      ],
    },
    methodology: {
      id: "methodology",
      eyebrow: "Méthodologie",
      title: "Boucle de test prévue.",
      intro: "Pas un benchmark. Pas une couverture ATT&CK totale.",
      meta_title: "Méthodologie — Nubesti",
      meta_description: "Méthodologie de test Nubesti.",
      crumb: "Méthodologie",
      sections: [
        {
          heading: "Étapes",
          body: `Périmètre autorisé → reconnaissance → test et validation → preuve → remédiation → retest.`,
        },
      ],
    },
    benchmark: {
      id: "benchmark",
      eyebrow: "Benchmark",
      title: "Aucun benchmark public pour l’instant.",
      intro: "Aucun chiffre inventé.",
      meta_title: "Benchmark — Nubesti",
      meta_description: "Statut du benchmark public Nubesti.",
      crumb: "Benchmark",
      sections: [{ heading: "Statut", body: `Pas de jeu de données public.` }],
    },
    customers: {
      id: "customers",
      eyebrow: "Clients",
      title: "Histoires nommées uniquement avec accord.",
      intro: "Aucune étude de cas publique aujourd’hui.",
      meta_title: "Clients — Nubesti",
      meta_description: "Études de cas Nubesti, seulement si autorisées.",
      crumb: "Clients",
      sections: [{ heading: "NDA", body: `L’anonymat sera indiqué clairement. Pas de faux logos.` }],
    },
    research: {
      id: "research",
      eyebrow: "Recherche",
      title: "Nubesti Labs quand il y aura du travail original.",
      intro: "Index vide volontairement.",
      meta_title: "Recherche — Nubesti",
      meta_description: "Index de recherche Nubesti Labs.",
      crumb: "Recherche",
      sections: [{ heading: "À venir", body: `Notes datées, auteurs réels.` }],
    },
    about: {
      id: "about",
      eyebrow: "Société",
      title: COMPANY.legalName,
      intro: `${COMPANY.legalName}, ${COMPANY.entityType}, ${COMPANY.jurisdiction}.`,
      meta_title: "À propos — Nubesti LLC",
      meta_description: "Nubesti LLC, société à responsabilité limitée du Delaware.",
      crumb: "À propos",
      sections: [
        { heading: "Siège", body: COMPANY.addressInline },
        { heading: "Contact", body: `[${COMPANY.emails.legal}](mailto:${COMPANY.emails.legal}) · [${COMPANY.emails.security}](mailto:${COMPANY.emails.security})` },
      ],
    },
    docs: {
      id: "docs",
      eyebrow: "Documentation",
      title: "Portail, méthodologie, documents légaux.",
      intro: "Pas encore de site docs séparé.",
      meta_title: "Documentation — Nubesti",
      meta_description: "Index de documentation Nubesti.",
      crumb: "Docs",
      sections: [
        { heading: "Liens", body: `[Portail](${COMPANY.portal}) · [Méthodologie](/methodology/) · [Confiance](/trust/) · [Légal](/legal/)` },
      ],
    },
    "how-it-works": {
      id: "how-it-works",
      eyebrow: "Fonctionnement",
      title: "Périmètre autorisé, puis boucle de test.",
      intro: "Six étapes. Pas de complétude implicite.",
      meta_title: "Fonctionnement — Nubesti",
      meta_description: "Comment fonctionnent les tests autonomes Nubesti.",
      crumb: "Fonctionnement",
      sections: [
        { heading: "Avant un test", body: `[KYC](/legal/kyc/) et [autorisation](/legal/authorization/).` },
      ],
    },
  };
}

function pagesPt(): Record<TrustPageId, TrustPageCopy> {
  return {
    trust: {
      id: "trust",
      eyebrow: "Centro de confiança",
      title: "Autorização, dados e segurança da plataforma.",
      intro: "Índice público. Sem certificações SOC 2 ou ISO.",
      meta_title: "Centro de confiança — Nubesti",
      meta_description: "Centro de confiança Nubesti: segurança, privacidade, KYC e divulgação.",
      crumb: "Confiança",
      sections: [
        {
          heading: "Segurança e privacidade",
          body: `[Segurança da plataforma](/security/) · [Visão de segurança](/legal/security/) · [Privacidade](/legal/privacy/) · [DPA](/legal/dpa/) · [Subprocessadores](/legal/subprocessors/).`,
        },
        {
          heading: "Testes ofensivos",
          body: `KYC pago obrigatório. Só ativos autorizados. [KYC](/legal/kyc/) · [Autorização](/legal/authorization/).`,
        },
      ],
    },
    security: {
      id: "security",
      eyebrow: "Segurança da plataforma",
      title: "O que publicamos — e nada inventado.",
      intro: "Controlos já descritos nos documentos legais.",
      meta_title: "Segurança da plataforma — Nubesti",
      meta_description: "Segurança da plataforma Nubesti para CISOs.",
      crumb: "Segurança",
      sections: [
        {
          heading: "Controlos públicos",
          body: `TLS, Cloudflare, cifra em trânsito e em repouso (AES-256 quando controlamos o armazenamento), MFA, RBAC, registos, backups com rotação, apagamento aos 60 dias no [DPA](/legal/dpa/).`,
        },
        {
          heading: "Não publicado",
          body: `Sem diagrama completo de agentes. Briefing sob NDA: [${COMPANY.emails.security}](mailto:${COMPANY.emails.security}).`,
        },
      ],
    },
    methodology: {
      id: "methodology",
      eyebrow: "Metodologia",
      title: "O ciclo de teste previsto.",
      intro: "Não é um benchmark nem cobertura ATT&CK total.",
      meta_title: "Metodologia — Nubesti",
      meta_description: "Metodologia de testes Nubesti.",
      crumb: "Metodologia",
      sections: [
        { heading: "Passos", body: `Âmbito autorizado → reconhecimento → teste e validação → evidência → remediação → reteste.` },
      ],
    },
    benchmark: {
      id: "benchmark",
      eyebrow: "Benchmark",
      title: "Ainda não há benchmark público.",
      intro: "Sem números inventados.",
      meta_title: "Benchmark — Nubesti",
      meta_description: "Estado do benchmark público Nubesti.",
      crumb: "Benchmark",
      sections: [{ heading: "Estado", body: `Sem dataset público.` }],
    },
    customers: {
      id: "customers",
      eyebrow: "Clientes",
      title: "Histórias com nome só com autorização.",
      intro: "Sem casos públicos hoje.",
      meta_title: "Clientes — Nubesti",
      meta_description: "Casos de clientes Nubesti apenas com autorização.",
      crumb: "Clientes",
      sections: [{ heading: "NDA", body: `O anonimato será explícito. Sem logótipos falsos.` }],
    },
    research: {
      id: "research",
      eyebrow: "Investigação",
      title: "Nubesti Labs quando houver trabalho original.",
      intro: "Índice vazio de propósito.",
      meta_title: "Investigação — Nubesti",
      meta_description: "Índice de investigação Nubesti Labs.",
      crumb: "Investigação",
      sections: [{ heading: "Futuro", body: `Notas datadas e autores reais.` }],
    },
    about: {
      id: "about",
      eyebrow: "Empresa",
      title: COMPANY.legalName,
      intro: `${COMPANY.legalName}, ${COMPANY.entityType}, ${COMPANY.jurisdiction}.`,
      meta_title: "Sobre — Nubesti LLC",
      meta_description: "Nubesti LLC, sociedade de responsabilidade limitada do Delaware.",
      crumb: "Sobre",
      sections: [
        { heading: "Sede", body: COMPANY.addressInline },
        { heading: "Contacto", body: `[${COMPANY.emails.legal}](mailto:${COMPANY.emails.legal}) · [${COMPANY.emails.security}](mailto:${COMPANY.emails.security})` },
      ],
    },
    docs: {
      id: "docs",
      eyebrow: "Documentação",
      title: "Portal, metodologia e legal.",
      intro: "Ainda não existe um site de docs separado.",
      meta_title: "Documentação — Nubesti",
      meta_description: "Índice de documentação Nubesti.",
      crumb: "Docs",
      sections: [
        { heading: "Ligações", body: `[Portal](${COMPANY.portal}) · [Metodologia](/methodology/) · [Confiança](/trust/) · [Legal](/legal/)` },
      ],
    },
    "how-it-works": {
      id: "how-it-works",
      eyebrow: "Como funciona",
      title: "Âmbito autorizado e um ciclo repetível.",
      intro: "Seis passos. Sem completude implícita.",
      meta_title: "Como funciona — Nubesti",
      meta_description: "Como funcionam os testes autónomos da Nubesti.",
      crumb: "Como funciona",
      sections: [
        { heading: "Antes de um teste", body: `[KYC](/legal/kyc/) e [autorização](/legal/authorization/).` },
      ],
    },
  };
}

const bundles: Record<TrustLocale, () => TrustBundle> = {
  en: () => ({
    home: "Home",
    channels: channelsEn,
    howItWorks: howEn,
    lab: labEn,
    pages: pagesEn(),
  }),
  es: () => ({
    home: "Inicio",
    channels: [
      { title: "Hablar con Seguridad", detail: "Arquitectura, incidentes de plataforma, abuso de pruebas.", href: `mailto:${COMPANY.emails.security}`, label: COMPANY.emails.security },
      { title: "Hablar con Ventas", detail: "Planes, KYC y una demo en vivo.", href: COMPANY.demoMeetings, label: "Reservar reunión" },
      { title: "Reportar una vulnerabilidad", detail: "Solo sistemas Nubesti.", href: "/legal/vulnerability-disclosure/", label: "Política de divulgación" },
      { title: "Privacidad", detail: "Acceso, borrado, DPA.", href: `mailto:${COMPANY.emails.privacy}`, label: COMPANY.emails.privacy },
      { title: "Legal", detail: "Contratos y autorizaciones.", href: `mailto:${COMPANY.emails.legal}`, label: COMPANY.emails.legal },
    ],
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "Alcance autorizado, luego evidencia.",
      intro: "Una prueba no empieza por un formulario. Empieza cuando el cliente puede demostrar que puede probar el activo.",
      steps: [
        { step: "01", title: "Definir alcance autorizado", body: "El cliente verifica activos y autorización. El KYC debe estar completo y pagado." },
        { step: "02", title: "Reconocimiento autónomo", body: "Nubesti mapea la superficie autorizada — no internet abierto." },
        { step: "03", title: "Simulación y validación", body: "Los agentes prueban rutas explotables dentro de ese alcance y guardan evidencia." },
        { step: "04", title: "Evidencia", body: "Cada hallazgo debe poder aceptarse o rechazarse con contexto técnico." },
        { step: "05", title: "Remediación", body: "Recomendaciones o parches en borrador. El borrador es un punto de partida." },
        { step: "06", title: "Retest", body: "El mismo hallazgo puede probarse de nuevo después de un cambio." },
      ],
    },
    lab: {
      ...labEn,
      eyebrow: "Nubesti Security Lab",
      title: "Un hallazgo — claramente de laboratorio.",
      notice:
        "Este registro es de una aplicación de laboratorio. No es un cliente, no es un hostname de producción y no es una vulnerabilidad de un tercero.",
    },
    pages: pagesEs(),
  }),
  fr: () => ({
    home: "Accueil",
    channels: [
      { title: "Sécurité", detail: "Architecture, incidents, abus.", href: `mailto:${COMPANY.emails.security}`, label: COMPANY.emails.security },
      { title: "Commercial", detail: "Offres, KYC, démonstration.", href: COMPANY.demoMeetings, label: "Prendre rendez-vous" },
      { title: "Vulnérabilité", detail: "Systèmes Nubesti uniquement.", href: "/legal/vulnerability-disclosure/", label: "Politique" },
      { title: "Confidentialité", detail: "Droits et DPA.", href: `mailto:${COMPANY.emails.privacy}`, label: COMPANY.emails.privacy },
      { title: "Juridique", detail: "Contrats et autorisations.", href: `mailto:${COMPANY.emails.legal}`, label: COMPANY.emails.legal },
    ],
    howItWorks: {
      eyebrow: "Fonctionnement",
      title: "Périmètre autorisé, puis preuves.",
      intro: "Un test commence lorsque le client peut montrer qu’il a le droit de tester l’actif.",
      steps: [
        { step: "01", title: "Définir le périmètre", body: "Actifs et autorisation. KYC payé." },
        { step: "02", title: "Reconnaissance", body: "Surface autorisée uniquement." },
        { step: "03", title: "Simulation et validation", body: "Chemins exploitables dans ce périmètre." },
        { step: "04", title: "Preuve", body: "Contexte technique recevable ou rejetable." },
        { step: "05", title: "Remédiation", body: "Recommandations ou brouillons de correctifs." },
        { step: "06", title: "Retest", body: "Nouveau passage après correction." },
      ],
    },
    lab: {
      ...labEn,
      eyebrow: "Nubesti Security Lab",
      title: "Un constat — clairement de laboratoire.",
      notice: "Enregistrement de laboratoire. Pas un client, pas un hôte de production.",
    },
    pages: pagesFr(),
  }),
  pt: () => ({
    home: "Início",
    channels: [
      { title: "Segurança", detail: "Arquitetura, incidentes, abuso.", href: `mailto:${COMPANY.emails.security}`, label: COMPANY.emails.security },
      { title: "Comercial", detail: "Planos, KYC e demonstração.", href: COMPANY.demoMeetings, label: "Agendar reunião" },
      { title: "Vulnerabilidade", detail: "Apenas sistemas Nubesti.", href: "/legal/vulnerability-disclosure/", label: "Política" },
      { title: "Privacidade", detail: "Direitos e DPA.", href: `mailto:${COMPANY.emails.privacy}`, label: COMPANY.emails.privacy },
      { title: "Legal", detail: "Contratos e autorizações.", href: `mailto:${COMPANY.emails.legal}`, label: COMPANY.emails.legal },
    ],
    howItWorks: {
      eyebrow: "Como funciona",
      title: "Âmbito autorizado, depois evidência.",
      intro: "Um teste começa quando o cliente demonstra que pode testar o ativo.",
      steps: [
        { step: "01", title: "Definir âmbito", body: "Ativos e autorização. KYC pago." },
        { step: "02", title: "Reconhecimento", body: "Só a superfície autorizada." },
        { step: "03", title: "Simulação e validação", body: "Caminhos exploráveis nesse âmbito." },
        { step: "04", title: "Evidência", body: "Contexto técnico aceitável ou rejeitável." },
        { step: "05", title: "Remediação", body: "Recomendações ou rascunhos de correção." },
        { step: "06", title: "Reteste", body: "Novo teste após a correção." },
      ],
    },
    lab: {
      ...labEn,
      eyebrow: "Nubesti Security Lab",
      title: "Um achado — claramente de laboratório.",
      notice: "Registo de laboratório. Não é um cliente nem um hostname de produção.",
    },
    pages: pagesPt(),
  }),
};

export function getTrustBundle(locale?: string): TrustBundle {
  return bundles[localeOf(locale)]();
}

export function getTrustPage(id: TrustPageId, locale?: string): TrustPageCopy {
  return getTrustBundle(locale).pages[id];
}
