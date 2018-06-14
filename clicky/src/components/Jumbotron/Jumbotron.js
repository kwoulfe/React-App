import React from 'react';
import './Jumbotron.css';

const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid jumboStyle">
    <div className="container">
      <h1 className="display-4">Bob!</h1>
      <p className="lead">Click on Bob! But not more than once!</p>
    </div>
  </div>
);
export default Jumbotron;
