import {
  FaCreditCard,
  FaPeopleArrows,
  FaClock,
  FaQuestion,
} from "react-icons/fa";

import Card from "./Card";
export default function WhyChoose() {
  return (
    <div className="why-choose">
      <h2>
        Saatat kysyä itseltäsi; miksi valitsisin juuri Eino IT:n palvelut?
      </h2>
      <div className="why-choose-cards">
        <Card
          icon={<FaCreditCard />}
          title="Hinta-laatusuhde"
          content="Tarjoan palveluitani edullisesti ja laadukkaasti. Olen nuori ja innokas yrittäjä, joka haluaa tarjota asiakkailleen parasta mahdollista palvelua."
        />
        <Card
          icon={<FaPeopleArrows />}
          title="Luotettavuus"
          content="Olen luotettava ja rehellinen yrittäjä, joka haluaa tarjota asiakkailleen parasta mahdollista palvelua. Olen ainut yrityksen työntekijä, joten saat aina minun palvelukseni."
        />
        <Card
          icon={<FaClock />}
          title="Luotettavuus"
          content="Nuorena ja ketteränä yrittäjänä minulla on aikaa asiakkailleni ja tilanteiden vaatiessa pystyn sopeutumaan nopeasti muuttuviin tilanteisiin."
        />
        <Card
          icon={<FaQuestion />}
          title="Lorem ipsum"
          content="Lorem ipsun dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nisl nisl tincidunt nisl, quis ultrices nisl nisl nec nisl."
        />
      </div>
    </div>
  );
}
