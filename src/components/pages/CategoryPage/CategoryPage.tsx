import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../../../store/useProductStore";
import { Cards } from "@organisms/Cards";
import { Header } from "@organisms/Header";
import { Category } from "../../../types/Category";
import axios from "axios";
import { Categorys } from "@organisms/Categorys";
import { FilDariane } from "@molecules/FilDariane/FilDariane";


export const CategoryPage: React.FC = () => {
  const { categoryId } = useParams();
  const { products, fetchProductsByCategory } = useProductStore();
  const [categoryName, setCategoryName] = useState<string>("");

  useEffect(() => {
    if (categoryId) {
      fetchProductsByCategory(categoryId);
      axios
        .get<Category>(`https://api.escuelajs.co/api/v1/categories/${categoryId}`)
        .then((response) => {
          setCategoryName(response.data.name);
          document.title = response.data.name;
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération de la catégorie", error);
          setCategoryName("Catégorie inconnue");
        });
    }
  }, [categoryId]);

  return (
    <div>
      <Header/>
      <Categorys />
      <FilDariane />
      <h1>{categoryName ? `Produits de la catégorie : ${categoryName}` : "Chargement..."}</h1>
      <Cards products={products} />
    </div>
  );
};
