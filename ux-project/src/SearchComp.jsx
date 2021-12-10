// react
import React from 'react'

// css
import './App.css';

// function to show container component
function SearchComp() {
  return (
    <div>
      {/* form and input classes are from bootstrap */}
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      </form>
    </div>
  );
}

export default SearchComp;