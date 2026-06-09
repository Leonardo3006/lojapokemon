import "./../styles/CardProduto.css";

function CardProduto({
  nome,
  imagem,
  preco,
  adicionarCarrinho,
}) {
  return (
    <div className="card">
      <img src={imagem} alt={nome} />

      <h3>{nome}</h3>

      <p>R$ {preco}</p>

      <button onClick={adicionarCarrinho}>
        Comprar
      </button>
    </div>
  );
}

export default CardProduto;

