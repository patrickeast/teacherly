import React, { Component } from 'react';
import logo from './teacherly.ico';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Teacherly.</h1>
        </header>
        <p className="App-intro">
          Data visualization to fit your schedule.
        </p>
      </div>
    );
  }
}

export default App;
