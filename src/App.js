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

function App() {
  return (

    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/view/:itemId' component={View} />
        <Route path='/search/:tag' component={SearchPage}/>

      </Switch>
    </Router>
  );
}

export default App;
