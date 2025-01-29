import { NavLink } from '@atoms/NavLink';
 
export const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" label="Home" />
            <NavLink to="/products" label="Products" />
            <NavLink to="/contact" label="Contact" />
        </nav>
    );
} 


