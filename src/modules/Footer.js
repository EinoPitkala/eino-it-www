import { ReactComponent as Logo } from "../assets/images/logo.svg";

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
                <li><a href="mailto:eino@eino-it.fi">eino@eino-it.fi</a></li>
                <li><a href="tel:+358442008211">+358442008211</a></li>
                <li><a href="https://m.me/eino.it">m.me/eino.it</a></li>
                <li>Kuopio, Pohjois-Savo, Finland</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h3>Seuraa meitä somessa:</h3>

        </div>
      </div>
    </div>
  );
}
