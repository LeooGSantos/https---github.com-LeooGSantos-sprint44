import { Link } from 'react-router-dom';
import './Bike.css'

function Bike() {
  return (
    <div className="bike">
      <div className="quadrado-1">
        <h1>Fazer Seguro</h1>
        <p>Faça seu seguro agora, de forma dinâmica e rápida!</p>
        <button>
          <Link to="/FazerSeguro">Faça já</Link>
        </button>
      </div>

      <div className="quadrado-2">
        <h1>Ver Seguros de Bike</h1>
        <p>Veja os seguros aqui!</p>
        <button>
          <Link to="/PlanosSeguro">Ver seguros</Link>
        </button>
      </div>
    </div>
  );
}

export default Bike;
