import { Card } from "@molecules/Card"; 
import { Product } from "../../../types/Product";
import './Cards.css';

interface CardsProps {
  products: Product[];
}

export const Cards: React.FC<CardsProps> = ({ products = [] }) => {

  console.log("Products:", products);
  return (
    <div className='Cards'>
      {products.length > 0 ? (
        products.map((product) => (
        <Card key={product.id} product={product} />
        ))
      ):(
      <p>Chargement des produits...</p>
      )}
    </div>
  );
};
