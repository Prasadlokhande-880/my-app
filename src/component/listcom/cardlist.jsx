import Card from "./card";

function CardList() {
  return (
    <ul className="cards">
      <Card
        imageUrl="https://i.imgur.com/oYiTqum.jpg"
        name="Jessica Parker"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"
      />
      <Card
        imageUrl="https://i.imgur.com/2DhmtJ4.jpg"
        name="kim Cattrall"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"
      />
      <Card
        imageUrl="https://i.imgur.com/oYiTqum.jpg"
        name="Jessica Parker"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"
      />
      <Card
        imageUrl="https://i.imgur.com/2DhmtJ4.jpg"
        name="kim Cattrall"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"
      />
    </ul>
  );
}

export default CardList;
