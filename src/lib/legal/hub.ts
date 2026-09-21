import type { LegalHubCopy } from "./types";

export const legalHubCopy: Record<string, LegalHubCopy> = {
  en: {
    eyebrow: "Legal center",
    title: "Policies that keep security testing clear.",
    intro:
      "These documents explain how Nubesti services work, how we handle data, availability commitments, and how to contact us.",
    last_updated: "Last updated",
    on_this_page: "On this page",
    company: "Company",
    back: "Back to legal center",
    home: "Home",
    breadcrumb: "Legal",
  },
  es: {
    eyebrow: "Centro legal",
    title: "Políticas que dejan las pruebas de seguridad claras.",
    intro:
      "Estos documentos explican cómo funcionan los servicios de Nubesti, cómo tratamos los datos, los compromisos de disponibilidad y cómo contactarnos.",
    last_updated: "Última actualización",
    on_this_page: "En esta página",
    company: "Empresa",
    back: "Volver al centro legal",
    home: "Inicio",
    breadcrumb: "Legal",
  },
  fr: {
    eyebrow: "Centre juridique",
    title: "Des politiques qui rendent les tests de sécurité clairs.",
    intro:
      "Ces documents expliquent le fonctionnement des services Nubesti, le traitement des données, les engagements de disponibilité et comment nous contacter.",
    last_updated: "Dernière mise à jour",
    on_this_page: "Sur cette page",
    company: "Société",
    back: "Retour au centre juridique",
    home: "Accueil",
    breadcrumb: "Mentions légales",
  },
  pt: {
    eyebrow: "Centro legal",
    title: "Políticas que deixam os testes de segurança claros.",
    intro:
      "Estes documentos explicam como funcionam os serviços da Nubesti, como tratamos os dados, os compromissos de disponibilidade e como nos contactar.",
    last_updated: "Última atualização",
    on_this_page: "Nesta página",
    company: "Empresa",
    back: "Voltar ao centro legal",
    home: "Início",
    breadcrumb: "Legal",
  },
};

export function getLegalHubCopy(locale?: string): LegalHubCopy {
  return legalHubCopy[locale || "en"] || legalHubCopy.en;
}
