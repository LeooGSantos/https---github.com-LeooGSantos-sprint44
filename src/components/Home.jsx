import "./Home.css";
export default function Home() {
  return (
    <div className="home-container">
      {/* Quadrado de cobertura para as logos */}
      <div className="quadrado-logos">
        {/* Conteúdo do quadrado de cobertura */}
      </div>

      <div className="logos-container">
        <img
          src="/public/porto.png"
          alt="Logo 1"
          className="logo"
        />
        <img
          src="/public/fiap.jpg"
          alt="Logo 2"
          className="logo-2"
        />
      </div>
    </div>
  );
}
