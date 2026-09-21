---
enable: false
subtitle: Notas de campo
title: Lo que nos cuentan **después de correr pruebas**

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
      Esperábamos el pentest trimestral para saber si un cambio era seguro. Nubesti corre los mismos playbooks cada semana, así que cerramos hallazgos mientras el código sigue en el sprint.
    customer:
      name: "Carlos Rodriguez"
      role: "CISO en Tecnoayudas"
  - enable: true
    content: |
      Mapear cobertura a mano contra MITRE ATT&CK nos tomaba días y aún dejaba huecos. Los agentes recorren las tácticas que nos importan y en el informe se ve qué técnicas no dispararon.
    customer:
      name: "Miguel Santos"
      role: "Director de Seguridad en Escala"
  - enable: true
    content: |
      En hosting el cliente nota el downtime. Primero probamos en staging y luego un alcance fino en producción. Lo útil es pillar un origin mal configurado antes del deploy del viernes.
    customer:
      name: "Luis Martinez"
      role: "Director de Seguridad en Hostiva"
  - enable: true
    content: |
      Los pull requests que sugiere la IA son un punto de partida, no un milagro. Aun así, pasar de un hallazgo a un parche revisable la misma tarde es más rápido que abrir tickets a mano.
    customer:
      name: "Antonio Garcia"
      role: "CTO en Inspira Hosting"
  - enable: true
    content: |
      Los clientes piden evidencia OWASP Top 10 en cada paquete de auditoría. Ahora exportamos el último ciclo y lo adjuntamos. Menos diapositivas, más hallazgos con fecha que se pueden leer.
    customer:
      name: "Roberto Silva"
      role: "Líder de Seguridad en Tecnoayudas"
  - enable: true
    content: |
      Antes cada evaluación dependía de quién estaba de turno. El mismo alcance ahora produce un informe comparable, que es lo que operaciones necesitaba para ver si de verdad mejoramos.
    customer:
      name: "Sebastian Herrera"
      role: "VP de Operaciones en Escala"
  - enable: true
    content: |
      Nos ahogaba el ruido de los scanners. Nubesti a veces sigue sobre-reportando, pero el Risk Index y la evidencia dejan claro qué vale una ventana de cambio.
    customer:
      name: "Diego Morales"
      role: "Arquitecto de Seguridad en Hostiva"
  - enable: true
    content: |
      No contratamos dos pentesters más. Apuntamos los agentes a más propiedades y las mismas dos personas siguen revisando alcance, parando pruebas y decidiendo qué parchear.
    customer:
      name: "Carlos Lopez"
      role: "Gerente de Seguridad en Inspira Hosting"
---
