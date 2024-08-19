import { useContext, useState } from "react";
import {
  getEmpleadosRequest,
  deletePersonaRequest,
  createPersonaRequest,
  getArquitectosRequest,
  getDueñosRequest,
  getPersonaByIdRequest,
  updatePersonaRequest,

} from "../../api/personas.api.js";
import {  PersonaContext } from "./PersonaContext.jsx";

export const usePersonas = () => {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error(
      "useEmpleados debe estar dentro del proveedor EmpleadoProvider"
    );
  }
  return context;
};

const PersonaProvider = ({ children }) => {
  //proveedor para acceder a los datos de los empleados desde cualquier componente
  const [personas, setPersonas] = useState([]);


  async function loadPersonas(rol) {

    if(rol === "empleados"){
      const response = await getEmpleadosRequest();
      setPersonas(response.data);
    }
    if(rol === "arquitectos"){
      const response = await getArquitectosRequest();
      setPersonas(response.data);
    }
    if(rol === "duenos"){
      const response = await getDueñosRequest();
      setPersonas(response.data);
    }
  }

  const deletePersona = async (dni, rol) => {
    try {
      if (!window.confirm("¿Estás seguro de eliminar el empleado?")) {
        return;
      }
      await deletePersonaRequest(dni, rol);
      setPersonas(personas.filter((Persona) => Persona.dni !== dni && Persona.rol !== rol));
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

  
  const getPersona = async (dni, rol) => {
    try {
      const response = await getPersonaByIdRequest(dni, rol);
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
    <PersonaContext.Provider
      value={{ personas, loadPersonas, deletePersona ,createPersona, getPersona, updatePersona}}>
      {children}
    </PersonaContext.Provider>
  );
};

export default PersonaProvider;