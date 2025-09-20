const Hero = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://tofuu.getjusto.com/orioneat-local/resized2/hLa4djHbMd5KwDwEo-x-300.webp"
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tofuu.getjusto.com/orioneat-local/resized2/DRmakTqJADeRLAjxK-x-300.webp"
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tofuu.getjusto.com/orioneat-local/resized2/DZb8xaErPKPPpGWdL-x-300.webp"
            className="d-block w-100"
            alt="Slide 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;