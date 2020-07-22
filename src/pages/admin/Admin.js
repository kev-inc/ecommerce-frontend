import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Route, useLocation } from 'react-router-dom'
import DashboardPage from './DashboardPage'
import ProductsPage from './ProductsPage'
import AddNewProductPage from './AddNewProductPage'

function Admin(props) {
  const path = useLocation().pathname
  return (
    <div id="Admin">
      <AdminNavbar path={path}/>
      <Route path='/admin/dashboard' component={DashboardPage}/>
      <Route path='/admin/products' component={ProductsPage}/>
      <Route path='/admin/addnewproduct' component={AddNewProductPage}/>
    </div>
  )
}

export default Admin