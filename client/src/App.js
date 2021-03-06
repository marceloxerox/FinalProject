import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Saved from './Components/Saved';

import './App.css';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div id="big-wrapper">

        <Route exact path="/" component={Saved} /> 
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
