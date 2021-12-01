import logo from './logo.svg';
import React from 'react'
import './App.css';

function LogoComp() {
  return (
    <div className="navbar-brand" to="#">
      <p className="navbar-brand" href="#">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""></img>brand<span>name</span>
      </p>
    </div>
  );
}

export default LogoComp;