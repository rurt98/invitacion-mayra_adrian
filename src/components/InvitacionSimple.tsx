// import { useNavigate } from 'react-router-dom';
import imagenSeccion1 from '../assets/1_seccion.jpg';
import bgImage from '../assets/bg.png';
import letraM from '../assets/M.svg';
import letraA from '../assets/A.png';
import icono1 from '../assets/Icono_1.svg';
import detalles from '../assets/detalles-decorativos.svg';
import logoNovios from '../assets/Logo Novios_1.svg';
import itinerario from '../assets/Itinerario.svg';
import header_2 from '../assets/header_2.svg';
import imagen2 from '../assets/Imagen_2.svg';
import bg2 from '../assets/bg_2.jpg';
import paletaDeColores from '../assets/Paleta de colores.svg';
import bg3 from '../assets/bg_3.jpg';
import bg4 from '../assets/bg_4.jpg';
import title from '../assets/title.svg';
import nuestrasRecomendaciones from '../assets/nuestras recomendaciones.svg';
import mesaDeRegalos from '../assets/Mesa de regalos.svg';
import dressCode from '../assets/dress_code.svg';
import bg5 from '../assets/bg_5.jpg';
import bg6 from '../assets/bg_6.jpg';
import bg7 from '../assets/bg_7.svg';
import group1 from '../assets/group_1.svg';
import imagen9 from '../assets/Imagen 9.svg';
import imagen10 from '../assets/Imagen 10.svg';
import imagen11 from '../assets/Imagen 11.svg';
import selloLogo from '../assets/Sello logo.svg';
import mayraPerez from '../assets/Mayra Pérez.svg';

