# Guía de contribución — Repositorio EWAO × UDD

Este repositorio es el espacio compartido de los 8 grupos del curso. Aquí construimos, entre todos, una infraestructura productiva para EWAO.

---

## Ramas (Branches)

```
main          → Código productivo validado. Solo recibe merges desde develop.
develop       → Integración semanal de los 8 grupos. Recibe PRs de las branches de grupo.
grupo/XX-feature  → Trabajo individual de cada grupo. Ej: grupo/03-landing-turismo
```

**Regla:** Nunca se hace push directamente a `main` ni a `develop`. Siempre a través de Pull Request.

---

## Flujo de trabajo semanal

1. **Crea tu branch** desde `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b grupo/XX-nombre-feature
   ```

2. **Trabaja** en tu carpeta correspondiente bajo `areas/XX-tu-grupo/`.

3. **Commits atómicos** con mensajes descriptivos:
   ```bash
   git add .
   git commit -m "grupo 03: añade wireframe de landing turística"
   ```

4. **Push y PR** cuando tengas avance para revisión:
   ```bash
   git push origin grupo/XX-nombre-feature
   # Luego abrir PR en GitHub hacia develop
   ```

5. **Revisión cruzada:** Otro grupo revisa tu PR. Se aprueba y se mergea.

6. **Viernes:** Todos los PRs aprobados se mergean a `develop`.

7. **Cada 3 semanas:** `develop` → `main` (release productivo).

---

## Issues

Usa los templates de `.github/ISSUE_TEMPLATE/` para crear:

- **Brief de capítulo:** Entregables de cada capítulo para tu grupo
- **Dependencia entre grupos:** Cuando necesites algo de otro grupo o entregues algo
- **Bug/Error:** Problemas detectados en landings o automatizaciones

**Labels obligatorios por issue:**
- `grupo-01` a `grupo-08`
- `capitulo-1`, `capitulo-2`, `capitulo-3`, `capitulo-4`
- `dependencia`, `entregable`, `revision-necesaria`

---

## Estructura de tu carpeta de grupo

```
areas/XX-tu-grupo/
├── README.md                  # Qué construye tu grupo + nombres del equipo
├── entregable/
│   ├── capitulo-1-diagnostico.md
│   ├── capitulo-2-marketing-mix.md
│   ├── capitulo-3-crm-funnel.md
│   └── capitulo-4-kpis.md
├── prototipo/                 # Wireframes, HTML, código, Docker
├── datos/                     # Research, análisis, matrices
└── [otras carpetas según necesidad]
```

---

## Pull Requests

- Título claro: `[Grupo XX] Descripción breve del cambio`
- Cuerpo del PR:
  - Qué se entrega
- Qué capítulo cubre
- Dependencias afectadas (si aplica)
  - Screenshots o demos si aplica
- Reviewer: asignar a alguien de otro grupo

---

## Convenciones de comunicación

- Todo en español (contenidos del repo y código)
- Nombres de archivos en minúscula con guiones: `buyer-persona-turista.md`
- Documentos académicos en Markdown (no Word dentro del repo, excepto entregas formales finales)
- Commits en español con prefijo de grupo: `grupo 05: agrega pricing internacional WEMA`

---

## Principios de revisión cruzada

Cuando revises un PR de otro grupo, evalúa:

1. **Alineación con principios EWAO** — ¿Respeta territorio, no greenwashing, lo demostrable?
2. **Coherencia con tu grupo** — ¿Las dependencias están bien definidas?
3. **Calidad del entregable** — ¿EWAO podría usar esto después del curso?
4. **Claridad** — ¿Un tercero entiende qué hace esto y por qué?

---

## Primeros pasos para estudiantes nuevos en GitHub

1. Crea una cuenta en GitHub si no tienes
2. Clona el repositorio: `git clone https://github.com/rvaldesudd/ewao-udd.git`
3. Lee `docs/brief.md` y `docs/principios-ewao.md`
4. Revisa la carpeta de tu grupo en `areas/`
5. Crea tu branch de trabajo
6. ¡A construir!
