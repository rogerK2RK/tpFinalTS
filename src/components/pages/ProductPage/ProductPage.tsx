import { Header } from "@organisms/Header";
import { Cards } from "@organisms/Cards";
import "./ProductPage.css";

export const ProductPage: React.FC = () => {


  return (
    <div>
      <Header />
      <section className="container">
        <h1 className="title">Product Page</h1>
        <Cards />
      </section>
    </div>
  );
};