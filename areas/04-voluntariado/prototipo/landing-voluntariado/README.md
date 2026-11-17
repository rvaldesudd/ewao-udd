# Landing Voluntariado Profesional EWAO — Grupo 04

> **Prototipo académico, no oficial.** Marketing Internacional UDD 2026 · Javiera Bustos, Laura Durán, Antonella García, Emilia Rodríguez.

**Ver la landing:** https://ewao-voluntariado.e-rodriguezh.workers.dev

Reemplaza la página actual de voluntariado de EWAO, que solo enlazaba a un PDF sin forma de postular, por una landing bilingüe (español / inglés) donde profesionales de otros países conocen el programa, revisan las necesidades que define la Asociación Keweriono y postulan en un formulario que los clasifica automáticamente.

## Qué muestra la landing

1. **Inicio:** qué es el programa, para quién es y un botón para postular.
2. **No es turismo:** colaboración técnica en proyectos que define la comunidad.
3. **Quién decide:** Keweriono decide, EWAO conecta y el voluntariado aporta.
4. **Fichas de necesidad:** áreas en que la comunidad pide apoyo (agua, vivienda, agroecología, educación, entre otras).
5. **Tres formas de colaborar:** estancia grupal (2–4 semanas), residencial (1–3 meses) o colaboración remota.
6. **Contribución:** USD 250 por semana, qué cubre y calculadora de costo.
7. **Proceso y condiciones del territorio:** pasos de selección y lo que hay que saber antes de ir.
8. **Formulario de postulación** de 4 pasos.
9. **Después de la estancia:** colaboración remota y red de exvoluntarios.
10. **Registro de afirmaciones:** qué está realizado, en desarrollo o proyectado (Directiva UE 2024/825).
11. **Preguntas frecuentes** y aviso de prototipo académico.

## Cómo funciona la postulación

Al enviar el formulario, la landing calcula un **puntaje de 0 a 100** (área técnica, experiencia, disponibilidad, idioma, condiciones y pago) y asigna una **ruta**:

| Ruta | Cuándo |
|---|---|
| Entrevista | 70 puntos o más y acepta las condiciones del territorio |
| Revisión | Entre 45 y 69 puntos |
| Remoto | Elige colaborar a distancia, no puede pagar o no acepta las condiciones |
| Interés | El resto: queda avisado de nuevas fichas |

Nadie se rechaza sin revisión humana. Además, cada postulante recibe un **pasaporte con código QR** para referir a colegas.

## Conexiones

| Servicio | Qué hace | Estado |
|---|---|---|
| HubSpot | Recibe cada postulación como contacto con su puntaje y ruta; el workflow W1 envía un correo de confirmación y crea una tarea si la ruta es entrevista o revisión | Realizado |
| Google Tag Manager + GA4 | Mide visitas y 11 eventos del funnel (inicio, pasos y envío del formulario, lead, QR, etc.) | Realizado |
| Workflows W2–W8 | Onboarding, recordatorios, evaluación y reactivación a 90 días | En desarrollo |

Si HubSpot no responde, la landing guarda la postulación en el navegador; se puede ver agregando `#crm-demo` al final de la URL.

### HubSpot (lo que configuramos)

- **Cuenta:** prueba de Marketing Hub Pro (portal `52317481`).
- **Propiedades de contacto:** las 4 del formulario base común (`ruta_interes`, `grupo_responsable`, `origen_visita`, `consentimiento_comunicaciones`) y 6 propias (`vol_score`, `vol_ruta`, `vol_area_tecnica`, `vol_modalidad`, `vol_pasaporte_id`, `vol_referido_por`).
- **Formulario:** recibe las postulaciones de la landing por la Forms API v3, junto con nombre, apellido, correo y país.
- **Workflow "Voluntariado eWAO – W1 confirmación + ruteo por vol_ruta":** se activa con cada envío, manda el correo de confirmación "Recibimos tu postulación al Voluntariado Profesional EWAO" y se ramifica por `vol_ruta`: *entrevista* crea la tarea "Agendar entrevista con postulante", *revisión* crea "Revisar postulación de voluntario", y *remoto* e *interés* quedan listas para W4 y W5.
- **Dominio registrado** en Seguimiento avanzado, para que HubSpot no marque las postulaciones como spam. El formulario de la landing lleva `data-hs-do-not-collect="true"` para que no se registre dos veces.

### Google Tag Manager + GA4 (lo que configuramos)

- **Contenedor GTM:** `GTM-W53PHWN7`, publicado e instalado en la landing.
- **Etiqueta "GA4 – Etiqueta de Google":** envía las visitas a la propiedad GA4 `G-3D6WN730FL`.
- **Etiqueta "GA4 – Eventos landing":** envía a GA4 los 11 eventos del funnel: `form_start`, `form_step`, `form_submit`, `generate_lead`, `cta_click`, `view_fichas`, `qr_download`, `passport_share`, `faq_open`, `lang_change` y `calc_use`.
- Los resultados se ven en GA4, en **Informes → Tiempo real**; `generate_lead` alimenta el KPI de conversión de la landing.

## Archivos

```
landing-voluntariado/
├── index.html   → la página (estructura, textos y estilos)
├── app.js       → formulario, puntaje, rutas, conexión con HubSpot y GA4, idioma
├── qr.js        → genera el código QR del pasaporte (Kazuhiko Arase, licencia MIT)
└── img/         → fotos del banco oficial de ewaoproject.com
```

La misma landing está publicada dentro del sitio común en `landings/landing-2026/voluntariado/`.

## Pendiente de validar con EWAO y Keweriono

- Duración mínima de la estancia grupal (el booklet dice 1 semana y el SOP, 2).
- Monto de la contribución para estancias de 1–3 meses.
- Fichas e imágenes autorizadas por la Asamblea para publicar.
