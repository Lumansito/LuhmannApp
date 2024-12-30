import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { PersonasRoutes } from "./routes/personas.routes.jsx";
import Provider from "./context/Provider.jsx";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/persona/*" element={<PersonasRoutes/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
}
export default App;
