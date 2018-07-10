import React from "react";
import "./Nav.css";
import logo from '../../teacherly.ico';

const Nav = props => (
  <nav className="navbar navbar-top navbar-expand-md navbar-dark fixed-top bg-dark">
    <a className="navbar-brand" href="/">
      <img src={logo} className="App-logo" alt="logo" />
    </a>
    <div className="ml-auto mt-2 mt-md-0 my-2 my-sm-0">
      <a className="btn btn-sm btn-outline-info text-white" href="/login" role="button">Log In</a>
      <a className="btn btn-sm btn-outline-info ml-3 text-white" href="/signup" role="button">Sign Up</a>
    </div>
  </nav>
);

export default Nav;
