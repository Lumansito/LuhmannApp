import { Routes, Route } from 'react-router-dom';
import  PersonaProvider  from "../context/Personas/PersonaProvider.jsx";
import Personas from "../pages/Personas.jsx";

export function PersonasRoutes() {

  return (
    <PersonaProvider>
      <Routes>
        <Route path="/" element={<Personas/>} />
      </Routes>
    </PersonaProvider>
  );
}