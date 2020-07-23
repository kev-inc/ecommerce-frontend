import React, { useState, useEffect } from 'react'
import { submitOrder } from '../../firebase/Firebase'

function sendEmail(firstname, email) {
  return window.emailjs.send(
    'gmail', 'ordersubmitted', {buyerName: firstname, buyer: email}
  )
}

function SubmittingOrderPage(props) {

  const [sent, setsent] = useState(false)
  useEffect(() => {
    if (!sent) {
      const buyerDetails = props.location.buyerDetails
      const cart = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))
      const filteredCart = cart.map(item => {
        return {
          id: item.id,
          name: item.item.name,
          qty: item.quantitySelected,
          price: item.item.price
        }
      })
      const timestamp = Date.now()
      console.log(buyerDetails)
      console.log(filteredCart)
      console.log(timestamp)
      submitOrder({
        buyerDetails: buyerDetails,
        itemDetails: filteredCart,
        timestamp: timestamp
      }).then(res => {
        sendEmail(buyerDetails.firstname, buyerDetails.email).then(res => {
          setsent(true)
          localStorage.removeItem('cart')
          alert('Your order has been sent!')
          props.history.push('/')
        })
        .catch(err => console.log(err))
      })
    }
    return
  })

  return (
    <div>
      Sending order...
    </div>
  )
}

export default SubmittingOrderPage