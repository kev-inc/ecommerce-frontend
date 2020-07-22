import React, { useState, useEffect } from 'react'
import { data } from '../../assets/mockdata'
import ItemCarousel from './ItemCarousel'
import { getProduct } from '../../firebase/Firebase'

const style = {
  addToCart: {
    borderRadius: 0,
    borderWidth: '4px',
    borderColor: 'black'
  },
  buyNow: {
    borderRadius: 0,
    backgroundColor: 'black',
    color: 'white',
    borderWidth: '4px',
    borderColor: 'black'
  }
}

function addToCart(item) {
  let cart = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))
  cart.push(item)
  localStorage.setItem('cart', JSON.stringify(cart))
  alert(item.name + ' added to cart!')
}

function View(props) {
  const [product, setproduct] = useState(null)
  const itemId = props.match.params.itemId

  useEffect(() => {
    if (product === null) {
      getProduct(itemId).then(res => {
        setproduct(res)
      })
    }
    return
  }, [product, itemId])

  if (product === null) {
    return <div>Loading...</div>
  }

  return (
    <div id="View">
      <div className="grid container">
        <div className="row" style={{ paddingTop: '128px', paddingBottom: '128px' }}>
          <div className="col-md-6 col-12">
            <ItemCarousel imgs={product.img} />
          </div>
          <div className="col-md-6 col-12 my-auto text-center">
            <h1 className="aparey mb-4">{product.name}</h1>
            <h3 className="montserrat mb-4">${product.price}</h3>
            <hr />
            <button className="btn montserrat mr-4" style={style.addToCart} onClick={() => addToCart(product)}>Add to cart</button>
            <button className="btn montserrat" style={style.buyNow}>Buy It Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View