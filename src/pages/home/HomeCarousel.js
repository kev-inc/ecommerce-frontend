import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getBanners } from '../../firebase/Firebase'
import Loading from '../../components/Loading'

function HomeCarousel() {
  const [banners, setbanners] = useState([])
  useEffect(() => {
    getBanners().then(res => {
      setbanners(res)
    })
    return
  }, [banners])
  if (banners.length === 0) {
    return (
    <div className='d-flex align-items-center justify-content-center' style={{height: '640px'}}>
      <Loading />
    </div>
    )
  }
  return (
    <Carousel>
      {banners.map((banner, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 carousel" height="640px" src={banner[1].imgUrl} alt="banner img" />
          <Carousel.Caption>
            <h1 className="aparey">{banner[1].title}</h1>
            <Link className="btn custom-btn" to={banner[1].btnLink}>{banner[1].btnText}</Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}

    </Carousel>
  )
}

export default HomeCarousel