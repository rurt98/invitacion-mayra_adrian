import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from './components/HomePage';
import InvitacionPage from './components/InvitacionPage';
import GeneradorEnlaces from './components/GeneradorEnlaces';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta principal - Página de inicio */}
          <Route path="/" element={<HomePage />} />

          {/* Ruta para ver invitaciones individuales */}
          <Route path="/invitacion/:hash" element={<InvitacionPage />} />

          {/* Ruta para generar enlaces (para los novios) */}
          <Route path="/admin/generar" element={<GeneradorEnlaces />} />

          {/* Ruta por defecto - redirigir al inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
