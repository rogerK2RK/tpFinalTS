import { Pict } from '@atoms/index';
import { Category } from "../../../types/Category";
import "./CardCategory.css";
import { useNavigate } from "react-router-dom";


interface CardCategoryProps {
    category: Category;
}
 
export const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/category/${category.id}`);
    }

    return (
        <div className="card-catogory" onClick={handleClick}>
            <div className="card-catogory-image">
                <Pict src={category.image} alt={category.name}
                />
            </div>
            <div className="card-catogory-content">
                <h2 className="card-catogory-content-title">{category.name}</h2>
            </div>
        </div>
    );
} 