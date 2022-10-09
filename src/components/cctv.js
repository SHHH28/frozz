import Carousel from 'react-bootstrap/Carousel';

function J_CCTV() {
  return (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block0"
            width={500}
            height={300}
            src={require('../assets/images/cctv.jpg')}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block"
            width={500}
            height={300}
            src={require('../assets/images/cctv_1.jpg')}
            alt="Second slide"
            />
        </Carousel.Item>
        {/* <Carousel.Item>
            <img
            className="d-block"
            width={500}
            height={300}
            src={require('../assets/images/cctv_2.jpg')}
            alt="Third slide"
            />
        </Carousel.Item> */}
    </Carousel>
  );
}

export default J_CCTV;