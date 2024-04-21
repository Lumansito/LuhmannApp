import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { createEmpleado } from "../api/empleados.api";

function EmpleadosForm() {
  return (
    <div>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await createEmpleado(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
          
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
              value = {values.nombre}
            />

            <label>Apellido:</label>
            <input
              required={true}
              type="text"
              name="apellido"
              placeholder="Ingrese Apellido"
              onChange={handleChange}
              value = {values.apellido}
            />

            <button type="submit" disabled={isSubmitting}>{isSubmitting?"Guardando..." : "Guardar"}</button>
          </Form>
        )}
      </Formik>

      <Link to="/empleados">Volver</Link>
    </div>
  );
}
export default EmpleadosForm;
