import type { LegalDocument } from "../types";

export const extraLegalDocuments: LegalDocument[] = [
  {
    slug: "kyc",
    updated: "2026-09-21",
    title: "Política de KYC y verificación",
    summary:
      "Todo cliente debe completar y pagar la verificación de identidad y empresa antes de lanzar pruebas o activar un plan de pago.",
    meta_description:
      "Política KYC de Nubesti: verificación de identidad obligatoria y de pago antes del acceso a la plataforma y a las pruebas.",
    body: `Nubesti vende herramientas profesionales de seguridad ofensiva. No activamos el acceso de pago ni permitimos lanzar pruebas hasta que el cliente haya completado el Know Your Customer (“KYC”) y la verificación de identidad **y** haya pagado la tarifa de KYC / verificación.

Esta política forma parte de los [Términos del servicio](/legal/terms/). Se lee con [Facturación y renovaciones](/legal/billing/), [Controles de exportación y sanciones](/legal/export-controls/) y la [Carta de autorización](/legal/authorization/).

## 1. Quién debe completar el KYC

El KYC es obligatorio para:

- La organización contratante (persona jurídica o autónomo)
- Beneficiarios finales o personas de control que pidamos de forma razonable
- Cada usuario que pueda lanzar pruebas, cambiar el alcance o invitar compañeros
- Revendedores o partners que compren para un cliente final

Una demo no sustituye el KYC. Las funciones de prueba que puedan tocar objetivos reales permanecen bloqueadas hasta la aprobación.

## 2. El cliente paga el KYC

La verificación de identidad es un **servicio de pago**, no está incluida en el precio de la suscripción.

- La tarifa de KYC / verificación es la que aparece en el checkout, el portal o el pedido
- Se cobra **por adelantado**, además del plan, complementos e impuestos
- Usted autoriza a Nubesti y a sus procesadores de pago a cargar el método registrado por las tarifas KYC
- Usuarios verificados adicionales, reintentos que exijan una nueva revisión y re-verificaciones periódicas pueden facturarse de nuevo
- Las tarifas KYC son **no reembolsables**, incluso si rechazamos la cuenta, cancela antes de las pruebas o más adelante se reembolsa la suscripción por otras reglas
- Los créditos del SLA no aplican a las tarifas KYC

Si un pedido fija otro precio KYC para ese cliente, prevalece el pedido.

## 3. Qué verificamos

Podemos exigir:

- Documento de identidad con foto de los usuarios autorizados
- Razón social, documentos de constitución y domicilio registrado
- Prueba de que el firmante puede obligar a la empresa
- Información de beneficiarios finales o de control
- Prueba de autorización para probar los sistemas que designe (véase la [Carta de autorización](/legal/authorization/))
- Cribado de sanciones, listas de vigilancia y fraude

Podemos usar un proveedor tercero de verificación de identidad. Ese proveedor es un subencargado descrito en [Subencargados](/legal/subprocessors/).

## 4. Cuándo empieza el acceso

Podemos cobrar el plan y el KYC antes de terminar la revisión. **Las pruebas no se lanzan, las APIs de escaneo siguen desactivadas y los asientos de pago inactivos hasta que el KYC esté aprobado.**

Si el KYC se rechaza o no se completa en el plazo que indiquemos (normalmente 14 días), podemos cancelar el tiempo de suscripción no usado. Las tarifas KYC ya pagadas se consideran devengadas. La suscripción prepaga no usada puede reembolsarse descontando KYC y costes de pago, salvo que la ley exija otra cosa.

## 5. Deberes continuos

Debe mantener la información KYC exacta. Avísenos si cambia el control de la empresa, los testers autorizados o los contactos de facturación. Podemos congelar lanzamientos hasta que la re-verificación se pague y apruebe.

Podemos pedir un KYC nuevo en la renovación, tras un evento de riesgo o cuando lo exija la ley o nuestros partners bancarios.

## 6. Datos y conservación

Los datos KYC son datos personales. Los usamos para el alta, evitar el abuso de herramientas de pentesting, cumplir sanciones y antifraude, y conservar registros. Véase la [Política de privacidad](/legal/privacy/).

Conservamos el KYC mientras exista la cuenta y un período comercialmente razonable después (en general al menos cinco años), salvo una retención legal más larga.

## 7. No hay garantía de aprobación

Pagar no garantiza la aprobación. Podemos denegar o limitar el servicio si la verificación es incompleta, inconsistente, de alto riesgo o está prohibida por las [reglas de exportación y sanciones](/legal/export-controls/).

## 8. Contacto

KYC y facturación: [legal@nubesti.com](mailto:legal@nubesti.com)  
Privacidad de documentos KYC: [privacy@nubesti.com](mailto:privacy@nubesti.com)`,
  },
  {
    slug: "ai-policy",
    updated: "2026-09-21",
    title: "Política de uso de IA",
    summary:
      "Cómo Nubesti usa inteligencia artificial en las pruebas y los informes, qué no entrenamos y los límites de los hallazgos automáticos.",
    meta_description:
      "Política de IA de Nubesti: datos del cliente, entrenamiento de modelos, revisión humana y límites de los hallazgos automáticos.",
    body: `Nubesti usa automatización e inteligencia artificial para encontrar debilidades y redactar informes. Esta política lo explica. Complementa los [Términos del servicio](/legal/terms/) y la [Política de privacidad](/legal/privacy/).

## 1. Qué hace la IA

Los motores de IA y automatización pueden:

- Mapear y sondear los activos en alcance que usted designe
- Clasificar y priorizar hallazgos
- Redactar informes, pistas de remediación y sugerencias de pull request
- Reducir falsos positivos evidentes

En trabajo enterprise o de servicios profesionales puede haber revisión humana. Los escaneos self-serve pueden ser totalmente automáticos.

## 2. Datos del cliente y entrenamiento

Tratamos objetivos, evidencia y hallazgos para prestar el servicio contratado.

**No usamos sus hallazgos, evidencia ni listas de objetivos para entrenar modelos fundacionales públicos.** Podemos usar telemetría agregada y desidentificada del producto (por ejemplo, fiabilidad de funciones) para operar y mejorar la plataforma.

Si una función futura usara contenido del cliente para mejorar modelos de un modo que pudiera identificarle, lo diremos en el producto y actualizaremos esta página antes de activarla.

## 3. Sus responsabilidades

Usted sigue siendo responsable de:

- Completar el [KYC](/legal/kyc/) y tener una [autorización](/legal/authorization/) válida
- Elegir un alcance seguro (prefiera staging)
- Revisar la salida de la IA antes de tratarla como definitiva
- Decidir qué parches aplicar

Las sugerencias de IA pueden ser incorrectas, incompletas o inseguras en su entorno.

## 4. Límites

Las pruebas asistidas por IA **no** garantizan que se encuentre cada vulnerabilidad, que los sistemas sean inexpugnables ni que apruebe una auditoría. Aplican las [exenciones](/legal/terms/) de los Términos.

## 5. Revisión humana y soporte

El soporte de pago y los servicios profesionales pueden incluir análisis humano. Salvo que un pedido diga que un analista nombrado revisará cada hallazgo, la automatización es el valor por defecto.

## 6. Uso prohibido de la IA por el cliente

No puede usar la salida de Nubesti para atacar sistemas no autorizados, generar malware con fines de daño ni presentar hallazgos como una certificación formal.

## 7. Contacto

[legal@nubesti.com](mailto:legal@nubesti.com) · [privacy@nubesti.com](mailto:privacy@nubesti.com)`,
  },
  {
    slug: "vulnerability-disclosure",
    updated: "2026-09-21",
    title: "Política de divulgación de vulnerabilidades",
    summary:
      "Cómo reportar un problema de seguridad en sistemas Nubesti, nuestro safe harbor y qué queda fuera de alcance.",
    meta_description:
      "Política de divulgación coordinada de vulnerabilidades de Nubesti, safe harbor y canal de reporte de la plataforma.",
    body: `Si encuentra un problema de seguridad **en sistemas Nubesti** (sitio, portal o plataforma, no un objetivo de un cliente), queremos saberlo. Esta es la política a la que apunta [/.well-known/security.txt](https://nubesti.com/.well-known/security.txt).

Los hallazgos sobre objetivos de un cliente pertenecen a ese cliente. No nos envíe detalles de exploit sobre producción de un tercero.

## 1. Cómo reportar

Escriba a [security@nubesti.com](mailto:security@nubesti.com) con:

- Descripción e impacto
- Pasos para reproducir
- URL, endpoint o componente afectado
- Prueba que no destruya datos ni exponga a otros clientes

Procuramos acusar recibo en **24 horas** y una primera valoración en **48 horas**.

## 2. Safe harbor

No emprenderemos acciones civiles o penales contra investigadores que:

- Actúen de buena fe
- Eviten violaciones de privacidad, destrucción de datos y degradación del servicio
- No accedan a datos ajenos más allá de lo necesario para demostrar el problema
- Nos den una oportunidad razonable de corregir antes de una divulgación pública

Este safe harbor no cubre ataques a entornos de clientes, intrusión física ni extorsión.

## 3. Fuera de alcance

- Denegación de servicio o inundaciones volumétricas contra producción
- Spam, ingeniería social del personal o phishing a nuestros clientes
- Ataques físicos
- Hallazgos que solo afecten navegadores obsoletos o requieran MITM en la máquina del investigador
- Problemas de productos de terceros que no operamos, salvo una mala configuración clara que controlemos

## 4. Coordinación

No publique un exploit completo antes de que haya un arreglo o una fecha acordada. Podemos acreditar a quien quiera ser nombrado.

No operamos hoy un bug bounty público. Podemos ofrecer un agradecimiento; no prometemos pago.

## 5. Páginas relacionadas

- [Resumen de seguridad](/legal/security/)
- [Política de uso aceptable](/legal/acceptable-use/)
- [Ética y denuncias](/legal/ethics/)`,
  },
  {
    slug: "authorization",
    updated: "2026-09-21",
    title: "Carta de autorización",
    summary:
      "La autorización escrita que el cliente debe dar antes de que Nubesti pruebe sistemas en alcance, con una carta lista para copiar.",
    meta_description:
      "Carta de autorización y safe harbor del cliente Nubesti para pruebas de red team con IA en alcance.",
    body: `Nubesti no lanzará pruebas hasta que el KYC esté aprobado **y** usted confirme autorización escrita del alcance. Esta es la autorización estándar. Complementa las [Reglas de engagement](/legal/engagement/) y la [Política de uso aceptable](/legal/acceptable-use/).

Al marcar la casilla de autorización en el portal, firmar un pedido o enviar la carta de abajo, declara que puede obligar al titular de los objetivos.

## 1. Qué autoriza

Autoriza a Nubesti LLC y a sus agentes automáticos a realizar pruebas de seguridad **solo** contra los activos que designe en el producto o en un SOW, durante el período en que la cuenta esté activa o lo indique el SOW.

Confirma que es dueño de esos sistemas o tiene permiso escrito del titular, y que se ha dado el aviso a nube o ISP si el proveedor lo exige.

## 2. Safe harbor (solo en alcance)

Para la actividad en alcance realizada a través de Nubesti, acepta tratarla como prueba de seguridad consentida. No la tratará como acceso no autorizado **siempre que** nos mantengamos en el alcance y las [Reglas de engagement](/legal/engagement/).

Esto no autoriza probar sistemas de terceros que usted no controle.

## 3. Sus deberes

- Completar y pagar el [KYC](/legal/kyc/)
- Mantener un contacto de emergencia localizable mientras corran las pruebas
- Detener o recortar pruebas si hay impacto en producción
- Guardar confidencialidad de los hallazgos salvo remediación o exigencia legal

## 4. Carta para copiar

Puede enviarla en papel membretado a [legal@nubesti.com](mailto:legal@nubesti.com) o subirla en el KYC:

> Yo, [nombre / cargo], estoy autorizado para obligar a [entidad]. Autorizo a Nubesti LLC a realizar pruebas de seguridad, incluidas pruebas automáticas y asistidas por IA, contra los activos que designemos en el portal Nubesti o en una lista de alcance adjunta, durante la vigencia de nuestro acuerdo. Somos titulares de esos activos o tenemos permiso escrito del titular. Hemos completado (o completaremos y pagaremos) el KYC de Nubesti antes de lanzar pruebas. Contacto de emergencia: [nombre, correo]. Firma: [nombre], [fecha].

## 5. Retiro

Puede revocar la autorización deteniendo las pruebas en el portal y escribiendo a [legal@nubesti.com](mailto:legal@nubesti.com). Los trabajos en curso se detendrán tan pronto como sea razonablemente posible. Las tarifas ya pagadas siguen la [Política de reembolsos](/legal/refunds/) y la [Política KYC](/legal/kyc/).`,
  },
  {
    slug: "export-controls",
    updated: "2026-09-21",
    title: "Controles de exportación y sanciones",
    summary:
      "Nubesti no presta servicios de pruebas de seguridad a personas sancionadas ni a jurisdicciones bajo sanción integral.",
    meta_description:
      "Política de control de exportaciones y sanciones OFAC de Nubesti para la plataforma de red team con IA.",
    body: `El software de pruebas de seguridad puede ser sensible. Nubesti LLC cumple las leyes de control de exportaciones y sanciones de EE. UU. aplicables, incluidos los programas de OFAC, y normas equivalentes que nos resulten aplicables.

Esta página forma parte de los [Términos del servicio](/legal/terms/). El [KYC](/legal/kyc/) es una de las formas en que cribamos clientes.

## 1. Quién no puede usar los servicios

No puede acceder ni usar Nubesti si:

- Está situado, reside habitualmente o se organiza bajo las leyes de una jurisdicción bajo sanción integral
- Es una persona o entidad en una lista de sanciones o de partes denegadas de EE. UU. u otra lista aplicable
- Actúa por cuenta de esa persona o jurisdicción
- Usa los servicios para un uso final prohibido (incluido uso militar o de armas no autorizado cuando la ley lo prohíba)

Podemos añadir bloqueos geográficos o de entidades cuando cambien las listas.

## 2. Sus declaraciones

Cada vez que inicie sesión, pague o lance una prueba, declara que la sección 1 sigue siendo cierta, que el KYC es exacto y que no desviará el servicio a una parte prohibida.

## 3. Qué podemos hacer

Podemos rechazar, suspender o terminar cuentas, congelar lanzamientos y conservar KYC y facturación cuando lo exija el cumplimiento de sanciones. No estamos obligados a prestar el servicio si ello quebrantaría la ley.

## 4. Responsabilidad de exportación del cliente

Si descarga software, informes o datos técnicos de la plataforma, usted es responsable de su propio cumplimiento de exportación y transferencia.

## 5. Contacto

Preguntas de sanciones y elegibilidad: [legal@nubesti.com](mailto:legal@nubesti.com)`,
  },
];
