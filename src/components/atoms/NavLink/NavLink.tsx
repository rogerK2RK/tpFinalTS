import { Link } from "react-router-dom";
import { INavLinkProps } from "./NavLink.props";

export const NavLink: React.FC<INavLinkProps> = ({ to, label }) => {
    return (
        <Link to={to} className="nav-link">
        {label}
        </Link>
    );
}