// Script para crear datos de prueba en Firebase
// Ejecutar con: node scripts/crear-datos-prueba.cjs

const { initializeApp } = require('firebase/app');
const {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} = require('firebase/firestore');

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

// Función para generar hash único
const generarHash = (nombre, apellido) => {
  const base = `${nombre}${apellido}${Date.now()}`;
  return Buffer.from(base)
    .toString('base64')
    .replace(/[^a-zA-Z0-9]/g, '')
    .substring(0, 8)
    .toUpperCase();
};

// Datos de prueba
const invitadosPrueba = [
  {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan.perez@email.com',
    telefono: '+1 234 567 8900',
    invitados: 2,
    mensaje: '¡Nos encantaría estar presentes en tu boda!',
    confirmado: false,
    fechaCreacion: serverTimestamp(),
    fechaConfirmacion: null,
  },
  {
    nombre: 'María',
    apellido: 'García',
    email: 'maria.garcia@email.com',
    telefono: '+1 234 567 8901',
    invitados: 1,
    mensaje: '¡Felicidades por tu boda!',
    confirmado: true,
    fechaCreacion: serverTimestamp(),
    fechaConfirmacion: serverTimestamp(),
  },
  {
    nombre: 'Carlos',
    apellido: 'Rodríguez',
    email: 'carlos.rodriguez@email.com',
    telefono: '+1 234 567 8902',
    invitados: 4,
    mensaje: 'Toda la familia está emocionada por tu boda',
    confirmado: false,
    fechaCreacion: serverTimestamp(),
    fechaConfirmacion: null,
  },
  {
    nombre: 'Ana',
    apellido: 'López',
    email: 'ana.lopez@email.com',
    telefono: '+1 234 567 8903',
    invitados: 2,
    mensaje: '¡Será un día muy especial!',
    confirmado: false,
    fechaCreacion: serverTimestamp(),
    fechaConfirmacion: null,
  },
];

// Función principal para crear datos
const crearDatosPrueba = async () => {
  try {
    console.log('🚀 Iniciando creación de datos de prueba...');

    for (const invitado of invitadosPrueba) {
      // Generar hash único
      const hash = generarHash(invitado.nombre, invitado.apellido);

      // Crear documento
      await addDoc(collection(db, 'invitados'), {
        ...invitado,
        hash,
      });

      console.log(
        `✅ Invitado creado: ${invitado.nombre} ${invitado.apellido}`
      );
      console.log(`   Hash: ${hash}`);
      console.log(`   Enlace: http://localhost:3000/invitacion/${hash}`);
      console.log('---');
    }

    console.log('🎉 ¡Datos de prueba creados exitosamente!');
    console.log('📱 Puedes probar los enlaces en tu aplicación local');
  } catch (error) {
    console.error('❌ Error al crear datos de prueba:', error);
  }
};

// Ejecutar script
crearDatosPrueba();
