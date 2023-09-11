// Importações no topo do arquivo
import React from 'react';
import { Link } from 'react-router-dom';

export default function Principal() {
  return (
    <>
      <div className="pagina-principal">
        <h1>Seguro Bike da Porto</h1>
        <h2>Seguro</h2>
        <p>Uma solução completa que oferece proteção e serviços para você se aventurar sem medo.</p>
        <button>
          <Link to="/PlanosSeguro">Cote já</Link>
        </button>
        <p>Com o Seguro Bike da Porto Seguro, é pedalar e relaxar.</p>
        <p>Faça o seguro agora!!</p>
      </div>
    </>
  );
}
