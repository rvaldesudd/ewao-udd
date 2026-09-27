# Landings EWAO

> Landing pages del proyecto EWAO, extraídas del backup del servidor (Plesk, 27-09-2026) y preparadas para correr localmente.

---

## Estructura

```
landings/
├── wordpress/       → Sitio WordPress (ewaoproject.com) con Docker — ver su README.md
└── landing-2026/    → Landing estática actual (producción) — ver su README.md
```

## Sitio estático (`landing-2026/`)

Es la landing **actual en producción** (document root `site2026` del servidor). Sitio HTML/CSS/JS generado con Vite, donde cada sublanding es una carpeta con su `index.html`: `/sobreewao/`, `/modeloewao/`, `/financiacion/`, `/experiencia/`, `/voluntariado/`.

- Corre con `docker compose up -d` (nginx, puerto 80) o cualquier servidor estático
- Incluye `_backups/` con 3 versiones anteriores del sitio
- Los grupos podrán proponer mejoras de UI/UX, integrar formularios y automatizaciones

## WordPress (`wordpress/`)

Réplica local completa del WordPress de ewaoproject.com (WP 7.1.2, PHP 8.4, MariaDB 10.11, theme Enfold, ~3.100 archivos de medios). Corre con **un solo comando**:

```bash
cd wordpress
docker compose up -d
# → http://localhost:8082 (sitio) · http://localhost:8081 (phpMyAdmin)
# → WP-Admin: Udd-Ewao / EwaoLocal2026! (más detalles en wordpress/README.md)
```

Los grupos podrán:

- Correrlo localmente y explorar el contenido real
- Proponer plugins (formularios, SEO, multilingüe)
- Testear themes y layouts
- Desarrollar en un entorno que replica producción

## Distribución a los grupos

| Carpeta | Peso aprox. | Vía |
|---|---|---|
| `wordpress/` | ~1 GB (uploads + BD) | **ZIP** (Drive/Drive UDD). Las partes pesadas están excluidas de git vía `.gitignore`. |
| `landing-2026/` | ~160 MB (videos) | ZIP o git (revisar límite de 100 MB por archivo en GitHub para los .mp4) |

## Notas de origen y seguridad

- Fuente: `backup.tar` (backup Plesk del dominio ewaoproject.com, 27-09-2026). Ese archivo **contiene llaves privadas del servidor** (SSH, SSL) y contraseñas de sistema: **no distribuirlo** — solo las carpetas ya preparadas.
- En el servidor, la carpeta `bakcup1/httpdocs/` era una copia idéntica del WordPress: se omitió en la extracción.
- La carpeta `wordpress/db/ewaoproject-original.sql` es el dump tal cual producción (URLs `ewaoproject.com`); el que se importa localmente es `db/init/ewaoproject-local.sql` (URLs `localhost:8082`, admin reseteado).

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

**Estado:** Ambas landings extraídas, probadas y documentadas (27-09-2026).
