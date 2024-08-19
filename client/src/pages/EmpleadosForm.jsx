import { Form, Formik } from "formik";
import { useEmpleados } from "../context/Personas/EmpleadoProvider";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EmpleadosForm() {
  const { createEmpleado, getEmpleado, updateEmpleado } = useEmpleados();
  const params = useParams();
  const [empleado, setEmpleado] = useState({ nombre: "", apellido: "" });

  useEffect(() => {
    const loadEmpleado = async () => {
      if (params.id) {
        const empleadoBD = await getEmpleado(params.id);
        setEmpleado({
          nombre: empleadoBD[0].nombre,
          apellido: empleadoBD[0].apellido,
        });
      }
    };
    loadEmpleado();
  }, []);

  return (
    <div>
      <h1>{params.id ? "Editar Empleado" : "Crear Empleado"}</h1>
      <Formik
        initialValues={empleado}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);

          if (params.id) {
            await updateEmpleado(params.id, values);
            return;
          } else {
            await createEmpleado(values);
          }

          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input
              required={true}
              type="text"
              name="nombre"
              placeholder="Ingrese Nombre"
              onChange={handleChange}
              value={values.nombre}
            />

            <label>Apellido:</label>
            <input
              required={true}
              type="text"
              name="apellido"
              placeholder="Ingrese Apellido"
              onChange={handleChange}
              value={values.apellido}
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>

      <Link to="/empleados">Volver</Link>
    </div>
  );
}

export default EmpleadosForm;
