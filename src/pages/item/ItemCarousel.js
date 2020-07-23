import React from 'react'
import { Carousel } from 'react-bootstrap'

function ItemCarousel(props) {
  const imgs = props.imgs

  return (
    <Carousel style={{maxWidth: '420px'}}>
      {imgs.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item} alt='carousel'/>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ItemCarousel