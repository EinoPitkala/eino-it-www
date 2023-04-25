import { FaUser } from "react-icons/fa";

import Card from "./Card";
export default function OpinionsGrid() {
  return (
    <div className="opinions" id="opinions">
      <div className="opinions-text">
        <h2>
          Asiakkaiden kokemus palvelusta on tärkeä, mitä asiakkaasi ovat mieltä
          palveluista?
        </h2>
        <p>
          Kokosin anonyymeja palautteita suoraan asiakaspalauteestani tälle
          sivulle
        </p>
      </div>
      <div className="opinions-cards">
        <Card
          icon={<FaUser />}
          content="Reipas nuori, jolla it-asiat ovat hallussa👍"
          rating="10"
        />
        <Card
          icon={<FaUser />}
          content="Nopea asiantunteva palvelu"
          rating="10"
        />
        <Card
          icon={<FaUser />}
          content="Sain itse ensiluokkaista, nopeaa, sekä sellaista palvelua, että kertaakaan en tuntenut itseäni tyhmäksi kun Eino korjasi ongelmaa. Harvinainen tilannetaju nuorella miehellä. Arvostan!"
          rating="10"
        />
        <Card
          icon={<FaUser />}
          content="Asia tuli korjattua ripeästi. Kiitos!"
          rating="8"
        />
      </div>
    </div>
  );
}
