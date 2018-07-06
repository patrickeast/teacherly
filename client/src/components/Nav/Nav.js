import React from "react";
import "./Nav.css";
import logo from '../../teacherly.ico';

const Nav = props => (
  <nav className="navbar navbar-top navbar-expand-md navbar-dark fixed-top bg-dark">
    <a className="navbar-brand" href="/">
      <img src={logo} className="App-logo" alt="logo" />
    </a>
    
    <button className="ml-auto btn btn-sm btn-outline-info mt-2 mt-md-0 my-2 my-sm-0" type="submit" href="/">Log In / Sign Up</button>
  </nav>
);

export default Nav;
