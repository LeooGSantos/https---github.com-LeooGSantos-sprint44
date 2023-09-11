// Importações no topo do arquivo
import { Link } from 'react-router-dom';
import './Principal.css';

export default function Principal() {
  return (
    <>
      <div className="quadrado-azul">
        <div className="quadrado-lado-esquerdo">
          <h2>Seguro Bike da Porto</h2>
          <p>Uma solução completa que oferece proteção e serviços para você se aventurar sem medo.</p>
          <button>
          <Link to="/PlanosSeguro">Cote já</Link>
          </button>
        </div>
        <div className="quadrado-lado-direito">
          <img src="/public/fhome.jpg" alt="Imagem" />
        </div>
      </div>
      <div className="txt">
        <p>Com o Seguro Bike da Porto Seguro, é pedalar e relaxar</p>
        <p>Faça o seguro agora!!</p>
      </div>
    </>
  );
}




 

