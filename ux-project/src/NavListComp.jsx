import React from 'react'
import './App.css';

function NavListComp() {
  return (
    <div>
      <ul className="nav-item">
        <li>
          <p className="nav-link active" aria-current="page">Vårt klimat</p>
        </li>
        <li className="nav-item">
          <p className="nav-link active" aria-current="page">Nyhetsflöde</p>
        </li>
        <li className="nav-item">
          <p className="nav-link active" aria-current="page">Workshops</p>
        </li>
        <li className="nav-item">
          <p className="nav-link active" aria-current="page">Jämför</p>
        </li>
        <li className="nav-item">
          <p className="nav-link active" aria-current="page">Kontakt</p>
        </li>
      </ul>
    </div>
  );
}

export default NavListComp;