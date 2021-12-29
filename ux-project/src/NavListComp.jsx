// react
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// css
import './App.css';
import './responsive.css'

// icons
import { BsArrowLeftShort } from "react-icons/bs";

// components
import IndexCardWrapper from './indexCardWrapper';
import InfoBox from './InfoBox';
import App2 from "./CompareData";

/*
 Lägg till fler ikoner för iPad
*/


// function to show container component
function NavListComp() {
  return (
    // router structure
    <Router>
      {/* classes are from bootstrap */}
      <div>
        <ul className="nav-item nav justify-content-center">
          {/* One "li" per link */}
          <li className="navLink hidden">
            {/* Uses Link to navigate through "pages" */}
            <Link to="/" className="nav-link" aria-current="page"><BsArrowLeftShort />Tillbaka</Link>
          </li>
          <li className="navLink">
            {/* Uses Link to navigate through "pages" */}
            <Link to="/" className="nav-link" aria-current="page">Start</Link>
          </li>
          <li className="navLink">
            {/* Uses Link to navigate through "pages" */}
            <Link to="/klimat" className="nav-link" aria-current="page">Klimat</Link>
          </li>
          <li className="navLink">
            {/* Uses Link to navigate through "pages" !NOT WORKING */}
            <Link to="/" className="nav-link" aria-current="page">Workshops</Link>
          </li>
        </ul>
        {/* Uses "Routes" to contain paths */}
        <Routes>
          {/* Sätter "path" -> Visar vald/a komponenter (borde vara en container-komponent?) */}
          <Route path="/" element={<IndexCardWrapper />}> </Route>
          <Route path="/klimat" element={<InfoBox />}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default NavListComp;