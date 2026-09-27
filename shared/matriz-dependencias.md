# Matriz de dependencias — Ecosistema transversal

> Los 8 grupos trabajan en la misma organización. Cada equipo debe definir qué inputs necesita de otros grupos y qué outputs entrega a los demás.

---

## Mapa de dependencias

| Grupo | Nombre | Entrega a | Recibe de |
|-------|--------|-----------|-----------|
| 01 | Estrategia Global | Todos los grupos (posicionamiento, buyer personas, guías de marca, arquitectura) | Todos los grupos (retroalimentación y validación) |
| 02 | Plataforma & CRM | Todos los grupos (formularios, flujos, CRM, automatizaciones, dashboards) | 01 (arquitectura de marca y públicos), 07 (contenidos para emails y formularios) |
| 03 | Turismo Waorani | 02 (landing turística integrada al funnel), 06 (propuesta de partnership turístico) | 01 (buyer personas turísticas), 02 (plataforma de reservas), 07 (contenidos y guías de tono) |
| 04 | Voluntariado | 02 (formulario de aplicación y journey de onboarding), 06 (propuesta de partnership con universidades) | 01 (buyer personas voluntarios), 02 (CRM y automatización), 07 (contenidos y mensajes) |
| 05 | WEMA Artesanía | 02 (catálogo y checkout), 06 (propuesta B2B con retailers) | 01 (posicionamiento y pricing), 02 (formularios y logística), 07 (contenidos y storytelling visual) |
| 06 | Financiamiento | 01 (modelo de sostenibilidad global), 02 (leads de empresas y donantes), todos (arquitectura de partnerships) | 03, 04, 05 (propuestas de valor de cada área) |
| 07 | Comunicación Global | Todos los grupos (guías de tono, calendario editorial, assets visuales, mensajes multilingües) | Todos los grupos (contenidos, testimonios, datos), 01 (posicionamiento y arquitectura de marca) |
| 08 | Comunicación Interna | 01 (insights de territorio y comunidad), 02 (formularios comunitarios), 04 (voluntarios colaborando remotamente) | 01 (contexto cultural), 02 (plataforma y CRM) |

---

## Dependencias críticas (orden de resolución)

Dado que el trabajo debe integrarse semana a semana, estas dependencias deben resolverse primero:

### Semana 1-2: Fundamentos (Grupo 1 lidera)

**Grupo 01 debe entregar primero:**
- [ ] Buyer personas globales iniciales (borrador)
- [ ] Posicionamiento preliminar EWAO vs Keweriono
- [ ] Arquitectura de marca básica (qué comunica cada entidad)
- [ ] Propuesta de KPIs globales
- [ ] Cronograma tentativo del semestre

**Todos los demás grupos necesitan esto antes de profundizar sus capítulos.**

### Semana 2-3: Plataforma base (Grupo 2 lidera)

**Grupo 02 debe entregar primero:**
- [ ] Auditoría de ewaoproject.com (UX/UI, velocidad, propuesta de valor)
- [ ] Arquitectura del funnel global (pantallas, flujos, clasificación de leads)
- [ ] Stack tecnológico propuesto (herramientas, CRM, automatización)
- [ ] Wireframes de las rutas diferenciadas por audiencia

**Grupos 03, 04, 05 necesitan esto antes de construir landings propias.**

### Semana 3-4: Contenidos base (Grupo 7 lidera)

**Grupo 07 debe entregar primero:**
- [ ] Guía de tono y voz (bilingüe: español/inglés)
- [ ] Concepto creativo central (relato Amazonía/Waorani)
- [ ] Calendario editorial inicial
- [ ] Template de piezas por canal y audiencia

**Grupos 03, 04, 05 necesitan esto antes de crear materiales propios.**

### Semana 4+: Integración progresiva

Cada grupo construye sus entregables específicos alimentándose de las bases anteriores.

---

## Ecosistema transversal: qué debe existir al final

Para que el producto sea realmente un ecosistema integrado (y no 8 proyectos aislados):

1. **Una sola plataforma web** (ewaoproject.com evolucionado) con rutas diferenciadas para cada audiencia
2. **Un CRM unificado** que clasifique automáticamente leads por tipo (turista, voluntario, empresa, donante, comprador WEMA)
3. **Automatizaciones por tipo de contacto** (email journeys diferenciados)
4. **Una voz y tono consistente** en todas las landing y comunicaciones
5. **Un dashboard centralizado** con KPIs de todos los grupos
6. **Identidad de marca coherente** entre Keweriono y EWAO, diferenciada pero complementaria
7. **Contenidos multilingües** (español, inglés, portugués según corresponda)
8. **Un sistema de comunicación interna** que conecte territorio con plataforma

---

## Cómo registrar nuevas dependencias

Usa el template `.github/ISSUE_TEMPLATE/dependencia-entre-grupos.md` para registrar:

- Necesidades de input de otro grupo
- Outputs que entregas a otros grupos
- Coordinación técnica requerida
- Bloqueos por dependencia no resuelta

**Toda dependencia entre grupos debe estar documentada como issue.** No asumas que otro grupo sabe que lo necesitas.
