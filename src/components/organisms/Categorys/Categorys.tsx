import { CardCategory } from "@molecules/CardCategory"; 
import { Category } from "../../../types/Category";
import { useEffect } from "react";
import { useCategoryStore } from "../../../store/useCategoryStore";
import "./Categorys.css";

interface CardsProps {
    categorys: Category[];
}

export const Categorys: React.FC<CardsProps> = () => {
  const { categorys, fetchProducts } = useCategoryStore();

  useEffect(() => {
    fetchProducts(); // Charge les catégories au montage
  }, []);

  console.log("Categorys:", categorys);
  return (
    <div className='Categorys'>
      {categorys.length > 0 ? (
        categorys.map((category) => (
        <CardCategory key={category.id} category={category} />
        ))
      ):(
      <p>Chargement des Categories...</p>
      )}
    </div>
  );
};