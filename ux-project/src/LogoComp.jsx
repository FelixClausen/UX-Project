// react
import React from 'react';

// css
import './App.css';

// logo image
import logo from './logo.svg';

// function to show the container component
function LogoComp() {
  return (
    // Classes are from bootstrap
    // The whole section (logo + name) is a link to index
    <div className="navbar-brand" to="/index">
      <p className="navbar-brand" >
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""></img>brand<span>name</span>
      </p>
    </div>
  );
}

export default LogoComp;