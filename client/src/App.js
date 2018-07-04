import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
// import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <header className="App-header">
          <h1 className="App-title">Welcome to Teacherly.</h1>
          <h2>Data visualization to fit your schedule.</h2>
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
