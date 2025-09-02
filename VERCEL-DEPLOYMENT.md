# 🚀 Despliegue en Vercel - Invitación de Boda

## 📋 Configuración Completada

### ✅ Archivos de Configuración Creados:

- `vercel.json` - Configuración principal de Vercel
- `env.example` - Variables de entorno de ejemplo
- `.vercelignore` - Archivos a ignorar en el despliegue
- `vite.config.ts` - Optimizado para producción
- `.nvmrc` - Versión de Node.js especificada

### ✅ Optimizaciones Implementadas:

- **Code Splitting**: Chunks separados para vendor, firebase, y router
- **Minificación**: Terser para optimización de código
- **Assets**: Directorio optimizado para assets
- **SPA Routing**: Configuración para Single Page Application
- **Fuentes**: Comentadas temporalmente para evitar errores de build

## 🔧 Variables de Entorno

Configura las siguientes variables en Vercel:

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=tu_api_key_aqui
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain_aqui
VITE_FIREBASE_PROJECT_ID=tu_project_id_aqui
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket_aqui
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id_aqui
VITE_FIREBASE_APP_ID=tu_app_id_aqui

# Environment
NODE_ENV=production
```

## 🚀 Pasos para Desplegar

1. **Conectar repositorio** a Vercel
2. **Configurar variables de entorno** en el dashboard de Vercel
3. **Configurar build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. **Desplegar** automáticamente

## 📊 Optimizaciones de Rendimiento

- **Chunks separados**: Mejor caching y carga paralela
- **Minificación**: Código optimizado para producción
- **Assets optimizados**: Imágenes y SVGs comprimidos
- **Firebase optimizado**: Chunk separado para Firebase

## 🔧 Correcciones Realizadas

### ❌ Problemas Identificados y Solucionados:

1. **Fuentes faltantes**: El directorio `src/fonts/` estaba vacío pero el CSS intentaba cargar fuentes

   - **Solución**: Comentadas las fuentes en `src/index.css` y configuradas fuentes del sistema como fallback

2. **Configuración de Vercel**: Configuración inicial incorrecta para aplicaciones React

   - **Solución**: Simplificada la configuración en `vercel.json` para aplicaciones estáticas

3. **Dependencias**: Faltaba `terser` para minificación

   - **Solución**: Instalado `terser` como dependencia de desarrollo

4. **Node.js**: Versión no especificada

   - **Solución**: Creado `.nvmrc` con versión 18

5. **Firebase en desarrollo**: Error de resolución de paquete Firebase

   - **Solución**: Excluido Firebase de `optimizeDeps` en `vite.config.ts`

6. **Tailwind CSS en producción**: Estilos no se aplicaban correctamente en Vercel

   - **Solución**: Configurado `cssCodeSplit: false` en `vite.config.ts` y agregado `safelist` en `tailwind.config.cjs`

7. **CSS no se muestra en Vercel**: Problema específico de configuración de Vercel

   - **Solución**: Configuración específica de `vercel.json` con `@vercel/static-build` y script de build personalizado

8. **Tailwind CSS no funciona en Vercel**: Clases personalizadas no se aplicaban

   - **Solución**: Configuración robusta con `safelist` completo, `vercel-build` script específico, y configuración optimizada de Vite

9. **Error de Rollup en Vercel**: `Cannot find module '@rollup/rollup-linux-x64-gnu'`
   - **Solución**: Cambio de `terser` a `esbuild` como minificador y configuración de `@vercel/static-build`

## 🔍 Verificación Post-Despliegue

1. ✅ Aplicación carga correctamente
2. ✅ Firebase se conecta sin errores
3. ✅ Rutas funcionan (SPA routing)
4. ✅ Assets se cargan correctamente
5. ✅ Botones de redirección funcionan
6. ✅ Build sin errores de fuentes
7. ✅ Servidor de desarrollo funciona correctamente
8. ✅ Firebase se resuelve correctamente en desarrollo y producción
9. ✅ Tailwind CSS se genera correctamente en producción
10. ✅ Estilos personalizados se aplican correctamente
11. ✅ Configuración específica de Vercel implementada
12. ✅ Script de build personalizado creado
13. ✅ Clases personalizadas de Tailwind generadas correctamente
14. ✅ Configuración robusta para Vercel implementada
15. ✅ Error de Rollup solucionado con esbuild
16. ✅ Build optimizado para Vercel funcionando

## 🛠️ Comandos Útiles

```bash
# Construcción local
npm run build

# Preview local
npm run preview

# Desarrollo
npm run dev
```

## 📱 Funcionalidades

- ✅ HomePage con formulario de código
- ✅ InvitacionPage con datos dinámicos
- ✅ Redireccionamientos a Google Maps
- ✅ Integración con WhatsApp
- ✅ Diseño responsive
- ✅ Firebase Firestore integrado
