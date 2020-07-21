import React from 'react'
import ItemCard from '../../components/ItemCard'
import item1 from '../../assets/item1.jpg'
import item2 from '../../assets/item2.jpg'
import item3 from '../../assets/item3.jpg'

function FeaturedItems() {
  return (
    <div id="FeaturedItems">
      <h2>Featured Items</h2>
      <hr />

      <div className="grid">
        <div className="row">
          <div className="col">
            <ItemCard 
              img={item1}
              title='Floral Ruffled Top (Grey)'
              price='10'/>
          </div>
          <div className="col">
            <ItemCard 
              img={item2}
              title='Floral Ruffled Top (Pink)'
              price='10'/>
          </div>
          <div className="col">
            <ItemCard 
              img={item3}
              title='Floral Ruffled Top (Blue)'
              price='10'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedItems