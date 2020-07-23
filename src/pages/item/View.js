import React, { useState, useEffect } from 'react'
import ItemCarousel from './ItemCarousel'
import { getProduct } from '../../firebase/Firebase'
import Loading from '../../components/Loading'

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

function addToCart(id, item, quantitySelected) {
  let cart = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))

  cart.push({id, item, quantitySelected})
  localStorage.setItem('cart', JSON.stringify(cart))
  alert(item.name + ' added to cart!')
}

function View(props) {
  const [product, setproduct] = useState(null)
  const [quantity, setquantity] = useState(1)

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
    return <Loading/>
  }

  return (
    <div id="View">
      <div className="grid container">
        <div className="row" style={{ paddingTop: '128px', paddingBottom: '128px' }}>
          <div className="col-md-6 col-12 d-flex justify-content-center">
            <ItemCarousel imgs={product.img} />
          </div>
          <div className="col-md-6 col-12 my-auto text-center">
            <h1 className="aparey mb-4">{product.name}</h1>
            <h3 className="montserrat mb-4">${product.price}</h3>
            <hr />
            <div className="input-group mb-3 d-flex justify-content-center">
              <div className="input-group-prepend">
                <button className="btn" style={style.addToCart} type="button" onClick={() => setquantity(Math.max(product['quantity'], quantity-1))}>-</button>
              </div>
              <input disabled type="text" className='text-center' style={{width: '48px'}} value={quantity}/>
              <div className="input-group-append">
                <button className="btn" style={style.buyNow} type="button" onClick={() => setquantity(Math.min(product['quantity'], quantity+1))}>+</button>
              </div>
            </div>
            <button className="btn montserrat mr-4" style={style.addToCart} onClick={() => addToCart(itemId, product, quantity)}>Add to cart</button>
            <button className="btn montserrat" style={style.buyNow}>Buy It Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View