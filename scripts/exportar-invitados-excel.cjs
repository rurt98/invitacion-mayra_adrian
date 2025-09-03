const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
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

async function exportarInvitadosExcel() {
  try {
    console.log('🔄 Iniciando exportación de invitados...');

    // Obtener referencia a la colección "invitados"
    const invitadosRef = collection(db, 'invitados');

    // Obtener todos los documentos
    console.log('📖 Leyendo documentos de Firestore...');
    const snapshot = await getDocs(invitadosRef);

    if (snapshot.empty) {
      console.log(
        '⚠️  No se encontraron documentos en la colección "invitados"'
      );
      return;
    }

    console.log(`✅ Se encontraron ${snapshot.size} documentos`);

    // Preparar datos para Excel
    const datosExcel = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      const documentId = doc.id;

      // Crear objeto con la estructura solicitada
      const fila = {
        nombre: data.nombreFamilia || 'Sin nombre',
        numeroDePersonas: data.numPersonas || 0,
        urlInvitacion: `https://mayraycarlos.site/invitacion/${documentId}`,
      };

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

    // Ajustar ancho de columnas
    const columnWidths = [
      { wch: 30 }, // nombre
      { wch: 20 }, // numeroDePersonas
      { wch: 50 }, // urlInvitacion
    ];
    worksheet['!cols'] = columnWidths;

    // Agregar hoja al libro
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Invitados');

    // Generar nombre de archivo con timestamp
    const timestamp = new Date()
      .toISOString()
      .replace(/[:.]/g, '-')
      .slice(0, 19);
    const nombreArchivo = `invitados_export_${timestamp}.xlsx`;

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
  } catch (error) {
    console.error('❌ Error durante la exportación:', error);
    process.exit(1);
  }
}

// Ejecutar el script
if (require.main === module) {
  exportarInvitadosExcel()
    .then(() => {
      console.log('🎉 Exportación completada exitosamente');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Error fatal:', error);
      process.exit(1);
    });
}

module.exports = { exportarInvitadosExcel };
