import { useState, useEffect } from 'react';
import { checkFirebaseConnection, reconnectFirebase } from '../firebase';

const FirebaseStatus = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [lastCheck, setLastCheck] = useState<Date | null>(null);

  const checkConnection = async () => {
    setIsChecking(true);
    try {
      const connected = await checkFirebaseConnection();
      setIsConnected(connected);
      setLastCheck(new Date());
    } catch (error) {
      console.error('Error checking connection:', error);
      setIsConnected(false);
    } finally {
      setIsChecking(false);
    }
  };

  const handleReconnect = async () => {
    setIsChecking(true);
    try {
      const reconnected = await reconnectFirebase();
      setIsConnected(reconnected);
      setLastCheck(new Date());
    } catch (error) {
      console.error('Error reconnecting:', error);
      setIsConnected(false);
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  if (isConnected === null) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-600">Verificando conexión...</p>
      </div>
    );
  }

  return (
    <div
      className={`p-4 rounded-lg border ${
        isConnected
          ? 'bg-green-50 border-green-200'
          : 'bg-red-50 border-red-200'
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3
            className={`font-semibold ${
              isConnected ? 'text-green-800' : 'text-red-800'
            }`}
          >
            Estado de Firebase:{' '}
            {isConnected ? '✅ Conectado' : '❌ Desconectado'}
          </h3>
          {lastCheck && (
            <p className="text-sm text-gray-600 mt-1">
              Última verificación: {lastCheck.toLocaleTimeString()}
            </p>
          )}
        </div>

        <div className="space-x-2">
          <button
            onClick={checkConnection}
            disabled={isChecking}
            className="btn btn-secondary text-sm"
          >
            {isChecking ? 'Verificando...' : 'Verificar'}
          </button>

          {!isConnected && (
            <button
              onClick={handleReconnect}
              disabled={isChecking}
              className="btn btn-primary text-sm"
            >
              {isChecking ? 'Conectando...' : 'Reconectar'}
            </button>
          )}
        </div>
      </div>

      {!isConnected && (
        <div className="mt-3 p-3 bg-red-100 rounded border border-red-200">
          <p className="text-sm text-red-800">
            <strong>Posibles causas:</strong>
          </p>
          <ul className="text-sm text-red-700 mt-1 ml-4 list-disc">
            <li>Sin conexión a internet</li>
            <li>Firebase temporalmente no disponible</li>
            <li>Reglas de seguridad bloqueando acceso</li>
            <li>Configuración incorrecta del proyecto</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FirebaseStatus;
