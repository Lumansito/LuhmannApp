import axios from "axios";
export const createEmpleado = async (empleado) =>
  await axios.post("http://192.168.100.8:4000/empleados", empleado);

export const getEmpleados = async () =>
  await axios.get("http://192.168.100.8:4000/empleados");

export const deleteEmpleado = async (id) =>
  await axios.delete(`http://192.168.100.8:4000/empleados/${id}`);
