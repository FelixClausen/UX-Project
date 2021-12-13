// react
import React from 'react';
import { useState } from "react";

// css
import './App.css';

// images
import logo from './images/image_one.jpeg';

// function to show container component
function InfoBoxList() {
  return (
    <div className="InfoBox">
      <img src={logo} className="InfoBoxListImage rounded float-right" alt="..."></img>
      <div className="InfoBoxTextWrapper">
        <h3 className="InfoBoxImpact">Gör påverkan själv!</h3>
        <ul className="InfoBoxImpactList">
          <li>
            <h4>1.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <h4>2.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <h4>3.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoBoxList;