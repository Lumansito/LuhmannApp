import { createContext, useContext, useState } from "react";
import { getEmpleados } from "../api/empleados.api.js";

export const EmpleadoContext = createContext();

export const useEmpleados = () => {
  const context = useContext(EmpleadoContext);
  if (!context) {
    throw new Error(
      "useEmpleados debe estar dentro del proveedor EmpleadoProvider"
    );
  }
  return context;
};

export const EmpleadoProvider = ({ children }) => {
  //proveedor para acceder a los datos de los empleados desde cualquier componente
  const [empleados, setEmpleados] = useState([]);

  async function loadEmpleados() {
    const response = await getEmpleados();
    setEmpleados(response.data);
  }
  return (
    <EmpleadoContext.Provider value={{ empleados, loadEmpleados }}>
      {children}
    </EmpleadoContext.Provider>
  );
};
