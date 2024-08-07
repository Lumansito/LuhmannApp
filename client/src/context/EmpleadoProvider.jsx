import { useContext, useState } from "react";
import {
  getEmpleadosRequest,
  deleteEmpleadoRequest,
  getEmpleadoByIdRequest,
  createEmpleadoRequest,
  updateEmpleadoRequest,
} from "../api/empleados.api.js";
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
    const response = await getEmpleadosRequest();
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

  const createEmpleado = async(values) =>{
    try {
      const response = await createEmpleadoRequest(values);
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
  }

  
  const getEmpleado = async (id) => {
    try {
      const response = await getEmpleadoByIdRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateEmpleado = async (id, empleado) => {
    try {
      await updateEmpleadoRequest(id, empleado);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <EmpleadoContext.Provider
      value={{ empleados, loadEmpleados, deleteEmpleado ,createEmpleado, getEmpleado, updateEmpleado}}
    >
      {children}
    </EmpleadoContext.Provider>
  );
};
