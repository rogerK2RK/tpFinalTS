import { Pict, Button } from '@atoms/index';
import './Card.css';
import { Product } from "../../../types/Product";

interface CardProps {
     product: Product;
}
 
export const Card: React.FC<CardProps> = ({ product }) => {
    return (
        <div className="card">
            <div className="card-image">
                <Pict src={product.images[0]} alt={product.title} />
            </div>
            <div className="card-content">
                <h2>{product.title}</h2>
                <p>Description</p>
                <p>{`Catégorie: ${product.category.name}`}</p>
                <p>{`Prix: ${product.price} €`}</p>
                <Button label="Ajouter au panier"/>
            </div>
        </div>
    );
} 