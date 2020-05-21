import React, { Component } from 'react';
import {BrowserRouter ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './components/Services';
import LoginPage from './components/LoginPage';
import Reviews from './components/Reviews'
import './App.css';


class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Services} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/login' component={LoginPage} />
      </BrowserRouter>
    );
  }  
}

export default App;
