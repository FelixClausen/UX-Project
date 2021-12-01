import React from 'react'
import './App.css';

function SearchComp() {
  return (
    <div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      </form>
    </div>
  );
}

export default SearchComp;