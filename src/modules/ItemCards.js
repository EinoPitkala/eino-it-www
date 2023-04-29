import Card from './Card';

export default function ItemCards() {
    return (
      <div className="items" id="items">
        <div className="item-cards">
          <Card
            title="Title palvelu päläpälä1"
            content="lorem ipsum"
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