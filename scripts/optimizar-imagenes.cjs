const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

// Configuración de optimización
const config = {
  jpeg: {
    quality: 80,
    progressive: true,
    mozjpeg: true,
  },
  png: {
    quality: 80,
    compressionLevel: 9,
  },
  webp: {
    quality: 80,
  },
};

// Función para optimizar imágenes
async function optimizarImagen(inputPath, outputPath, tipo) {
  try {
    const stats = fs.statSync(inputPath);
    const sizeBefore = (stats.size / 1024 / 1024).toFixed(2);

    let sharpInstance = sharp(inputPath);

    // Aplicar optimizaciones según el tipo
    if (tipo === 'jpeg' || tipo === 'jpg') {
      sharpInstance = sharpInstance.jpeg(config.jpeg);
    } else if (tipo === 'png') {
      sharpInstance = sharpInstance.png(config.png);
    } else if (tipo === 'webp') {
      sharpInstance = sharpInstance.webp(config.webp);
    }

    await sharpInstance.toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const sizeAfter = (newStats.size / 1024 / 1024).toFixed(2);
    const reduction = (
      ((stats.size - newStats.size) / stats.size) *
      100
    ).toFixed(1);

    console.log(
      `✅ ${path.basename(
        inputPath
      )}: ${sizeBefore}MB → ${sizeAfter}MB (${reduction}% reducción)`
    );

    return { success: true, sizeBefore, sizeAfter, reduction };
  } catch (error) {
    console.error(`❌ Error optimizando ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

// Función para optimizar SVG
async function optimizarSVG(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const sizeBefore = (stats.size / 1024).toFixed(2);

    // Leer el contenido del SVG
    const svgContent = fs.readFileSync(inputPath, 'utf8');

    // Configuración de optimización para SVG
    const svgoConfig = {
      plugins: [
        'preset-default',
        {
          name: 'removeViewBox',
          active: false,
        },
        {
          name: 'removeDimensions',
          active: false,
        },
      ],
    };

    // Optimizar el SVG
    const result = optimize(svgContent, svgoConfig);

    // Escribir el SVG optimizado
    fs.writeFileSync(outputPath, result.data);

    const newStats = fs.statSync(outputPath);
    const sizeAfter = (newStats.size / 1024).toFixed(2);
    const reduction = (
      ((stats.size - newStats.size) / stats.size) *
      100
    ).toFixed(1);

    console.log(
      `📄 ${path.basename(
        inputPath
      )}: ${sizeBefore}KB → ${sizeAfter}KB (${reduction}% reducción)`
    );

    return {
      success: true,
      sizeBefore: sizeBefore + 'KB',
      sizeAfter: sizeAfter + 'KB',
      reduction,
    };
  } catch (error) {
    console.error(`❌ Error optimizando SVG ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

// Función principal
async function optimizarTodasLasImagenes() {
  const assetsDir = path.join(__dirname, '../src/assets');
  const optimizedDir = path.join(__dirname, '../src/assets-optimized');

  // Crear directorio de imágenes optimizadas si no existe
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  console.log('🚀 Iniciando optimización de imágenes...\n');

  const archivos = fs.readdirSync(assetsDir);
  const resultados = [];

  for (const archivo of archivos) {
    if (archivo === '.DS_Store') continue;

    const inputPath = path.join(assetsDir, archivo);
    const outputPath = path.join(optimizedDir, archivo);
    const extension = path.extname(archivo).toLowerCase();

    let resultado;

    if (extension === '.svg') {
      resultado = await optimizarSVG(inputPath, outputPath);
    } else if (['.jpg', '.jpeg', '.png'].includes(extension)) {
      resultado = await optimizarImagen(
        inputPath,
        outputPath,
        extension.substring(1)
      );
    } else {
      console.log(`⏭️  Saltando ${archivo} (formato no soportado)`);
      continue;
    }

    resultados.push({ archivo, ...resultado });
  }

  // Resumen
  console.log('\n📊 RESUMEN DE OPTIMIZACIÓN:');
  console.log('='.repeat(50));

  const exitosos = resultados.filter((r) => r.success);
  const fallidos = resultados.filter((r) => !r.success);

  console.log(`✅ Archivos procesados exitosamente: ${exitosos.length}`);
  console.log(`❌ Archivos con errores: ${fallidos.length}`);

  if (fallidos.length > 0) {
    console.log('\n❌ Errores encontrados:');
    fallidos.forEach((f) => console.log(`   - ${f.archivo}: ${f.error}`));
  }

  console.log(`\n📁 Imágenes optimizadas guardadas en: ${optimizedDir}`);
  console.log('\n💡 Para usar las imágenes optimizadas:');
  console.log(
    '   1. Reemplaza el contenido de src/assets con src/assets-optimized'
  );
  console.log('   2. O actualiza las rutas de importación en tu código');
}

// Ejecutar si se llama directamente
if (require.main === module) {
  optimizarTodasLasImagenes().catch(console.error);
}

module.exports = { optimizarImagen, optimizarSVG, optimizarTodasLasImagenes };
