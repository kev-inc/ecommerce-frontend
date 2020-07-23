import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Route, useLocation } from 'react-router-dom'
import DashboardPage from './DashboardPage'
import ProductsPage from './ProductsPage'
import AddNewProductPage from './AddNewProductPage'
import OrdersPage from './OrdersPage'
import SettingsPage from './SettingsPage'

function Admin(props) {
  const path = useLocation().pathname
  return (
    <div id="Admin" className='container'>
      <AdminNavbar path={path}/>
      <Route path='/admin/dashboard' component={DashboardPage}/>
      <Route path='/admin/products' component={ProductsPage}/>
      <Route path='/admin/orders' component={OrdersPage}/>
      <Route path='/admin/addnewproduct' component={AddNewProductPage}/>
      <Route path='/admin/settings' component={SettingsPage}/>
    </div>
  )
}

export default Admin