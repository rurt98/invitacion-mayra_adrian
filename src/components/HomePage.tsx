import { useNavigate } from 'react-router-dom';
import imagenSeccion1 from '../assets/1_seccion.jpg';
import bgImage from '../assets/bg.png';
import letraM from '../assets/M.svg';
import letraA from '../assets/A.png';
import icono1 from '../assets/Icono_1.svg';
import detalles from '../assets/detalles.svg';
import logoNovios from '../assets/Logo Novios_1.svg';
import itinerario from '../assets/Itinerario.svg';
import header_2 from '../assets/header_2.svg';
import imagen2 from '../assets/Imagen_2.svg';
import bg2 from '../assets/bg_2.jpg';
import logoNoviosAlt from '../assets/Logo novios.svg';
import bg3 from '../assets/bg_3.jpg';
import bg4 from '../assets/bg_4.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  // Método para la primera sección - Portada
  const renderPrimeraSeccion = () => (
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
  );

  // Método para la segunda sección - Contenido principal
  const renderSegundaSeccion = () => (
    <section className="relative px-4 py-8 min-h-screen">
      {/* Stack de capas */}
      {/* Capa 1: Color de fondo */}
      <div className="absolute inset-0 bg-[#60593C]"></div>

      {/* Capa 2: Imagen bg.png con transparencia */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Background pattern"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>

      {/* Capa 3: Letra M.svg en top-left (ligeramente salida) */}
      <div className="absolute top-0 left-0 -ml-0 -mt-1">
        <img src={letraM} alt="Letra M" className="w-auto h-40 opacity-50" />
      </div>

      {/* Capa 4: Letra A.png en bottom-right (ligeramente salida) */}
      <div className="absolute bottom-0 right-0 -mr-0 -mb-0">
        <img src={letraA} alt="Letra A" className="w-auto h-40 opacity-50" />
      </div>

      {/* Capa 5: Contenido principal */}
      <div className="relative z-10 max-w-md mx-auto text-center">
        {/* 1. Icono Icono_1.svg */}
        <div className="mb-8">
          <img
            src={icono1}
            alt="Icono decorativo"
            className="w-24 h-24 mx-auto"
          />
        </div>

        {/* 2. h3: Nos encontramos sin buscarnos... */}
        <h3 className="mb-6 text-[#F9F5ED] text-[25px] leading-[77%] tracking-[0%] font-normal">
          Nos encontramos sin buscarnos,
          <br />y juntos elegimos ser familia.
        </h3>

        {/* 3. h2: Mayra & Adrián */}
        <h2 className="mb-8 text-white text-[24px] leading-[100%] tracking-[0%] font-normal italic">
          Mayra & Adrián
        </h2>

        {/* 4. Imagen detalles.svg */}
        <div className="mb-6">
          <img
            src={detalles}
            alt="Detalles decorativos"
            className="w-48 h-auto mx-auto"
          />
        </div>

        {/* 5. p: Acompáñanos a celebrar... */}
        <p className="text-[#F9F5ED] text-lg leading-relaxed">
          Acompáñanos a celebrar el amor que nos unió para siempre.
        </p>
      </div>
    </section>
  );

  // Método para la tercera sección - Contenido Principal
  const renderTerceraSeccion = () => (
    <section className="relative py-8 min-h-screen">
      {/* Stack de capas */}
      {/* Capa 1: Color de fondo */}
      <div className="absolute inset-0 bg-[#F9F5ED]"></div>

      {/* Capa 2: Imagen bg.png con transparencia */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Background pattern"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>

      {/* Capa 5: Contenido principal */}
      <div className="relative z-10 max-w-md mx-auto text-center space-y-8">
        {/* 1. Container con título centrado */}
        <div className="w-full bg-[#A39D79] py-6 px-4">
          <h2 className="text-white text-xl font-medium">
            Con la bendición de nuestros padres y padrinos
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-[#A39D79] bg-transparent py-1 px-4 rounded-lg mb-2 w-fit">
            <small className="text-[#A39D79]">Familia de la novia</small>
          </div>
          {/* Divider pequeño */}
          <div className="w-5 h-0.5 bg-[#A39D79] mx-auto mb-3 rounded-lg"></div>
          <p className="text-[#312E25] text-base">
            María Guadalupe Cortés Carrasco
          </p>
          <p className="text-[#312E25] text-base">Jaime Pérez Izeta</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-[#A39D79] bg-transparent py-1 px-4 rounded-lg mb-2 w-fit">
            <small className="text-[#A39D79]">Familia de la novia</small>
          </div>
          {/* Divider pequeño */}
          <div className="w-5 h-0.5 bg-[#A39D79] mx-auto mb-3 rounded-lg"></div>
          <p className="text-[#312E25] text-base">
            María Guadalupe Cortés Carrasco
          </p>
          <p className="text-[#312E25] text-base">Jaime Pérez Izeta</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-[#A39D79] bg-transparent py-1 px-4 rounded-lg mb-2 w-fit">
            <small className="text-[#A39D79]">Familia de la novia</small>
          </div>
          {/* Divider pequeño */}
          <div className="w-5 h-0.5 bg-[#A39D79] mx-auto mb-3 rounded-lg"></div>
          <p className="text-[#312E25] text-base">
            María Guadalupe Cortés Carrasco
          </p>
          <p className="text-[#312E25] text-base">Jaime Pérez Izeta</p>
        </div>

        {/* 3. Imagen Logo novios.svg */}
        <div className="py-4 px-5">
          <img
            src={header_2}
            alt="Logo de los novios"
            className="w-auto h-full mx-auto"
          />
        </div>

        {/* 5. Texto informativo */}
        <p className="text-base">
          Tenemos el honor de invitarlos a celebrar nuestra unión en matrimonio
          el día
        </p>

        <div className=" bg-[#60593C] py-3 px-5 rounded-lg mb-2 w-fit mx-auto">
          <p className="text-[#F9F5ED] text-xl font-thin leading-tight">
            22 DE NOVIEMBRE 2025
          </p>
        </div>

        <div className="flex flex-col items-center pb-10 pt-10">
          <div className="border border-[#A39D79] bg-transparent py-1 px-4 rounded-md mb-4 w-fit">
            <small className="text-[#A39D79] tracking-[0.15em]">
              CEREMONIA
            </small>
          </div>
          {/* Divider pequeño */}
          <h3 className="text-[#312E25] text-xl font-medium">
            Templo Sagrado Corazón De Jesús
          </h3>
          <p className="text-[#312E25]  text-sm font-light mb-2">
            Calle Morelos Sur 31, Colonia Centro, Zamora, Michoacán.
          </p>
          <h4 className="text-[#60593C] text-xl font-semibold mb-4 tracking-[0.09em]">
            5:00 pm
          </h4>

          {/* Botón con características específicas */}
          <button className="w-[135px] h-[36px] rounded-[20px] pt-[7px] pr-[9px] pb-[7px] pl-[9px] gap-[10px] bg-[#A39D79]  font-medium hover:bg-[#8B8570] transition-colors duration-200  shadow-md text-[#60593C]">
            UBICACIÓN
          </button>
        </div>

        <div className="flex flex-col items-center mb-10">
          <div className="border border-[#A39D79] bg-transparent py-1 px-4 rounded-md mb-4 w-fit">
            <small className="text-[#A39D79] tracking-[0.15em]">
              RECEPCIÓN
            </small>
          </div>
          {/* Divider pequeño */}
          <h3 className="text-[#312E25] text-xl font-medium">
            Quinta las palmas del Sol
          </h3>
          <p className="text-[#312E25]  text-sm font-light mb-2">
            Del Sol, La Aurora, Zamora, Michoacán.
          </p>
          <h4 className="text-[#60593C] text-xl font-semibold mb-4 tracking-[0.09em]">
            7:00 pm
          </h4>

          {/* Botón con características específicas */}
          <button className="w-[135px] h-[36px] rounded-[20px] pt-[7px] pr-[9px] pb-[7px] pl-[9px] gap-[10px] bg-[#A39D79]  font-medium hover:bg-[#8B8570] transition-colors duration-200  shadow-md text-[#60593C]">
            UBICACIÓN
          </button>

          <div className="w-full pt-10">
            <h2>NUESTRAS RECOMENDACIONES</h2>
            <p>para su llegada a la ciudad y a la recepción</p>
          </div>
          <div>
            <div className=" bg-[#60593C] py-3 px-5 rounded-lg mb-2 w-fit mx-auto">
              <p className="text-[#F9F5ED]  font-thin leading-tight">
                SUGERENCIA DE RUTA
              </p>
            </div>
            <p>Entrar por Av. Juárez, pasando la central de autobuses.</p>
          </div>
          <div>
            <div className=" bg-[#60593C] py-3 px-5 rounded-lg mb-2 w-fit mx-auto">
              <p className="text-[#F9F5ED]  font-thin leading-tight">
                SUGERENCIA HOSPEDAJE
              </p>
            </div>
            <p>
              Selección de hoteles para quienes nos acompañan y viajan a la
              ciudad para el evento.
            </p>
          </div>
          <div className="w-full mt-6">
            <img
              src={imagen2}
              alt="Imagen decorativa"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );

  // Método para la cuarta sección - Itinerario
  const renderCuartaSeccion = () => (
    <section className="relative px-4 py-8 min-h-screen">
      {/* Stack de capas */}
      {/* Capa 1: Color de fondo */}
      <div className="absolute inset-0 bg-[#F9F5ED]"></div>

      {/* Capa 2: Imagen bg.png con transparencia */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Background pattern"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>

      {/* Capa 5: Contenido principal */}
      <div className="relative z-10 max-w-md mx-auto text-center">
        {/* 1. Logo Novios_1.svg */}
        <div className="mb-8">
          <img
            src={logoNovios}
            alt="Logo de los novios"
            className="w-32 h-auto mx-auto"
          />
        </div>

        {/* 2. h2: Itinerario */}
        <h2 className="mb-8 text-[#A39D79] text-[28px] leading-[100%] tracking-[0%] font-normal">
          ITINERARIO
        </h2>

        {/* 3. Itinerario.svg */}
        <div className="mb-6">
          <img
            src={itinerario}
            alt="Itinerario de la boda"
            className="w-full max-w-md h-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );

  // Método para la quinta sección - Mesa de Regalos
  const renderQuintaSeccion = () => (
    <section className="relative w-full h-screen">
      {/* Imagen de fondo que abarca toda la pantalla */}
      <img
        src={bg2}
        alt="Background de mesa de regalos"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Card centrada con color #60593C */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="bg-[#60593C] rounded-lg p-8 max-w-md w-full text-center">
          {/* Título principal */}
          <h2 className="text-[#F9F5ED] text-2xl font-medium mb-6">
            Mesa de Regalos
          </h2>

          {/* Columna con contenido */}
          <div className="flex flex-col items-center space-y-4">
            {/* Small "Liverpool" */}
            <small className="text-[#F9F5ED] text-sm tracking-[0.15em]">
              Liverpool
            </small>

            {/* Divider como el del archivo */}
            <div className="w-16 h-0.5 bg-[#A39D79] mx-auto"></div>

            {/* Card con color #F9F5ED40 y número */}
            <div className="bg-[#F9F5ED] bg-opacity-25 rounded-lg py-3 px-6 w-full">
              <p className="text-[#312E25] text-lg font-mono font-semibold">
                51707632
              </p>
            </div>

            {/* Imagen Logo novios.svg al final */}
            <div className="mt-6">
              <img
                src={logoNoviosAlt}
                alt="Logo de los novios"
                className="w-24 h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Método para la sexta sección - Dress Code
  const renderSextaSeccion = () => (
    <section className="relative w-full h-screen">
      {/* Imagen de fondo que abarca toda la pantalla */}
      <img
        src={bg3}
        alt="Background de dress code"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Card centrada con imagen bg.png y transparencia */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="relative rounded-lg p-8 max-w-md w-full text-center overflow-hidden">
          {/* Fondo de la card con imagen bg.png y transparencia */}
          <div className="absolute inset-0">
            <img
              src={bgImage}
              alt="Background pattern"
              className="w-full h-full object-cover object-center opacity-30"
            />
          </div>

          {/* Overlay para mejorar legibilidad del texto */}
          <div className="absolute inset-0 bg-[#60593C] bg-opacity-60"></div>

          {/* Contenido de la card */}
          <div className="relative z-10">
            {/* Título principal */}
            <h2 className="text-[#F9F5ED] text-2xl font-medium mb-6">
              Dress Code
            </h2>

            {/* Columna con contenido */}
            <div className="flex flex-col items-center space-y-4">
              {/* Small "Elegante" */}
              <small className="text-[#F9F5ED] text-sm tracking-[0.15em]">
                Elegante
              </small>

              {/* Divider como el del archivo */}
              <div className="w-16 h-0.5 bg-[#A39D79] mx-auto"></div>

              {/* Card con color #F9F5ED40 y texto */}
              <div className="bg-[#F9F5ED] bg-opacity-25 rounded-lg py-3 px-6 w-full">
                <p className="text-[#312E25] text-base font-medium">
                  Traje oscuro / Vestido largo
                </p>
              </div>

              {/* Imagen Logo novios.svg al final */}
              <div className="mt-6">
                <img
                  src={logoNoviosAlt}
                  alt="Logo de los novios"
                  className="w-24 h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Método para la séptima sección - RSVP
  const renderSeptimaSeccion = () => (
    <section className="relative px-4 py-8 min-h-screen">
      {/* Stack de capas - Mismo fondo que la tercera sección */}
      {/* Capa 1: Color de fondo */}
      <div className="absolute inset-0 bg-[#F9F5ED]"></div>

      {/* Capa 2: Imagen bg.png con transparencia */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Background pattern"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>

      {/* Capa 3: Contenido principal */}
      <div className="relative z-10 max-w-md mx-auto text-center space-y-6">
        {/* 1. Imagen bg_4.jpg */}
        <div className="mb-8">
          <img
            src={bg4}
            alt="Imagen decorativa"
            className="w-full max-w-md h-auto mx-auto rounded-lg"
          />
        </div>

        {/* 2. Título entre comillas */}
        <h2 className="text-[#312E25] text-2xl font-medium mb-4">
          "Familia Pérez - Martínez"
        </h2>

        {/* 3. Invitación válida por */}
        <p className="text-[#312E25] text-lg mb-4">Invitación válida por</p>

        {/* 4. Card con color #A39D79 */}
        <div className="bg-[#A39D79] rounded-lg py-4 px-6 w-fit mx-auto">
          <p className="text-white text-xl font-semibold">2 pases</p>
        </div>

        {/* 5. Small con instrucciones */}
        <small className="text-[#312E25] text-sm leading-relaxed block max-w-sm mx-auto">
          Este será tu boleto de entrada, favor de mostrar el número de pases de
          esta invitación en la entrada de la recepción.
        </small>

        {/* 6. Subtitle */}
        <h3 className="text-[#60593C] text-lg font-medium mt-6">
          Evento exclusivo para adultos
        </h3>

        {/* 7. Texto grande RSVP */}
        <h2 className="text-[#312E25] text-4xl font-bold mt-6">RSVP</h2>

        {/* 8. Fecha límite */}
        <p className="text-[#60593C] text-lg font-medium">
          Antes del 20 de Octubre 2025
        </p>

        {/* 9. Nombre */}
        <p className="text-[#312E25] text-xl font-medium mt-4">Mayra Pérez</p>

        {/* 10. Texto de confirmación */}
        <p className="text-[#312E25] text-lg font-medium mt-6">
          CONFIRMAR AQUÍ:
        </p>

        {/* 11. Botón con color #A39D79 */}
        <button className="w-[135px] h-[36px] rounded-[20px] pt-[7px] pr-[9px] pb-[7px] pl-[9px] gap-[10px] bg-[#A39D79] text-white font-medium hover:bg-[#8B8570] transition-colors duration-200 shadow-md mt-4">
          CONFIRMAR
        </button>

        {/* 12. Texto de advertencia */}
        <p className="text-[#60593C] text-sm leading-relaxed mt-6 max-w-sm mx-auto">
          En caso de no confirmar, se tomará como no asistencia.
        </p>
      </div>
    </section>
  );

  // Método para el footer
  const renderFooter = () => (
    <footer className="bg-gray-800 text-white text-center py-6 px-4">
      <p className="text-sm mb-2">
        Para cualquier consulta, contacta a los novios
      </p>
      <p className="text-xs text-gray-400">
        Código de invitación:{' '}
        <span className="font-mono bg-gray-700 px-2 py-1 rounded">
          {/* Código de invitación */}
        </span>
      </p>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      {renderPrimeraSeccion()}
      {renderSegundaSeccion()}
      {renderTerceraSeccion()}
      {renderCuartaSeccion()}
      {renderQuintaSeccion()}
      {renderSextaSeccion()}
      {renderSeptimaSeccion()}
      {renderFooter()}
    </div>
  );
};

export default HomePage;
