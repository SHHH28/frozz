import Carousel from 'react-bootstrap/Carousel';

function J_Aircon() {
  return (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block0"
            width={500}
            height={300}
            src={require('../assets/images/aircon.jpg')}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block"
            width={500}
            height={300}
            src={require('../assets/images/aircon_1.jpg')}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block"
            width={500}
            height={300}
            src={require('../assets/images/aircon_2.jpg')}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block"
            width={500}
            height={300}
            src={require('../assets/images/aircon_3.jpg')}
            alt="Fourth slide"
            />
        </Carousel.Item>
    </Carousel>
  );
}

export default J_Aircon;