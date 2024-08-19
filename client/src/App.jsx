import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar.jsx";
import { PersonasRoutes } from "./routes/personas.routes.jsx";

function App() {
  return (
   
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personas/*" element={<PersonasRoutes/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
  );
}
export default App;
