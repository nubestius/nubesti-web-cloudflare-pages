---
enable: false
subtitle: Field notes
title: What operators tell us **after they run tests**

marquee:
  element_width: "29.25rem"
  element_width_auto: false
  element_width_in_small_devices: "23rem"
  pause_on_hover: true
  reverse: ""
  duration: "50s"

list:
  - enable: true
    content: |
      We used to wait for a quarterly pentest to know if a change was safe. Nubesti runs the same playbooks every week, so we close findings while the code is still in the sprint.
    customer:
      name: "Carlos Rodriguez"
      role: "CISO at Tecnoayudas"
  - enable: true
    content: |
      Mapping coverage by hand against MITRE ATT&CK took days and still left holes. The agents walk the tactics we care about and show us, in the report, which techniques never fired.
    customer:
      name: "Miguel Santos"
      role: "Head of Security at Escala"
  - enable: true
    content: |
      Hosting customers notice downtime. We keep tests on staging first, then promote a thin production scope. The useful part is catching a misconfigured origin before it hits a Friday deploy.
    customer:
      name: "Luis Martinez"
      role: "Security Director at Hostiva"
  - enable: true
    content: |
      The draft pull requests are a starting point, not a miracle. Still, going from a finding to a reviewable patch in the same afternoon is faster than writing tickets by hand.
    customer:
      name: "Antonio Garcia"
      role: "CTO at Inspira Hosting"
  - enable: true
    content: |
      Our clients ask for OWASP Top 10 evidence in every audit pack. We now export the last cycle and attach it. Less slideware, more dated findings they can actually read.
    customer:
      name: "Roberto Silva"
      role: "Security Lead at Tecnoayudas"
  - enable: true
    content: |
      Before, each assessment depended on who was on call that week. The same scope now produces a comparable report, which is what operations needed to track whether we actually got better.
    customer:
      name: "Sebastian Herrera"
      role: "VP of Operations at Escala"
  - enable: true
    content: |
      We were drowning in scanner noise. Nubesti still over-reports sometimes, but the Risk Index and the evidence make it obvious which items are worth a change window.
    customer:
      name: "Diego Morales"
      role: "Security Architect at Hostiva"
  - enable: true
    content: |
      We did not hire two more pentesters. We pointed the agents at more properties and kept the same two people reviewing scope, halting tests, and deciding what to patch.
    customer:
      name: "Carlos Lopez"
      role: "Security Manager at Inspira Hosting"
---
