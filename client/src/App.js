import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-2">
              <div className="card">
                <img className="card-img-top" src="./images/Girl.png" alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">For Teachers</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-2">
              <div className="card">
                <img className="card-img-top" src="..." alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-2">
              <div className="card">
                <img className="card-img-top" src="..." alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

        </div>
      </div>

      <Footer />
      </div >
    );
  }
}

export default App;
