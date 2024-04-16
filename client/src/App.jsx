import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import EmpleadoForm from "./pages/EmpleadoForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/empleado/new" element={<EmpleadoForm />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}
export default App;
