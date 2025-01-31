import { Header } from "@organisms/Header";
import { Cards } from "@organisms/Cards";
import "./ProductPage.css";
import { useEffect } from "react";
import { useProductStore } from "../../../store/useProductStore";
import { Categorys } from "@organisms/Categorys";



export const ProductPage: React.FC = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Produits depuis Zustand:", products);

  return (
    <div>
      <Header />
      <Categorys />
      <section className="container">
        <h1 className="title">Product Page</h1>
        <Cards products={products}/>
      </section>
    </div>
  );
};