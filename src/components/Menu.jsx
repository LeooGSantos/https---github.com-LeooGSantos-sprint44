import { Link } from "react-router-dom";
import "./Menu.css"; 

export default function Menu() {
  return (
    <div>
      <nav className="Menu">
        <Link to="/">Principal</Link>
        <span> | </span>
        <Link to="/Bike">Bike</Link>
        <span> | </span>
        <Link to="/PlanosSeguro">PlanosSeguro</Link>
        <span> | </span>
        <Link to="/RMs">RMs</Link>
      </nav>
      <div className="separador"></div>
    </div>
  );
}
