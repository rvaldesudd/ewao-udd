# WordPress EWAO — Entorno Local (Docker)

Réplica local del sitio WordPress de **ewaoproject.com** (backup Plesk del 27-09-2026), lista para correr con un solo comando. Ideal para testear themes, plugins, layouts y propuestas de mejora sin tocar producción.

| Dato | Valor |
|---|---|
| WordPress | 7.1.2 (tal cual producción) |
| PHP | 8.4 (Apache) |
| Base de datos | MariaDB 10.11 — BD `ewaoproject` |
| Theme activo | Enfold + child (`enfold-child`) |
| Plugins | Duplicator Pro, GTranslate, Disable Comments |
| Prefijo de tablas | `aN8Ujwxov_` |

---

## Requisitos

- **Docker Desktop** (Windows/Mac/Linux) corriendo. Descarga: https://www.docker.com/products/docker-desktop/
- ~4 GB de espacio libre en disco

## Inicio rápido (3 pasos)

```bash
# 1. Abre Docker Desktop y espera que esté corriendo

# 2. Desde esta carpeta:
docker compose up -d

# 3. Espera ~40 segundos (la BD se importa sola en el primer arranque) y abre:
#    http://localhost:8082
```

> El primer arranque importa automáticamente `db/init/ewaoproject-local.sql` (dump pre-procesado con URLs locales). Arranques siguientes son inmediatos.

## URLs y credenciales

| Servicio | URL | Usuario | Contraseña |
|---|---|---|---|
| Sitio WordPress | http://localhost:8082 | — | — |
| WP-Admin | http://localhost:8082/wp-admin/ | `Udd-Ewao` | `EwaoLocal2026!` |
| phpMyAdmin | http://localhost:8081 | `ewaoproject` (o `root`) | `idina123*A` (o `root`) |

> La cuenta `Udd-Ewao` (antes `Raul`, renombrada para el curso) tiene la contraseña reseteada localmente. El backup contiene otros 4 administradores (`eneko`, `laura`, `Maximus`, `Nature`) cuyas contraseñas originales se desconocen — puedes resetearlas tú mismo (ver WP-CLI abajo).

## Estructura de la carpeta

```
wordpress/
├── docker-compose.yml      # Servicios: wordpress, db (MariaDB), phpmyadmin, wpcli
├── .env                    # Puertos y credenciales (editable)
├── README.md               # Este archivo
├── db/
│   ├── init/
│   │   └── ewaoproject-local.sql    # Dump PRE-PROCESADO (URLs localhost + admin listo)
│   └── ewaoproject-original.sql     # Dump original de producción (referencia)
└── html/                   # Document root = ex-httpdocs del servidor
    ├── wp-config.php       # Adaptado: DB_HOST apunta al contenedor "db"
    ├── wp-content/
    │   ├── themes/         # enfold, enfold-child, twentytwentyfive, twentytwentyone
    │   ├── plugins/        # duplicator-pro, gtranslate, disable-comments
    │   └── uploads/        # ~3.100 archivos de medios originales
    └── ...                 # Core WordPress 7.1.2 completo
```

## Comandos útiles

```bash
docker compose up -d          # Arrancar
docker compose stop           # Detener (conserva datos)
docker compose down           # Eliminar contenedores (conserva BD en volumen)
docker compose down -v        # Eliminar TODO incluida la BD → próximo up re-importa desde cero
docker compose logs -f wordpress   # Ver logs en vivo
```

### WP-CLI (herramienta de línea de comandos de WordPress)

```bash
# Listar usuarios
docker compose run --rm wpcli user list

# Resetear la contraseña de un usuario
docker compose run --rm wpcli user update NOMBRE --user_pass="NuevaClave123!"

# Activar/desactivar plugins y themes
docker compose run --rm wpcli plugin list
docker compose run --rm wpcli theme list

# Buscar/reemplazar en toda la BD (útil si cambias el puerto o el dominio)
docker compose run --rm wpcli search-replace "http://localhost:8082" "http://localhost:9090" --all-tables --skip-columns=guid
```

## Cambios respecto a producción

1. `wp-config.php`: `DB_HOST` pasa de `localhost` a `db` (nombre del contenedor). El resto es idéntico (mismas claves, salts y prefijo).
2. **URLs de la BD**: `https://ewaoproject.com` → `http://localhost:8082` (872 reemplazos, hecho con `wp search-replace` para respetar datos serializados).
3. **Usuario admin renombrado**: `Raul` → `Udd-Ewao` (login, nicename y display name), con contraseña reseteada a `EwaoLocal2026!`. Conserva su ID y la autoría de sus 110 entradas.
4. Eliminado `bsdiyhxk.php` (archivo vacío de 0 bytes, residuo sin función).
5. Se conservó `DISALLOW_FILE_EDIT` (true) y `WP_DEBUG` (false) como en producción. Para editar themes/plugins desde el admin o ver errores, cámbialos en `html/wp-config.php`.

## Solución de problemas

| Problema | Solución |
|---|---|
| "port is already allocated" | Edita `.env` (ej. `WP_PORT=9090`) y vuelve a `docker compose up -d`. Si cambiaste el puerto, actualiza también las URLs con WP-CLI (arriba). |
| El sitio tarda en cargar la primera vez | Normal: la BD (91 MB) se importa en el primer arranque. Espera ~40 s. |
| Error de conexión a la BD | Verifica que el contenedor `ewao_db` esté healthy: `docker compose ps`. |
| Quiero empezar de cero | `docker compose down -v` y luego `docker compose up -d`. |
| Cambié archivos .php y no se ven | Fuerza recarga (Ctrl+F5); Apache no cachea PHP, pero el navegador sí. |

## Notas para el repositorio Git

El `.gitignore` del repo excluye automáticamente: `html/wp-content/uploads/`, `html/wp-config.php`, `*.sql` y `.env`. Es decir, **esta carpeta completa se distribuye como ZIP** (pesa ~1 GB con la BD y los medios), no vía GitHub. El código versionable (compose, READMEs, estructura) sí queda en el repo.

> **Windows + rutas largas:** algunos archivos del plugin Duplicator Pro superan los 260 caracteres de ruta. Si git falla con `Filename too long` al clonar o hacer checkout, clona en una ruta corta (ej. `C:\dev\ewao-udd`) o ejecuta `git config core.longpaths true`.
