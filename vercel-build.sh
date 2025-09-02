#!/bin/bash

# Script de build específico para Vercel
echo "🚀 Iniciando build para Vercel..."

# Configurar variables de entorno
export NODE_ENV=production

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Ejecutar build
echo "🔨 Ejecutando build..."
npm run build

# Verificar que el CSS se generó correctamente
echo "✅ Verificando archivos generados..."
if [ -f "dist/assets/style-"*.css ]; then
    echo "✅ Archivo CSS generado correctamente"
    ls -la dist/assets/style-*.css
else
    echo "❌ Error: Archivo CSS no encontrado"
    exit 1
fi

echo "🎉 Build completado exitosamente"
