import React from "react";
import "./Nav.css";
import logo from '../../teacherly.ico';



const Nav = props => (
  <nav>
    <ul className="navbar bg-dark">
      <li>
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </li>
      <li className="float-right">
        <a href="/">Sign In</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
