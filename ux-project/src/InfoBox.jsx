// react
import React from 'react';
import { Link } from 'react-router-dom';

// css
import './App.css';

// components
import InfoBoxText from './InfoBoxText';
import InfoBoxList from './InfoBoxList';
import App from "./App";

// function to show container component
function InfoBox() {
  return (
    <div className='customBTN'>
      <Link to="/">
        <button type="button" className="customBTN btn btn-outline-dark">Go back</button>
      </Link>
      <div className="InfoBox">
        <InfoBoxText />
      </div>
        <InfoBoxList />
        <App />
      <div className="InfoBox">
        <InfoBoxText />
      </div>
      <InfoBoxList />
      <Link to="/">
        <button type="button" className="btn btn-outline-dark">Go back</button>
      </Link>
    </div>
  );
}

export default InfoBox;