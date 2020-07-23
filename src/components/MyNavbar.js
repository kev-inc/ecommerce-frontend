import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
      <Navbar.Brand href="/" className='aparey'>la mode classique</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto montserrat">
          <Nav.Link href="/search/tops">Tops</Nav.Link>
          <Nav.Link href="/search/bottoms">Bottoms</Nav.Link>
          <Nav.Link href="/search/skincare">Skincare</Nav.Link>
          <Nav.Link href="/search/sale">Sale</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
     
    </Navbar>
  )
}

export default MyNavbar