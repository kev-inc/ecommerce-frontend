import React, { useState, useEffect } from 'react'
import { getAllOrders } from '../../firebase/Firebase'
import { Button, Table } from 'react-bootstrap'

function OrdersPage() {
  const [orders, setorders] = useState([])
  useEffect(() => {
    if (orders.length === 0) {
      getAllOrders().then(res => {
        setorders(res)
        console.log(res)
      })
    }
    return
  }, [orders])
  if (orders.length === 0) {
    return (<div></div>)
  }
  return (
    <div className='container p-4'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Buyer's Name</th>
            <th>Total Price</th>
            <th>Order details</th>
            <th>Ordered Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => (
            <tr key={index}>
              <td>{item[1].buyerDetails.firstname} {item[1].buyerDetails.lastname}</td>
              <td>${item[1].itemDetails.map(itemDetails => itemDetails.price * itemDetails.qty).reduce((total, item) => total + item)}</td>
              <td>
                <ul>
                  {item[1].itemDetails.map((details) => (
                    <li>
                      {details.qty} x {details.name}
                    </li>
                  ))}
                </ul>
              </td>
              <td>{new Date(item[1].timestamp).toLocaleString()}</td>
              <td>
                <Button variant='link' size='sm'>View Order</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default OrdersPage