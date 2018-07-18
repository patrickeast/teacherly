import React from "react";
import "./Footer.css";

const Footer = props => (
  <footer className="footer text-muted">
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="https://www.github.com/patrickeast/teacherly" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
  </footer>
);

export default Footer;
