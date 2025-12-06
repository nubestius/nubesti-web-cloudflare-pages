import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const llmsContent = `# Nubesti - AI Red Team Platform
> Autonomous Red Team AI Agent for Enterprise Cybersecurity

## About Nubesti
Nubesti is an AI-powered cybersecurity platform that provides autonomous red team capabilities for enterprise security testing. Our platform uses advanced AI agents to identify vulnerabilities, conduct penetration testing, and provide actionable security insights.

## Core Services
- **Autonomous Red Team Operations**: AI-driven penetration testing without human intervention
- **Vulnerability Assessment**: Continuous security scanning and risk analysis
- **MITRE ATT&CK Framework**: Attack simulations based on real-world threat tactics
- **OWASP Compliance**: Web application security testing
- **Cloud Security**: AWS, Azure, Google Cloud security assessments

## Key Features
- 24/7 autonomous security testing
- Real-time vulnerability detection
- Detailed remediation guidance
- Integration with SIEM/SOAR platforms
- Multi-cloud support
- Compliance reporting (SOC2, ISO27001, GDPR)

## Integrations
Nubesti integrates with:
- Slack, Microsoft Teams, Discord (notifications)
- Jira, ServiceNow (ticketing)
- Splunk, PagerDuty (monitoring)
- GitHub, GitLab (DevSecOps)
- AWS Security Hub, Azure Sentinel (cloud)

## Target Audience
- Chief Information Security Officers (CISOs)
- Security Operations Centers (SOC)
- DevSecOps teams
- Enterprise IT security teams
- Compliance officers

## Pricing
Nubesti offers tiered pricing:
- **Starter**: For small teams, basic vulnerability scanning
- **Professional**: Full red team capabilities, advanced reporting
- **Enterprise**: Custom solutions, dedicated support, SLA

## Languages
Available in: English, Spanish, French, Portuguese

## Contact
- Website: https://nubesti.com
- Demo: https://nubesti.com/demo
- Pricing: https://nubesti.com/pricing
- Documentation: https://nubesti.com/faq

## Technical Resources
- Blog: https://nubesti.com/blog (cybersecurity articles)
- Integrations: https://nubesti.com/integration
- Changelog: https://nubesti.com/changelog

## Company
Nubesti provides cutting-edge AI-powered cybersecurity solutions for enterprises worldwide. Our autonomous AI agents conduct continuous red team operations to identify and help remediate security vulnerabilities before attackers can exploit them.
`;

  return new Response(llmsContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
