import Header from "../components/Header";
import Footer from "../components/Footer";
import "./../styles/Contato.css";

function Contato() {
  return (
    <>
      <Header />

      <section className="contato">
        <h2>Entre em Contato com a gente!</h2>

        <p>Email: contato@pokeshop.com</p>
        <p>Telefone: (11) 99999-9999</p>
        <p>Instagram: @pokeshop</p>
      </section>

      <Footer />
    </>
  );
}

export default Contato;