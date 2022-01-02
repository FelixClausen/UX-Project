// react
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";

// css
import './App.css';
import './responsive.css'

// components
import InfoBoxText from "./InfoBoxText";
import InfoBoxList from './InfoBoxList';
import Graph from "./Graph";
import Test from "./Graph2";
import CompareBarChart from "./CompareBarChart";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

// images
import fossilFuel from './images/fossilFuel.jpg';
import globalTemperature from './images/globalTemperature.jpg';
import glaciersSize from './images/glaciersSize.jpeg';
import seaLevels from './images/seaLevels.jpg';

// import seperate file that holds and wrapps data
import { getCO2Emissionsdata } from "./data/CO2Emission";

/*
 Gjorde om funktionen för att göra den mer anpassningsbar samt så att den går att återanvända med nytt innehåll.
 vi behöver dock på något vis visa rätt information/graf när användaren går vidare till ett specifikt ämne,
 just nu visas bara all random data som vi har.
*/

const InfoBox = () => {
  const [fossilFuels] = useState([
    { title: 'Fossila bränslen',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit, laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.',
      img: fossilFuel,
      id: 1
    },
  ])

  // redigera denna för att ändra den första listan
  const [test_1] = useState([
    { title: 'hallå ?',
      li_1: 'item 1',
      li_2: 'item 2',
      li_3: 'item 3'
    },
  ])

  // redigera denna för att ändra den andra listan
  const [impact] = useState([
    { title: 'hallå ? two',
      li_1: 'item 1',
      li_2: 'item 2',
      li_3: 'item 3'
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

  const [Co2Emission, setCo2Emission] = useState([]);
  const [indexYear1, setIndexYear1] = useState(0);
  const [indexYear2, setIndexYear2] = useState(0);

  useEffect(() => {
    // gets data from local file
    setCo2Emission(getCO2Emissionsdata());
  }, []);

  const handleYearFilter = (chartName, Year) => {
    let index = Co2Emission.findIndex(
      co2 => co2.Year === parseInt(Year)
    );
    if (index !== -1) {
      switch (chartName) {
        case "Pie1":
          setIndexYear1(index);
          break;
        case "Pie2":
          setIndexYear2(index);
          break;
      }
    } else {
      // alert the user if no data found
      alert("Year could not be found.");
    }
  };
// stoleken på typsnittet börjar på 12,
// storleken kan heller inte gå över 17 eller under 10 pga allt fallerar.
  const [fontSize, setFontSize] = useState(12);
  if (fontSize === 17) {
    setFontSize(fontSize - 1)
  }
  if (fontSize === 10) {
    setFontSize(fontSize + 1)
  }
  return (
    <div className="customBTN">
      <Link to="/">
        <button type="button" className="show btn btn-outline-dark customBTN"><span className='btnIcon-Left'><FontAwesomeIcon icon={faChevronLeft} /></span>Tillbaka</button>
      </Link>
      <div className='btnWrapper'>
        <p>Justera storleken på texterna</p>
        <button className='resizeUp' onClick={() => setFontSize(fontSize + 1)}> + </button>
        <button className='resizeDown' onClick={() => setFontSize(fontSize - 1)}> - </button>
      </div>
      <div style={{
            fontSize: `${fontSize}px`
        }}>
      <InfoBoxText blogs={fossilFuels} />
      <InfoBoxList blogs={test_1} />
      </div>
      <Graph />
      {/* Test är enbart ett test för att återskapa diagram med olika data, just nu sea levels */}
      <Test />
      <div style={{
            fontSize: `${fontSize}px`
        }}>
      <InfoBoxText blogs={fossilFuels} />
      </div>
      <h1>Jämför årtal inom Fossila bränslen</h1>
      <div className="App compareBars">
        <CompareBarChart
          chartName="Pie1"
          Co2Emission={Co2Emission[indexYear1]}
          onYearFilter={handleYearFilter}
        />
        <CompareBarChart
          chartName="Pie2"
          Co2Emission={Co2Emission[indexYear2]}
          onYearFilter={handleYearFilter}
        />
      </div>
      <div style={{
            fontSize: `${fontSize}px`
        }}>
      <InfoBoxText blogs={fossilFuels} />
      <InfoBoxList blogs={impact} />
      </div>
      <Link to="/">
        <button type="button" className="show btn btn-outline-dark customBTN"><span className='btnIcon-Left'><FontAwesomeIcon icon={faChevronLeft} /></span> Tillbaka</button>
      </Link>
    </div>
  );
}

export default InfoBox;

/*
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
