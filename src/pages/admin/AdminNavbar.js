import React from 'react'
import { Nav } from 'react-bootstrap'

function AdminNavbar(props) {
  
  return (
    <Nav variant="tabs" activeKey={props.path} className='container'>
      <Nav.Item>
        <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/admin/products">Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/admin/orders">Orders</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/admin/settings">Settings</Nav.Link>
      </Nav.Item>
      <Nav.Item className='ml-auto'>
        <Nav.Link href="/admin/addnewproduct">Add New Product</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
export default AdminNavbar