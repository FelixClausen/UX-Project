// react
import React from 'react'

// css
import './App.css';
import './responsive.css'

// components
import NavListComp from './NavListComp';
import LogoComp from './LogoComp';
//import SearchComp from './SearchComp';

// function to show container component
function HeaderComp() {
  return (
    // nav className are from bootstrap
    <nav className="navbar navbar-light bg-gradient-light">
      {/* logo + name container */}
      <LogoComp />
      {/* navigation container */}
      <NavListComp />
      <div className='filler'></div>
    </nav>
  );
}

export default HeaderComp;

// <SearchComp />