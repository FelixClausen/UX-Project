// react
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// css
import './App.css';
import './responsive.css'

// components
import IndexCardWrapper from './indexCardWrapper';
import InfoBox from './InfoBox';
import App2 from "./CompareData";

// function to show container component
function NavListComp() {
  return (
    // router router structure
    <Router>
      {/* Classes are from bootstrap */}
      <div>
        <ul className="nav-item nav justify-content-center">
          {/* One "li" per link */}
          <li className="navTest hidden">
            {/* Uses Link to navigate through "pages" */}
            <Link to="/" className="nav-link" aria-current="page">Tillbaka</Link>
          </li>
          <li className="navTest">
            {/* Uses Link to navigate through "pages" */}
            <Link to="/" className="nav-link" aria-current="page">Home</Link>
          </li>
          <li className="navTest">
            {/* Uses Link to navigate through "pages" */}
            <Link to="/klimat" className="nav-link" aria-current="page">Klimat</Link>
          </li>
          <li className="navTest">
            {/* Uses Link to navigate through "pages" */}
            <Link to="/compare" className="nav-link" aria-current="page">Jämför</Link>
          </li>
          <li className="navTest">
            {/* Uses Link to navigate through "pages" !NOT WORKING */}
            <Link to="/" className="nav-link" aria-current="page">Workshops</Link>
          </li>
        </ul>
        {/* Uses "Routes" to contain paths */}
        <Routes>
          {/* Sets path -> Shows choosen component (should be a container component?) */}
          <Route path="/" element={<IndexCardWrapper />}> </Route>
          <Route path="/klimat" element={<InfoBox />}> </Route>
          <Route path="/compare" element={<App2 />}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default NavListComp;