import {
  FaCreditCard,
  FaPeopleArrows,
  FaClock,
  FaHouseUser,
} from "react-icons/fa";

import Card from "./Card";
export default function WhyChoose() {
  return (
    <div className="why-choose" id="why-choose">
      <div className="why-choose-text">
        <h2>
          Saatat kysyä itseltäsi; miksi valitsisin juuri Eino IT:n palvelut?
        </h2>
      </div>

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
          title="Aika"
          content="Nuorena ja ketteränä yrittäjänä minulla on aikaa asiakkailleni ja tilanteiden vaatiessa pystyn sopeutumaan nopeasti muuttuviin tilanteisiin."
        />
        <Card
          icon={<FaHouseUser />}
          title="Palvelun paikka"
          content="Voin tarjota palvelua, joka sisältää kotona tapahtuvan kokonaisvaltaisen suorituksen pienen lisämaksun avulla. Tietyissä tilanteissa palvelun voi suorittaa kokonaan etänä tai puoliksi kotona ja puoliksi etänä. Lisäksi joissakin tilanteissa, joissa käyttäjän läsnäoloa ei tarvita, voin ottaa vastaan laitteen ja suorittaa palvelun sen parissa."
        />
      </div>
    </div>
  );
}
