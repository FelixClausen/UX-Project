import React from 'react'
import './App.css';

import ListComp from './NavListComp';
import LogoComp from './LogoComp';
import SearchComp from './SearchComp';

function HeaderComp() {
  return (
    <nav className="navbar navbar-light bg-gradient-light">
      {/* logo + name container */}
      <div className="container-fluid">
        <LogoComp />
        {/* navigation container */}
        <ListComp />
        {/* quick search container */}
        <SearchComp />
      </div>
    </nav>
  );
}

export default HeaderComp;