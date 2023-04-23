import { ReactComponent as Brand } from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Etusivu</NavLink>
            </li>
            <li>
              <NavLink to="/services">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Yhteystiedot</NavLink>
            </li>
            <li>
              <NavLink to="/info">Tietoja</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
