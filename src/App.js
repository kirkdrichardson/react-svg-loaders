import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ul>{ [...new Array(12)].map(e => <li>loader</li>) }</ul>
      </div>
    );
  }
}

export default App;
