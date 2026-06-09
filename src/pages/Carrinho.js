import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Carrinho.css";

function Carrinho({ carrinho, removerDoCarrinho }) {
  const total = carrinho.reduce((soma, produto) => {
    return soma + Number(produto.preco.toString().replace(",", "."));
  }, 0);
  return (
    <>
      <Header />

      <div className="carrinho">
        <h2>Meu Carrinho</h2>

        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          carrinho.map((produto, index) => (
            <div className="itemCarrinho" key={index}>
              <img src={produto.imagem} alt={produto.nome} />

              <div className="infoProduto">
                <h3>{produto.nome}</h3>
                <p>R$ {produto.preco}</p>

                <button
                  className="btnRemover"
                  onClick={() => removerDoCarrinho(index)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {carrinho.length > 0 && (
        <div className="totalCarrinho">
          <h3>Total: R$ {total.toFixed(2).replace(".", ",")}</h3>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Carrinho;