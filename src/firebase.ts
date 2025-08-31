import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  enableNetwork,
  disableNetwork,
} from 'firebase/firestore';

// Firebase configuration
// Configuración real de tu proyecto Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBrbmHTtHrCLxOQZCJUZ-fu58tvnY18sTs',
  authDomain: 'transportes-barranco-crm.firebaseapp.com',
  projectId: 'transportes-barranco-crm',
  storageBucket: 'transportes-barranco-crm.firebasestorage.app',
  messagingSenderId: '47879059598',
  appId: '1:47879059598:web:90640f5390d03739ccb1df',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Función para verificar conectividad
export const checkFirebaseConnection = async () => {
  try {
    // Intentar habilitar la red
    await enableNetwork(db);
    console.log('✅ Firebase conectado exitosamente');
    return true;
  } catch (error) {
    console.error('❌ Error al conectar Firebase:', error);
    return false;
  }
};

// Función para forzar reconexión
export const reconnectFirebase = async () => {
  try {
    await disableNetwork(db);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await enableNetwork(db);
    console.log('✅ Firebase reconectado');
    return true;
  } catch (error) {
    console.error('❌ Error al reconectar Firebase:', error);
    return false;
  }
};

export default app;
