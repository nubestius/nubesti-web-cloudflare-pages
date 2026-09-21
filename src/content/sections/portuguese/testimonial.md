---
enable: false
subtitle: Notas de campo
title: O que as equipes nos dizem **depois dos testes**
draft: false

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
      Esperávamos o pentest trimestral para saber se uma mudança era segura. A Nubesti corre os mesmos playbooks todas as semanas, por isso fechamos achados enquanto o código ainda está no sprint.
    customer:
      name: "Carlos Rodriguez"
      role: "CISO na Tecnoayudas"
  - enable: true
    content: |
      Mapear cobertura à mão contra MITRE ATT&CK levava dias e ainda deixava buracos. Os agentes percorrem as táticas que nos importam e no relatório vê-se quais técnicas não dispararam.
    customer:
      name: "Miguel Santos"
      role: "Chefe de Segurança na Escala"
  - enable: true
    content: |
      Em hosting o cliente nota downtime. Testamos primeiro em staging e depois um âmbito fino em produção. O útil é apanhar um origin mal configurado antes do deploy de sexta.
    customer:
      name: "Luis Martinez"
      role: "Diretor de Segurança na Hostiva"
  - enable: true
    content: |
      Os pull requests que a IA sugere são um ponto de partida, não um milagre. Ainda assim, ir de um achado a um patch revisável na mesma tarde é mais rápido do que abrir tickets à mão.
    customer:
      name: "Antonio Garcia"
      role: "CTO na Inspira Hosting"
  - enable: true
    content: |
      Os clientes pedem evidência OWASP Top 10 em cada pacote de auditoria. Agora exportamos o último ciclo e anexamos. Menos slides, mais achados datados que se conseguem ler.
    customer:
      name: "Roberto Silva"
      role: "Líder de Segurança na Tecnoayudas"
  - enable: true
    content: |
      Antes cada avaliação dependia de quem estava de turno. O mesmo âmbito agora produz um relatório comparável, o que as operações precisavam para ver se de facto melhorámos.
    customer:
      name: "Sebastian Herrera"
      role: "VP de Operações na Escala"
  - enable: true
    content: |
      O ruído dos scanners afogava-nos. A Nubesti ainda sobre-reporta por vezes, mas o Risk Index e a evidência deixam claro o que vale uma janela de mudança.
    customer:
      name: "Diego Morales"
      role: "Arquiteto de Segurança na Hostiva"
  - enable: true
    content: |
      Não contratámos mais dois pentesters. Apontámos os agentes a mais propriedades e as mesmas duas pessoas continuam a rever âmbito, parar testes e decidir o que corrigir.
    customer:
      name: "Carlos Lopez"
      role: "Gerente de Segurança na Inspira Hosting"
---
