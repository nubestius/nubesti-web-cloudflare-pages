---
enable: true # Control the visibility of this section across all pages where it is used
title: Planos de Segurança **AI Red Team**
draft: false

plans:
  enable: true
  list:
    # List of available plans. Ensure that these names are used consistently in other places where applicable.
    - selected: true
      label: Mensal # Use this value exactly in all corresponding places below.
    - selected: false
      label: Anual # Use this value exactly in all corresponding places below.

list:
  # Starter Plan
  - enable: true
    featured: false
    badge:
      enable: false
      label: Mais Popular
    name: Iniciante # Name of the pricing tier.
    description: Detecção essencial de vulnerabilidades alimentada por IA para pequenas equipes e aplicações

    price:
      # Pricing details for each plan type.
      - type: Mensal # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 690
        append_value:
      - type: Anual # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 6,900
        append_value:

    features:
      - "**OWASP Top 10** escaneamento automatizado de vulnerabilidades"
      - "**MITRE ATT&CK básico** simulação de técnicas"
      - Testes de segurança de aplicações web
      - "**5 aplicações alvo** ou endpoints"
      - Relatórios mensais de segurança
      - Suporte por email (resposta em 24-48h)

    usages:
      - type: Mensal # Plan type (must match values in the 'plans' section above).
        list:
          - label: Apps Alvo
            value: 5
          - label: Horas de Escaneamento
            value: 40
      - type: Anual # Plan type (must match values in the 'plans' section above).
        list:
          - label: Apps Alvo
            value: 5
          - label: Horas de Escaneamento
            value: 480

    cta_btn:
      enable: true
      label: Iniciar Teste Gratuito
      url: /pt/contact/
      rel:
      target:

  # Professional Plan
  - enable: true
    featured: true
    badge:
      enable: true
      label: Mais Popular
    name: Profissional # Name of the pricing tier.
    description: Red teaming avançado com IA e simulação abrangente de ameaças para organizações em crescimento

    price:
      # Pricing details for each plan type.
      - type: Mensal # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 1,500
        append_value:
      - type: Anual # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 15,000
        append_value:

    features:
      - "Fluxos de teste **mapeados a MITRE ATT&CK**"
      - "**OWASP avançado** + vetores de ataque personalizados"
      - Testes de segurança de infraestrutura em nuvem
      - "**20 aplicações alvo** ou endpoints"
      - Testes de APIs e microsserviços
      - Integração Slack/Teams"
      - Relatórios semanais + dashboard ao vivo
      - Suporte prioritário (resposta em 4-8h)

    usages:
      - type: Mensal # Plan type (must match values in the 'plans' section above).
        list:
          - label: Apps Alvo
            value: 20
          - label: Horas de Escaneamento
            value: 120
      - type: Anual # Plan type (must match values in the 'plans' section above).
        list:
          - label: Apps Alvo
            value: 20
          - label: Horas de Escaneamento
            value: 1440

    cta_btn:
      enable: true
      label: Iniciar Teste Gratuito
      url: /pt/contact/
      rel:
      target:

  # Enterprise Plan
  - enable: true
    featured: false
    badge:
      enable: false
      label: Mais Popular
    name: Empresarial # Name of the pricing tier.
    description: Solução completa de red team com IA e cenários de ataque personalizados para grandes organizações

    price:
      # Empty price section to maintain layout spacing
      - type: Mensal # Plan type (must match values in the 'plans' section above).
        prepend_value: "Preço Personalizado"
        append_value: ""
      - type: Anual # Plan type (must match values in the 'plans' section above).
        prepend_value: "Preço Personalizado"
        append_value: ""

    features:
      - "**Cenários de ataque personalizados** adaptados à sua infraestrutura"
      - "**Simulações de ameaças persistentes avançadas (APT)**"
      - Testes de segurança multi-nuvem (AWS, Azure, GCP)
      - "**Alvos e aplicações ilimitados**"
      - Achados exportáveis e datados para os seus packs de auditoria
      - Integrações personalizadas (SIEM, sistemas de tickets)
      - Monitoramento e alertas em tempo real
      - Engenheiro de segurança dedicado + suporte 24/7

    usages:
      - type: Mensal # Plan type (must match values in the 'plans' section above).
        list:
          - label: Apps Alvo
            value: Ilimitado
          - label: Horas de Escaneamento
            value: 300
      - type: Anual # Plan type (must match values in the 'plans' section above).
        list:
          - label: Apps Alvo
            value: Ilimitado
          - label: Horas de Escaneamento
            value: 3600

    cta_btn:
      enable: true
      label: Contatar Vendas
      url: /pt/contact/
      rel:
      target:

# Pricing Comparison
comparison:
  - label: Frameworks de Ataque
    list:
      - value: Testes OWASP Top 10
        included:
          - true # Starter Plan
          - true # Professional Plan
          - true # Enterprise Plan
      - value: Técnicas MITRE ATT&CK
        included:
          - Técnicas mapeadas básicas # Starter Plan
          - Mapeamento alargado # Professional Plan
          - Playbooks à medida # Enterprise Plan
      - value: Vetores de Ataque Personalizados
        included:
          - false # Starter Plan
          - Limitado # Professional Plan
          - Ilimitado # Enterprise Plan
      - value: Simulação de Ameaça Persistente Avançada (APT)
        included:
          - false
          - false
          - true

  - label: Cobertura de Infraestrutura
    list:
      - value: Aplicações Web
        included:
          - true # Starter Plan
          - true # Professional Plan
          - true # Enterprise Plan
      - value: Testes de API e Microsserviços
        included:
          - false # Starter Plan
          - true # Professional Plan
          - true # Enterprise Plan
      - value: Infraestrutura em Nuvem (AWS/Azure/GCP)
        included:
          - false # Starter Plan
          - Nuvem única # Professional Plan
          - Multi-nuvem # Enterprise Plan
      - value: Infraestrutura de Rede
        included:
          - false
          - Limitado
          - Segundo o alcance

  - label: Integrações e Relatórios
    list:
      - value: Relatórios Básicos de Segurança
        included:
          - Mensal # Starter Plan
          - Semanal # Professional Plan
          - Tempo real # Enterprise Plan
      - value: Integração Slack/Teams
        included:
          - false # Starter Plan
          - true # Professional Plan
          - true # Enterprise Plan
      - value: Integração SIEM
        included:
          - false # Starter Plan
          - false # Professional Plan
          - true # Enterprise Plan
      - value: Achados exportáveis e datados
        included:
          - false
          - Básico
          - Packs de auditoria

  - label: Suporte e Serviços
    list:
      - value: Suporte por Email
        included:
          - Resposta em 24-48h # Starter Plan
          - Resposta em 4-8h # Professional Plan
          - Prioridade 24/7 # Enterprise Plan
      - value: Engenheiro de Segurança Dedicado
        included:
          - false # Starter Plan
          - false # Professional Plan
          - true # Enterprise Plan
      - value: Treinamentos e Workshops Personalizados
        included:
          - false # Starter Plan
          - Trimestral # Professional Plan
          - Mensal # Enterprise Plan
      - value: Implantação On-premise
        included:
          - false
          - false
          - Disponível
---
