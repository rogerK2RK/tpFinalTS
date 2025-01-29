import { Header } from "@organisms/Header";
import "./ContactPage.css";

export const ContactPage: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="container">
        <h1 className="title">Bienvenue sur la page contact</h1>
      </section>
    </div>
  );
};