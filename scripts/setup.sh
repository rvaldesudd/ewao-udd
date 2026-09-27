#!/usr/bin/env bash
# Setup inicial del repositorio EWAO × UDD
# Ejecutar: bash scripts/setup.sh

set -e

echo "========================================="
echo "  EWAO × UDD — Setup del repositorio"
echo "========================================="
echo ""

# Verificar git instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git no está instalado. Instálalo primero: https://git-scm.com"
    exit 1
fi

echo "✅ Git detectado: $(git --version)"

# Verificar node (para CI y herramientas)
if command -v node &> /dev/null; then
    echo "✅ Node detectado: $(node --version)"
else
    echo "⚠️  Node no detectado. Algunas herramientas pueden no funcionar."
fi

# Verificar docker (para WordPress)
if command -v docker &> /dev/null; then
    echo "✅ Docker detectado: $(docker --version)"
else
    echo "⚠️  Docker no detectado. WordPress local no funcionará."
    echo "   Instálalo: https://www.docker.com/products/docker-desktop"
fi

echo ""
echo "========================================="
echo "  Estructura del repositorio"
echo "========================================="
echo ""

# Mostrar estructura
if command -v tree &> /dev/null; then
    tree -L 2 -I '.git|node_modules'
else
    ls -la
fi

echo ""
echo "========================================="
echo "  Siguientes pasos"
echo "========================================="
echo ""
echo "1. Lee el brief completo:          docs/brief.md"
echo "2. Lee los principios EWAO:        docs/principios-ewao.md"
echo "3. Revisa tu carpeta de grupo:     areas/XX-tu-grupo/"
echo "4. Crea tu branch de trabajo:      git checkout -b grupo/XX-nombre-feature"
echo "5. Trabaja en tus entregables:      areas/XX-tu-grupo/entregable/"
echo "6. Abre un PR cuando tengas avance: hacia 'develop'"
echo ""
echo "Para más detalles, revisa CONTRIBUTING.md"
echo ""
echo "✅ Setup completado."
