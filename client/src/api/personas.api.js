import axios from "axios";
export const createPersonaRequest = async (persona) =>
  await axios.post("http://192.168.1.11:4000/api/persona", persona);

export const getPersonasRequest = async () =>
  await axios.get("http://192.168.1.11:4000/api/personas");

export const deletePersonaRequest = async (dni) =>
  await axios.delete(`http://192.168.1.11:4000/api/persona/${dni}`);

export const getPersonaByIdRequest = async (dni) =>
  await axios.get(`http://192.168.1.11:4000/api/persona/${dni}`);

export const updatePersonaRequest = async (dni, persona) => 
  await axios.put(`http://192.168.1.11:4000/api/persona/${dni}`, persona);
