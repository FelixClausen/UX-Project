import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IndexCardWrapper from './indexCardWrapper';
import InfoBox from './InfoBox';
import App2 from "./CompareData";

function RouterStructure() {
  return (
    <Router>
      <div>
        <ul className="nav-item">
          <li>
            <Link to="index" className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/klimat" className="nav-link active" aria-current="page">Klimat</Link>
          </li>
          <li className="nav-item">
            <Link to="/compare" className="nav-link active" aria-current="page">Jämför data</Link>
          </li>
          <li className="nav-item">
            <p className="nav-link active" aria-current="page">Workshops</p>
          </li>
          <li className="nav-item">
            <p className="nav-link active" aria-current="page">Kontakt</p>
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

export default RouterStructure;