import Carousel from 'react-bootstrap/Carousel';

function JMaintenance() {
  return (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block0"
            width={500}
            height={300}
            src={require('../assets/images/maintenance.jpg')}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block"
            width={500}
            height={300}
            src={require('../assets/images/maintenance_1.jpg')}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block"
            width={500}
            height={300}
            src={require('../assets/images/maintenance_2.jpg')}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block"
            width={500}
            height={300}
            src={require('../assets/images/maintenance_3.jpg')}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block"
            width={500}
            height={300}
            src={require('../assets/images/maintenance_4.jpg')}
            alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
  );
}

export default JMaintenance;