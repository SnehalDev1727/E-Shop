import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import inmdf from "../Images/Camera.jpg"
import cameraImage from '../Images/Camera.jpg';
import monitorImage from '../Images/Monitors.jpg';
import gamesImage from '../Images/Games.jpg';
import tabletsImage from '../Images/Tablet.jpg';

const CategoryCardComponent = ({ category, idx }) => {
  const images = [
    cameraImage,
    monitorImage,
    gamesImage,
    tabletsImage,
    cameraImage,
    monitorImage,
    

    
  ];
  return (
    <Card>
      <Card.Img crossorigin="anonymous" variant="top" src={images[idx]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Go to the Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;

