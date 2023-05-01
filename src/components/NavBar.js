import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { NavLink as Navlink } from "react-router-dom";

function NavBar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>
        <Navlink to="/">
          <Logo />
        </Navlink>
      </h3>
      <nav ref={navRef}>
        <Navlink className="nav-link" to="/">
          Koti
        </Navlink>
        <Navlink className="nav-link" to="/palvelut">
          Palvelut
        </Navlink>
        <Navlink className="nav-link" to="/yhteystiedot">
          Yhteystiedot
        </Navlink>
        <Navlink className="nav-link" to="/läpä">
          Tietoja
        </Navlink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
export default NavBar;
