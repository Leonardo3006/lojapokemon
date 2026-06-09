import "./../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>PokéShop</h1>

      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/carrinho">Carrinho</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;