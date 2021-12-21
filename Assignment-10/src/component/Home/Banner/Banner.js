import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
    style={{height:'60vh',objectFit:'cover'}}
      className="d-block w-100"
      src="https://digitallearning.eletsonline.com/wp-content/uploads/2019/07/NEET-2019-first-allotment-list-out.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="text-dark">Share You Problems</h1>
      <p className="text-dark">You can share your problem with us without any hesitation. A trip to the hospital is always a descent into the macabre. I have never trusted a place with shiny floors</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'60vh',objectFit:'cover'}}
      className="d-block w-100"
      src="https://vitalurgentcare.ca/wp-content/uploads/2020/08/pasted-image-0-2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 className="text-dark">Get Your Best Solution</h1>
      <p className="text-dark">Share Your problems. Surely there is no greater garden for human-nature study than the flotsam and jetsam of the hospital.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'60vh',objectFit:'cover'}}
      className="d-block w-100"
      src="https://st2.depositphotos.com/1054848/7169/i/950/depositphotos_71691653-stock-photo-smiling-doctor-on-white-background.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1 className="text-dark">Connect With Us & Be Well</h1>
      <p className="text-dark">Good Health is very important to live a sound life. Or maybe watching you enjoy a carefree summer while you fell in love was what kept me out of the hospital in the first place.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;