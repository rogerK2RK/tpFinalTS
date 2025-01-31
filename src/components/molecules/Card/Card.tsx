import { Pict, Button } from '@atoms/index';
import './Card.css';
import { Product } from "../../../types/Product";
import { useState } from 'react';
import { Link } from "react-router-dom";


interface CardProps {
     product: Product;
}
 
export const Card: React.FC<CardProps> = ({ product }) => {
    const [imageSrc, setImageSrc] = useState<string>(product.images[0]);

    return (
        <div className="card">
            <Link to={`/tpFinalTS/products/${product.id}`}>
                <div className="card-image">
                    <Pict 
                        src={imageSrc} 
                        alt={product.title} 
                        onError={() => setImageSrc("https://via.placeholder.com/150")}
                    />
                </div>
                <div className="card-content">
                    <h2 className="card-content-title">{product.title}</h2>
                    <p className="card-content-categorie">{`Catégorie: ${product.category.name}`}</p>
                    <p className="card-content-price">{`Prix: ${product.price} €`}</p>
                </div>
            </Link>
            <Button label="Ajouter au panier"/>        
        </div>
    );
} 