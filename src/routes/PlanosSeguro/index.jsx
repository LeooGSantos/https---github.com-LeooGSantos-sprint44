import { Link } from 'react-router-dom';
import './PlanosSeguro.css';

function PlanosSeguro() {
  return (
    <div className="planos-seguro-page">
      <div className="quadrados-container">
        <div className="quadrado">
          <h2>Pedal Essencial</h2>
          <img src="/public/pedalar-1.jpg" alt="Imagem 1" className="plano-imagem" />
          <p>O plano gratuito* para você experimentar um dos serviços essenciais oferecidos, de acordo com as suas necessidades.</p>
        </div>

        <div className="quadrado">
          <h2>Pedal Leve</h2>
          <img src="/public/pedalar-2.jpg" alt="Imagem 2" className="plano-imagem" />
          <p>Você gosta de pedalar e está buscando um plano de serviços intermediário? O Pedal leve da Porto é para você.</p>
        </div>

        <div className="quadrado">
          <h2>Pedal Elite</h2>
          <img src="/public/pedalar-3.png" alt="Imagem 3" className="plano-imagem" />
          <p>Conte com diversos serviços capazes de elevar suas aventuras para o próximo nível.</p>
        </div>
      </div>
      <button className="cadastre-button">
        <Link to="/FazerSeguro">Se cadastre para fazer o seu seguro!</Link>
      </button>
    </div>
  );
}

export default PlanosSeguro;
