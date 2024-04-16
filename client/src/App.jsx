import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import EmpleadosForm from "./pages/EmpleadosForm";
import Empleados from "./pages/Empleados.jsx";
import NavBar from "./components/NavBar.jsx";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empleados/new" element={<EmpleadosForm />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/empleados" element={<Empleados />} />
      </Routes>
    </>
  );
}
export default App;
