import React from 'react';
import Navbar from './Navbar'
import State from './State'
import Vaccine from './Vaccine';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/State' component={State}/>
      <Route exact path='/Centre' component={Vaccine}/>
    </Switch>
    <Footer></Footer>
    </>
  );
}

export default App;
