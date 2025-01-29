import { NavLink } from '@atoms/index';
import './NavBar.css';
 
export const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" label="Home" />
            <NavLink to="/products" label="Products" />
            <NavLink to="/contact" label="Contact" />
        </nav>
    );
} 


