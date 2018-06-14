import React from 'react';
import './Nav.css';

const Nav = () => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a className="nav-link" href="/">
          Clicky Game
        </a>
      </li>
      <li className="brand">
        <a className="nav-link disabled">Click an image to begin!</a>
      </li>
      <li className="brand">
        <a className="nav-link disabled">Score: 0 | Top Score: 0</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
