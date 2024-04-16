import { Link } from "react-router-dom";
function Empleados() {
  return (
    <div>
      <h1>Empleados List</h1>
      <Link to="/empleados/new">Nuevo Empleado</Link><br></br>
      <Link to="/">Volver</Link>
    </div>
  );
}
export default Empleados;
