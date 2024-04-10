import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Navigation = () => {
  const activeStyleLink = ({ isActive }) => {
    return clsx("link", isActive && "active");
  };
  return (
    <header className="navbar">
      <ul>
        <li>
          <NavLink className={activeStyleLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={activeStyleLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
