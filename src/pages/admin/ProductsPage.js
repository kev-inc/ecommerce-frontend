import React, { useState, useEffect } from 'react'
import { getAllProducts, deleteProduct } from '../../firebase/Firebase'
import { Badge, Button, Table } from 'react-bootstrap'

function deleteProd(id) {
  deleteProduct(id)
    .then(() => {
      alert('Deleted')
      window.location.reload()
    })
    .catch(() => alert('Error deleting product'))
}

function ProductsPage() {
  const [products, setproducts] = useState([])
  useEffect(() => {
    if(products.length === 0) {
      getAllProducts().then(res => {
        setproducts(res)
      })
    }
    return
  }, [products])
  return (
    <div id="ProductsPage" className='container p-4'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item[1].name}</td>
              <td>{item[1].price}</td>
              <td>{item[1].quantity}</td>
              <td>{item[1].tags.map((item, index) => (<Badge className='mr-2' variant='secondary' key={index}>{item}</Badge>))}</td>
              <td>
              <Button variant='link' size='sm'>Edit</Button>
              <Button variant='link' size='sm' onClick={() => deleteProd(item[0])}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ProductsPage