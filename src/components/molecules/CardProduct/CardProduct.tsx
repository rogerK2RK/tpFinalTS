import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "@types/Product";
import axios from "axios";
import { Pict, Button } from "@atoms/index";
import "./CardProduct.css";

export const CardProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération du produit", error);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Chargement du produit...</p>;
  }

  return (
    <div>
        <div className="product-detail">
            <div className="product-detail-image">
                <Pict src={product.images[0]} alt={product.title} />
            </div>
            <div className="product-detail-content">
                <h1>{product.title}</h1>
                <p><strong>Catégorie :</strong> {product.category.name}</p>
                <p>{product.description}</p>
                <p><strong>Prix :</strong> {product.price} €</p>
                <Button className="product-detail-button" label="Ajouter au panier" />
            </div>
            
        </div>
    </div>
    
  );
};
