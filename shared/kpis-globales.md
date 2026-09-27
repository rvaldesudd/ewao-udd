# KPIs Globales — Ecosistema EWAO

> Indicadores compartidos de éxito para todos los grupos. Cada grupo complementa con KPIs específicos en sus entregables del Capítulo 4.

---

## Modelo de medición

**ATRAER → INFORMAR → SEGMENTAR → CONVERTIR → AUTOMATIZAR → RELACIONAR → MEDIR → REACTIVAR**

Cada etapa tiene indicadores asociados. Los grupos deben mapear sus métricas al modelo completo.

---

## KPIs por etapa

### Atraer (Adquisición)

| Indicador | Descripción | Herramienta | Responsable |
|-----------|-------------|-------------|-------------|
| Tráfico web total | Visitas mensuales a ewaoproject.com y landings | Google Analytics | 02 |
| Tráfico orgánico | Visitas desde Google (SEO) | Google Search Console | 07 |
| Tráfico pagado | Visitas desde Meta, LinkedIn, Google Ads | Plataformas de ads | 07 |
| Alcance social | Impresiones en Instagram, LinkedIn, YouTube | Meta Business, LinkedIn Analytics | 07 |
| Menciones en prensa | Artículos en medios internacionales | Google Alerts, Meltwater | 07 |
| Visitantes únicos internacionales | % de tráfico desde fuera de Ecuador | Google Analytics | 02 |

### Informar (Contenido)

| Indicador | Descripción | Herramienta | Responsable |
|-----------|-------------|-------------|-------------|
| Tiempo en página | Duración media de visita | Google Analytics | 02, 07 |
| Páginas por sesión | Profundidad de navegación | Google Analytics | 02 |
| Tasa de rebote | % que sale sin interactuar | Google Analytics | 02, 03, 04, 05 |
| Visualizaciones de video | YouTube, Instagram Reels | Plataformas | 07 |
| Descargas de PDFs | Guías, catáculos, brochures | Google Analytics / CRM | 03, 04, 05 |

### Segmentar (Clasificación)

| Indicador | Descripción | Herramienta | Responsable |
|-----------|-------------|-------------|-------------|
| Formularios completados | Total de submissions por tipo | CRM (HubSpot / Zoho / n8n) | 02 |
| Leads clasificados correctamente | % de leads con tag correcto | CRM | 02 |
| Distribución por tipo | % turistas / voluntarios / empresas / donantes / compradores | CRM | 02 |
| Tasa de clasificación automática | % de leads clasificados sin intervención manual | CRM / n8n | 02 |

### Conversión (Acción)

| Indicador | Descripción | Herramienta | Responsable |
|-----------|-------------|-------------|-------------|
| Tasa de conversión global | Visitantes → acción deseada | Google Analytics + CRM | 02 |
| Reservas turísticas | Número de reservas confirmadas | Sistema de reservas | 03 |
| Aplicaciones de voluntariado | Formularios completados + aceptados | CRM | 04 |
| Ventas WEMA | Transacciones completadas | Ecommerce / CRM | 05 |
| Partnerships firmados | Cartas de intención / acuerdos | CRM / documentos | 06 |
| Donaciones recibidas | Monto total + # donantes | Plataforma de pago | 06 |
| Tasa de conversión por fuente | Por canal (orgánico, pagado, referral) | Google Analytics + CRM | 02, 07 |

### Automatización

| Indicador | Descripción | Herramienta | Responsable |
|-----------|-------------|-------------|-------------|
| Tiempo de respuesta | Tiempo desde que llega un lead hasta primer contacto | CRM | 02 |
| % de respuesta automatizada | % de primeras respuestas sin intervención humana | CRM / n8n | 02 |
| Emails enviados automáticamente | Volumen de secuencias disparadas | CRM / Email platform | 02 |
| Leads perdidos | Leads sin respuesta en X días | CRM | 02 |
| Workflows activos | Número de automatizaciones funcionando | n8n / Zapier / HubSpot | 02 |

### Relacionar (Retención)

| Indicador | Descripción | Herramienta | Responsable |
|-----------|-------------|-------------|-------------|
| Alumni activos | Voluntarios antiguos que siguen colaborando | CRM | 04, 08 |
| Donantes recurrentes | % de donantes que renuevan | Plataforma de pago | 06 |
| Compradores recurrentes | % de compradores WEMA que repiten | Ecommerce | 05 |
| Tasa de satisfacción | NPS o encuesta post-experiencia | Typeform / Google Forms | 03, 04 |
| Net Promoter Score | Probabilidad de recomendación | Encuestas | 01 |

### Medir (Analytics)

| Indicador | Descripción | Herramienta | Responsable |
|-----------|-------------|-------------|-------------|
| Dashboard actualizado | Frecuencia de actualización de métricas | n8n / Google Data Studio | 02 |
| Tiempo de generación de reportes | Minutos desde solicitud hasta reporte disponible | Automatización | 02 |
| Decisiones basadas en datos | Número de decisiones del grupo respaldadas por métricas | Documentos de decisión | Todos |

### Reactivar (Re-engagement)

| Indicador | Descripción | Herramienta | Responsable |
|-----------|-------------|-------------|-------------|
| Tasa de re-aplicación | % de voluntarios que aplican de nuevo | CRM | 04 |
| Tasa de retorno turístico | % de turistas que repiten experiencia | CRM | 03 |
| Reactivación de leads fríos | Leads que volvieron a interactuar | CRM / Email | 02 |
| Referencias generadas | # de nuevos leads por recomendación | CRM | 01, 03, 04 |

---

## KPIs de integración (transversales)

Estos indicadores miden la coherencia del ecosistema entre grupos:

| Indicador | Descripción | Meta |
|-----------|-------------|------|
| Consistencia de marca | % de piezas que siguen guía de tono | >90% |
| Dependencias resueltas | % de issues de dependencia cerrados a tiempo | >85% |
| Leads correctamente enrutados | % de leads que llega al flujo correcto según su interés | >80% |
| Tiempo de integración | Días desde que un grupo entrega hasta otro lo integra | <5 días |
| Releases productivos | Cada cuánto se mergea a main | Cada 3 semanas |

---

## Herramientas sugeridas para medición

- **Google Analytics 4** — Tráfico web, conversiones, atribución
- **Google Search Console** — SEO orgánico
- **CRM (HubSpot / Zoho / n8n + base de datos)** — Leads, clasificación, automatización
- **Looker Studio (Google Data Studio)** — Dashboard centralizado
- **Hotjar / Microsoft Clarity** — Heatmaps, grabaciones de sesión
- **Meta Business Suite** — Métricas de redes sociales
- **n8n / Zapier** — Automatización de flujos y métricas

Cada grupo detalla las herramientas específicas de su área en el Capítulo 3.

---

## Reporte de KPIs

Frecuencia sugerida:
- **Semanal:** Grupo 02 publica snapshot de métricas principales en `areas/02-plataforma-crm/dashboard/`
- **Quincenal:** Grupo 1 compila reporte global y lo sube a `shared/`
- **Mensual:** Presentación ejecutiva de avance con métricas integradas
