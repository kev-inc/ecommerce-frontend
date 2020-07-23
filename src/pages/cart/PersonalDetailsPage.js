import React from 'react'
import { Form, Button } from 'react-bootstrap'

function sendOrder(props, event) {
  event.preventDefault()
  const buyerDetails = {
    firstname: event.target.formFirstname.value,
    lastname: event.target.formLastname.value,
    email: event.target.formEmail.value,
    mobile: event.target.formMobile.value
  }
  props.history.push({
    pathname: '/cart/submit',
    buyerDetails
  })
}

function PersonalDetailsPage(props) {
  return (
    <div id="PersonalDetailsPage" className='container p-4'>
      <h1 className='aparey'>My Information</h1>
      <Form onSubmit={(event) => sendOrder(props, event)}>
        <Form.Group controlId="formFirstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>
        <Form.Group controlId="formLastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email address" />
        </Form.Group>
        <Form.Group controlId="formMobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Enter mobile number" />
        </Form.Group>

        <Form.Text className="text-muted">
          Upon clicking checkout, an email will be sent to you with your order details and payment information.
        </Form.Text>
        <Form.Text className="text-muted">
          The order will not be confirmed until payment is fully paid.
        </Form.Text>
        <Button variant="success" type="submit">
          Checkout
        </Button>

      </Form>
    </div>
  )
}

export default PersonalDetailsPage