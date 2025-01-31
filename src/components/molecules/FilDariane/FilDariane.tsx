import { Link, useLocation } from "react-router-dom";
import "./FilDariane.css";

export const FilDariane: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="fil-dariane">
      <ul>
        <li>
          <Link to="/tpFinalTS/">Accueil</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to}>
              {!isLast ? <Link to={to}>{decodeURIComponent(value)}</Link> : <span>{decodeURIComponent(value)}</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
