# 🔤 Instrucciones para Configurar Fuentes Adobe

## 📥 **Descargar Fuentes Adobe**

### **1. Mrs Eaves (Roman Lining)**

- **Fuente:** Mrs Eaves
- **Estilo:** Roman Lining
- **Peso:** 400 (Regular)
- **Formato:** WOFF2, WOFF, TTF

### **2. Montblanc (Regular)**

- **Fuente:** Montblanc
- **Estilo:** Regular
- **Peso:** 400 (Regular)
- **Formato:** WOFF2, WOFF, TTF

## 🗂️ **Estructura de Archivos Requerida**

```
src/
├── fonts/
│   ├── MrsEaves-RomanLining.woff2
│   ├── MrsEaves-RomanLining.woff
│   ├── MrsEaves-RomanLining.ttf
│   ├── Montblanc-Regular.woff2
│   ├── Montblanc-Regular.woff
│   └── Montblanc-Regular.ttf
```

## 🔧 **Configuración Automática**

### **El archivo `index.css` ya está configurado con:**

```css
/* Importar fuentes Adobe */
@font-face {
  font-family: 'Mrs Eaves';
  src: url('./fonts/MrsEaves-RomanLining.woff2') format('woff2'), url('./fonts/MrsEaves-RomanLining.woff')
      format('woff'), url('./fonts/MrsEaves-RomanLining.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montblanc';
  src: url('./fonts/Montblanc-Regular.woff2') format('woff2'), url('./fonts/Montblanc-Regular.woff')
      format('woff'), url('./fonts/Montblanc-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

## 🎯 **Cómo Usar las Fuentes**

### **1. Clases CSS Automáticas:**

- **Todos los elementos** usan `Mrs Eaves` por defecto
- **Clase `.font-primary`** para `Mrs Eaves`
- **Clase `.font-secondary`** para `Montblanc`

### **2. En Componentes React:**

```jsx
// Usar Mrs Eaves (por defecto)
<h1>Mayra & Adrian</h1>

// Usar Montblanc
<p className="font-secondary">Texto con Montblanc</p>

// Forzar Mrs Eaves
<span className="font-primary">Texto con Mrs Eaves</span>
```

### **3. Variables CSS:**

```css
:root {
  --font-primary: 'Mrs Eaves', serif;
  --font-secondary: 'Montblanc', sans-serif;
}
```

## 📱 **Optimización de Rendimiento**

### **Formato WOFF2 (Recomendado):**

- **Mejor compresión** que WOFF y TTF
- **Carga más rápida** en navegadores modernos
- **Fallback automático** a WOFF y TTF

### **Font Display Swap:**

- **Texto visible inmediatamente** con fuentes del sistema
- **Cambio suave** cuando se cargan las fuentes personalizadas
- **Mejor experiencia de usuario**

## 🚀 **Pasos para Implementar**

### **1. Descargar Fuentes:**

- Obtener archivos de Adobe Fonts
- Convertir a formatos web (WOFF2, WOFF, TTF)
- Colocar en carpeta `src/fonts/`

### **2. Verificar Nombres:**

- Los nombres de archivo deben coincidir exactamente
- **Case-sensitive** en algunos sistemas
- Verificar extensiones de archivo

### **3. Probar Funcionamiento:**

```bash
yarn dev
```

- Abrir DevTools > Network
- Verificar que las fuentes se cargan
- Comprobar que se aplican correctamente

## 🔍 **Solución de Problemas**

### **Fuentes No Se Cargan:**

1. **Verificar rutas** en `index.css`
2. **Comprobar nombres** de archivos
3. **Verificar permisos** de archivos
4. **Revisar consola** del navegador

### **Fuentes No Se Aplican:**

1. **Verificar CSS** en DevTools
2. **Comprobar fallbacks** (serif, sans-serif)
3. **Verificar especificidad** de CSS
4. **Limpiar cache** del navegador

## 📚 **Recursos Adicionales**

### **Herramientas de Conversión:**

- **FontSquirrel:** Convertir TTF a WOFF/WOFF2
- **Google Fonts:** Optimizar fuentes web
- **Adobe Fonts:** Descargar fuentes originales

### **Documentación:**

- **MDN Web Docs:** @font-face
- **CSS-Tricks:** Font Loading
- **Web.dev:** Optimize Web Fonts

## ✅ **Verificación Final**

### **Después de configurar:**

1. ✅ Fuentes descargadas en `src/fonts/`
2. ✅ Nombres de archivo coinciden
3. ✅ `index.css` configurado correctamente
4. ✅ Aplicación funciona sin errores
5. ✅ Fuentes se aplican correctamente

¡Las fuentes Adobe están listas para usar en tu proyecto! 🎉
