import React from 'react'
import { Carousel } from 'react-bootstrap'

function ItemCarousel(props) {
  const imgs = props.imgs

  return (
    <Carousel>
      {imgs.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" height="640px" src={item} />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ItemCarousel