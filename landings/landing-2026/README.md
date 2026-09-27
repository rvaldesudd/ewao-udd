# Landing EWAO 2026 — Sitio Estático

Landing page actual de **ewaoproject.com** (la que está en producción como document root `site2026`). Es un sitio **HTML/CSS/JS estático** generado con Vite: cada nueva sublanding es una carpeta con su propio `index.html`.

## Estructura

```
landing-2026/
├── index.html              # Home ("EWAO Project | Modelo Amazónico de Conservación")
├── sobreewao/index.html    # Sobre EWAO
├── modeloewao/index.html   # Modelo EWAO (22 iniciativas)
├── financiacion/index.html # Financiación
├── experiencia/index.html  # Experiencia
├── voluntariado/index.html # Voluntariado
├── assets/
│   ├── css/js              # Bundles con hash (ej. main-BXHX9kpl.js)
│   ├── images/             # Imágenes y posters de video
│   ├── video/              # Videos .mp4 (hero, territorio, modelo, etc.)
│   ├── docs/               # PDF institucional
│   └── logo/
├── _backups/               # 3 ZIPs con versiones anteriores del sitio (historial)
├── docker-compose.yml      # Servidor nginx local (puerto 80)
├── nginx.conf              # Config: bloquea _backups/ y archivos internos
└── .env                    # WEB_PORT=80 (editable)
```

## Cómo correrlo localmente

### Opción A — Docker (recomendada)

```bash
docker compose up -d
# Abre http://localhost
```

### Opción B — Sin Docker

El sitio usa **rutas absolutas** (`/assets/...`), por lo que NO funciona abriendo `index.html` con doble clic (`file://`). Sírvelo desde la raíz con cualquiera de estas:

```bash
# Python (viene en Mac/Linux; en Windows: py -m http.server 8080)
python -m http.server 8080

# Node
npx serve -l 8080 .

# VS Code: extensión "Live Server" → clic derecho en index.html → "Open with Live Server"
```

Luego abre http://localhost:8080 (o el puerto que hayas usado).

## Notas

- **Puerto**: por defecto 80. Si está ocupado, cambia `WEB_PORT` en `.env` (ej. `WEB_PORT=8080`) y reinicia con `docker compose up -d`.
- **Sublandings nuevas**: crea una carpeta con su `index.html` (patrón actual) y añade el link en la navegación de las páginas existentes.
- **`_backups/`**: los 3 ZIPs son snapshots anteriores del sitio (2026-0801-101.zip, 20260801-2.zip, 20270801-1.zip). El nginx local los bloquea (404) para que no se naveguen.
- **Formularios**: el sitio es estático; los formularios/CTA actuales son anchors o `mailto:` (info@ewaoproject.com). La integración con CRM/automatizaciones es trabajo pendiente de los grupos.
