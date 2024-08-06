// HorizontalScrollCarousel.js
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import main from '../../assets/images/mainimage.jpg';

const HorizontalScrollCarousel = () => {
  return (
    <div>
    <Container className="my-5 carousel " >
      <h2 className="text-center mb-5 mt-5">Meet Your Child's Learning Partners</h2>
      <Carousel controls={false} indicators={false} interval={3000} pause={false}>
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-center carousel-content">
            <img
              className="d-block"
              src={main}
              alt="Ki"
              style={{ width: '200px', height: 'auto' }}
            />
            <div className="carousel-text">
              <h5>Ki</h5>
              <p>Excited, energetic and adventurous, Ki is a cartwheeling, somersaulting thunderstorm. She cares a lot for her little brother, Kutu.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-center carousel-content">
            <img
              className="d-block"
              src={main}
              alt="Ki"
              style={{ width: '200px', height: 'auto' }}
            />
            <div className="carousel-text">
              <h5>Kids</h5>
              <p>Excited, energetic and adventurous, Ki is a cartwheeling, somersaulting thunderstorm. She cares a lot for her little brother, Kutu.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-center carousel-content">
            <img
              className="d-block"
              src={main}
              alt="Ki"
              style={{ width: '200px', height: 'auto' }}
            />
            <div className="carousel-text">
              <h5>New</h5>
              <p>Excited, energetic and adventurous, Ki is a cartwheeling, somersaulting thunderstorm. She cares a lot for her little brother, Kutu.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-center carousel-content">
            <img
              className="d-block"
              src={main}
              alt="Minku"
              style={{ width: '200px', height: 'auto' }}
            />
            <div className="carousel-text">
              <h5>Minku</h5>
              <p>Kutu and Ki's best friend. Minku is gentle, playful, and resilient. He is a baby elephant who loves children and bananas.</p>
            </div>
          </div>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>
    </Container>
    </div>
  );
};

export default HorizontalScrollCarousel;
