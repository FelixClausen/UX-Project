// react
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// css
import './App.css';
import './responsive.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

// components
import IndexCardWrapper from './indexCardWrapper';
import InfoBox from './InfoBox';
import Test from './Graph2';

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
            <Link to="/" className="nav-link" aria-current="page"><span className='btnIcon-Left'><FontAwesomeIcon icon={faChevronLeft} /></span>Tillbaka</Link>
          </li>
          <li className="navLink">
            {/* Uses Link to navigate through "pages" */}
            <Link to="/" className="nav-link" aria-current="page"><span className='btnIcon-Left'><FontAwesomeIcon icon={faHome} /></span>Start</Link>
          </li>
          <li className="navLink">
            {/* Uses Link to navigate through "pages" */}
            <Link to="/klimat" className="nav-link" aria-current="page"><span className='btnIcon-Left'><FontAwesomeIcon icon={faBookmark} /></span>Klimat</Link>
          </li>
          <li className="navLink">
            {/* Uses Link to navigate through "pages" !NOT WORKING */}
            <Link to="/" className="nav-link" aria-current="page"><span className='btnIcon-Left'><FontAwesomeIcon icon={faCog} /></span>Workshops</Link>
          </li>
        </ul>
        {/* Uses "Routes" to contain paths */}
        <Routes>
          {/* Sätter "path" -> Visar vald/a komponenter (borde vara en container-komponent?) */}
          <Route path="/" element={<IndexCardWrapper />}> </Route>
          <Route path="/klimat" element={<InfoBox />}> </Route>
          {/* /test är ett exempel på hur vi kan använda en 'container'-komponent för att
              visa rätt innehåll baserat på vad användaren valt. Just nu visar den bara en graf för havsnivån */}
          <Route path="/test" element={<Test />}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default NavListComp;