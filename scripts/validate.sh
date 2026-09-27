#!/usr/bin/env bash
# Validación básica del repositorio EWAO × UDD
# Ejecutar: bash scripts/validate.sh

set -e

echo "========================================="
echo "  EWAO × UDD — Validación de estructura"
echo "========================================="
echo ""

ERRORS=0

# Verificar archivos requeridos
REQUIRED_FILES=(
    "README.md"
    "CONTRIBUTING.md"
    "docs/brief.md"
    "docs/principios-ewao.md"
    "shared/matriz-dependencias.md"
    "shared/buyer-personas.md"
    "shared/kpis-globales.md"
    "shared/guia-estilo.md"
    "landings/README.md"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file — FALTANTE"
        ERRORS=$((ERRORS + 1))
    fi
done

echo ""

# Verificar carpetas de grupos
for i in $(seq -w 1 8); do
    GRPO_DIR=$(find areas -maxdepth 1 -name "${i}-*" -type d 2>/dev/null | head -1)
    if [ -n "$GRPO_DIR" ]; then
        if [ -f "$GRPO_DIR/README.md" ]; then
            echo "✅ Grupo $i — $GRPO_DIR/README.md"
        else
            echo "⚠️  Grupo $i — $GRPO_DIR (sin README.md)"
        fi
    else
        echo "❌ Grupo $i — carpeta no encontrada"
        ERRORS=$((ERRORS + 1))
    fi
done

echo ""

# Verificar templates de issues
if [ -d ".github/ISSUE_TEMPLATE" ]; then
    TEMPLATE_COUNT=$(find .github/ISSUE_TEMPLATE -name "*.md" | wc -l)
    echo "✅ Templates de issues: $TEMPLATE_COUNT archivos"
else
    echo "❌ .github/ISSUE_TEMPLATE no existe"
    ERRORS=$((ERRORS + 1))
fi

echo ""

# Verificar ramas esperadas
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "N/A")
echo "Rama actual: $CURRENT_BRANCH"

if git rev-parse --verify main &>/dev/null 2>&1; then
    echo "✅ Rama main existe"
else
    echo "⚠️  Rama main no existe aún (se creará en el primer push)"
fi

echo ""

if [ $ERRORS -eq 0 ]; then
    echo "✅ Validación completada sin errores."
else
    echo "⚠️  Validación completada con $ERRORS errores."
fi
