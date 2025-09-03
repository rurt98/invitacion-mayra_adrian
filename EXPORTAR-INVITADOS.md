# Exportar Invitados a Excel

Este proyecto incluye dos scripts para exportar documentos de la colección "invitados" de Firestore a archivos Excel:

1. **Script Básico**: Exporta todos los invitados con la estructura estándar
2. **Script Avanzado**: Permite filtrar y personalizar la exportación

## Características

- Lee todos los documentos de la colección "invitados" de Firestore
- Genera un archivo Excel con la siguiente estructura:
  - **nombre**: nombreFamilia del documento
  - **numeroDePersonas**: numPersonas del documento
  - **urlInvitacion**: URL completa construida como `https://mayraycarlos.site/invitacion/{documentId}`

## Requisitos

- Node.js instalado
- Dependencias del proyecto instaladas (`npm install`)
- Acceso a la base de datos de Firebase

## Script Básico

### Uso

#### Opción 1: Usando npm script (Recomendado)

```bash
npm run export-invitados
```

#### Opción 2: Ejecutando directamente

```bash
node scripts/exportar-invitados-excel.cjs
```

## Script Avanzado (Con Filtros)

### Uso

#### Opción 1: Usando npm script

```bash
npm run export-invitados-filtrado -- [opciones]
```

#### Opción 2: Ejecutando directamente

```bash
node scripts/exportar-invitados-filtrado.cjs [opciones]
```

### Opciones Disponibles

- `--min-personas=N`: Filtrar por mínimo de personas
- `--max-personas=N`: Filtrar por máximo de personas
- `--ordenar-por=CAMPO`: Ordenar por campo específico
- `--orden=ASC|DESC`: Orden ascendente o descendente
- `--campos-extra`: Incluir campos adicionales
- `--ayuda`: Mostrar ayuda

### Ejemplos de Uso

```bash
# Exportar solo familias con 4 o más personas
npm run export-invitados-filtrado -- --min-personas=4

# Exportar familias con máximo 2 personas, ordenadas por número de personas descendente
npm run export-invitados-filtrado -- --max-personas=2 --ordenar-por=numPersonas --orden=desc

# Exportar con campos adicionales
npm run export-invitados-filtrado -- --campos-extra

# Ver ayuda
npm run export-invitados-filtrado -- --ayuda
```

## Salida

El script generará un archivo Excel con el nombre:

```
invitados_export_YYYY-MM-DDTHH-MM-SS.xlsx
```

El archivo se guardará en el directorio raíz del proyecto.

## Estructura del Excel

### Script Básico

| nombre         | numeroDePersonas | urlInvitacion                                  |
| -------------- | ---------------- | ---------------------------------------------- |
| Familia García | 4                | https://mayraycarlos.site/invitacion/abc123... |
| Familia López  | 2                | https://mayraycarlos.site/invitacion/def456... |

### Script Avanzado (Con --campos-extra)

| nombre         | numeroDePersonas | urlInvitacion                                  | documentId | fechaCreacion | estado | notas             |
| -------------- | ---------------- | ---------------------------------------------- | ---------- | ------------- | ------ | ----------------- |
| Familia García | 4                | https://mayraycarlos.site/invitacion/abc123... | abc123...  | 01/01/2025    | Activo | Notas adicionales |

## Logs del Script

El script mostrará información detallada durante la ejecución:

- Número de documentos encontrados
- Progreso del procesamiento
- Resumen final con totales
- Cualquier error que pueda ocurrir

## Solución de Problemas

### Error de conexión a Firebase

- Verifica que la configuración de Firebase sea correcta
- Asegúrate de tener acceso a internet
- Verifica que el proyecto de Firebase esté activo

### No se encuentran documentos

- Verifica que la colección "invitados" exista en Firestore
- Asegúrate de que la colección tenga documentos
- Verifica los permisos de lectura en las reglas de Firestore

### Error al generar Excel

- Verifica que el directorio tenga permisos de escritura
- Asegúrate de que no haya otro archivo con el mismo nombre abierto

## Personalización

Si necesitas modificar la estructura del Excel o agregar más campos, edita el archivo `scripts/exportar-invitados-excel.cjs` y modifica la función `exportarInvitadosExcel()`.
