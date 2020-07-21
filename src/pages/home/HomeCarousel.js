import React from 'react'
import { Carousel } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import slide1 from '../../assets/slide1.jpeg'
import slide2 from '../../assets/slide2.jpeg'
import slide3 from '../../assets/slide3.jpeg'

function HomeCarousel() {
  return (
    <Carousel>

      <Carousel.Item>
        <img className="d-block w-100 carousel" height="640px" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h1 className="aparey">Back to School Collection</h1>
          <Link className="btn custom-btn" to='/search/women'>Shop women</Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 carousel" height="640px" src={slide2} alt="Third slide" />
        <Carousel.Caption>
          <h1 className="aparey">Essential Skincare</h1>
          <Link className="btn custom-btn" to='/search/skincare'>Shop skincare</Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 carousel" height="640px" src={slide3} alt="Third slide" />
        <Carousel.Caption>
          <Link className="btn custom-btn" to='/search/sale'>Shop sales</Link>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default HomeCarousel