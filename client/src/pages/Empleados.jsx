import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEmpleados } from "../api/empleados.api";
import EmpleadoCard from "../components/EmpleadoCard";

function Empleados() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    async function loadEmpleados() {
      try {
        const response = await getEmpleados();
        setEmpleados(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadEmpleados();
  }, []);

  function renderMain() {
    if(empleados.length === 0) return (<h2>No hay empleados</h2>);
    return empleados.map((empleado) => (
      <EmpleadoCard empleado={empleado} key={empleado.id} />
    ));
  }

  return (
    <div>
      <h1>Empleados List</h1>
      {renderMain()}
      <Link to="/empleados/new">Nuevo Empleado</Link>
      <br></br>
      <Link to="/">Volver</Link>
    </div>
  );
}
export default Empleados;
