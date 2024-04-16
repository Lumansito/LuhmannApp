import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/empleados">Empleados</Link>
    </div>
  );
}
export default Home;
