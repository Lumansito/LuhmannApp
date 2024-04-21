import { useEmpleados } from "../context/EmpleadoProvider";
import { useNavigate } from "react-router-dom";

function EmpleadoCard({ empleado }) {
  const { deleteEmpleado } = useEmpleados();
  const navigate = useNavigate();

  return (
    <div>
      <h2>
        {empleado.nombre} {empleado.apellido}
        <button onClick={() => navigate(`/empleados/edit/${empleado.id}`)}>
          Editar
        </button>
        <button onClick={() => deleteEmpleado(empleado.id)}>Eliminar</button>
      </h2>
    </div>
  );
}

export default EmpleadoCard;
