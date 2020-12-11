import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx'
import Service from './Service.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/"/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
