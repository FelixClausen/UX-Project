// react
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";

// css
import './App.css';
import './responsive.css'

// components
import InfoBoxText from "./InfoBoxText";
import InfoBoxList from './InfoBoxList';
import Graph from "./Graph";

// images
import fossilFuel from './images/fossilFuel.jpg';
import globalTemperature from './images/globalTemperature.jpg';
import glaciersSize from './images/glaciersSize.jpeg';
import seaLevels from './images/seaLevels.jpg';


// gjorde om funktionen för att göra den mer anpassningsbar samt så att den går att återanvända med nytt innehåll.
// vi behöver dock på något vis visa rätt information/graf när användaren går vidare till ett specifikt ämne,
// just nu visas bara all random data som vi har
const InfoBox = () => {
  const [fossilFuels] = useState([
    { title: 'Fossil Fuel',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit, laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.',
      img: fossilFuel,
      id: 1
    },
  ])

  const [waterLevels] = useState([
    { title: 'Sea Levels',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit, laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.',
      img: seaLevels,
      id: 2
    },

  ])

  const [globalTemperatures] = useState([
    { title: 'Global Temperature',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit, laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.',
      img: globalTemperature,
      id: 3
    },
  ])

  const [glaciersSizes] = useState([
    { title: 'Glaciers Size',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit, laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.',
      img: glaciersSize,
      id: 4
    },
  ])

  return (
    <div className="customBTN">
      <Link to="/">
        <button type="button" className="customBTN show btn btn-outline-dark">Go back</button>
      </Link>
      <InfoBoxText blogs={fossilFuels} />
      <InfoBoxList />
      <Graph />
      <InfoBoxText blogs={waterLevels} />
      <InfoBoxList />
      <InfoBoxText blogs={globalTemperatures} />
      <InfoBoxText blogs={glaciersSizes} />
      <Link to="/">
        <button type="button" className="customBTN show btn btn-outline-dark">Go back</button>
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
