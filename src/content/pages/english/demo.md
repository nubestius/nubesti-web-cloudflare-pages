---
title: See it work
meta_title: "Nubesti Security Lab — example finding"
meta_description: "A labeled lab finding and a product walkthrough. Not a customer report."
draft: false
---

This page shows how a finding is meant to be read. The record below is from **Nubesti Security Lab**. It is not a customer, not a production hostname, and not a third-party disclosure.

## Lab record

| Field | Value |
| --- | --- |
| Asset | `api.lab.nubesti.test` |
| Finding | Broken object-level authorization |
| Severity | Critical |
| MITRE ATT&CK | T1190 — Exploit Public-Facing Application |
| Evidence | Request / response pair from a controlled lab replay |
| Exploitability | Validated in the lab (object ID swapped; another tenant record returned) |
| Impact | Unauthorized read of another account’s records in the lab dataset |
| Suggested remediation | Enforce object-level authorization on every record access; add a regression test |
| Status | Fixed in lab build 2026.09 |
| Retest | Passed |

## Product walkthrough

The embed below is a product tour. Treat it as a walkthrough of the interface, not as evidence about a named customer.

<div style="position: relative; box-sizing: content-box; max-height: 80vh; width: 100%; aspect-ratio: 2; padding: 40px 0;">
  <iframe
    src="https://app.supademo.com/embed/cmejoymuu0e7p5gz32dcatf9l?embed_v=2&utm_source=embed"
    loading="lazy"
    title="Nubesti product walkthrough"
    allow="clipboard-write"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
  ></iframe>
</div>

To run tests on your own assets: complete paid [KYC](/legal/kyc/), confirm [authorization](/legal/authorization/), then use the [portal](https://app.nubesti.com).
