import Header from "../components/Header";
import Footer from "../components/Footer";
import CardProduto from "../components/CardProduto";
import "./../styles/Produtos.css";

function Produtos({ adicionarCarrinho }) {


  const produtos = [
    {
      nome: "Pikachu",
      preco: "299,90",
      imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
      nome: "Charizard",
      preco: "999,90",
      imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
      nome: "Bulbasaur",
      preco: "199,90",
      imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
      nome: "Squirtle",
      preco: "199,90",
      imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
      nome: "Gengar",
      preco: "499,90",
      imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    },
    {
      nome: "Mewtwo",
      preco: "1499,90",
      imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    }
  ];

  return (
    <>
      <Header />

      <section className="produtos">
        <h2>Nossos Pokémons</h2>

        <div className="lista-produtos">
          {produtos.map((produto, index) => (
            <CardProduto
              key={index}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
              adicionarCarrinho={() => adicionarCarrinho(produto)}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Produtos;