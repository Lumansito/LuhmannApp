import { useEffect } from "react";
import { Link } from "react-router-dom";
import PersonaCard from "../components/PersonaCard";
import { useAppContext} from "../context/Provider";

function Personas() {
  const { personas, loadPersonas } = useAppContext();
  useEffect(() => {

    loadPersonas();
  }, []);

  function renderMain() {
    if (personas.length === 0) return <h2>No hay Personas</h2>;
    return personas.map((persona) => (
      <PersonaCard persona={persona} key={persona.dni} />
    ));
  }

  return (
    <div>
      <h1>Personas List</h1>
      {renderMain()}
      <Link to="/persona/nueva">Nueva persona</Link>
      <br></br>
      <Link to="/">Volver</Link>
    </div>
  );
}
export default Personas;
