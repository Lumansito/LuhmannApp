import axios from "axios";
export const createEmpleado = async (empleado) =>
  await axios.post("http://localhost:4000/empleados", empleado);
