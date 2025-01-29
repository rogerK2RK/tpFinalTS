import { Header } from "@organisms/Header";
import "./HomePage.css";

export const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="container">
        <h1 className="title">Bienvenue sur ma boutique</h1>
      </section>
    </div>
  );
};