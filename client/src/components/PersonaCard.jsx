import { usePersonas } from "../context/Personas/PersonaProvider";
import { useNavigate } from "react-router-dom";

function PersonaCard({ persona }) {
  const { deletePersona } = usePersonas();
  const navigate = useNavigate();

  return (
    <div>
      <h2>
        {persona.nombre} {persona.apellido} {persona.dni}
        <button onClick={() => navigate(`/persona/edit/${persona.dni}`)}>
          Editar
        </button>
        <button onClick={() => deletePersona(persona.dni)}>Eliminar</button>
      </h2>
    </div>
  );
}

export default PersonaCard;
