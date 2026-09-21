export type TrustLocale = "en" | "es" | "fr" | "pt";

export type TrustSection = {
  heading: string;
  body: string;
};

export type TrustPageId =
  | "trust"
  | "security"
  | "methodology"
  | "benchmark"
  | "customers"
  | "research"
  | "about"
  | "docs"
  | "how-it-works";

export type TrustPageCopy = {
  id: TrustPageId;
  eyebrow: string;
  title: string;
  intro: string;
  meta_title: string;
  meta_description: string;
  crumb: string;
  sections: TrustSection[];
};

export type HowItWorksStep = {
  step: string;
  title: string;
  body: string;
};

export type LabFindingCopy = {
  eyebrow: string;
  title: string;
  notice: string;
  asset: string;
  finding: string;
  severity: string;
  mitre: string;
  evidence: string;
  exploitability: string;
  impact: string;
  remediation: string;
  status: string;
  retest: string;
};

export type ContactChannel = {
  title: string;
  detail: string;
  href: string;
  label: string;
};

export type TrustBundle = {
  home: string;
  channels: ContactChannel[];
  howItWorks: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: HowItWorksStep[];
  };
  lab: LabFindingCopy;
  pages: Record<TrustPageId, TrustPageCopy>;
};

export function normalizeTrustLocale(locale?: string): TrustLocale {
  const code = (locale || "en").split("-")[0];
  if (code === "es" || code === "fr" || code === "pt") return code;
  return "en";
}

export { getTrustBundle, getTrustPage } from "./copy";
