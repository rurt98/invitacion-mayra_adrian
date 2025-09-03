const { initializeApp } = require('firebase/app');
const {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} = require('firebase/firestore');
const XLSX = require('xlsx');

// Configuración de Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBrbmHTtHrCLxOQZCJUZ-fu58tvnY18sTs',
  authDomain: 'transportes-barranco-crm.firebaseapp.com',
  projectId: 'transportes-barranco-crm',
  storageBucket: 'transportes-barranco-crm.firebasestorage.app',
  messagingSenderId: '47879059598',
  appId: '1:47879059598:web:90640f5390d03739ccb1df',
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function exportarInvitadosFiltrado(opciones = {}) {
  try {
    console.log('🔄 Iniciando exportación filtrada de invitados...');

    // Opciones por defecto
    const {
      minPersonas = 0,
      maxPersonas = null,
      ordenarPor = 'nombreFamilia',
      orden = 'asc',
      incluirCamposAdicionales = false,
    } = opciones;

    // Obtener referencia a la colección "invitados"
    let invitadosRef = collection(db, 'invitados');

    // Aplicar filtros si se especifican
    if (minPersonas > 0 || maxPersonas !== null) {
      let filtros = [];

      if (minPersonas > 0) {
        filtros.push(where('numPersonas', '>=', minPersonas));
      }

      if (maxPersonas !== null) {
        filtros.push(where('numPersonas', '<=', maxPersonas));
      }

      // Aplicar ordenamiento
      filtros.push(orderBy(ordenarPor, orden));

      invitadosRef = query(invitadosRef, ...filtros);
    } else {
      // Solo ordenamiento si no hay filtros
      invitadosRef = query(invitadosRef, orderBy(ordenarPor, orden));
    }

    // Obtener documentos
    console.log('📖 Leyendo documentos de Firestore...');
    const snapshot = await getDocs(invitadosRef);

    if (snapshot.empty) {
      console.log(
        '⚠️  No se encontraron documentos que cumplan con los filtros'
      );
      return;
    }

    console.log(`✅ Se encontraron ${snapshot.size} documentos`);

    // Preparar datos para Excel
    const datosExcel = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      const documentId = doc.id;

      // Crear objeto base
      const fila = {
        nombre: data.nombreFamilia || 'Sin nombre',
        numeroDePersonas: data.numPersonas || 0,
        urlInvitacion: `https://mayraycarlos.site/invitacion/${documentId}`,
      };

      // Agregar campos adicionales si se solicita
      if (incluirCamposAdicionales) {
        fila.documentId = documentId;
        fila.fechaCreacion = data.fechaCreacion
          ? new Date(data.fechaCreacion.toDate()).toLocaleDateString()
          : 'N/A';
        fila.estado = data.estado || 'N/A';
        fila.notas = data.notas || '';
      }

      datosExcel.push(fila);

      console.log(
        `📝 Procesando: ${fila.nombre} - ${fila.numeroDePersonas} personas`
      );
    });

    // Crear libro de Excel
    console.log('📊 Creando archivo Excel...');
    const workbook = XLSX.utils.book_new();

    // Crear hoja de datos
    const worksheet = XLSX.utils.json_to_sheet(datosExcel);

    // Ajustar ancho de columnas dinámicamente
    const columnWidths = Object.keys(datosExcel[0] || {}).map((key) => {
      switch (key) {
        case 'nombre':
          return { wch: 30 };
        case 'numeroDePersonas':
          return { wch: 20 };
        case 'urlInvitacion':
          return { wch: 50 };
        case 'documentId':
          return { wch: 25 };
        case 'fechaCreacion':
          return { wch: 15 };
        case 'estado':
          return { wch: 15 };
        case 'notas':
          return { wch: 40 };
        default:
          return { wch: 20 };
      }
    });
    worksheet['!cols'] = columnWidths;

    // Agregar hoja al libro
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Invitados Filtrados');

    // Generar nombre de archivo con filtros
    const timestamp = new Date()
      .toISOString()
      .replace(/[:.]/g, '-')
      .slice(0, 19);
    let nombreArchivo = `invitados_filtrado_${timestamp}`;

    if (minPersonas > 0) nombreArchivo += `_min${minPersonas}`;
    if (maxPersonas !== null) nombreArchivo += `_max${maxPersonas}`;
    if (ordenarPor !== 'nombreFamilia') nombreArchivo += `_orden${ordenarPor}`;

    nombreArchivo += '.xlsx';

    // Guardar archivo
    XLSX.writeFile(workbook, nombreArchivo);

    console.log(`✅ Archivo Excel generado exitosamente: ${nombreArchivo}`);
    console.log(`📊 Total de registros exportados: ${datosExcel.length}`);

    // Mostrar resumen
    console.log('\n📋 Resumen de la exportación:');
    const totalPersonas = datosExcel.reduce(
      (sum, fila) => sum + fila.numeroDePersonas,
      0
    );
    console.log(`   - Total de familias: ${datosExcel.length}`);
    console.log(`   - Total de personas: ${totalPersonas}`);

    if (minPersonas > 0 || maxPersonas !== null) {
      console.log(`   - Filtros aplicados:`);
      if (minPersonas > 0)
        console.log(`     * Mínimo de personas: ${minPersonas}`);
      if (maxPersonas !== null)
        console.log(`     * Máximo de personas: ${maxPersonas}`);
    }
    console.log(`   - Ordenado por: ${ordenarPor} (${orden})`);
  } catch (error) {
    console.error('❌ Error durante la exportación:', error);
    process.exit(1);
  }
}

