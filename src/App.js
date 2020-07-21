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

function App() {
  return (

    <Router>
      <Navbar/>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
