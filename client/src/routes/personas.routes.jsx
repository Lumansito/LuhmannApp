import { Routes, Route } from 'react-router-dom';
import Personas from "../pages/Personas.jsx";

export function PersonasRoutes() {

  return (
    
      <Routes>
        <Route path="/" element={<Personas/>} /> 
        <Route path="/nueva" element={<h1>Persona Nueva</h1>} />
      </Routes>
   
  );
}