import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SelectionPart from './components/SelectionPart'
import Booking from './components/Booking'
import AboutUs from './components/AboutUs'
import CheckOut from './components/CheckOut'
import LandingPage from './components/LandingPage'
// L
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route path="/" exact component={SelectionPart} />
      <Route path="/booking" exact component={Booking} />
      <Route path="/About" exact component={AboutUs} />
      <Route path="/Checkout" exact component={LandingPage} />
      {/* <SelectionPart/>
      <Booking /> */}
    </div>
    </Router>
  );
}

export default App;
