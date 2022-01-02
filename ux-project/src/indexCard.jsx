// react
import React from 'react'
import { Link } from 'react-router-dom';

// css
import './App.css';

// icons
//import { BsArrowRightShort } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const IndexCard = ({ blogs }) => {
  return (
    <div>
      {blogs.map(blog =>
        <div className="CardWrapper">
          <div className="card bg-dark text-white">
            <div className="card-img-overlay">
              <img src={blog.img} className='cardImg' alt='alt' ></img>
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.body}</p>
              <Link to="/">
                <button type="button" className="btn btn-outline-dark">Läs mer
                  <span className='btnIcon-Right'><FontAwesomeIcon icon={faChevronRight} /></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IndexCard;

/*
function IndexCard() {
  return (
    <div className="CardWrapper">
      <div className="card bg-dark text-white">
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <Link to="/klimat">
            <button type="button" className="btn btn-outline-dark">Read more <BsArrowRightShort /></button>
          </Link>
        </div>
      </div>
      <div className="card bg-dark text-white">
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
*/