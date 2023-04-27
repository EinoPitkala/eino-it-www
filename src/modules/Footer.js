import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Logo className="footer-logo" />
          <h2>Eino IT</h2>
          <ul>
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
          </ul>
        </div>
        <div className="footer-content-right">
          <h3>Seuraa meitä somessa:</h3>
          <a href="https://fb.me/eino.it"><FaFacebook /></a>
          <a href="https://twitter.com/eino_it"><FaTwitter /></a>
          <a href="https://www.instagram.com/eino_it/"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}
