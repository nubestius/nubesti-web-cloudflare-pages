import type { LegalDocument } from "../types";

export const extraLegalDocuments: LegalDocument[] = [
  {
    slug: "kyc",
    updated: "2026-09-21",
    title: "Politique KYC et vérification",
    summary:
      "Chaque client doit accomplir et payer la vérification d’identité et d’entreprise avant de lancer des tests ou d’activer une offre payante.",
    meta_description:
      "Politique KYC Nubesti : vérification d’identité obligatoire et payante avant l’accès à la plateforme et aux tests.",
    body: `Nubesti vend des outils professionnels de sécurité offensive. Nous n’activons pas l’accès payant et n’autorisons pas le lancement de tests tant que le client n’a pas terminé le Know Your Customer (« KYC ») et la vérification d’identité **et** payé les frais KYC / de vérification.

Cette politique fait partie des [Conditions d’utilisation](/legal/terms/). Elle s’articule avec [Facturation et renouvellements](/legal/billing/), [Contrôles des exportations et sanctions](/legal/export-controls/) et la [Lettre d’autorisation](/legal/authorization/).

## 1. Qui doit accomplir le KYC

Le KYC est obligatoire pour :

- L’organisation contractante (personne morale ou indépendant)
- Les bénéficiaires effectifs ou personnes de contrôle que nous demandons raisonnablement
- Chaque utilisateur pouvant lancer des tests, modifier le périmètre ou inviter des collègues
- Les revendeurs ou partenaires qui achètent pour un client final

Une démo ne remplace pas le KYC. Les fonctions d’essai susceptibles de toucher des cibles réelles restent bloquées jusqu’à l’approbation.

## 2. Le client paie le KYC

La vérification d’identité est un **service payant**, non inclus dans le prix de l’abonnement.

- Les frais KYC / de vérification sont ceux affichés au paiement, dans le portail ou sur le bon de commande
- Ils sont dus **d’avance**, en plus du plan, des options et des taxes
- Vous autorisez Nubesti et ses prestataires de paiement à débiter le moyen enregistré pour les frais KYC
- Les utilisateurs vérifiés supplémentaires, les nouveaux examens après échec et les re-vérifications périodiques peuvent être refacturés
- Les frais KYC sont **non remboursables**, y compris si nous refusons le compte, si vous annulez avant les tests, ou si l’abonnement est ensuite remboursé selon d’autres règles
- Les crédits SLA ne s’appliquent jamais aux frais KYC

Si un bon de commande fixe un autre prix KYC pour ce client, le bon de commande prévaut.

## 3. Ce que nous vérifions

Nous pouvons exiger :

- Une pièce d’identité avec photo des utilisateurs autorisés
- La dénomination, les statuts et l’adresse enregistrée de la société
- La preuve que le signataire peut engager la société
- Des informations sur les bénéficiaires effectifs ou le contrôle
- La preuve d’autorisation de tester les systèmes désignés (voir la [Lettre d’autorisation](/legal/authorization/))
- Un filtrage sanctions, listes de surveillance et fraude

Nous pouvons recourir à un prestataire tiers d’identité. Ce prestataire est un sous-traitant décrit dans [Sous-traitants](/legal/subprocessors/).

## 4. Quand l’accès commence

Nous pouvons encaisser le plan et le KYC avant la fin de l’examen. **Aucun test ne démarre, les API de scan restent désactivées et les sièges payants inactifs tant que le KYC n’est pas approuvé.**

Si le KYC est refusé ou non terminé dans le délai indiqué (en général 14 jours), nous pouvons annuler le temps d’abonnement non utilisé. Les frais KYC déjà payés restent acquis. L’abonnement prépayé non utilisé peut être remboursé déduction faite du KYC et des frais de paiement, sauf obligation légale contraire.

## 5. Obligations continues

Vous devez maintenir les informations KYC exactes. Prévenez-nous si le contrôle de la société, les testeurs autorisés ou les contacts de facturation changent. Nous pouvons geler les lancements jusqu’au paiement et à l’approbation d’une nouvelle vérification.

Nous pouvons exiger un nouveau KYC à l’échéance, après un événement de risque, ou lorsque la loi ou nos partenaires bancaires l’exigent.

## 6. Données et conservation

Les données KYC sont des données personnelles. Nous les utilisons pour l’onboarding, prévenir l’abus d’outils de pentest, respecter les sanctions et la lutte anti-fraude, et conserver des traces. Voir la [Politique de confidentialité](/legal/privacy/).

Nous conservons le KYC pendant la vie du compte et une période commercialement raisonnable ensuite (en général au moins cinq ans), sauf conservation légale plus longue.

## 7. Aucune garantie d’approbation

Payer ne garantit pas l’approbation. Nous pouvons refuser ou limiter le service si la vérification est incomplète, incohérente, à haut risque ou interdite par les [règles d’exportation et de sanctions](/legal/export-controls/).

## 8. Contact

KYC et facturation : [legal@nubesti.com](mailto:legal@nubesti.com)  
Confidentialité des pièces KYC : [privacy@nubesti.com](mailto:privacy@nubesti.com)`,
  },
  {
    slug: "ai-policy",
    updated: "2026-09-21",
    title: "Politique d’usage de l’IA",
    summary:
      "Comment Nubesti utilise l’intelligence artificielle pour tester et rapporter, ce que nous n’entraînons pas, et les limites des constats automatisés.",
    meta_description:
      "Politique IA Nubesti : données clients, entraînement des modèles, revue humaine et limites des constats automatisés.",
    body: `Nubesti utilise l’automatisation et l’intelligence artificielle pour trouver des faiblesses et rédiger des rapports. Cette politique l’explique. Elle complète les [Conditions d’utilisation](/legal/terms/) et la [Politique de confidentialité](/legal/privacy/).

## 1. Ce que fait l’IA

Les moteurs d’IA et d’automatisation peuvent :

- Cartographier et sonder les actifs dans le périmètre que vous désignez
- Classer et prioriser les constats
- Rédiger des rapports, pistes de correction et suggestions de pull request
- Réduire les faux positifs évidents

Les missions enterprise ou de services professionnels peuvent inclure une revue humaine. Les scans self-serve peuvent être entièrement automatisés.

## 2. Données client et entraînement

Nous traitons cibles, preuves et constats pour fournir le service acheté.

**Nous n’utilisons pas vos constats, preuves ni listes de cibles pour entraîner des modèles de fondation publics.** Nous pouvons utiliser une télémétrie produit agrégée et désidentifiée (par exemple la fiabilité des fonctions) pour exploiter et améliorer la plateforme.

Si une fonction future utilisait du contenu client pour améliorer des modèles d’une façon qui pourrait vous identifier, nous l’indiquerons dans le produit et mettrons cette page à jour avant activation.

## 3. Vos responsabilités

Vous restez responsable de :

- Accomplir le [KYC](/legal/kyc/) et disposer d’une [autorisation](/legal/authorization/) valable
- Choisir un périmètre sûr (privilégiez le staging)
- Relire la sortie IA avant de la traiter comme définitive
- Décider quels correctifs appliquer

Les suggestions IA peuvent être fausses, incomplètes ou dangereuses dans votre environnement.

## 4. Limites

Les tests assistés par IA **ne** garantissent **pas** que chaque vulnérabilité sera trouvée, que les systèmes sont inattaquables, ni que vous réussirez un audit. Les [clauses de non-garantie](/legal/terms/) des Conditions s’appliquent.

## 5. Revue humaine et support

Le support payant et les services professionnels peuvent inclure une analyse humaine. Sauf bon de commande prévoyant qu’un analyste nommé relit chaque constat, l’automatisation est la règle.

## 6. Usages IA interdits au client

Vous ne pouvez pas utiliser la sortie Nubesti pour attaquer des systèmes non autorisés, produire des malwares nuisibles, ni présenter les constats comme une certification formelle.

## 7. Contact

[legal@nubesti.com](mailto:legal@nubesti.com) · [privacy@nubesti.com](mailto:privacy@nubesti.com)`,
  },
  {
    slug: "vulnerability-disclosure",
    updated: "2026-09-21",
    title: "Politique de divulgation des vulnérabilités",
    summary:
      "Comment signaler un problème de sécurité sur les systèmes Nubesti, notre safe harbor, et ce qui est hors périmètre.",
    meta_description:
      "Politique de divulgation coordonnée des vulnérabilités Nubesti, safe harbor et canal de signalement de la plateforme.",
    body: `Si vous trouvez un problème de sécurité **sur les systèmes Nubesti** (site, portail ou plateforme — pas une cible client), nous voulons le savoir. C’est la politique visée par [/.well-known/security.txt](https://nubesti.com/.well-known/security.txt).

Les constats sur les cibles d’un client appartiennent à ce client. Ne nous envoyez pas de détails d’exploit sur la production d’un tiers.

## 1. Comment signaler

Écrivez à [security@nubesti.com](mailto:security@nubesti.com) avec :

- Description et impact
- Étapes de reproduction
- URL, endpoint ou composant concerné
- Une preuve qui ne détruit pas de données et n’expose pas d’autres clients

Nous visons un accusé de réception sous **24 heures** et une première évaluation sous **48 heures**.

## 2. Safe harbor

Nous n’engagerons pas d’action civile ou pénale contre les chercheurs qui :

- Agissent de bonne foi
- Évitent les atteintes à la vie privée, la destruction de données et la dégradation du service
- N’accèdent pas à des données d’autrui au-delà de ce qui est nécessaire pour démontrer le problème
- Nous laissent une chance raisonnable de corriger avant une divulgation publique

Ce safe harbor ne couvre pas les attaques d’environnements clients, l’intrusion physique ni l’extorsion.

## 3. Hors périmètre

- Déni de service ou floods volumétriques contre la production
- Spam, ingénierie sociale du personnel ou hameçonnage de nos clients
- Attaques physiques
- Constats qui ne concernent que des navigateurs obsolètes ou un MITM sur la machine du chercheur
- Problèmes de produits tiers que nous n’exploitons pas, sauf mauvaise configuration claire sous notre contrôle

## 4. Coordination

Merci de ne pas publier un exploit complet avant un correctif ou une date convenue. Nous pouvons créditer les chercheurs qui le souhaitent.

Nous n’avons pas de bug bounty public aujourd’hui. Un remerciement peut être offert ; aucun paiement n’est promis.

## 5. Pages liées

- [Aperçu sécurité](/legal/security/)
- [Politique d’utilisation acceptable](/legal/acceptable-use/)
- [Éthique et signalement](/legal/ethics/)`,
  },
  {
    slug: "authorization",
    updated: "2026-09-21",
    title: "Lettre d’autorisation",
    summary:
      "L’autorisation écrite que le client doit donner avant que Nubesti teste les systèmes du périmètre, avec une lettre prête à copier.",
    meta_description:
      "Lettre d’autorisation et safe harbor client Nubesti pour les tests red team IA dans le périmètre.",
    body: `Nubesti ne lancera pas de tests tant que le KYC n’est pas approuvé **et** que vous n’avez pas confirmé une autorisation écrite du périmètre. Cette page est l’autorisation type. Elle complète les [Règles d’engagement](/legal/engagement/) et la [Politique d’utilisation acceptable](/legal/acceptable-use/).

En cochant la case d’autorisation dans le portail, en signant un bon de commande ou en envoyant la lettre ci-dessous, vous déclarez pouvoir engager le titulaire des cibles.

## 1. Ce que vous autorisez

Vous autorisez Nubesti LLC et ses agents automatisés à réaliser des tests de sécurité **uniquement** contre les actifs que vous désignez dans le produit ou un SOW, pendant la durée du compte ou du SOW.

Vous confirmez être propriétaire de ces systèmes ou disposer d’une permission écrite du titulaire, et que tout avis cloud / FAI exigé par le prestataire a été donné.

## 2. Safe harbor (périmètre uniquement)

Pour l’activité dans le périmètre réalisée via Nubesti, vous acceptez de la traiter comme un test de sécurité consenti. Vous ne la traiterez pas comme un accès non autorisé **à condition** que nous restions dans le périmètre et les [Règles d’engagement](/legal/engagement/).

Cela n’autorise pas les tests de systèmes tiers que vous ne contrôlez pas.

## 3. Vos devoirs

- Accomplir et payer le [KYC](/legal/kyc/)
- Tenir un contact d’urgence joignable pendant les tests
- Arrêter ou réduire les tests en cas d’impact production
- Garder les constats confidentiels sauf remédiation ou obligation légale

## 4. Lettre à copier

Vous pouvez l’envoyer sur papier à en-tête à [legal@nubesti.com](mailto:legal@nubesti.com) ou la déposer lors du KYC :

> Je, [nom / fonction], suis habilité à engager [entité]. J’autorise Nubesti LLC à réaliser des tests de sécurité, y compris automatisés et assistés par IA, contre les actifs que nous désignons dans le portail Nubesti ou une liste de périmètre jointe, pendant la durée de notre accord. Nous sommes titulaires de ces actifs ou disposons de la permission écrite du titulaire. Nous avons accompli (ou accomplirons et paierons) le KYC Nubesti avant tout lancement. Contact d’urgence : [nom, e-mail]. Signature : [nom], [date].

## 5. Retrait

Vous pouvez révoquer l’autorisation en arrêtant les tests dans le portail et en écrivant à [legal@nubesti.com](mailto:legal@nubesti.com). Les jobs en cours seront haltés dès que raisonnablement possible. Les frais déjà payés suivent la [Politique de remboursement](/legal/refunds/) et la [Politique KYC](/legal/kyc/).`,
  },
  {
    slug: "export-controls",
    updated: "2026-09-21",
    title: "Contrôles des exportations et sanctions",
    summary:
      "Nubesti ne fournit pas de services de tests de sécurité aux personnes sanctionnées ni aux juridictions sous sanction intégrale.",
    meta_description:
      "Politique de contrôle des exportations et sanctions OFAC de Nubesti pour la plateforme red team IA.",
    body: `Les logiciels de tests de sécurité peuvent être sensibles. Nubesti LLC respecte les lois américaines applicables de contrôle des exportations et de sanctions, y compris les programmes OFAC, et les règles équivalentes qui nous concernent.

Cette page fait partie des [Conditions d’utilisation](/legal/terms/). Le [KYC](/legal/kyc/) est l’un des moyens de filtrer les clients.

## 1. Qui ne peut pas utiliser les services

Vous ne pouvez pas accéder à Nubesti ni l’utiliser si vous :

- Êtes situé, résidez habituellement ou êtes organisé sous les lois d’une juridiction sous sanction intégrale
- Figurez sur une liste de sanctions ou de parties refusées des États-Unis ou une autre liste applicable
- Agissez pour le compte d’une telle personne ou juridiction
- Utilisez les services pour une fin interdite (y compris un usage militaire ou d’armement non autorisé lorsque la loi l’interdit)

Nous pouvons ajouter des blocages géographiques ou d’entités lorsque les listes changent.

## 2. Vos déclarations

À chaque connexion, paiement ou lancement de test, vous déclarez que la section 1 reste vraie, que le KYC est exact et que vous ne détournerez pas le service vers une partie interdite.

## 3. Ce que nous pouvons faire

Nous pouvons refuser, suspendre ou résilier des comptes, geler les lancements et conserver KYC et facturation lorsque la conformité sanctions l’exige. Nous n’avons pas l’obligation de fournir le service si cela enfreindrait la loi.

## 4. Responsabilité d’exportation du client

Si vous téléchargez des logiciels, rapports ou données techniques depuis la plateforme, vous êtes responsable de votre propre conformité à l’exportation et au transfert.

## 5. Contact

Questions sanctions et éligibilité : [legal@nubesti.com](mailto:legal@nubesti.com)`,
  },
];
