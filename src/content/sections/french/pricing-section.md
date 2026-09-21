---
enable: true
title: Plans de sécurité **AI Red Team**

plans:
  enable: true
  list:
    - selected: true
      label: Mensuel
    - selected: false
      label: Annuel

list:
  - enable: true
    featured: false
    badge:
      enable: false
      label: Le plus populaire
    name: Starter
    description: Détection essentielle de vulnérabilités assistée par IA pour petites équipes et applications

    price:
      - type: Mensuel
        prepend_value: $
        value: 690
        append_value:
      - type: Annuel
        prepend_value: $
        value: 6,900
        append_value:

    features:
      - "Scan automatisé **OWASP Top 10**"
      - "Simulation de techniques **MITRE ATT&CK** de base"
      - Tests de sécurité d’applications web
      - "**5 applications** ou endpoints cibles"
      - Rapports mensuels
      - Support e-mail (réponse 24-48 h)

    usages:
      - type: Mensuel
        list:
          - label: Apps cibles
            value: 5
          - label: Heures de scan
            value: 40
      - type: Annuel
        list:
          - label: Apps cibles
            value: 5
          - label: Heures de scan
            value: 480

    cta_btn:
      enable: true
      label: Demander un accès
      url: /contact/
      rel:
      target:

  - enable: true
    featured: true
    badge:
      enable: true
      label: Le plus populaire
    name: Professional
    description: Red teaming IA et playbooks étendus pour les organisations en croissance

    price:
      - type: Mensuel
        prepend_value: $
        value: 1,500
        append_value:
      - type: Annuel
        prepend_value: $
        value: 15,000
        append_value:

    features:
      - "Flux de test **cartographiés vers MITRE ATT&CK**"
      - "Tests **OWASP avancés** + vecteurs personnalisés"
      - Tests d’infrastructure cloud
      - "**20 applications** ou endpoints cibles"
      - Tests d’API et de microservices
      - Intégration Slack/Teams
      - Rapports hebdomadaires + tableau de bord
      - Support prioritaire (réponse 4-8 h)

    usages:
      - type: Mensuel
        list:
          - label: Apps cibles
            value: 20
          - label: Heures de scan
            value: 120
      - type: Annuel
        list:
          - label: Apps cibles
            value: 20
          - label: Heures de scan
            value: 1440

    cta_btn:
      enable: true
      label: Demander un accès
      url: /contact/
      rel:
      target:

  - enable: true
    featured: false
    badge:
      enable: false
      label: Le plus populaire
    name: Enterprise
    description: Playbooks sur mesure pour les grandes organisations

    price:
      - type: Mensuel
        prepend_value: "Prix sur devis"
        append_value: ""
      - type: Annuel
        prepend_value: "Prix sur devis"
        append_value: ""

    features:
      - "**Scénarios d’attaque personnalisés** adaptés à votre infrastructure"
      - "Simulations multi-étapes **lorsqu’elles sont dans le périmètre**"
      - Tests multi-cloud (AWS, Azure, GCP)
      - "**Cibles et applications illimitées**"
      - Constats exportables et datés pour vos packs d’audit
      - Intégrations personnalisées (SIEM, tickets)
      - Alertes et suivi des jobs
      - Ingénieur sécurité dédié + support prioritaire

    usages:
      - type: Mensuel
        list:
          - label: Apps cibles
            value: Illimité
          - label: Heures de scan
            value: 300
      - type: Annuel
        list:
          - label: Apps cibles
            value: Illimité
          - label: Heures de scan
            value: 3600

    cta_btn:
      enable: true
      label: Contacter les ventes
      url: /contact/
      rel:
      target:

comparison:
  - label: Référentiels
    list:
      - value: Tests OWASP Top 10
        included:
          - true
          - true
          - true
      - value: Techniques MITRE ATT&CK
        included:
          - Cartographie de base
          - Cartographie étendue
          - Playbooks sur mesure
      - value: Vecteurs personnalisés
        included:
          - false
          - Limités
          - Selon le périmètre
      - value: Scénarios multi-étapes
        included:
          - false
          - false
          - true

  - label: Surfaces
    list:
      - value: Applications web
        included:
          - true
          - true
          - true
      - value: Tests d’API et de microservices
        included:
          - false
          - true
          - true
      - value: Infrastructure cloud (AWS/Azure/GCP)
        included:
          - false
          - Un cloud
          - Multi-cloud
      - value: Infrastructure réseau
        included:
          - false
          - Limitée
          - Selon le périmètre

  - label: Intégrations et rapports
    list:
      - value: Rapports de sécurité
        included:
          - Mensuel
          - Hebdomadaire
          - Selon le contrat
      - value: Intégration Slack/Teams
        included:
          - false
          - true
          - true
      - value: Intégration SIEM
        included:
          - false
          - false
          - true
      - value: Constats exportables et datés
        included:
          - false
          - Basique
          - Packs d’audit

  - label: Support
    list:
      - value: Support e-mail
        included:
          - Réponse 24-48 h
          - Réponse 4-8 h
          - Prioritaire
      - value: Ingénieur sécurité dédié
        included:
          - false
          - false
          - true
      - value: Formations et ateliers
        included:
          - false
          - Trimestriel
          - Mensuel
      - value: Déploiement on-premise
        included:
          - false
          - false
          - Sur devis
---
