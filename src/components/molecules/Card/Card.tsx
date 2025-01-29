import { Pict, Texte, Button } from '@atoms/index';
import './Card.css';
 
export const Card: React.FC = () => {
    return (
        <div className="card">
            <div className="card-image">
                <Pict src="https://via.placeholder.com/150" alt="placeholder" />
            </div>
            <div className="card-content">
                <Texte value="Nom"/>
                <Texte value="Prix"/>
                <Texte value="Catégorie"/>
                <Button label="Ajouter au panier"/>
            </div>
        </div>
    );
} 