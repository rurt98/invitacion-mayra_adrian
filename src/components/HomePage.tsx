import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseStatus from './FirebaseStatus';

const HomePage = () => {
  const [hash, setHash] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!hash.trim()) {
      setError('Por favor ingresa el código de tu invitación');
      return;
    }

    if (hash.trim().length < 3) {
      setError('El código debe tener al menos 3 caracteres');
      return;
    }

    // Limpiar errores y navegar a la invitación
    setError('');
    navigate(`/invitacion/${hash.trim()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-rose-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="text-6xl mb-6">💒</div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Mayra & Adrian
            </h1>
            <p className="text-2xl text-gray-600 mb-2">
              Te invitamos a celebrar nuestro amor
            </p>
            <p className="text-lg text-gray-500">
              Ingresa tu código de invitación para continuar
            </p>
          </div>

          {/* Estado de Firebase */}
          <div className="mb-8">
            <FirebaseStatus />
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="hash"
                  className="block text-lg font-semibold text-gray-700 mb-3"
                >
                  Código de Invitación
                </label>
                <input
                  id="hash"
                  type="text"
                  value={hash}
                  onChange={(e) => setHash(e.target.value)}
                  placeholder="Ej: 025mqlyYA9Gp3bPOvuEb"
                  className="input text-center text-lg font-mono tracking-wider"
                  autoFocus
                />
                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary text-lg py-3"
              >
                Ver Mi Invitación
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-gray-500">
            <p className="mb-2">¿No tienes tu código?</p>
            <p className="text-sm">
              Contacta a los novios para obtener tu invitación personalizada
            </p>

            {/* Enlace para administradores */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-400 mb-2">Para los novios:</p>
              <div className="space-y-2">
                <a
                  href="/admin/generar"
                  className="text-sm text-blue-600 hover:text-blue-800 underline block"
                >
                  🔗 Generar Enlaces de Invitación
                </a>
                <button
                  onClick={() => window.open('/admin/generar', '_blank')}
                  className="text-sm text-green-600 hover:text-green-800 underline block"
                >
                  🧪 Crear Datos de Prueba
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
