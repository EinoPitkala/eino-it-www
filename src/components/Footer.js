import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as RegistarLogo } from "../assets/images/registar.svg";
import {ReactComponent as DigiTuki} from "../assets/images/digituki.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Logo className="footer-logo" />
          <h2>Eino IT</h2>
          <ul className="footer-contact-list">
            <li>Y-tunnus: 3284417-9</li>
            <li>eino-it.fi</li>
            <li>
              <a href="mailto:eino@eino-it.fi">eino@eino-it.fi</a>
            </li>
            <li>
              <a href="tel:+358442008211">+358442008211</a>
            </li>
            <li>
              <a href="https://m.me/eino.it">m.me/eino.it</a>
            </li>
            <li>Kuopio, Pohjois-Savo, Finland</li>
            <li>
              <a href="/invoicing.pdf">Laskutustiedot/Invoicing details</a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h3>Seuraa meitä somessa:</h3>
          <div className="footer-links">
            <a href="https://fb.me/eino.it">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/eino_it">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/eino_it/">
              <FaInstagram />
            </a>
          </div>
          <div className="footer-badges">
            <RegistarLogo className="registar-logo" />
            <DigiTuki className="registar-logo" />
          </div>
          <p>&copy; Eino Pitkälä / Eino IT 2023</p>
          <p>
            Page source available{" "}
            <a href="https://github.com/seoneizz/eino-it-www">here.</a>
          </p>
        </div>
      </div>
    </div>
  );
}
