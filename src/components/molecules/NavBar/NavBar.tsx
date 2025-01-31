import { NavLink } from '@atoms/index';
import './NavBar.css';
 
export const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <NavLink to="/tpFinalTS/" label="Home" />
            <NavLink to="/tpFinalTS/products" label="Products" />
            <NavLink to="/tpFinalTS/contact" label="Contact" />
        </nav>
    );
} 


