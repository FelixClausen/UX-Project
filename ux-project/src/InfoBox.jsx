// react
import React from 'react';
import { Link } from 'react-router-dom';

// css
import './App.css';

// components
import InfoBoxText from "./InfoBoxText";
import InfoBoxList from './InfoBoxList';
import Graph from "./Graph";

// images
import imageOne from './images/image_one.jpeg';
import randomImg from './images/randomImg.jpg';

import { useState } from "react";



// gjorde om funktionen för att göra den mer anpassningsbar samt så att den går att återanvända med nytt innehåll.
// vi behöver dock på något vis visa rätt information/graf när användaren går vidare till ett specifikt ämne
const InfoBox = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Fossil Fuel',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit, laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.',
      img: randomImg,
      id: 1
    },
  ])
  const [waters, setWaters] = useState([
    { title: 'Water',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit, laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.',
      img: imageOne,
      id: 2
    },

  ])
  const [randoms, setRandoms] = useState([
    { title: 'Random',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit, laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.',
      img: randomImg,
      id: 3
    },

  ])

  return (
    <div className="customBTN">
      <Link to="/">
        <button type="button" className="customBTN btn btn-outline-dark">Go back</button>
      </Link>
      <InfoBoxText blogs={blogs} />
      <InfoBoxList />
      <Graph />
      <InfoBoxText blogs={randoms} />
      <InfoBoxList />
      <Link to="/">
        <button type="button" className="customBTN btn btn-outline-dark">Go back</button>
      </Link>
    </div>
  );
}

export default InfoBox;
































/*

// function to show container component
function InfoBox() {
  return (
    <div className='customBTN'>
      <Link to="/">
        <button type="button" className="customBTN btn btn-outline-dark">Go back</button>
      </Link>
      <div className="InfoBox">
        <InfoBoxText />
      </div>
        <InfoBoxList />
        <App />
      <div className="InfoBox">
        <InfoBoxText />
      </div>
      <InfoBoxList />
      <Link to="/">
        <button type="button" className="btn btn-outline-dark">Go back</button>
      </Link>
    </div>
  );
}

export default InfoBox;

*/
