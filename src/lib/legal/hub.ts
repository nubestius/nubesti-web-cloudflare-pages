import { LEGAL_GROUPS, type LegalDocument, type LegalHubCopy } from "./types";

export const legalHubCopy: Record<string, LegalHubCopy> = {
  en: {
    eyebrow: "Legal center",
    title: "Policies that keep security testing clear.",
    intro:
      "These documents explain how Nubesti services work, how we verify customers, how we handle data, and how to contact us. Paid access and testing require KYC.",
    last_updated: "Last updated",
    on_this_page: "On this page",
    company: "Company",
    back: "Back to legal center",
    home: "Home",
    breadcrumb: "Legal",
    print: "Print / save PDF",
    groups: {
      commercial: "Commercial",
      testing: "Testing & access",
      privacy: "Privacy",
      trust: "Trust",
      company: "Company",
    },
  },
  es: {
    eyebrow: "Centro legal",
    title: "Políticas que dejan las pruebas de seguridad claras.",
    intro:
      "Estos documentos explican cómo funcionan los servicios de Nubesti, cómo verificamos a los clientes, cómo tratamos los datos y cómo contactarnos. El acceso de pago y las pruebas exigen KYC.",
    last_updated: "Última actualización",
    on_this_page: "En esta página",
    company: "Empresa",
    back: "Volver al centro legal",
    home: "Inicio",
    breadcrumb: "Legal",
    print: "Imprimir / guardar PDF",
    groups: {
      commercial: "Comercial",
      testing: "Pruebas y acceso",
      privacy: "Privacidad",
      trust: "Confianza",
      company: "Empresa",
    },
  },
  fr: {
    eyebrow: "Centre juridique",
    title: "Des politiques qui rendent les tests de sécurité clairs.",
    intro:
      "Ces documents expliquent le fonctionnement des services Nubesti, la vérification des clients, le traitement des données et comment nous contacter. L’accès payant et les tests exigent un KYC.",
    last_updated: "Dernière mise à jour",
    on_this_page: "Sur cette page",
    company: "Société",
    back: "Retour au centre juridique",
    home: "Accueil",
    breadcrumb: "Mentions légales",
    print: "Imprimer / enregistrer en PDF",
    groups: {
      commercial: "Commercial",
      testing: "Tests et accès",
      privacy: "Confidentialité",
      trust: "Confiance",
      company: "Société",
    },
  },
  pt: {
    eyebrow: "Centro legal",
    title: "Políticas que deixam os testes de segurança claros.",
    intro:
      "Estes documentos explicam os serviços da Nubesti, a verificação de clientes, o tratamento de dados e como contactar-nos. O acesso pago e os testes exigem KYC.",
    last_updated: "Última atualização",
    on_this_page: "Nesta página",
    company: "Empresa",
    back: "Voltar ao centro legal",
    home: "Início",
    breadcrumb: "Legal",
    print: "Imprimir / guardar PDF",
    groups: {
      commercial: "Comercial",
      testing: "Testes e acesso",
      privacy: "Privacidade",
      trust: "Confiança",
      company: "Empresa",
    },
  },
};

export function getLegalHubCopy(locale?: string): LegalHubCopy {
  return legalHubCopy[locale || "en"] || legalHubCopy.en;
}

export function groupLegalDocuments(
  documents: LegalDocument[],
  locale?: string,
) {
  const copy = getLegalHubCopy(locale);
  const bySlug = new Map(documents.map((doc) => [doc.slug, doc]));

  return LEGAL_GROUPS.map((group) => ({
    id: group.id,
    title: copy.groups[group.id],
    documents: group.slugs
      .map((slug) => bySlug.get(slug))
      .filter((doc): doc is LegalDocument => Boolean(doc)),
  })).filter((group) => group.documents.length > 0);
}