const InvitacionSimple = () => {
  // const navigate = useNavigate();

  // Funciones de redirección
  const handleCeremoniaUbicacion = () => {
    window.open('https://maps.app.goo.gl/eYgEHQwgiJ9HuxbX7', '_blank');
  };

  const handleRecepcionUbicacion = () => {
    window.open('https://maps.app.goo.gl/PSmpyA7cVz7PavAAA', '_blank');
  };

  const handleSugerenciaRuta = () => {
    window.open(
      'https://www.google.com/maps/dir/Templo+Expiatorio+del+Sagrado+Coraz%C3%B3n+de+Jes%C3%BAs,+Morelos+Sur+31,+Centro,+59600+Zamora+de+Hidalgo,+Mich./Quinta+Las+palmas+del+sol,+Del+Sol,+La+Aurora,+Zamora+de+Hidalgo,+Michoac%C3%A1n/@19.9694209,-102.2792458,2926m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0x842e88ced92782d9:0x94c4a449021e50e!2m2!1d-102.2845647!2d19.9873844!1m5!1m1!1s0x842e898152c67ee9:0xf8ae8bcb8854a65b!2m2!1d-102.269237!2d19.9666234!3e0?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D',
      '_blank'
    );
  };

  const handleSugerenciaHospedaje = () => {
    window.open(
      'https://www.google.com/maps/@/data=!3m1!4b1!4m3!11m2!2sLKrXG109QWSSf0RrcVuJgQ!3e3?entry=tts&g_ep=EgoyMDI1MDgxOS4wKgBIAVAD&skid=748b6b7a-982e-40a5-9421-42132046f7fe',
      '_blank'
    );
  };

  const handleConfirmar = () => {
    const mensaje =
      '¡Hola! Confirmo mi asistencia a la boda de Mayra y Adrián. ¡Gracias!';
    const mensajeCodificado = encodeURIComponent(mensaje);
    window.open(
      `https://api.whatsapp.com/send?phone=3332705986&text=${mensajeCodificado}`,
      '_blank'
    );
  };

  // Método para la primera sección - Imagen de Portada (Mobile First)
  const renderPrimeraSeccion = () => (
    <section className="relative w-full h-screen">
      <img
        src={imagenSeccion1}
        alt="Portada de la invitación"
        className="w-full h-full object-cover object-center"
      />

      {/* Imagen title.svg centrada y abajo */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center">
        <img
          src={title}
          alt="Título de la invitación"
          className="w-auto h-8 md:h-40"
        />
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

      {/* Capa 3: Letra M.svg en top-left (más grande) */}
      <div className="absolute top-0 left-0 -ml-4 -mt-4">
        <img
          src={letraM}
          alt="Letra M"
          className="w-auto h-64 md:h-80 opacity-50"
        />
      </div>

      {/* Capa 4: Letra A.png en bottom-right (más grande) */}
      <div className="absolute bottom-0 right-0 -mr-0 -mb-4 overflow-hidden">
        <img
          src={letraA}
          alt="Letra A"
          className="w-auto h-64 md:h-80 opacity-50"
        />
      </div>

      {/* Capa 5: Contenido principal centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        {/* 1. Icono Icono_1.svg */}
        <div className="mb-8">
          <img
            src={icono1}
            alt="Icono decorativo"
            className="w-8 h-auto mx-auto"
          />
        </div>

        {/* 2. h3: Nos encontramos sin buscarnos... */}
        <small className="mb-6 text-[#F9F5ED] font-xs font-primary">
          Nos encontramos sin buscarnos,
          <br />y juntos elegimos ser familia.
        </small>

        {/* 3. h2: Mayra & Adrián */}
        <h2 className="mb-8 text-white  text-3xl">Mayra & Adrián</h2>

        {/* 4. Imagen detalles.svg */}
        <div className="mb-6">
          <img
            src={detalles}
            alt="Detalles decorativos"
            className="w-60 h-auto mx-auto"
          />
        </div>

        {/* 5. p: Acompáñanos a celebrar... */}
        <small className="mb-6 text-[#F9F5ED] font-xs font-primary">
          Acompáñanos a celebrar el amor
          <br />
          que nos unió para siempre.
        </small>
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
        <div className="w-full bg-[#A39D79] py-6 px-2">
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
          <p className="text-[#312E25] text-base tracking-[0.08em]">
            María Guadalupe Cortés Carrasco
          </p>
          <p className="text-[#312E25] text-base tracking-[0.08em]">
            Jaime Pérez Izeta
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-[#A39D79] bg-transparent py-1 px-4 rounded-lg mb-2 w-fit">
            <small className="text-[#A39D79]">Familia del novio</small>
          </div>
          {/* Divider pequeño */}
          <div className="w-5 h-0.5 bg-[#A39D79] mx-auto mb-3 rounded-lg"></div>
          <p className="text-[#312E25] text-base tracking-[0.08em]">
            María Guadalupe Ávalos Aguilera
          </p>
          <p className="text-[#312E25] text-base tracking-[0.08em]">
            Jose Luis Martínez Carriedo
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-[#A39D79] bg-transparent py-1 px-4 rounded-lg mb-2 w-fit">
            <small className="text-[#A39D79]">Nuestros Padrinos</small>
          </div>
          {/* Divider pequeño */}
          <div className="w-5 h-0.5 bg-[#A39D79] mx-auto mb-3 rounded-lg"></div>
          <p className="text-[#312E25] text-base tracking-[0.08em]">
            Ana Ivette Pérez Cortés
          </p>
          <p className="text-[#312E25] text-base tracking-[0.08em]">
            José de Jesús Rodríguez Calderón
          </p>
        </div>

        {/* 3. Imagen Logo novios.svg */}
        <div className="py-2 px-10">
          <img
            src={header_2}
            alt="Logo de los novios"
            className="w-auto h-full mx-auto"
          />
        </div>

        {/* 5. Texto informativo */}
        <p className="text-sm">
          Tenemos el honor de invitarlos a celebrar nuestra
          <br />
          unión en matrimonio el día
        </p>

        <div className=" bg-[#60593C] py-3 px-5 rounded-lg mb-2 w-fit mx-auto">
          <p className="text-[#F9F5ED] text-xl font-thin leading-tight">
            22 DE NOVIEMBRE 2025
          </p>
        </div>

        <div className="flex flex-col items-center pb-10 pt-5">
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
          <button
            onClick={handleCeremoniaUbicacion}
            className="w-[135px] h-[36px] rounded-[20px] pt-[7px] pr-[9px] pb-[7px] pl-[9px] gap-[10px] bg-[#A39D79]  font-medium hover:bg-[#8B8570] transition-colors duration-200  shadow-md text-[#60593C]"
          >
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
          <button
            onClick={handleRecepcionUbicacion}
            className="w-[135px] h-[36px] rounded-[20px] pt-[7px] pr-[9px] pb-[7px] pl-[9px] gap-[10px] bg-[#A39D79]  font-medium hover:bg-[#8B8570] transition-colors duration-200  shadow-md text-[#60593C]"
          >
            UBICACIÓN
          </button>

          <div className="w-full py-10 pb-8 pt-10">
            <div className="flex justify-center mb-0.5">
              <img
                src={nuestrasRecomendaciones}
                alt="Nuestras recomendaciones"
                className="w-auto h-12 md:h-20"
              />
            </div>
            <p className="text-sm text-[#A39D79]">
              para su llegada a la ciudad y a la recepción
            </p>
          </div>
          <div className=" px-5">
            <div className="flex flex-col items-center pb-10">
              <button
                onClick={handleSugerenciaRuta}
                className="bg-[#60593C] py-1 px-2 rounded-xs mb-1 w-fit mx-auto hover:bg-[#4A4530] transition-colors duration-200"
              >
                <p className="text-[#F9F5ED]  font-thin leading-tight text-xs">
                  SUGERENCIA DE RUTA
                </p>
              </button>
              <p className="text-sm text-[#60593C]">
                Entrar por Av. Juárez, pasando la central de autobuses.
              </p>
            </div>
            <div className="flex flex-col items-center pb-10">
              <button
                onClick={handleSugerenciaHospedaje}
                className="bg-[#60593C] py-1 px-2 rounded-xs mb-1 w-fit mx-auto hover:bg-[#4A4530] transition-colors duration-200"
              >
                <p className="text-[#F9F5ED]  font-thin leading-tight text-xs">
                  SUGERENCIA HOSPEDAJE
                </p>
              </button>
              <p className="text-sm text-[#60593C]">
                Selección de hoteles para quienes nos acompañan y viajan a la
                ciudad para el evento.
              </p>
            </div>
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
        <div className="mb-5">
          <img
            src={logoNovios}
            alt="Logo de los novios"
            className="w-12 h-auto mx-auto"
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
      <div className="relative z-10 flex items-center justify-center h-full px-10">
        <div className="bg-[#60593C] rounded-lg p-8 max-w-md w-full text-center">
          {/* Título principal - Imagen en lugar de texto */}
          <div className="flex justify-center mb-6">
            <img
              src={mesaDeRegalos}
              alt="Mesa de regalos"
              className="w-auto h-20"
            />
          </div>

          {/* Columna con contenido */}
          <div className="flex flex-col items-center space-y-2">
            {/* Small "Liverpool" */}
            <small className="text-[#F9F5ED] text-sm tracking-[0.15em]">
              Liverpool
            </small>

            {/* Divider como el del archivo */}
            <div className="w-2 h-0.5 bg-[#A39D79] mx-auto"></div>

            {/* Card con color #F9F5ED40 y número */}
            <div className="bg-[#F9F5ED] bg-opacity-25 py-1 px-5  mb-1 w-fit mx-auto  rounded-md ">
              <p className="text-[#F9F5ED]  font-thin leading-tight text-xs shadow-md tracking-[0.2em]">
                51707632
              </p>
            </div>
          </div>
          {/* Columna con contenido */}
          <div className="flex flex-col items-center space-y-2 pt-8">
            {/* Small "Liverpool" */}
            <small className="text-[#F9F5ED] text-sm tracking-[0.15em]">
              Santander
            </small>

            {/* Divider como el del archivo */}
            <div className="w-2 h-0.5 bg-[#A39D79] mx-auto"></div>

            {/* Card con color #F9F5ED40 y número */}
            <div className="bg-[#F9F5ED] bg-opacity-25 py-1 px-5  mb-1 w-fit mx-auto  rounded-md ">
              <p className="text-[#F9F5ED]  font-thin leading-tight text-xs shadow-md tracking-[0.2em]">
                5579099017839384
              </p>
            </div>
          </div>
          {/* Imagen Logo novios.svg al final */}
          <div className="mt-6">
            <img
              src={logoNovios}
              alt="Logo de los novios"
              className="w-10 h-auto mx-auto"
            />
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
      <div className="relative z-10 flex items-center justify-center h-full px-10">
        <div className="relative p-5 max-w-md w-full text-center overflow-hidden">
          {/* Fondo de la card con imagen bg.png y transparencia */}
          <div className="absolute inset-0 ">
            <img
              src={bgImage}
              alt="Background pattern"
              className="w-full h-full object-cover object-center opacity-30"
            />
          </div>

          {/* Overlay para mejorar legibilidad del texto */}
          <div className="absolute inset-0 bg-white bg-opacity-5"></div>

          {/* Contenido de la card */}
          <div className="relative z-10">
            {/* Título principal - Imagen en lugar de texto */}
            <div className="flex justify-center mb-10">
              <img src={dressCode} alt="Dress Code" className="w-auto h-32" />
            </div>

            {/* Columna con contenido */}
            <div className="flex flex-col items-center space-y-3 border border-[#FFFFFFE5]  px-5 py-7">
              {/* Card con color #F9F5ED40 y texto */}
              <div className="bg-black bg-opacity-35 rounded-lg py-1 px-1 ">
                <p className="text-white text-sm font-medium">
                  ESTRICTAMENTE FORMAL
                </p>
              </div>

              <small className="text-[#F9F5ED] text-xs tracking-[0.15em]">
                PALETA DE COLORES
              </small>

              {/* Divider como el del archivo */}
              <div className="w-3 h-0.5 bg-[#312E2599] mx-auto"></div>

              {/* Imagen Logo novios.svg al final */}
              <div className="mt-5">
                <img
                  src={paletaDeColores}
                  alt="Logo de los novios"
                  className="w-30 h-auto mx-auto"
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
    <section className="relative  py-8 min-h-screen">
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
      <div className="relative z-10 md:max-w-md mx-auto text-center ">
        {/* 1. Imagen bg_4.jpg */}
        <div className="mb-8">
          <img
            src={bg4}
            alt="Imagen decorativa"
            className="w-full max-w-md h-auto mx-auto"
          />
        </div>

        {/* 2. Título genérico */}
        <h2 className="text-[#312E25] text-2xl font-medium pb-5">
          "Nuestros Invitados"
        </h2>

        <div className="w-full bg-[#60593C] py-4 px-4 my-5">
          <h2 className="text-white text-xl font-medium">
            Evento exclusivo para adultos
          </h2>
        </div>

        {/* 7. Texto grande RSVP */}
        <h2 className="text-[#312E25] text-4xl font-bold mt-6">RSVP</h2>

        {/* 8. Fecha límite */}
        <p className="text-[#312E25] text-xs">Antes del 20 de Octubre 2025</p>

        {/* 9. Nombre */}
        <div className="my-6 flex justify-center">
          <img src={mayraPerez} alt="Mayra Pérez" className="w-auto h-18" />
        </div>

        {/* 10. Texto de confirmación */}
        <p className="text-[#312E25] text-xs">CONFIRMAR AQUÍ:</p>

        {/* 11. Botón con color #A39D79 */}
        <button
          onClick={handleConfirmar}
          className="w-[135px] h-[36px] rounded-[8px] pr-[9px] pb-[7px] pl-[9px] pt-[7px]  bg-[#A39D79] text-white font-medium hover:bg-[#8B8570] transition-colors duration-200 shadow-md "
        >
          CONFIRMAR
        </button>

        {/* 12. Texto de advertencia */}
        <p className=" mt-6 max-w-sm mx-auto text-[#A39D79] text-xs leading-[0.1]">
          En caso de no confirmar, se tomará como no asistencia.
        </p>
      </div>
    </section>
  );

  // Método para la octava sección - Galería de imágenes
  const renderOctavaSeccion = () => (
    <section className="relative">
      {/* 1. bg_5.jpg w-full h-auto */}
      <div className="mb-5">
        <img src={bg5} alt="Imagen decorativa" className="w-full h-auto" />
      </div>

      {/* 2. bg_6.jpg w-full h-auto con group_1.svg centrado en stack */}
      <div className="relative mb-5">
        <img src={bg6} alt="Imagen de fondo" className="w-full h-auto" />
        {/* group_1.svg centrado en la imagen */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={group1}
            alt="Grupo decorativo"
            className="w-full h-auto px-10"
          />
        </div>
      </div>

      {/* 3. bg_7.svg w-full h-auto */}
      <div className="mb-5">
        <img src={bg7} alt="Imagen decorativa" className="w-full h-auto" />
      </div>

      {/* 4. Row con Imagen 9.svg y Imagen 10.svg sin separación */}
      <div className="flex mb-5">
        <img
          src={imagen9}
          alt="Imagen decorativa 9"
          className="w-1/2 h-auto object-cover"
        />
        <img
          src={imagen10}
          alt="Imagen decorativa 10"
          className="w-1/2 h-auto object-cover"
        />
      </div>

      {/* 5. Imagen 11.svg con Sello logo.svg en center top en stack */}
      <div className="relative ">
        <img
          src={imagen11}
          alt="Imagen decorativa 11"
          className="w-full h-auto"
        />
        {/* Sello logo.svg centrado en la parte superior */}
        <div className="absolute top-0 left-0 right-0 flex justify-center pt-4">
          <img
            src={selloLogo}
            alt="Sello logo"
            className="w-auto h-20 md:h-20"
          />
        </div>
      </div>
    </section>
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
      {renderOctavaSeccion()}
    </div>
  );
};

export default InvitacionSimple;
