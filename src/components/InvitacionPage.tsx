import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, DocumentData } from 'firebase/firestore';
import { db, checkFirebaseConnection, reconnectFirebase } from '../firebase';
import imagenSeccion1 from '../assets/1_seccion.jpg';

interface InvitacionData extends DocumentData {
  nombreFamilia: string;
  numPersonas: number;
}

const InvitacionPage = () => {
  const { hash } = useParams<{ hash: string }>();
  const navigate = useNavigate();
  const [invitacion, setInvitacion] = useState<InvitacionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOffline, setIsOffline] = useState(false);

  const fetchInvitacion = async () => {
    if (!hash) {
      setError('Código de invitación no válido');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setIsOffline(false);

      // Verificar conectividad de Firebase
      const isConnected = await checkFirebaseConnection();
      if (!isConnected) {
        setIsOffline(true);
        setError(
          'No se puede conectar a Firebase. Verifica tu conexión a internet.'
        );
        setLoading(false);
        return;
      }

      console.log('🔍 Buscando documento con ID:', hash);

      // Buscar el documento en la colección "invitados" usando el hash como ID del documento
      const docRef = doc(db, 'invitados', hash);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as InvitacionData;
        setInvitacion(data);
        console.log('✅ Documento encontrado:', data);
        console.log('📊 Datos del documento:', {
          nombreFamilia: data.nombreFamilia,
          numPersonas: data.numPersonas,
          id: docSnap.id,
        });
      } else {
        setError('Invitación no encontrada. Verifica tu código.');
        console.log('❌ Documento no encontrado para hash:', hash);
        console.log(
          '🔍 Verifica que el documento exista en la colección "invitados"'
        );
      }
    } catch (err) {
      console.error('❌ Error al buscar documento:', err);

      // Manejar errores específicos
      if (err instanceof Error) {
        if (
          err.message.includes('offline') ||
          err.message.includes('network')
        ) {
          setIsOffline(true);
          setError(
            'Error de conexión. Verifica tu conexión a internet e intenta nuevamente.'
          );
        } else {
          setError(`Error al cargar la invitación: ${err.message}`);
        }
      } else {
        setError('Error desconocido al cargar la invitación');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReconnect = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('🔄 Intentando reconectar Firebase...');
      const reconnected = await reconnectFirebase();

      if (reconnected) {
        console.log('✅ Reconexión exitosa, buscando documento...');
        await fetchInvitacion();
      } else {
        setError('No se pudo reconectar. Verifica tu conexión a internet.');
        setLoading(false);
      }
    } catch (err) {
      console.error('❌ Error durante la reconexión:', err);
      setError('Error durante la reconexión');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvitacion();
  }, [hash]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-rose-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Cargando tu invitación...
          </h1>
          <p className="text-gray-600">Por favor espera un momento</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">
            {isOffline ? '📡' : '❌'}
          </div>
          <h1 className="text-2xl font-bold text-red-800 mb-4">
            {isOffline ? 'Sin Conexión' : 'Error'}
          </h1>
          <p className="text-red-600 mb-6">{error}</p>

          <div className="space-y-3">
            {isOffline && (
              <button
                onClick={handleReconnect}
                className="btn btn-primary w-full"
              >
                🔄 Reintentar Conexión
              </button>
            )}

            <button
              onClick={() => navigate('/')}
              className="btn btn-secondary w-full"
            >
              Volver al Inicio
            </button>

            <button
              onClick={() => window.location.reload()}
              className="btn btn-secondary w-full"
            >
              Recargar Página
            </button>
          </div>

          {/* Información de debugging */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-left">
            <h3 className="font-semibold text-gray-800 mb-2">
              🔍 Información de Debug:
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Hash/ID:</strong> {hash}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Estado:</strong> {isOffline ? 'Offline' : 'Online'}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Colección:</strong> invitados
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!invitacion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">📭</div>
          <h1 className="text-2xl font-bold text-red-800 mb-4">
            Invitación no encontrada
          </h1>
          <p className="text-red-600 mb-6">Verifica tu código de invitación</p>
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary w-full"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Primera Sección - Imagen de Portada (Mobile First) */}
      <section className="relative w-full h-screen">
        <img
          src={imagenSeccion1}
          alt="Portada de la invitación"
          className="w-full h-full object-cover object-center"
        />

        {/* Botón de volver */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-30 transition-all"
        >
          ← Volver
        </button>

        {/* Overlay con información básica - POSICIONADO ABAJO */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent pb-8">
          {/* Layout en ROW: Divider - Texto - Divider */}
          <div className="flex items-center justify-center space-x-6 px-4">
            {/* Divider izquierdo */}
            <div className="w-24 h-0.5 bg-white opacity-60"></div>

            {/* Texto en el centro */}
            <div className="text-center text-white flex-shrink-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Mayra & Adrian
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Te invitamos a celebrar nuestro amor
              </p>
            </div>

            {/* Divider derecho */}
            <div className="w-24 h-0.5 bg-white opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Segunda Sección - Detalles de la Invitación */}
      <section className="px-4 py-8 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¡Hola, {invitacion.nombreFamilia}!
            </h2>
            <p className="text-lg text-gray-600">
              Estamos emocionados de que formes parte de nuestro día especial
            </p>
          </div>

          {/* Detalles de la invitación */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              📋 Detalles de tu Invitación
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Familia:</span>
                <span className="text-gray-900 font-semibold">
                  {invitacion.nombreFamilia}
                </span>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Invitados:</span>
                <span className="text-gray-900 font-semibold">
                  {invitacion.numPersonas} persona(s)
                </span>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Código:</span>
                <span className="text-gray-900 font-mono text-sm">{hash}</span>
              </div>
            </div>
          </div>

          {/* Información del evento */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              📅 Información del Evento
            </h3>

            <div className="space-y-4">
              <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-400">
                <h4 className="font-semibold text-pink-800 mb-2">
                  Fecha y Hora
                </h4>
                <p className="text-pink-700 font-medium">
                  15 de Diciembre, 2024
                </p>
                <p className="text-pink-700">7:00 PM</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Lugar</h4>
                <p className="text-blue-700 font-medium">
                  Salón de Eventos "El Paraíso"
                </p>
                <p className="text-blue-700">Av. Principal #123, Ciudad</p>
              </div>
            </div>
          </div>

          {/* Mensaje de confirmación */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
            <p className="text-green-800 font-medium text-lg mb-3">
              ✅ ¡Tu invitación ha sido cargada exitosamente!
            </p>
            <p className="text-green-600 text-sm">
              Estamos emocionados de que {invitacion.numPersonas} persona(s) de
              la familia {invitacion.nombreFamilia}
              puedan acompañarnos en este día tan especial.
            </p>
          </div>

          {/* Botón de nueva invitación */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="btn btn-primary w-full"
            >
              Nueva Invitación
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 px-4">
        <p className="text-sm mb-2">
          Para cualquier consulta, contacta a los novios
        </p>
        <p className="text-xs text-gray-400">
          Código de invitación:{' '}
          <span className="font-mono bg-gray-700 px-2 py-1 rounded">
            {hash}
          </span>
        </p>
      </footer>
    </div>
  );
};

export default InvitacionPage;
