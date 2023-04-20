import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img height={800} width={'100%'}
          className="d-block w-100"
          src="./img/Foto1 (1).jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img height={800} width={'100%'}
          className="d-block w-100"
          src="./img/Foto1 (2).jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img height={800} width={'100%'}
          className="d-block w-100"
          src="./img/Foto1 (3).jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img height={800} width={'100%'}
          className="d-block w-100"
          src="./img/Foto1 (4).jpg"
          alt="Four slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider