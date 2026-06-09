import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Carrinho from "./pages/Carrinho";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
    alert("Produto adicionado ao carrinho!");
  }
  function removerDoCarrinho(index) {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/produtos"
          element={
            <Produtos adicionarCarrinho={adicionarCarrinho} />
          }
        />

        <Route path="/contato" element={<Contato />} />

        <Route
          path="/carrinho"
          element={
            <Carrinho
              carrinho={carrinho}
              removerDoCarrinho={removerDoCarrinho}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;