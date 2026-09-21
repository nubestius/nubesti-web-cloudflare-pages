---
title: Verlo funcionar
meta_title: "Nubesti Security Lab — hallazgo de ejemplo"
meta_description: "Un hallazgo de laboratorio etiquetado y un recorrido del producto. No es un informe de cliente."
draft: false
---

Esta página muestra cómo debe leerse un hallazgo. El registro es de **Nubesti Security Lab**. No es un cliente, no es un hostname de producción y no es una divulgación de un tercero.

## Registro de laboratorio

| Campo | Valor |
| --- | --- |
| Activo | `api.lab.nubesti.test` |
| Hallazgo | Broken object-level authorization |
| Severidad | Critical |
| MITRE ATT&CK | T1190 — Exploit Public-Facing Application |
| Evidencia | Par petición / respuesta de un replay controlado |
| Explotabilidad | Validado en laboratorio |
| Impacto | Lectura no autorizada de registros de otra cuenta en el dataset de lab |
| Remediación | Autorización a nivel de objeto en cada acceso; test de regresión |
| Estado | Corregido en lab build 2026.09 |
| Retest | Passed |

## Recorrido del producto

El embed es un tour de la interfaz, no evidencia sobre un cliente nombrado.

<div style="position: relative; box-sizing: content-box; max-height: 80vh; width: 100%; aspect-ratio: 2; padding: 40px 0;">
  <iframe
    src="https://app.supademo.com/embed/cmejoymuu0e7p5gz32dcatf9l?embed_v=2&utm_source=embed"
    loading="lazy"
    title="Recorrido del producto Nubesti"
    allow="clipboard-write"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
  ></iframe>
</div>

Para probar sus activos: [KYC](/legal/kyc/) de pago, [autorización](/legal/authorization/) y el [portal](https://app.nubesti.com).
