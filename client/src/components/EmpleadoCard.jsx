import { useEmpleados } from "../context/EmpleadoProvider";

function EmpleadoCard({ empleado }) {

  const {deleteEmpleado} = useEmpleados();
  


  return (
    <div>
      <h2>
        {empleado.nombre} {empleado.apellido}
        <button>Editar</button>
        <button onClick={() => deleteEmpleado(empleado.id)}>Eliminar</button>
      </h2>
    </div>
  );
}

export default EmpleadoCard;
