import axios from "axios";
export const createEmpleadoRequest = async (empleado) =>
  await axios.post("http://192.168.100.8:4000/empleados", empleado);

export const getEmpleadosRequest = async () =>
  await axios.get("http://192.168.100.8:4000/empleados");

export const deleteEmpleadoRequest = async (id) =>
  await axios.delete(`http://192.168.100.8:4000/empleados/${id}`);

export const getEmpleadoByIdRequest = async (id) =>
  await axios.get(`http://192.168.100.8:4000/empleados/${id}`);

export const updateEmpleadoRequest = async (id, empleado) => 
  await axios.put(`http://192.168.100.8:4000/empleados/${id}`, empleado);
