import { useContext, useState } from "react";
import {
  getPersonasRequest,
  deletePersonaRequest,
  createPersonaRequest,
  getPersonaByDniRequest,
  updatePersonaRequest,

} from "../api/personas.api.js";
import { Context } from "./Context.jsx";

export const useAppContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "---"
    );
  }
  return context;
};

const Provider = ({ children }) => {

  const [personas, setPersonas] = useState([]);


  async function loadPersonas() {

    const response = await getPersonasRequest();
    setPersonas(response.data);
    
  }

  const deletePersona = async (dni) => {
    try {
      if (!window.confirm("¿Estás seguro de eliminar el empleado?")) {
        return;
      }
      await deletePersonaRequest(dni);
      setPersonas(personas.filter((Persona) => Persona.dni !== dni));
    } catch (error) {
      alert("Error al eliminar Persona");
      console.log(error);
    }
  };

  const createPersona = async(values) =>{
    try {
      const response = await createPersonaRequest(values);
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
  }

  
  const getPersona = async (dni) => {
    try {
      const response = await getPersonaByDniRequest(dni);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updatePersona = async (id, Persona) => {
    try {
      await updatePersonaRequest(id, Persona);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Context.Provider
      value={{ personas, loadPersonas, deletePersona ,createPersona, getPersona, updatePersona}}>
      {children}
    </Context.Provider>
  );
};

export default Provider;