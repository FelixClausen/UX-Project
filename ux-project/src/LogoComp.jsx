// react
import React from 'react';

// css
import './App.css';

// logo image
import logo from './logo.svg';

// function to show the container component
function LogoComp() {
  return (
    // classes are from bootstrap
    <div className="navbar-brand" >
      <p className="navLogo" >
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""></img>Eco<span>naire</span>
      </p>
    </div>
  );
}

export default LogoComp;