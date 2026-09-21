---
enable: true # Control the visibility of this section across all pages where it is used
title: AI Red Team **Security Plans**

plans:
  enable: true
  list:
    # List of available plans. Ensure that these names are used consistently in other places where applicable.
    - selected: true
      label: Monthly # Use this value exactly in all corresponding places below.
    - selected: false
      label: Yearly # Use this value exactly in all corresponding places below.

list:
  # Starter Plan
  - enable: true
    featured: false
    badge:
      enable: false
      label: Most Popular
    name: Starter # Name of the pricing tier.
    description: Essential AI-powered vulnerability detection for small teams and applications

    price:
      # Pricing details for each plan type.
      - type: Monthly # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 690
        append_value:
      - type: Yearly # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 6,900
        append_value:

    features:
      - "**OWASP Top 10** automated vulnerability scanning"
      - "**Basic MITRE ATT&CK** technique simulation"
      - Web application security testing
      - "**5 target applications** or endpoints"
      - Monthly security reports
      - Email support (24-48h response)

    usages:
      - type: Monthly # Plan type (must match values in the 'plans' section above).
        list:
          - label: Target Apps
            value: 5
          - label: Scan Hours
            value: 40
      - type: Yearly # Plan type (must match values in the 'plans' section above).
        list:
          - label: Target Apps
            value: 5
          - label: Scan Hours
            value: 480

    cta_btn:
      enable: true
      label: Start Free Trial
      url: /contact/
      rel:
      target:

  # Professional Plan
  - enable: true
    featured: true
    badge:
      enable: true
      label: Most Popular
    name: Professional # Name of the pricing tier.
    description: Advanced AI red teaming with comprehensive threat simulation for growing organizations

    price:
      # Pricing details for each plan type.
      - type: Monthly # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 1,500
        append_value:
      - type: Yearly # Plan type (must match values in the 'plans' section above).
        prepend_value: $
        value: 15,000
        append_value:

    features:
      - "Testing workflows **mapped to MITRE ATT&CK** techniques"
      - "**Advanced OWASP** testing + custom attack vectors"
      - Cloud infrastructure security testing
      - "**20 target applications** or endpoints"
      - API and microservices testing
      - Slack/Teams integration
      - Weekly reports + live dashboard
      - Priority support (4-8h response)

    usages:
      - type: Monthly # Plan type (must match values in the 'plans' section above).
        list:
          - label: Target Apps
            value: 20
          - label: Scan Hours
            value: 120
      - type: Yearly # Plan type (must match values in the 'plans' section above).
        list:
          - label: Target Apps
            value: 20
          - label: Scan Hours
            value: 1440

    cta_btn:
      enable: true
      label: Start Free Trial
      url: /contact/
      rel:
      target:

  # Enterprise Plan
  - enable: true
    featured: false
    badge:
      enable: false
      label: Most Popular
    name: Enterprise # Name of the pricing tier.
    description: Complete AI red team solution with custom attack scenarios for large organizations

    price:
      # Empty price section to maintain layout spacing
      - type: Monthly # Plan type (must match values in the 'plans' section above).
        prepend_value: "Custom Price"
        append_value: ""
      - type: Yearly # Plan type (must match values in the 'plans' section above).
        prepend_value: "Custom Price"
        append_value: ""

    features:
      - "**Custom attack scenarios** tailored to your infrastructure"
      - "**Advanced persistent threat (APT)** simulations"
      - Multi-cloud security testing (AWS, Azure, GCP)
      - "**Unlimited targets** and applications"
      - Exportable dated findings for your audit packs
      - Custom integrations (SIEM, ticketing systems)
      - Real-time monitoring and alerts
      - Dedicated security engineer + 24/7 support

    usages:
      - type: Monthly # Plan type (must match values in the 'plans' section above).
        list:
          - label: Target Apps
            value: Unlimited
          - label: Scan Hours
            value: 300
      - type: Yearly # Plan type (must match values in the 'plans' section above).
        list:
          - label: Target Apps
            value: Unlimited
          - label: Scan Hours
            value: 3600

    cta_btn:
      enable: true
      label: Contact Sales
      url: /contact/
      rel:
      target:

# Pricing Comparison
comparison:
  - label: Attack Frameworks
    list:
      - value: OWASP Top 10 Testing
        included:
          - true # Starter Plan
          - true # Professional Plan
          - true # Enterprise Plan
      - value: MITRE ATT&CK Techniques
        included:
          - Basic mapped techniques # Starter Plan
          - Expanded mapped techniques # Professional Plan
          - Custom scoped playbooks # Enterprise Plan
      - value: Custom Attack Vectors
        included:
          - false # Starter Plan
          - Limited # Professional Plan
          - Unlimited # Enterprise Plan
      - value: Advanced Persistent Threat (APT) Simulation
        included:
          - false
          - false
          - true

  - label: Infrastructure Coverage
    list:
      - value: Web Applications
        included:
          - true # Starter Plan
          - true # Professional Plan
          - true # Enterprise Plan
      - value: API & Microservices Testing
        included:
          - false # Starter Plan
          - true # Professional Plan
          - true # Enterprise Plan
      - value: Cloud Infrastructure (AWS/Azure/GCP)
        included:
          - false # Starter Plan
          - Single cloud # Professional Plan
          - Multi-cloud # Enterprise Plan
      - value: Network Infrastructure
        included:
          - false
          - Limited
          - In-scope custom

  - label: Integrations & Reporting
    list:
      - value: Basic Security Reports
        included:
          - Monthly # Starter Plan
          - Weekly # Professional Plan
          - Real-time # Enterprise Plan
      - value: Slack/Teams Integration
        included:
          - false # Starter Plan
          - true # Professional Plan
          - true # Enterprise Plan
      - value: SIEM Integration
        included:
          - false # Starter Plan
          - false # Professional Plan
          - true # Enterprise Plan
      - value: Exportable dated findings
        included:
          - false
          - Basic
          - Audit packs

  - label: Support & Services
    list:
      - value: Email Support
        included:
          - 24-48h response # Starter Plan
          - 4-8h response # Professional Plan
          - 24/7 priority # Enterprise Plan
      - value: Dedicated Security Engineer
        included:
          - false # Starter Plan
          - false # Professional Plan
          - true # Enterprise Plan
      - value: Custom Training & Workshops
        included:
          - false # Starter Plan
          - Quarterly # Professional Plan
          - Monthly # Enterprise Plan
      - value: On-premise Deployment
        included:
          - false
          - false
          - Available
---
