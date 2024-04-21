import { createContext, useContext, useState } from "react";
import { getEmpleados, deleteEmpleadoRequest } from "../api/empleados.api.js";
import { EmpleadoContext } from "../context/EmpleadoContext";

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

  const deleteEmpleado = async (id) => {
    try {
      if (!window.confirm("¿Estás seguro de eliminar el empleado?")) {
        return;
      }
      await deleteEmpleadoRequest(id);
      setEmpleados(empleados.filter((empleado) => empleado.id !== id));
    } catch (error) {
      alert("Error al eliminar empleado");
      console.log(error);
    }
  };

  return (
    <EmpleadoContext.Provider
      value={{ empleados, loadEmpleados, deleteEmpleado }}
    >
      {children}
    </EmpleadoContext.Provider>
  );
};