// Función para mostrar ayuda
function mostrarAyuda() {
  console.log(`
📋 Script de Exportación Filtrada de Invitados

Uso: node scripts/exportar-invitados-filtrado.cjs [opciones]

Opciones disponibles:
  --min-personas=N    Filtrar por mínimo de personas (ej: --min-personas=3)
  --max-personas=N    Filtrar por máximo de personas (ej: --max-personas=5)
  --ordenar-por=CAMPO Ordenar por campo específico (ej: --ordenar-por=numPersonas)
  --orden=ASC|DESC    Orden ascendente o descendente (ej: --orden=desc)
  --campos-extra      Incluir campos adicionales (documentId, fechaCreacion, etc.)
  --ayuda             Mostrar esta ayuda

Ejemplos:
  node scripts/exportar-invitados-filtrado.cjs --min-personas=4
  node scripts/exportar-invitados-filtrado.cjs --max-personas=2 --orden=desc
  node scripts/exportar-invitados-filtrado.cjs --ordenar-por=numPersonas --campos-extra
`);
}

// Función para procesar argumentos de línea de comandos
function procesarArgumentos() {
  const args = process.argv.slice(2);
  const opciones = {};

  for (const arg of args) {
    if (arg === '--ayuda' || arg === '-h') {
      mostrarAyuda();
      return null;
    }

    if (arg.startsWith('--min-personas=')) {
      opciones.minPersonas = parseInt(arg.split('=')[1]);
    } else if (arg.startsWith('--max-personas=')) {
      opciones.maxPersonas = parseInt(arg.split('=')[1]);
    } else if (arg.startsWith('--ordenar-por=')) {
      opciones.ordenarPor = arg.split('=')[1];
    } else if (arg.startsWith('--orden=')) {
      opciones.orden = arg.split('=')[1].toLowerCase();
    } else if (arg === '--campos-extra') {
      opciones.incluirCamposAdicionales = true;
    }
  }

  return opciones;
}

// Ejecutar el script
if (require.main === module) {
  const opciones = procesarArgumentos();

  if (opciones === null) {
    process.exit(0);
  }

  exportarInvitadosFiltrado(opciones)
    .then(() => {
      console.log('🎉 Exportación completada exitosamente');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Error fatal:', error);
      process.exit(1);
    });
}

module.exports = { exportarInvitadosFiltrado };
