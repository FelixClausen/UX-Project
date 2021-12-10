// react
import React from 'react';

// css
import './App.css';

// images
import imageOne from './images/image_one.jpeg';

// function to show container component
function InfoBoxText() {
  return (
    <div className='xx'>
      <div className="InfoBoxTextWrapper">
      <h3 className="InfoBoxTitle">Vatten nivåer</h3>
      <p className="InfoBoxText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit,
        laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.
      </p>
      <p className="InfoBoxText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit,
        laoreet consequat erat.
      </p>
    </div>
    <img src={imageOne} className="InfoBoxImage rounded float-right" alt="..."></img>
  </div>

  );
}

export default InfoBoxText;