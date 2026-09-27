# Landings EWAO

> Esta carpeta contiene las landing pages existentes del proyecto EWAO.

---

## Estructura

```
landings/
├── estatico/       → Sitio HTML estático (código recibido mañana)
└── wordpress/      → Instalación WordPress con Docker (código recibido mañana)
```

## Sitio estático

Aquí se alojará la versión HTML estático actual de EWAO. Los grupos podrán:

- Correrlo localmente
- Proponer mejoras a la UI/UX
- Integrar formularios y automatizaciones
- Testear cambios antes de producción

## WordPress (Docker)

La instalación de WordPress estará disponible mediante Docker Compose para que todos los grupos puedan:

- Correr WordPress localmente
- Proponer plugins (formularios, SEO, multilingüe)
- Testear themes y layouts
- Desarrollar en un entorno que replica producción

## Setup inicial (se completará mañana)

Una vez recibido el código, se documentará en cada subcarpeta:

1. **Requisitos** (PHP, Docker, etc.)
2. **Instrucciones de instalación** paso a paso
3. **Credenciales de acceso** (admin WordPress)
4. **Estructura del proyecto** (qué archivo hace qué)
5. **Puntos de integración** con el resto del ecosistema

## Integración con los grupos

| Grupo | Uso de landings |
|-------|-----------------|
| 02 Plataforma CRM | Base para el funnel global, formularios, CRM |
| 03 Turismo | Landing turística específica |
| 04 Voluntariado | Landing de voluntariado y aplicación |
| 05 WEMA | Ecommerce / catálogo de artesanía |
| 06 Financiamiento | Landing de donaciones y partnerships |
| 07 Comunicación | Implementación de guías de tono y estilo |
| 08 Comunicación Interna | Formularios comunitarios |

---

**Estado:** Esperando código de ambas landings para completar setup.
