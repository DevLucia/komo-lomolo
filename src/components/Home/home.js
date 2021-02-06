import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { pics } from '../../utils/imgProvider';

import './home.css';

export default function Home () {

    return (
      <div className="bloque">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 slider" src={pics.sldr1} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 slider" src={pics.sldr2} alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 slider" src={pics.sldr3} alt="Third slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 slider" src={pics.sldr4} alt="Fourth slide"/>
          </Carousel.Item>
        </Carousel>
      </div>
      
    );
  }