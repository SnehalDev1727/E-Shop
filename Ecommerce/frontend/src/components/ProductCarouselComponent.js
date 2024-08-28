import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import slide1 from "../Images/Slider1.jpg";
import slide2 from "../Images/Slider2.jpg";
import slide3 from "../Images/Slider3.jpg";
const ProductCarouselComponent = () => {
  const cursorP = {
    cursor: "pointer",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Bestseller in Laptops Category</h3>
          </LinkContainer>
          <p>Dell Inspiron 15 3000 Laptop, 15.6 inch HD</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Bestseller in Books Category</h3>
          </LinkContainer>
          <p>World of Eric Carle, Hear Bear Roar 30-Button Animal Sound Book</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Bestseller in Cameras Category</h3>
          </LinkContainer>
          <p>
            4K Camcorder Video Camera 60FPS 48MP Vlogging Camera for YouTube
            WiFi 16X Digital Camera
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;

