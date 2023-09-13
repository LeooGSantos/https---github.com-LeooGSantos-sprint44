import React from 'react';
import { Link } from 'react-router-dom';

function Bike() {
  //Página do cliente para ver suas bicicletas
  return (
    <div className="bike-page">
      <h1>Fazer Seguro</h1>
      <p>Faça seu seguro agora, de forma dinâmica e rápida!</p>
      <button>
        <Link to="/FazerSeguro">Faça já</Link>
      </button>

      <h2>Ver Seus Seguros de Bike</h2>
      <p>Veja seus seguros aqui!</p>
      <button>
        <Link to="/PlanosSeguro">Ver seguros</Link>
      </button>
    </div>
  );
}

export default Bike;
