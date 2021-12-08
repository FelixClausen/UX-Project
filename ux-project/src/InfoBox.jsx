import React from 'react';
import './App.css';
import logo from './images/image_one.jpeg';

import InfoBoxText from './InfoBoxText';
import InfoBoxList from './InfoBoxList';
import App from "./App";

function InfoBox() {
  return (
    <div>
      <div className="InfoBox">
        <InfoBoxText />
        <img src={logo} className="InfoBoxImage rounded float-right" alt="..."></img>
      </div>
        <InfoBoxList />
        <App />
        <div className="InfoBox">
        <InfoBoxText />
        <img src={logo} className="InfoBoxImage rounded float-right" alt="..."></img>
      </div>
      <InfoBoxList />
    </div>
  );
}

export default InfoBox;