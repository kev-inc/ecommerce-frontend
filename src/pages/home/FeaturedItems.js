import React from 'react'
import ItemCard from '../../components/ItemCard'
import { data } from '../../assets/mockdata'

function FeaturedItems() {
  return (
    <div id="FeaturedItems">
      <h2>Featured Items</h2>
      <hr />

      <div className="grid">
        <div className="row">
          {data.filter((item, index) => index < 3).map((item, index) => (
            <div className="col-md-4 col-6" key={index}>
              <ItemCard details={item}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedItems