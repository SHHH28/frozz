import Carousel from 'react-bootstrap/Carousel';

function JAircon() {
  return (
    <Carousel>
        <Carousel.Item>
            <img
             className="d-block img-services"
            src={require('../assets/images/aircon.jpg')}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block img-services"
            src={require('../assets/images/aircon_1.jpg')}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block img-services"
            src={require('../assets/images/aircon_2.jpg')}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block img-services"
            src={require('../assets/images/aircon_3.jpg')}
            alt="Fourth slide"
            />
        </Carousel.Item>
    </Carousel>
  );
}

export default JAircon;