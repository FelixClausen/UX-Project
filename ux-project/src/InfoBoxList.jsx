// react
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

// css
import './App.css';

// images
import imageOne from './images/globalTemperature.jpg';

/*
 Applicera samma princip som på indexCard / InfoBoxText

 Fyll på med mer info och justera det genom komponenten InfoBox.jsx
*/

const InfoBoxList = ({ blogs }) => {
  return (
    <div>
      {blogs.map(blog =>
        <div className="InfoBox">
        <img src={imageOne} className="InfoBoxListImage rounded float-right" alt="..."></img>
        <div className="InfoBoxTextWrapper">
          <h3 className="InfoBoxImpact">{blog.title}</h3>
          <ul className="InfoBoxImpactList">
            <li>
              <h4>1.</h4>
              <p>{blog.li_1}</p>
            </li>
            <li>
              <h4>2.</h4>
              <p>{blog.li_2}</p>
            </li>
            <li>
              <h4>3.</h4>
              <p>{blog.li_3}</p>
            </li>
          </ul>
        </div>
      </div>
      )}
    </div>
  );
}

export default InfoBoxList;





// function to show container component
/*
function InfoBoxList() {
  return (
    <div className="InfoBox">
      <img src={imageOne} className="InfoBoxListImage rounded float-right" alt="..."></img>
      <div className="InfoBoxTextWrapper">
        <h3 className="InfoBoxImpact">test title</h3>
        <ul className="InfoBoxImpactList">
          <li>
            <h4>1.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <h4>2.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <h4>3.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoBoxList;

*/