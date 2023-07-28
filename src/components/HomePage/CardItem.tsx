import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import openBook from "../../Assets/open-book.png";
import {ModuleContext} from "./ModuleContext";
import {useContext, useEffect, useState} from "react";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "../Services/Firebase";
import Loading from "../../Pages/Loading";

export const CardItems = () => {
  const {title} = useContext<any>(ModuleContext);

  const [modules, setModules] = useState<any[] | undefined>();
  const usersCollectionRef = collection(db, "modules");
  const q = query(usersCollectionRef, orderBy("id"));

  useEffect(() => {
    const getModules = async () => {
      const data = await getDocs(q);
      setModules(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getModules();
    // eslint-disable-next-line
  }, []);

  if (modules === undefined) return <Loading />;

  return (
    <div>
      <h3>{title}</h3>
      <div className="d-flex align-content-start flex-wrap">
        {modules.map((unit) => {
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
