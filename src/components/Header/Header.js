import React from 'react';
import './Header.css';

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="instructions">
      Click an image to begin! But don't click the same image twice!
    </div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;
