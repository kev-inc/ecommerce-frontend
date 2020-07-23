import React, { useState, useEffect } from 'react'
import ItemCard from '../../components/ItemCard'
import { getLatestProducts } from '../../firebase/Firebase'

function FeaturedItems() {
  const [products, setproducts] = useState([])
  useEffect(() => {
    if(products.length === 0) {
      getLatestProducts(3).then(res => {
        setproducts(res)
      })
    }
    return 
  }, [products])
  return (
    <div id="FeaturedItems">
      <h2>Recently Added</h2>
      <hr />
      <div className="grid">
        <div className="row">
          {products.map((item, index) => (
            <div className="col-md-4 col-6" key={index}>
              <ItemCard details={item[1]}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedItems