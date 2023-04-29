import Card from './Card';

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
            title="Title palvelu päläpälä2"
            content="lorem ipsum"
          />
          <Card
            title="Title palvelu päläpälä3"
            content="lorem ipsum"
          />
          <Card
            title="Title palvelu päläpälä4"
            content="lorem ipsum"
          />
        </div>
      </div>
    );
  }