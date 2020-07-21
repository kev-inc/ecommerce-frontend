import React from 'react'
import HomeCarousel from './HomeCarousel'
import CollectionsMenu from './CollectionsMenu'
import FeaturedItems from './FeaturedItems'
import Subscribe from './Subscribe'

function Home() {
  return (
    <div id="Home">
      <HomeCarousel />
      <div className="container">
        <div className="motto aparey">
          Our products are inspired by the people and world around us. Beautiful, high quality goods that are designed especially for you. Discover our story and meet the people that make our brand what it is.
        </div>
        <CollectionsMenu/>
        <FeaturedItems/>
      </div>

      <Subscribe/>


    </div>
  )
}


export default Home