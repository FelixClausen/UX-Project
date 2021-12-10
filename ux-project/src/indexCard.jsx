// react
import React from 'react'
import { Link } from 'react-router-dom';

// css
import './App.css';

// icons
import { BsArrowRightShort } from "react-icons/bs";

// function to show component
function IndexCard() {
  return (
    <div className="CardWrapper">
      {/* card/section container */}
      <div className="card bg-dark text-white">
        {/* text + btn container */}
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <Link to="/klimat">
            <button type="button" className="btn btn-outline-dark">Read more <BsArrowRightShort /></button>
          </Link>
        </div>
      </div>
      <div className="card bg-dark text-white">
        {/* text + btn container */}
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
          <Link to="/klimat">
            <button type="button" className="btn btn-outline-dark">Read more <BsArrowRightShort /></button>
          </Link>
        </div>
      </div>
      <div className="break"></div>
    </div>
  );
}

export default IndexCard;

// en mer permanent lösning behövs,
// både vad gäller komponenthantering och bild användning