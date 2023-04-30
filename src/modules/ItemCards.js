import Card from "./Card";

export default function ItemCards() {
  return (
    <div className="items" id="items">
      <div className="item-cards">
        <Card
          title="Tietokoneen, puhelimen tai tabletin pienet ongelmat"
          content="Tämä hinta sisältää pienet ongelmat, kuten ohjelmistojen asennukset, päivitykset, virustorjunnan asennukset, sekä muut pienet ongelmat."
          rating="Alkaen 20€"
        />
        <Card
          title="Tietokoneen, puhelimen tai tabletin suuremmat ongelmat"
          content="Tämä hinta sisältää suuremmat ongelmat, kuten tietokoneen, puhelimen tai tabletin uudelleenasennukset, korruptoituneen käyttöjärjestelmän korjaukset, sekä muut suuremmat ongelmat."
          rating="Alkaen 40€"
        />
        <Card
          title="Tuntiveloitus"
          content="Jos ongelma on isompi ja enemmän aikaa vievä, veloitamme tuntiveloituksen mukaan."
          rating="Alkaen 30€/h"
        />
        <Card
          title="Muun elektroniikan korjaukset"
          content="Esimerkiksi älytelevisiot, pelikonsolit, digiboksit ja muut."
        />
      </div>
      <div className="item-cards-outer">
        <Card
          className="item-cards-outer"
          title="Isommat projektit"
          content="Esimerkiksi nettisivut, ylläpito ja muut. Pyydä tarjous."
        />
      </div>
    </div>
  );
}
