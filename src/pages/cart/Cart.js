import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

function removeFromCart(item, index) {
  let cart = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))
  cart.splice(index, 1)
  localStorage.setItem('cart', JSON.stringify(cart))
  alert(item.name + ' removed from cart!')
  window.location.reload()
}

function Cart() {

  let cart = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))
  return (
    <div id="Cart" className="container text-center" style={{ paddingTop: '128px', paddingBottom:'128px' }}>
      <h1 className="aparey">Cart</h1>
      <hr />
      {cart.map((item, index) => (
        <CartItem item={item} index={index} removeFromCart={removeFromCart}/>
      ))}
      <hr />
      <div className="d-flex flex-row justify-content-end">
        <h5 className="montserrat mr-4">Subtotal</h5>
        <h5 className="montserrat">${cart.map(item => parseInt(item.price)).reduce((total, item) => total + item)}</h5>
      </div>
      <div className="d-flex flex-row justify-content-end">
        <Link className='btn custom-btn'>Checkout</Link>
      </div>
    </div>
  )
}

export default Cart