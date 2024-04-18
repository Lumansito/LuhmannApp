import { useEffect } from "react";
import { Link } from "react-router-dom";
import EmpleadoCard from "../components/EmpleadoCard";
import { useEmpleados } from "../context/EmpleadoContext";

function Empleados() {
  const { empleados, loadEmpleados } = useEmpleados();
  useEffect(() => {
    loadEmpleados();
  }, []);

  function renderMain() {
    if (empleados.length === 0) return <h2>No hay empleados</h2>;
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
