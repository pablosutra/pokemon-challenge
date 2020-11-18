import React from 'react'
import './Loader.scss';

export const Loader = () =>  (
    <div className="loading">
      <div className="pokeball" id="normal"></div>
      <div className="pokeball" id="great"></div>
      <div className="pokeball" id="ultra"></div>
      <div className="pokeball" id="master"></div>
      <div className="pokeball" id="safari"></div>
    </div>
  );

