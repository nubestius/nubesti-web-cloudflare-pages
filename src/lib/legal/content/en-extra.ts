import type { LegalDocument } from "../types";

export const extraLegalDocuments: LegalDocument[] = [
  {
    slug: "kyc",
    updated: "2026-09-21",
    title: "KYC & Verification Policy",
    summary:
      "Every customer must complete paid identity and company verification before launching tests or activating a paid plan.",
    meta_description:
      "Nubesti KYC policy: mandatory, paid identity verification for customers before platform access and security testing.",
    body: `Nubesti sells professional offensive-security tooling. We do not activate paid access or allow tests to launch until the customer has completed Know Your Customer (“KYC”) and identity verification **and** paid the KYC / verification fee.

This policy forms part of the [Terms of Service](/legal/terms/). It works with [Billing & Renewals](/legal/billing/), [Export Controls & Sanctions](/legal/export-controls/), and the [Authorization Letter](/legal/authorization/).

## 1. Who must complete KYC

KYC is mandatory for:

- The contracting organization (legal entity or sole trader)
- Beneficial owners or control persons we reasonably request
- Every user who can launch tests, change scope, or invite teammates
- Resellers or partners who buy on behalf of an end customer

A demo conversation does not replace KYC. Trial features that could touch live targets stay locked until verification is approved.

## 2. Customers pay for KYC

Identity verification is a **paid service**, not included in the subscription price.

- The KYC / verification fee is the amount shown at checkout, in the portal, or in your order form
- The fee is due **in advance**, in addition to plan, add-on, and tax charges
- You authorize Nubesti and its payment processors to charge the payment method on file for KYC fees
- Extra verified users, failed retries that require a new review, and periodic re-verification may be billed again
- KYC fees are **non-refundable**, including if we decline the account, you cancel before tests start, or a subscription is later refunded under other rules
- SLA credits never apply to KYC fees

If an order form states a different KYC price for that customer, the order form controls.

## 3. What we verify

We may require:

- Government-issued photo ID for authorized users
- Legal name, formation documents, and registered address of the company
- Proof that the signer can bind the company
- Beneficial-ownership or control information
- Proof of authorization to test the systems you designate (see the [Authorization Letter](/legal/authorization/))
- Screening against sanctions, watchlists, and fraud signals

We may use a third-party identity-verification provider. That provider is a subprocessor listed or described on [Subprocessors](/legal/subprocessors/).

## 4. When access starts

We may take payment for the plan and for KYC before review finishes. **Tests cannot launch, APIs that start scans stay disabled, and paid seats stay inactive until KYC is approved.**

If KYC is rejected or not completed within the window we set (typically 14 days), we may cancel unused subscription time. KYC fees already paid stay earned. Any unused prepaid subscription may be refunded minus KYC and payment-processing costs, unless law requires otherwise.

## 5. Ongoing duties

You must keep KYC information accurate. Tell us promptly if control of the company, authorized testers, or billing contacts change. We may freeze launches until re-verification is paid and approved.

We may request a fresh KYC at renewal, after a risk event, or when law or our banking partners require it.

## 6. Data and retention

KYC data is personal data. We use it to onboard you, prevent abuse of security-testing tools, comply with sanctions and anti-fraud rules, and keep records. See the [Privacy Policy](/legal/privacy/).

We retain KYC records for as long as the account exists and for a commercially reasonable period afterward (typically at least five years) unless a longer legal retention applies.

## 7. No guarantee of approval

Passing payment does not guarantee approval. We may decline or limit service where verification is incomplete, inconsistent, high-risk, or barred by [export and sanctions rules](/legal/export-controls/).

## 8. Contact

KYC and billing: [legal@nubesti.com](mailto:legal@nubesti.com)  
Privacy of KYC documents: [privacy@nubesti.com](mailto:privacy@nubesti.com)`,
  },
  {
    slug: "ai-policy",
    updated: "2026-09-21",
    title: "AI Use Policy",
    summary:
      "How Nubesti uses artificial intelligence in testing and reporting, what we do not train on, and the limits of AI findings.",
    meta_description:
      "Nubesti AI use policy covering customer data, model training, human review, and limits of automated security findings.",
    body: `Nubesti uses automation and artificial intelligence to find weaknesses and draft reports. This policy explains how that works. It supplements the [Terms of Service](/legal/terms/) and [Privacy Policy](/legal/privacy/).

## 1. What the AI does

AI and automated engines may:

- Map and probe in-scope assets you designate
- Classify and prioritize findings
- Draft report language, remediation hints, and pull-request suggestions
- Reduce obvious false positives

Humans may review enterprise or professional-services work. Self-serve scans can be fully automated.

## 2. Customer data and training

We process customer targets, evidence, and findings to deliver the service you bought.

**We do not use your customer findings, evidence, or target lists to train public foundation models.** We may use de-identified, aggregated product telemetry (for example, feature reliability) to operate and improve the platform.

If a future feature would use customer content to improve models in a way that could identify you, we will say so in-product and update this page before enabling it.

## 3. Your responsibilities

You remain responsible for:

- Completing [KYC](/legal/kyc/) and holding a valid [authorization](/legal/authorization/)
- Choosing safe scope (prefer staging)
- Reviewing AI output before you treat it as final
- Deciding which patches to apply

AI suggestions can be wrong, incomplete, or unsafe in your environment.

## 4. Limits

AI-assisted testing does **not** guarantee that every vulnerability will be found, that systems are breach-proof, or that you will pass a compliance audit. The [disclaimers](/legal/terms/) in the Terms apply.

## 5. Human review and support

Paid support and professional services may include human analysis. Unless an order form says a named analyst will review every finding, automation is the default.

## 6. Prohibited AI use by customers

You may not use Nubesti output to attack systems you are not authorized to test, to generate malware for harm, or to misrepresent findings as a formal certification.

## 7. Contact

[legal@nubesti.com](mailto:legal@nubesti.com) · [privacy@nubesti.com](mailto:privacy@nubesti.com)`,
  },
  {
    slug: "vulnerability-disclosure",
    updated: "2026-09-21",
    title: "Vulnerability Disclosure Policy",
    summary:
      "How to report a security issue in Nubesti systems, our safe harbor, and what is out of scope.",
    meta_description:
      "Nubesti coordinated vulnerability disclosure policy, safe harbor, and reporting channel for the platform.",
    body: `If you find a security issue **in Nubesti systems** (our website, portal, or platform—not a customer target), we want to hear from you. This is the policy referenced by [/.well-known/security.txt](https://nubesti.com/.well-known/security.txt).

Customer-target findings belong to that customer. Do not send us exploit details about a third party’s production systems.

## 1. How to report

Email [security@nubesti.com](mailto:security@nubesti.com) with:

- A clear description and impact
- Steps to reproduce
- Affected URL, endpoint, or component
- Proof that does not destroy data or expose other customers

We aim to acknowledge within **24 hours** and give an initial assessment within **48 hours**.

## 2. Safe harbor

We will not pursue civil or criminal action against researchers who:

- Act in good faith
- Avoid privacy violations, data destruction, and service degradation
- Do not access data that is not theirs beyond what is needed to demonstrate the issue
- Give us a reasonable chance to fix the issue before public disclosure

This safe harbor does not cover attacks on customer environments, physical intrusion, or extortion.

## 3. Out of scope

- Denial-of-service or volumetric floods against production
- Spam, social engineering of staff, or phishing our customers
- Physical attacks
- Findings that only affect outdated browsers or require MITM on the researcher’s own machine
- Issues in third-party products we do not operate, except for a clear misconfiguration we control

## 4. Coordination

Please do not post a full exploit before we have a fix or have agreed a disclosure date. We are happy to credit researchers who want to be named, unless they prefer to stay anonymous.

We do not currently run a public bug-bounty program. A thank-you or swag may be offered at our discretion; payment is not promised.

## 5. Related pages

- [Security Overview](/legal/security/)
- [Acceptable Use Policy](/legal/acceptable-use/)
- [Ethics & Reporting](/legal/ethics/)`,
  },
  {
    slug: "authorization",
    updated: "2026-09-21",
    title: "Authorization Letter",
    summary:
      "The written authorization customers must give before Nubesti may test in-scope systems, including a copy-ready letter.",
    meta_description:
      "Nubesti customer authorization letter and safe-harbor terms for in-scope AI red team testing.",
    body: `Nubesti will not launch tests until KYC is approved **and** you confirm written authorization for the scope. This page is the standard authorization. It supplements the [Rules of Engagement](/legal/engagement/) and [Acceptable Use Policy](/legal/acceptable-use/).

By checking the authorization box in the portal, signing an order form, or sending the letter below, you represent that you can bind the owner of the targets.

## 1. What you authorize

You authorize Nubesti LLC and its automated agents to perform security testing **only** against assets you designate in the product or in a statement of work, during the period the account is active or the SOW states.

You confirm that you own those systems or have explicit written permission from the owner, and that any cloud or ISP notice required by that provider has been given.

## 2. Safe harbor (in-scope only)

For in-scope activity performed through Nubesti, you agree to treat that activity as consented security testing. You will not treat it as unauthorized access **provided** we stay inside the scope and [Rules of Engagement](/legal/engagement/).

This does not authorize testing of third-party systems you do not control.

## 3. Your duties

- Complete and pay [KYC](/legal/kyc/)
- Keep an emergency contact reachable while tests run
- Stop or resize tests if production impact appears
- Keep findings confidential except as needed to remediate or as law requires

## 4. Copy-ready letter

You may send this on company letterhead to [legal@nubesti.com](mailto:legal@nubesti.com) or upload it during KYC:

> I, [name / title], am authorized to bind [legal entity]. I authorize Nubesti LLC to perform security testing, including automated and AI-assisted testing, against the assets we designate in the Nubesti portal or in an attached scope list, for the term of our agreement. We own those assets or have written permission from the owner. We have completed (or will complete and pay for) Nubesti KYC before tests launch. Emergency contact: [name, email]. Signed: [name], [date].

## 5. Withdrawal

You may revoke authorization by stopping tests in the portal and emailing [legal@nubesti.com](mailto:legal@nubesti.com). Already-running jobs will be halted as soon as reasonably possible. Fees already paid follow the [Refund Policy](/legal/refunds/) and [KYC Policy](/legal/kyc/).`,
  },
  {
    slug: "export-controls",
    updated: "2026-09-21",
    title: "Export Controls & Sanctions",
    summary:
      "Nubesti does not provide security-testing services to sanctioned persons or comprehensively sanctioned jurisdictions.",
    meta_description:
      "Nubesti export-control and OFAC/sanctions policy for the AI red team platform.",
    body: `Security-testing software can be sensitive. Nubesti LLC complies with applicable U.S. export-control and sanctions laws, including programs administered by OFAC, and with comparable rules that apply to us.

This page forms part of the [Terms of Service](/legal/terms/). [KYC](/legal/kyc/) is one of the ways we screen customers.

## 1. Who may not use the services

You may not access or use Nubesti if you are:

- Located in, ordinarily resident in, or organized under the laws of a comprehensively sanctioned jurisdiction
- A person or entity on a U.S. or other applicable sanctions or denied-party list
- Acting for or on behalf of such a person or jurisdiction
- Using the services to support a prohibited end use (including unapproved military or weapons-related use where the law forbids it)

We may add geographic or entity blocks as lists change.

## 2. Your representations

Each time you log in, pay, or launch a test, you represent that the statements in section 1 remain true, that KYC information is accurate, and that you will not divert the service to a prohibited party.

## 3. What we may do

We may refuse, suspend, or terminate accounts, freeze launches, and retain KYC and billing records when required for sanctions compliance. We are not obligated to provide the service where doing so would break the law.

## 4. Customer export responsibility

If you download software, reports, or technical data from the platform, you are responsible for your own export and transfer compliance.

## 5. Contact

Sanctions and eligibility questions: [legal@nubesti.com](mailto:legal@nubesti.com)`,
  },
];
