import axios from "axios";
export const createPersonaRequest = async (persona) =>
  await axios.post("http://192.168.100.8:4000/api/persona", persona);

export const getEmpleadosRequest = async () =>
  await axios.get("http://192.168.100.8:4000/api/empleados");

export const getArquitectosRequest = async () =>
  await axios.get("http://192.168.100.8:4000/api/arquitectos");

export const getDueñosRequest = async () =>
  await axios.get("http://192.168.100.8:4000/api/duenos");

export const deletePersonaRequest = async (dni,rol) =>
  await axios.delete(`http://192.168.100.8:4000/api/persona/${dni}/${rol}`);

export const getPersonaByIdRequest = async (dni,rol) =>
  await axios.get(`http://192.168.100.8:4000/api/persona/${dni}/${rol}`);

export const updatePersonaRequest = async (dni, rol, persona) => 
  await axios.put(`http://192.168.100.8:4000/api/persona/${dni}/${rol}`, persona);
