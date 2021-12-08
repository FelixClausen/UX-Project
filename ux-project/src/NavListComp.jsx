import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IndexCardWrapper from './indexCardWrapper';
import InfoBox from './InfoBox';
import App2 from "./CompareData";

function NavListComp() {
  return (
    <Router>
      <div>
        <ul className="nav-item nav justify-content-center">
          <li className="navTest">
            <Link to="index" className="nav-link" aria-current="page">Home</Link>
          </li>
          <li className="navTest">
            <Link to="/klimat" className="nav-link" aria-current="page">Klimat</Link>
          </li>
          <li className="navTest">
            <Link to="/compare" className="nav-link" aria-current="page">Jämför</Link>
          </li>
          <li className="navTest">
            <Link to="/compare" className="nav-link" aria-current="page">Workshops</Link>
          </li>
          <li className="navTest">
            <Link to="/compare" className="nav-link" aria-current="page">Kontakt</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/index" element={<IndexCardWrapper />}> </Route>
          <Route path="/klimat" element={<InfoBox />}> </Route>
          <Route path="/compare" element={<App2 />}> </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default NavListComp;