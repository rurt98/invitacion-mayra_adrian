import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

interface NuevoInvitado {
  nombreFamilia: string;
  numPersonas: number;
}

const GeneradorEnlaces = () => {
  const [nuevoInvitado, setNuevoInvitado] = useState<NuevoInvitado>({
    nombreFamilia: '',
    numPersonas: 1,
  });

  const [generando, setGenerando] = useState(false);
  const [enlaceGenerado, setEnlaceGenerado] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevoInvitado((prev) => ({
      ...prev,
      [name]: name === 'numPersonas' ? parseInt(value) || 1 : value,
    }));
  };

  const generarHash = (nombreFamilia: string): string => {
    const base = `${nombreFamilia}${Date.now()}`;
    // Usar una función más compatible para generar hash
    const hash = btoa(base)
      .replace(/[^a-zA-Z0-9]/g, '')
      .substring(0, 8)
      .toUpperCase();
    return hash;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nuevoInvitado.nombreFamilia.trim()) {
      setError('El nombre de la familia es obligatorio');
      return;
    }

    setGenerando(true);
    setError(null);
    setEnlaceGenerado(null);

    try {
      // Generar hash único
      const hash = generarHash(nuevoInvitado.nombreFamilia);

      // Crear documento en Firebase
      await addDoc(collection(db, 'invitados'), {
        ...nuevoInvitado,
        hash,
        fechaCreacion: serverTimestamp(),
      });

      // Generar enlace
      const enlace = `${window.location.origin}/invitacion/${hash}`;
      setEnlaceGenerado(enlace);

      // Limpiar formulario
      setNuevoInvitado({
        nombreFamilia: '',
        numPersonas: 1,
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Error al crear la invitación'
      );
    } finally {
      setGenerando(false);
    }
  };

  const copiarEnlace = async () => {
    if (enlaceGenerado) {
      try {
        await navigator.clipboard.writeText(enlaceGenerado);
        alert('¡Enlace copiado al portapapeles!');
      } catch (err) {
        // Fallback para navegadores que no soportan clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = enlaceGenerado;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('¡Enlace copiado al portapapeles!');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔗</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Generador de Enlaces
            </h1>
            <p className="text-xl text-gray-600">
              Crea invitaciones personalizadas para tus invitados
            </p>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nombreFamilia"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre de la Familia *
                </label>
                <input
                  id="nombreFamilia"
                  name="nombreFamilia"
                  type="text"
                  value={nuevoInvitado.nombreFamilia}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="Ej: Familia Pérez"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="numPersonas"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Número de Personas
                </label>
                <input
                  id="numPersonas"
                  name="numPersonas"
                  type="number"
                  min="1"
                  max="10"
                  value={nuevoInvitado.numPersonas}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={generando}
                className="w-full btn btn-primary text-lg py-3 disabled:opacity-50"
              >
                {generando
                  ? 'Generando Enlace...'
                  : 'Generar Enlace de Invitación'}
              </button>
            </form>
          </div>

          {/* Enlace Generado */}
          {enlaceGenerado && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="text-center mb-4">
                <div className="text-green-500 text-4xl mb-2">✅</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  ¡Enlace Generado Exitosamente!
                </h3>
                <p className="text-green-600">
                  Comparte este enlace con tu invitado
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={enlaceGenerado}
                    readOnly
                    className="flex-1 input bg-gray-50"
                  />
                  <button
                    onClick={copiarEnlace}
                    className="btn btn-secondary whitespace-nowrap"
                  >
                    📋 Copiar
                  </button>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={enlaceGenerado}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  🔗 Probar Enlace
                </a>
              </div>
            </div>
          )}

          {/* Instrucciones */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              📋 Instrucciones de Uso
            </h3>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Ingresa el nombre de la familia</li>
              <li>• Especifica el número de personas invitadas</li>
              <li>• Haz clic en "Generar Enlace de Invitación"</li>
              <li>• Copia el enlace generado</li>
              <li>• Comparte el enlace con la familia</li>
              <li>• La familia podrá ver su invitación personalizada</li>
            </ul>
          </div>

          {/* Información de Estructura */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">
              📊 Estructura de Datos
            </h3>
            <p className="text-yellow-700 text-sm mb-2">
              Cada invitación se guarda en Firebase con la siguiente estructura:
            </p>
            <div className="bg-white rounded-lg p-3 text-sm font-mono">
              <div>nombreFamilia: string</div>
              <div>numPersonas: number</div>
              <div>hash: string (generado automáticamente)</div>
              <div>fechaCreacion: timestamp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneradorEnlaces;
