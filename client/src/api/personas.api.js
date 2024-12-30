import axios from "axios";
const API_URL = "http://localhost:4000/api/"

export const createPersonaRequest = async (persona) =>
  await axios.post (API_URL+"persona", persona);

export const getPersonasRequest = async () =>
  await axios.get(API_URL+"persona");

export const deletePersonaRequest = async (dni) =>
  await axios.delete(API_URL+`persona/${dni}`);

export const getPersonaByDniRequest = async (dni) =>
  await axios.get(API_URL+`persona/${dni}`);

export const updatePersonaRequest = async (dni, persona) => 
  await axios.put(API_URL+`persona/${dni}`, persona);
