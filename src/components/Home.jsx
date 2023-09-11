import Menu from "./Menu";
import "./Home.css"; // Importe o arquivo de estilo CSS

export default function Home() {
  return (
    <div className="home-container">
      <img
        src="/public/porto.png"
        alt="Logo 1"
        className="logo"
      />
      <img
        src="/public/fiap.jpg"
        alt="Logo 2"
        className="logo"
      />
      <Menu/>
    </div>
  );
}
