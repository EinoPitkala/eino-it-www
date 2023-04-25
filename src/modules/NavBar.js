import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>
        <Link to="/">
          <Logo />
        </Link>
      </h3>
      <nav ref={navRef}>
        <Link className="nav-link" to="">
          Koti
        </Link>
        <Link className="nav-link" to="">
          Palvelut
        </Link>
        <Link className="nav-link" to="">
          Yhteystiedot
        </Link>
        <Link className="nav-link" to="">
          Tietoja
        </Link>
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
