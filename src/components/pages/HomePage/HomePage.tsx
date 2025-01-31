import { Header } from "@organisms/Header";
import "./HomePage.css";
import { Categorys } from "@organisms/Categorys";

export const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="container">
        <h1 className="title">Bienvenue sur ma boutique</h1>
      </section>
      <section className="container">
        <h2 className="title">Catégories</h2>
        <Categorys />
      </section>
    </div>
  );
};