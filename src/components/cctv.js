import Carousel from 'react-bootstrap/Carousel';

function Jcctv() {
  return (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block img-services"
            src={require('../assets/images/cctv.jpg')}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block img-services"
            src={require('../assets/images/cctv_1.jpg')}
            alt="Second slide"
            />
        </Carousel.Item>
        {/* <Carousel.Item>
            <img
            className="d-block img-services"
            src={require('../assets/images/cctv_2.jpg')}
            alt="Third slide"
            />
        </Carousel.Item> */}
    </Carousel>
  );
}

export default Jcctv;