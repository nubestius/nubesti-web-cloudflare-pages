---
enable: true # Control the visibility of this section across all pages where it is used
title: Planes de Seguridad **Red Team con IA**

plans:
  enable: true
  list:
    # List of available plans. Ensure that these names are used consistently in other places where applicable.
    - selected: true
      label: Mensual # Use this value exactly in all corresponding places below.
    - selected: false
      label: Anual # Use this value exactly in all corresponding places below.

list:
  # Starter Plan
  - enable: true
    featured: false
    badge:
      enable: false
      label: Más Popular
    name: Básico # Name of the pricing tier.
    description: Detección esencial de vulnerabilidades con IA para equipos pequeños y aplicaciones

    price:
      # Pricing details for each plan type.
      - type: Mensual # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 690
        append_value:
      - type: Anual # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 6,900
        append_value:

    features:
      - "Escaneo automatizado de vulnerabilidades **OWASP Top 10**"
      - "Simulación básica de técnicas **MITRE ATT&CK**"
      - Pruebas de seguridad de aplicaciones web
      - "**5 aplicaciones** o endpoints objetivo"
      - Informes de seguridad mensuales
      - Soporte por email (respuesta 24-48h)

    usages:
      - type: Mensual # Plan type (must match values in the 'plans' section above).
        list:
          - label: Apps Objetivo
            value: 5
          - label: Horas de Escaneo
            value: 40
      - type: Anual # Plan type (must match values in the 'plans' section above).
        list:
          - label: Apps Objetivo
            value: 5
          - label: Horas de Escaneo
            value: 480

    cta_btn:
      enable: true
      label: Prueba Gratuita
      url: /contact/
      rel:
      target:

  # Professional Plan
  - enable: true
    featured: true
    badge:
      enable: true
      label: Más Popular
    name: Profesional # Name of the pricing tier.
    description: Red teaming avanzado con IA y simulación integral de amenazas para organizaciones en crecimiento

    price:
      # Pricing details for each plan type.
      - type: Mensual # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 1,500
        append_value:
      - type: Anual # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 15,000
        append_value:

    features:
      - "Flujos de prueba **mapeados a MITRE ATT&CK**"
      - "Pruebas **OWASP avanzadas** + vectores de ataque personalizados"
      - Pruebas de seguridad de infraestructura en la nube
      - "**20 aplicaciones** o endpoints objetivo"
      - Pruebas de APIs y microservicios
      - Integración con Slack/Teams
      - Informes semanales + dashboard en vivo
      - Soporte prioritario (respuesta 4-8h)

    usages:
      - type: Mensual # Plan type (must match values in the 'plans' section above).
        list:
          - label: Apps Objetivo
            value: 20
          - label: Horas de Escaneo
            value: 120
      - type: Anual # Plan type (must match values in the 'plans' section above).
        list:
          - label: Apps Objetivo
            value: 20
          - label: Horas de Escaneo
            value: 1440

    cta_btn:
      enable: true
      label: Prueba Gratuita
      url: /contact/
      rel:
      target:

  # Enterprise Plan
  - enable: true
    featured: false
    badge:
      enable: false
      label: Más Popular
    name: Empresarial # Name of the pricing tier.
    description: Solución completa de red team con IA y escenarios de ataque personalizados para grandes organizaciones

    price:
      # Empty price section to maintain layout spacing
      - type: Mensual # Plan type (must match values in the 'plans' section above).
        prepend_value: "Precio Personalizado"
        append_value: ""
      - type: Anual # Plan type (must match values in the 'plans' section above).
        prepend_value: "Precio Personalizado"
        append_value: ""

    features:
      - "**Escenarios de ataque personalizados** adaptados a tu infraestructura"
      - "Simulaciones de **amenazas persistentes avanzadas (APT)**"
      - Pruebas de seguridad multi-nube (AWS, Azure, GCP)
      - "**Objetivos y aplicaciones ilimitados**"
      - Hallazgos exportables con fecha para sus auditorías
      - Integraciones personalizadas (SIEM, sistemas de tickets)
      - Monitoreo y alertas en tiempo real
      - Ingeniero de seguridad dedicado + soporte 24/7

    usages:
      - type: Mensual # Plan type (must match values in the 'plans' section above).
        list:
          - label: Apps Objetivo
            value: Ilimitadas
          - label: Horas de Escaneo
            value: 300
      - type: Anual # Plan type (must match values in the 'plans' section above).
        list:
          - label: Apps Objetivo
            value: Ilimitadas
          - label: Horas de Escaneo
            value: 3600

    cta_btn:
      enable: true
      label: Contactar Ventas
      url: /contact/
      rel:
      target:

# Pricing Comparison
comparison:
  - label: Frameworks de Ataque
    list:
      - value: Pruebas OWASP Top 10
        included:
          - true # Starter Plan
          - true # Professional Plan
          - true # Enterprise Plan
      - value: Técnicas MITRE ATT&CK
        included:
          - Técnicas mapeadas básicas # Starter Plan
          - Mapeo ampliado # Professional Plan
          - Playbooks a medida # Enterprise Plan
      - value: Vectores de Ataque Personalizados
        included:
          - false # Starter Plan
          - Limitado # Professional Plan
          - Ilimitado # Enterprise Plan
      - value: Simulación de Amenazas Persistentes Avanzadas (APT)
        included:
          - false
          - false
          - true

  - label: Cobertura de Infraestructura
    list:
      - value: Aplicaciones Web
        included:
          - true # Starter Plan
          - true # Professional Plan
          - true # Enterprise Plan
      - value: Pruebas de APIs y Microservicios
        included:
          - false # Starter Plan
          - true # Professional Plan
          - true # Enterprise Plan
      - value: Infraestructura en la Nube (AWS/Azure/GCP)
        included:
          - false # Starter Plan
          - Una nube # Professional Plan
          - Multi-nube # Enterprise Plan
      - value: Infraestructura de Red
        included:
          - false
          - Limitado
          - Según alcance

  - label: Integraciones e Informes
    list:
      - value: Informes Básicos de Seguridad
        included:
          - Mensual # Starter Plan
          - Semanal # Professional Plan
          - Tiempo real # Enterprise Plan
      - value: Integración Slack/Teams
        included:
          - false # Starter Plan
          - true # Professional Plan
          - true # Enterprise Plan
      - value: Integración SIEM
        included:
          - false # Starter Plan
          - false # Professional Plan
          - true # Enterprise Plan
      - value: Hallazgos exportables con fecha
        included:
          - false
          - Básico
          - Packs de auditoría

  - label: Soporte y Servicios
    list:
      - value: Soporte por Email
        included:
          - Respuesta 24-48h # Starter Plan
          - Respuesta 4-8h # Professional Plan
          - Prioridad 24/7 # Enterprise Plan
      - value: Ingeniero de Seguridad Dedicado
        included:
          - false # Starter Plan
          - false # Professional Plan
          - true # Enterprise Plan
      - value: Capacitación y Talleres Personalizados
        included:
          - false # Starter Plan
          - Trimestral # Professional Plan
          - Mensual # Enterprise Plan
      - value: Despliegue On-premise
        included:
          - false
          - false
          - Disponible
---
