# Arquitectura del Ecosistema Digital EWAO

> Mapa de cómo se integran los 8 grupos en un único producto digital.

---

## Visión general

El objetivo del semestre es construir una única plataforma digital que permita:

**ATRAER → INFORMAR → SEGMENTAR → CONVERTIR → AUTOMATIZAR → RELACIONAR → MEDIR → REACTIVAR**

Desde el territorio Waorani hacia el mundo.

---

## Arquitectura de alto nivel

```
┌─────────────────────────────────────────────────────────────┐
│                    PLATAFORMA DIGITAL EWAO                   │
│                     (Grupo 02 + Grupo 07)                    │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ Landing   │  │ Landing   │  │ Landing   │  │ Landing   │   │
│  │ Turismo   │  │Voluntariado│  │  WEMA     │  │ Donaciones │  │
│  │ (G03)    │  │  (G04)    │  │  (G05)    │  │  (G06)    │   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘   │
│       │              │              │              │          │
│       └──────────────┴──────────────┴──────────────┘         │
│                              │                                │
│                   ┌──────────▼──────────┐                    │
│                   │  Formularios         │                    │
│                   │  Clasificación       │                    │
│                   │  Lead Scoring        │                    │
│                   │  (Grupo 02)          │                    │
│                   └──────────┬──────────┘                    │
│                              │                                │
│                   ┌──────────▼──────────┐                    │
│                   │  CRM Unificado       │                    │
│                   │  (Grupo 02)          │                    │
│                   └──────────┬──────────┘                    │
│                              │                                │
│         ┌────────────────────┼────────────────────┐          │
│         │                    │                    │          │
│    ┌────▼─────┐       ┌──────▼──────┐      ┌─────▼─────┐   │
│    │ Email     │       │  Dashboard  │      │  Reportes  │   │
│    │ Journeys  │       │  KPIs       │      │  Impacto   │   │
│    │ (G02+G07) │       │  (G02)      │      │  (G06)     │   │
│    └───────────┘       └─────────────┘      └───────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                              │
                   ┌──────────▼──────────┐
                   │  COMUNIDAD WAORANI   │
                   │  (Grupo 08)          │
                   │  WhatsApp, Audio,    │
                   │  Video, Formularios  │
                   └──────────┬──────────┘
                              │
                   ┌──────────▼──────────┐
                   │  EWAO OPEN          │
                   │  COLLABORATION      │
                   │  (Grupo 08 + G04)   │
                   │  Colaboradores      │
                   │  remotos            │
                   └─────────────────────┘
```

---

## Flujo de datos

### 1. Entrada (Atraer + Informar)
- Tráfico llega a landing específica (turismo, voluntariado, WEMA, donaciones)
- El contenido está alineado con guía de tono del Grupo 07
- El posicionamiento está definido por el Grupo 01

### 2. Clasificación (Segmentar)
- Formulario captura datos + interés del usuario
- Lead scoring automático clasifica por tipo: turista / voluntario / empresa / donante / comprador
- CRM asigna tag y ruta correspondiente

### 3. Conversión (Convertir + Automatizar)
- Email journey diferenciada según tipo de lead
- Automatizaciones guían al usuario hacia la acción
- Integración con sistemas de reserva, aplicación, compra o donación

### 4. Relación (Relacionar)
- Post-conversión: seguimiento, satisfacción, comunidad
- Alumni de voluntariado pasan a EWAO Open Collaboration
- Compradores WEMA entran a secuencia de recompra
- Donantes reciben reportes de impacto

### 5. Medición (Medir)
- Dashboard centralizado con KPIs de todos los grupos
- Dashboard específico por grupo para optimización
- Reportes automáticos para EWAO y donantes

### 6. Reactivación (Reactivar)
- Campañas a leads fríos según tipo
- Invitación a nuevos programas o experiencias
- Colaboración remota permanente

---

## Integraciones entre sistemas

| Sistema | Grupo responsable | Integra con |
|---------|-------------------|-------------|
| Landing turismo | 03 | Formularios (02), CRM (02), Email (02+07) |
| Landing voluntariado | 04 | Formularios (02), CRM (02), Open Collaboration (08) |
| Ecommerce WEMA | 05 | Formularios (02), CRM (02), pasarela de pago |
| Formularios B2B | 06 | CRM (02), propuestas (06), dashboard (02) |
| Formularios donaciones | 06 | CRM (02), pasarela de pago, reportes impacto |
| Formularios comunitarios | 08 | CRM (02), WhatsApp, traducción |
| CRM unificado | 02 | Todos los grupos |
| Email journeys | 02 + 07 | CRM (02), todos los grupos |
| Dashboard KPIs | 02 | Todos los grupos |
| EWAO Open Collaboration | 08 | Voluntarios (04), comunidad, profesionales remotos |
| Contenidos editoriales | 07 | Landing (todos), emails (02), redes sociales |
| Comunicación interna | 08 | Comunidad, WhatsApp, traducción |

---

## Stack tecnológico propuesto (inicial)

| Capa | Herramienta | Justificación |
|------|-------------|---------------|
| Web estática | HTML/CSS/JS | Rápida, ligera, económica |
| WordPress (Docker) | WordPress + plugins | CMS flexible, multilingüe, formularios |
| CRM | HubSpot Free / Zoho / n8n + BD | Lead scoring, clasificación, automatización |
| Email | Mailchimp / SendGrid / HubSpot | Journeys automatizados |
| Formularios | Typeform / WPForms / n8n | Inteligentes, clasificación automática |
| Pasarela de pago | PayPal / Stripe / MercadoPago | Donaciones, turismo, WEMA |
| Analytics | GA4 + Hotjar | Tráfico, conversión, heatmaps |
| Dashboard | Looker Studio / Metabase | KPIs centralizados |
| Automatización | n8n / Zapier | Workflows entre herramientas |
| Hosting | EWAO actual / Vercel / similar | Económico y mantenible |

**Nota:** Las herramientas finales serán definidas por el Grupo 02 con justificación técnica y validación de Grupo 1 (cobertura EWAO).

---

## Multilingüe

| Idioma | Audiencia | Contenido |
|--------|-----------|-----------|
| Español | Ecuador, Latinoamérica, comunidad | Todo el contenido |
| Inglés | Internacional (Europa, Norteamérica) | Landing, formularios, emails, KPIs |
| Portugués | Brasil | Landing, materiales clave |
| Wao Tededo | Comunidad Waorani | Comunicación interna, traducciones |

---

## Principios de diseño del sistema

1. **Un solo CRM** — No hay bases de datos separadas por grupo. Todo lead va al mismo sistema centralizado.
2. **Automatización primero** — Si un flujo puede ser automatizado, no requiere gestión manual.
3. **Datos demostrables** — Solo se reporta lo que existe y se puede verificar.
4. **Trazabilidad cultural** — Cada pieza WEMA tiene trazabilidad al territorio y la artesana.
5. **Escalable** — La arquitectura debe permitir agregar nuevas iniciativas sin rehacer el sistema.
6. **Mantenible por EWAO** — No debe requerir conocimientos técnicos avanzados para operar día a día.
