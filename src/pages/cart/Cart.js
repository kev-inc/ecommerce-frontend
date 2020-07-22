import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import {addNewProduct} from '../../firebase/Firebase'

function removeFromCart(item, index) {
  let cart = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))
  cart.splice(index, 1)
  localStorage.setItem('cart', JSON.stringify(cart))
  alert(item.name + ' removed from cart!')
  window.location.reload()
}

function checkout(item) {
  const result = addNewProduct(item)
  console.log(result)
}



function Cart() {

  let component
  let cart = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))
  if (cart.length === 0) {
    component = <h5 className='aparey'>Nothing to see here...</h5>
  } else {
    component = <div>
      {cart.map((item, index) => (
        <CartItem item={item} index={index} removeFromCart={removeFromCart} />
      ))}
      <hr />
      <div className="d-flex flex-row justify-content-end">
        <h5 className="montserrat mr-4">Subtotal</h5>
        <h5 className="montserrat">${cart.map(item => parseInt(item.price)).reduce((total, item) => total + item)}</h5>
      </div>
      <div className="d-flex flex-row justify-content-end">
        {/* <Link className='btn custom-btn'>Checkout</Link> */}
        <button className="btn custom-btn" onClick={() => checkout(cart)}>Checkout</button>
      </div>
    </div>

  }
  return (
    <div id="Cart" className="container text-center" style={{ paddingTop: '128px', paddingBottom: '128px' }}>
      <h1 className="aparey">Cart</h1>
      <hr />
      {component}
    </div>
  )
}

export default Cart