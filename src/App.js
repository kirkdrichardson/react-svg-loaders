import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// loaders
import {
  Audio,
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff
} from './Loaders';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>React SVG Loaders</h1>
        <ul>
        <li><Audio /></li>
        <li><BallTriangle /></li>
        <li><Bars /></li>
        <li><Circles /></li>
        <li><Grid /></li>
        <li><Hearts /></li>
        <li><Oval /></li>
        <li><Puff /></li>
        { [...new Array(4)].map(e => <li>loader</li>) }
        </ul>
      </div>
    );
  }
}

export default App;
