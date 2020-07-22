import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { addNewProduct } from '../../firebase/Firebase'

function addProduct(event) {
  event.preventDefault()
  const postData = {
    name: event.target.formName.value,
    price: parseInt(event.target.formPrice.value),
    quantity: parseInt(event.target.formQuantity.value),
    img: event.target.formImage.value.split(',').map(img => img.trim()),
    tags: event.target.formTags.value.split(',').map(tag => tag.trim())
  }
  console.log(postData)
  addNewProduct(postData)
    .then(() => alert('Product uploaded!'))
    .catch(() => alert('Error creating product'))


}

function AddNewProductPage() {
  return (
    <div id="AddNewProductPage" className='p-4'>
      <Form onSubmit={addProduct}>
        <Form.Group controlId="formName">
          <Form.Label>Name of product</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter price" />
        </Form.Group>

        <Form.Group controlId="formQuantity">
          <Form.Label>Quantity Available</Form.Label>
          <Form.Control type="number" placeholder="Enter quantity" />
        </Form.Group>

        <Form.Group controlId="formImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" placeholder="Enter image link" />
        </Form.Group>

        <Form.Group controlId="formTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control type="text" placeholder="Enter tags" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  )
}

export default AddNewProductPage