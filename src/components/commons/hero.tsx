import { Carousel } from 'react-bootstrap';

const Hero = () => {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/banner1.webp"
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/banner2.webp"
          alt="Slide 1"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;