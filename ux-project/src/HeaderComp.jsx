import React from 'react'
import './App.css';

import NavListComp from './NavListComp';
import LogoComp from './LogoComp';
import SearchComp from './SearchComp';

function HeaderComp() {
  return (
    <nav className="navbar navbar-light bg-gradient-light">
      {/* logo + name container */}
      <div className="container-fluid">
        <LogoComp />
        {/* navigation container */}
        <NavListComp />
        {/* quick search container */}
        <SearchComp />
      </div>
    </nav>
  );
}

export default HeaderComp;