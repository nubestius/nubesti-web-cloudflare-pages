---
enable: true # Control the visibility of this section across all pages where it is used
title: "Contáctanos para Más **Información**"
description: "Ya sea que busques asistencia experta, nuestro equipo dedicado está preparado para apoyarte en cada paso del camino."
subtitle: "Contacto"

contact_list:
  enable: true
  list:
    - icon: "/images/icons/svg/email.svg"
      label: "Ventas"
      value: "alexis@nubesti.com"
    - icon: "/images/icons/svg/email.svg"
      label: "Seguridad"
      value: "security@nubesti.com"
    - icon: "/images/icons/svg/linkedin.svg"
      label: "LinkedIn"
      value: "linkedin.com/company/nubesti"

social:
  enable: true
  title: "Síguenos en redes sociales"

# Check config.toml file for form action related settings
form:
  email_subject: "Nueva solicitud de formulario desde el sitio web de Nubesti" # Customized email subject (applicable when anyone submit form, form submission may receive by email depend on provider)
  submit_button:
    label: "Enviar"
  inputs:
    - label: ""
      placeholder: "Nombre Completo"
      name: "Nombre Completo" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Dirección de Email"
      name: "Dirección de Email" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "email"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Número de Teléfono"
      name: "Número de Teléfono" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Empresa"
      name: "Empresa" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "text"
      half_width: true
      default_value: ""
    - label: ""
      placeholder: "Asunto"
      name: "Asunto" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: true
      dropdown:
        type: "" # select | search - default is select
        search: # if type is search then it will work
          placeholder: ""
        items:
          - label: "Soporte"
            value: "Soporte"
          - label: "Demo"
            value: "Demo"
          - label: "Otro"
            value: "Otro"
    - label: ""
      placeholder: "Asunto con Búsqueda"
      name: "Asunto con Búsqueda" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: true
      dropdown:
        type: "search" # select | search - default is select
        search: # if type is search then it will work
          placeholder: "Asunto con Búsqueda"
        items:
          - label: "Soporte"
            value: "Soporte"
          - label: "Ventas"
            value: "Ventas"
    - label: ""
      tag: "textarea"
      default_value: ""
      rows: "4" # Only work if tag is textarea
      placeholder: "Escribe tu mensaje."
      name: "Mensaje" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      half_width: false
    - label: "Búsqueda de Google" # only valid for type="checkbox" & type === "radio"
      checked: false # only valid for type="checkbox" & type === "radio"
      name: "Fuente del Usuario" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "¿Cómo te enteraste de nosotros?" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Redes Sociales" # only valid for type="checkbox" & type === "radio"
      name: "Fuente del Usuario" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Referencia" # only valid for type="checkbox" & type === "radio"
      name: "Fuente del Usuario" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Otro" # only valid for type="checkbox" & type === "radio"
      name: "Fuente del Usuario" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      group_label: "" # Radio Inputs Label
      group: "source" # when you add group then it will omit space between the same group radio input
      type: "radio"
      half_width: true
      default_value: ""
    - label: "Acepto los términos y condiciones y [política de privacidad](/contact/)." # only valid for type="checkbox" & type === "radio"
      name: "Privacidad Acordada" # This is crucial. Its indicate under which name you want to receive this field data
      value: "Acordado" # Value that will be submit (applicable for type="checkbox" & type === "radio")
      checked: false # only valid for type="checkbox" & type === "radio"
      required: true
      type: "checkbox"
      half_width: false
      default_value: ""
    - note: success # info | warning | success | deprecated | hint
      parent_class: "hidden message success"
      content: ¡Hemos recibido tu mensaje! Te responderemos lo antes posible.
    - note: warning # info | warning | success | deprecated | hint
      parent_class: "hidden message error"
      content: Algo salió mal. Escriba a [alexis@nubesti.com](mailto:alexis@nubesti.com).
---
