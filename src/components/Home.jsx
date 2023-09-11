import Menu from "./Menu";
import "./Home.css"; // Importe o arquivo de estilo CSS

export default function Home() {
  return (
    <div className="home-container">
      <img
        src="/caminho-da-primeira-imagem.jpg"
        alt="Logo 1"
        className="logo"
      />
      <img
        src="/caminho-da-segunda-imagem.jpg"
        alt="Logo 2"
        className="logo"
      />
      <Menu />
    </div>
  );
}
