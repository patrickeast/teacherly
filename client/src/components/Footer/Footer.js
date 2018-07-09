import React from "react";
import "./Footer.css";

const Footer = props => (
  <footer className="footer text-muted">
      <ul>
        <li>
          <a href="/features">Features</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
  </footer>
);

export default Footer;
