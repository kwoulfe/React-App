import React from 'react';
import images from './images.json';
import './images.css';

const Images = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Images;
