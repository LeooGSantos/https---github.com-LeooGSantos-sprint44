import { Link } from 'react-router-dom';
import './Principal.css';
import { useMediaQuery } from 'react-responsive';

export default function Principal() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  });

  return (
    <>
      <div className={`quadrado-azul ${isDesktopOrLaptop ? 'desktop' : 'mobile'}`}>
        <div className="quadrado-lado-esquerdo">
          <h2>Seguro Bike da Porto</h2>
          <p>Uma solução completa que oferece proteção e serviços para você se aventurar sem medo.</p>
          <button>
            <Link to="/PlanosSeguro">Cote já</Link>
          </button>
        </div>
        <div className="estrada">
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
