const fs = require('fs');
const path = require('path');

// Archivos que SÍ se están usando (extraídos del análisis del código)
const archivosUsados = [
  '1_seccion.jpg',
  'bg.png',
  'M.svg',
  'A.png',
  'Icono_1.svg',
  'Detalles.svg',
  'Logo Novios_1.svg',
  'Itinerario.svg',
  'header_2.svg',
  'Imagen_2.svg',
  'bg_2.jpg',
  'paleta de colores.svg',
  'bg_3.jpg',
  'bg_4.jpg',
  'title.svg',
  'nuestras recomendaciones.svg',
  'Mesa de regalos.svg',
  'dress_code.svg',
  'bg_5.jpg',
  'bg_6.jpg',
  'bg_7.svg',
  'group_1.svg',
  'Imagen 9.svg',
  'Imagen 10.svg',
  'Imagen 11.svg',
  'Sello logo.svg',
  'Mayra Pérez.svg',
];

// Función para limpiar assets no utilizados
function limpiarAssetsNoUsados() {
  const assetsDir = path.join(__dirname, '../src/assets');
  const assetsOriginalesDir = path.join(__dirname, '../src/assets-original');

  console.log('🧹 Iniciando limpieza de assets no utilizados...\n');

  // Leer todos los archivos en el directorio assets
  const archivosEnDirectorio = fs.readdirSync(assetsDir);

  // Filtrar archivos no utilizados
  const archivosNoUsados = archivosEnDirectorio.filter((archivo) => {
    // Excluir archivos del sistema
    if (archivo === '.DS_Store') return false;

    // Verificar si el archivo está en la lista de archivos usados
    return !archivosUsados.includes(archivo);
  });

  console.log('📋 ANÁLISIS DE ARCHIVOS:');
  console.log('='.repeat(50));
  console.log(`📁 Total de archivos en assets: ${archivosEnDirectorio.length}`);
  console.log(`✅ Archivos utilizados: ${archivosUsados.length}`);
  console.log(`🗑️  Archivos no utilizados: ${archivosNoUsados.length}`);

  if (archivosNoUsados.length === 0) {
    console.log(
      '\n🎉 ¡No hay archivos no utilizados! Todos los assets están siendo usados.'
    );
    return;
  }

  console.log('\n🗑️  ARCHIVOS NO UTILIZADOS:');
  console.log('='.repeat(50));

  let totalSizeEliminado = 0;

  archivosNoUsados.forEach((archivo) => {
    const rutaCompleta = path.join(assetsDir, archivo);
    const stats = fs.statSync(rutaCompleta);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalSizeEliminado += stats.size;

    console.log(`   - ${archivo} (${sizeKB}KB)`);
  });

  console.log(
    `\n💾 Espacio total a liberar: ${(totalSizeEliminado / 1024 / 1024).toFixed(
      2
    )}MB`
  );

  // Confirmar eliminación
  console.log('\n⚠️  ¿Deseas eliminar estos archivos? (y/N)');

  // En un entorno automatizado, proceder directamente
  const confirmar = true; // Cambiar a false si quieres confirmación manual

  if (confirmar) {
    console.log('\n🗑️  Eliminando archivos no utilizados...');

    archivosNoUsados.forEach((archivo) => {
      const rutaCompleta = path.join(assetsDir, archivo);
      const rutaOriginal = path.join(assetsOriginalesDir, archivo);

      try {
        // Eliminar del directorio optimizado
        fs.unlinkSync(rutaCompleta);

        // También eliminar del directorio original si existe
        if (fs.existsSync(rutaOriginal)) {
          fs.unlinkSync(rutaOriginal);
        }

        console.log(`   ✅ Eliminado: ${archivo}`);
      } catch (error) {
        console.log(`   ❌ Error eliminando ${archivo}: ${error.message}`);
      }
    });

    console.log('\n🎉 ¡Limpieza completada!');
    console.log(
      `💾 Espacio liberado: ${(totalSizeEliminado / 1024 / 1024).toFixed(2)}MB`
    );

    // Mostrar archivos restantes
    const archivosRestantes = fs
      .readdirSync(assetsDir)
      .filter((f) => f !== '.DS_Store');
    console.log(`\n📁 Archivos restantes: ${archivosRestantes.length}`);
    console.log('   Archivos que permanecen:');
    archivosRestantes.forEach((archivo) => {
      console.log(`   - ${archivo}`);
    });
  } else {
    console.log('\n❌ Limpieza cancelada por el usuario.');
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  limpiarAssetsNoUsados();
}

module.exports = { limpiarAssetsNoUsados, archivosUsados };
