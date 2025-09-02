import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/bg.png';
import logoNovios from '../assets/Logo Novios_1.svg';
import title from '../assets/title.svg';

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
    <div className="min-h-screen bg-[#F9F5ED] flex items-center justify-center relative">
      {/* Fondo con patrón similar a la invitación */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Background pattern"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo de los novios */}
        <img
          src={logoNovios}
          alt="Logo de los novios"
          className="w-20 h-auto mx-auto"
        />

        {/* Título principal */}
        <div className="mb-8">
          <img
            src={title}
            alt="Mayra & Adrián"
            className="w-auto h-16 mx-auto mb-4"
          />
          <p className="text-[#60593C] text-lg mb-2">
            Te invitamos a celebrar nuestro amor
          </p>
          <p className="text-[#312E25] text-sm">
            Ingresa tu código de invitación para continuar
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-[#A39D79] bg-opacity-20 rounded-lg p-6 mb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="hash"
                className="block text-[#312E25] font-semibold mb-3"
              >
                Código de Invitación
              </label>
              <input
                id="hash"
                type="text"
                value={hash}
                onChange={(e) => setHash(e.target.value)}
                placeholder="Ej: 025mqlyYA9Gp3bPOvuEb"
                className="w-full px-4 py-3 rounded-lg border-2 border-[#A39D79] bg-[#F9F5ED] text-[#312E25] text-center font-mono tracking-wider focus:border-[#60593C] focus:outline-none"
                autoFocus
              />
              {error && <p className="text-[#60593C] text-sm mt-2">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#60593C] text-[#F9F5ED] py-3 px-6 rounded-lg font-medium hover:bg-[#4A4530] transition-colors duration-200"
            >
              Ver Mi Invitación
            </button>
          </form>
        </div>

        {/* Información adicional */}
        <div className="bg-[#A39D79] bg-opacity-20 rounded-lg p-4 mb-6">
          <p className="text-[#312E25] text-sm mb-2">¿No tienes tu código?</p>
          <p className="text-[#60593C] text-xs">
            Contacta a los novios para obtener tu invitación personalizada
          </p>
        </div>

        {/* Línea decorativa */}
        <div className="mt-8 flex items-center justify-center space-x-4">
          <div className="w-12 h-0.5 bg-[#A39D79]"></div>
          <div className="w-2 h-2 bg-[#60593C] rounded-full"></div>
          <div className="w-12 h-0.5 bg-[#A39D79]"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
