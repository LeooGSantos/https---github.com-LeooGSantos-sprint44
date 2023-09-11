import { Link } from "react-router-dom";
import "./Menu.css"; // Importe o arquivo de estilo CSS

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">Principal</Link>
      <span> | </span>
      <Link to="/Bike">Bike</Link>
      <span> | </span>
      <Link to="/FazerSeguro">FazerSeguro</Link>
      <span> | </span>
      <Link to="/PlanosSeguro">PlanosSeguro</Link>
      <span> | </span>
      <Link to="/RMs">RMs</Link>
    </nav>
  );
}
