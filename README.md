# Mayra Adrian App

Una aplicación React con TypeScript que se conecta a Firebase para leer documentos.

## 🚀 Características

- ⚛️ React 18 con TypeScript
- 🔥 Integración con Firebase Firestore
- ⚡ Vite para desarrollo rápido
- 🎨 Tailwind CSS para estilos modernos y responsive
- 📱 Diseño mobile-first
- 🎭 Componentes reutilizables con variantes

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

Edita el archivo `src/firebase.ts` y reemplaza la configuración con tus valores reales:

```typescript
const firebaseConfig = {
  apiKey: 'tu-api-key-real',
  authDomain: 'tu-proyecto.firebaseapp.com',
  projectId: 'tu-project-id',
  storageBucket: 'tu-proyecto.appspot.com',
  messagingSenderId: 'tu-messaging-sender-id',
  appId: 'tu-app-id',
};
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

### Linting

```bash
yarn lint
```

## 📁 Estructura del Proyecto

```
src/
├── App.tsx                    # Componente principal
├── main.tsx                   # Punto de entrada
├── index.css                  # Estilos globales con Tailwind
├── firebase.ts                # Configuración de Firebase
└── components/
    └── ExampleComponent.tsx   # Componente de ejemplo con Tailwind
```

## 🔥 Funcionalidades de Firebase

- **Lectura de documentos:** La app lee automáticamente documentos de una colección
- **Manejo de errores:** Gestión robusta de errores de conexión
- **Estados de carga:** Indicadores visuales durante la carga de datos

## 🎨 Funcionalidades de Tailwind CSS

- **Sistema de diseño completo:** Colores, espaciados, tipografía y más
- **Componentes CSS personalizados:** Clases `.btn`, `.card`, `.input` reutilizables
- **Responsive design:** Grid system y breakpoints automáticos
- **Animaciones:** Transiciones y hover effects incluidos
- **Tema personalizable:** Colores primarios y fuentes personalizadas
- **Configuración optimizada:** Archivos `.cjs` para compatibilidad con ES modules

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
