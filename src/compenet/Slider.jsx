import Carousel from "react-bootstrap/Carousel";
import Img1 from "../media/kitchen_night.png";
import Img2 from "../media/sort_of_beautiful_beach_day.png";
import Img3 from "../media/techportalfdesk.png";

function Myslide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "250px" }}
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "250px" }}
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "250px" }}
          className="d-block w-100"
          src={Img3}
          alt="third slide"
        />

        <Carousel.Caption>
          <h3>third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Myslide;
