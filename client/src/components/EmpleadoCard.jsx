import { deleteEmpleado } from "../api/empleados.api";

function EmpleadoCard({ empleado }) {
  const handleDelete = async (id) => {
    try {
      await deleteEmpleado(id);
      alert("Empleado eliminado");
    } catch (error) {
      alert("Error al eliminar empleado");
      console.log(error);
    }
  };

  return (
    <div>
      <h2>
        {empleado.nombre} {empleado.apellido}
        <button>Editar</button>
        <button onClick={() => handleDelete(empleado.id)}>Eliminar</button>
      </h2>
    </div>
  );
}

export default EmpleadoCard;
