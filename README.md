# Mayra & Adrian - Sistema de Invitaciones de Boda

Una aplicación React con TypeScript que permite crear y gestionar invitaciones de boda personalizadas usando Firebase y enlaces dinámicos.

## 🚀 Características

- ⚛️ React 18 con TypeScript
- 🔥 Integración con Firebase Firestore
- ⚡ Vite para desarrollo rápido
- 🎨 Tailwind CSS para estilos modernos y responsive
- 📱 Diseño mobile-first
- 🎭 Componentes reutilizables con variantes
- 💒 Sistema de invitaciones de boda personalizadas
- 🔗 Enlaces dinámicos únicos para cada invitado
- 📋 Generador de invitaciones para los novios
- ✅ Sistema de confirmación de asistencia

## 📋 Prerrequisitos

- Node.js 18+
- Yarn (recomendado) o npm
- Proyecto de Firebase configurado

## 🛠️ Instalación

1. **Clona o descarga este proyecto**
2. **Instala las dependencias:**

   ```bash
   yarn install
   ```

   o

   ```bash
   npm install
   ```

3. **Configura Firebase:**
   - Ve a [Firebase Console](https://console.firebase.google.com/)
   - Crea un nuevo proyecto o usa uno existente
   - Habilita Firestore Database
   - Ve a Configuración del proyecto > General
   - Copia la configuración de tu app web
   - Reemplaza los valores en `src/firebase.ts`

## ⚙️ Configuración de Firebase

### ✅ Configuración Completada

El proyecto ya está configurado con Firebase:

- **Proyecto:** `transportes-barranco-crm`
- **Configuración:** `src/firebase.ts`
- **Reglas de seguridad:** Desplegadas y funcionando
- **Firestore:** Habilitado y configurado

### 🔧 Configuración Actual

```typescript
const firebaseConfig = {
  apiKey: 'AIzaSyBrbmHTtHrCLxOQZCJUZ-fu58tvnY18sTs',
  authDomain: 'transportes-barranco-crm.firebaseapp.com',
  projectId: 'transportes-barranco-crm',
  storageBucket: 'transportes-barranco-crm.firebasestorage.app',
  messagingSenderId: '47879059598',
  appId: '1:47879059598:web:90640f5390d03739ccb1df',
};
```

### 🚀 Desplegar Cambios

```bash
# Desplegar reglas de seguridad
firebase deploy --only firestore:rules

# Desplegar hosting (cuando esté configurado)
firebase deploy --only hosting
```

## 🚀 Uso

### Desarrollo

```bash
yarn dev
```

La aplicación se abrirá en `http://localhost:3000`

### Construcción

```bash
yarn build
```

### Vista previa de producción

```bash
yarn preview
```

## 📊 Scripts de Exportación

El proyecto incluye scripts para exportar datos de invitados a Excel:

### Exportación Básica

```bash
npm run export-invitados
```

### Exportación con Filtros

```bash
npm run export-invitados-filtrado -- --min-personas=4
npm run export-invitados-filtrado -- --max-personas=2 --orden=desc
npm run export-invitados-filtrado -- --campos-extra
```

Para más detalles, consulta [EXPORTAR-INVITADOS.md](./EXPORTAR-INVITADOS.md).

### Linting

```bash
yarn lint
```

## 📁 Estructura del Proyecto

```
src/
├── App.tsx                    # Componente principal con enrutamiento
├── main.tsx                   # Punto de entrada
├── index.css                  # Estilos globales con Tailwind
├── firebase.ts                # Configuración de Firebase
└── components/
    ├── HomePage.tsx           # Página principal con formulario de código
    ├── InvitacionPage.tsx     # Página de invitación individual
    ├── GeneradorEnlaces.tsx   # Generador de invitaciones (admin)
    └── ExampleComponent.tsx   # Componente de ejemplo con Tailwind
```

## 🔥 Funcionalidades de Firebase

- **Lectura de documentos:** La app lee automáticamente documentos de la colección "invitados"
- **Manejo de errores:** Gestión robusta de errores de conexión
- **Estados de carga:** Indicadores visuales durante la carga de datos
- **Enlaces dinámicos:** Cada invitación tiene un hash único que identifica el documento
- **Confirmación de asistencia:** Sistema para que los invitados confirmen su presencia

## 🎨 Funcionalidades de Tailwind CSS

- **Sistema de diseño completo:** Colores, espaciados, tipografía y más
- **Componentes CSS personalizados:** Clases `.btn`, `.card`, `.input` reutilizables
- **Responsive design:** Grid system y breakpoints automáticos
- **Animaciones:** Transiciones y hover effects incluidos
- **Tema personalizable:** Colores primarios y fuentes personalizadas
- **Configuración optimizada:** Archivos `.cjs` para compatibilidad con ES modules

## 💒 Sistema de Invitaciones de Boda

- **Enlaces únicos:** Cada invitado recibe un enlace personalizado con hash único
- **Página principal:** Formulario para ingresar el código de invitación
- **Invitación personalizada:** Muestra información específica del invitado
- **Confirmación de asistencia:** Sistema para que los invitados confirmen su presencia
- **Generador de enlaces:** Panel administrativo para crear nuevas invitaciones
- **Diseño romántico:** Temática de boda con colores y elementos apropiados

## 🎨 Personalización

- **Tailwind CSS**: Modifica `tailwind.config.cjs` para personalizar colores, fuentes y espaciados
- **Componentes**: Crea nuevos componentes en `src/components/` usando las clases de Tailwind
- **Estilos globales**: Ajusta `src/index.css` para estilos personalizados y componentes CSS
- **Firebase**: Personaliza la colección de Firestore en `src/App.tsx`
- **Configuración**: Los archivos de configuración usan extensión `.cjs` para compatibilidad

## 🚨 Solución de Problemas

### Error de configuración de Firebase

- Verifica que todos los campos en `firebase.ts` estén correctos
- Asegúrate de que Firestore esté habilitado en tu proyecto
- Revisa las reglas de seguridad de Firestore

### Problemas de dependencias

```bash
rm -rf node_modules yarn.lock
yarn install
```

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.
