import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home'
import Navbar from './components/Navbar';
import View from './pages/item/View';
import SearchPage from './pages/search/SearchPage';
import Footer from './components/Footer';
import Cart from './pages/cart/Cart';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/view/:itemId' component={View} />
        <Route path='/search/:tag' component={SearchPage} />
        <Route path='/cart' component={Cart} />
        <Route path='/admin' component={Admin} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
