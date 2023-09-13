import React from 'react';
import { useMediaQuery } from 'react-responsive';
import '../PlanosSeguro/PlanosSeguro.css';

function RMs() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)' 
  });

  return (
    <div className={`planos-seguro-page ${isDesktopOrLaptop ? 'desktop' : 'mobile'}`}>
      <div className="quadrados-container">
        <div className="quadrado">
          <h2>RM99533</h2>
          <p>Allesson Augusto Silva Perru Oliveira</p>
        </div>

        <div className="quadrado">
          <h2>RM552178</h2>
          <p>Cauã Mongs de Borba</p>
        </div>

        <div className="quadrado">
          <h2>RM551456</h2>
          <p>Guilherme Naoki Hirayama</p>
        </div>
        <div className="quadrado">
          <h2>RM98912</h2>
          <p>Leonardo Gonçalves da Costa Santos</p>
        </div>
        <div className="quadrado">
          <h2>RM551377</h2>
          <p>Erik Teixeira Barbosa</p>
        </div>
      </div>
    </div>
  );
}

export default RMs;
