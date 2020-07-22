import React, { useState, useEffect } from 'react'
import ItemCard from '../../components/ItemCard'
import { getCategoryProducts } from '../../firebase/Firebase'

function SearchPage(props) {
  const [products, setproducts] = useState([])
  const tag = props.match.params.tag
  useEffect(() => {
    if(products.length === 0) {
      getCategoryProducts(tag)
        .then(res => setproducts(res))
    }
    return
  }, [products, tag])

  if(products.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div id="SearchPage" className="container text-center" style={{paddingTop: '128px', paddingBottom: '128px'}}>
      <h1 className="aparey">{tag}</h1>
      <div>
        Sort by
      </div>

      <div className="grid pt-4">
        <div className="row aparey">
          {products.map((item, index) => (
            <div className="col-md-4 col-6" key={index}>
              <ItemCard details={item[1]} id={item[0]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchPage