import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import openBook from "../../Assets/open-book.png";

export const CardItems: React.FC<{title: string}> = ({title}) => {
  const unitData = [
    {id: 1, title: "Unit 1", description: "This is the description of unit 1"},
    {id: 2, title: "Unit 2", description: "This is the description of unit 2"},
    {id: 3, title: "Unit 3", description: "This is the description of unit 3"},
  ];

  return (
    <div>
      <h3>Module Name : {title}</h3>
      <div className="d-flex align-content-start flex-wrap">
        {unitData.map((unit) => {
          return <CardItem card={unit} key={unit.id} />;
        })}
      </div>
    </div>
  );
};

const CardItem = ({
  card,
}: {
  card: {title: string; description: string; id: number};
}) => {
  return (
    <div>
      <Card style={{width: "18rem", margin: 15}}>
        <Card.Img variant="top" src={openBook} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
          <Button disabled variant="primary">
            Check
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
