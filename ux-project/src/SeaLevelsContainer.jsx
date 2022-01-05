// react
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";

// css
import './App.css';
import './responsive.css'

// components
import InfoBoxText from "./InfoBoxText";
import InfoBoxList from './InfoBoxList';
import SeaLevelsData from './SeaLevelsGraph'
import SeaLevelCompareBarChart from "./SeaLevelCompareBarChart";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

// images
import sealevelsOne from './images/sealevelsOne.jpeg';
import sealevelsTwo from './images/sealevelsTwo.jpeg';
import sealevelsThree from './images/sealevelsThree.jpeg';
import sealevelsFour from './images/sealevelsFour.jpeg';
import sealevelsFive from './images/sealevelsFive.jpg';

// import seperate file that holds and wrapps data
// denna ska bytas ut till data om havsnivåer
import { getSeaLevelsdata } from "./data/SeaLevel";


const SeaLevelsContainer = () => {
  // redigera denna för att ändra den första listan
  const [seaLevelsList] = useState([
    { title: 'Visste du att...',
      li_1: 'fakta ett om klimat',
      li_2: 'fakta två om klimat',
      li_3: 'fakta tre om klimat',
      img: sealevelsThree,
    },
  ])

  // redigera denna för att ändra den andra listan
  const [seaLevelsImpact] = useState([
    { title: 'Gör påverkan själv...',
      li_1: 'Tips nummer ett',
      li_2: 'Tips nummer två',
      li_3: 'Tips nummer tre',
      img: sealevelsFive,
    },
  ])

  // redigera denna för att ändra den första text blocket
  const [seaLevelsIntro] = useState([
    { title: 'Om havsnivåer',
      body: 'På grund av den globala uppvärmingen så ökar temperaturen så att isar smälter vilket leder till högre havsnivåer. Ungefär hälften av all koldioxid i atmosfären tas upp av haven och det omvandlas till kolsyra vilket gör att havsvattnen försuras. Salthalter i haven kommer också att påverkas. I haven nära polerna kommer salthalterna i vattnet bli lägre och i haven nära ekvatorn kommer salthalterna att bli högre.',
      img: sealevelsOne,
      id: 2
    },
  ])

  // redigera denna för att ändra den andra text blocket
  const [seaLevelsInformation] = useState([
    { title: 'Mer om havsnivåer',
      body: 'Mellan år 1900 och 1970 så har vattennivån stigit ca 1 mm per år fram tills de senaste tio åren då vattennivån istället stigit med nästan 4 mm per år.',
      img: sealevelsTwo,
      id: 2
    },
  ])

  // redigera denna för att ändra den tredje text blocket
  const [seaLevelsEnding] = useState([
    { title: 'Framtida havsnivåer',
      body: 'Om vattennivåerna fortsätter att öka som de gjort de senaste åren så beräknas de ha stigit upp till 43cm år 2100.',
      img: sealevelsFour,
      id: 2
    },
  ])

  const [SeaLevelEmission, setSeaLevelEmission] = useState([]);
  const [indexTime1, setIndexTime1] = useState(0);
  const [indexTime2, setIndexTime2] = useState(0);

  useEffect(() => {
    // gets data from local file
    setSeaLevelEmission(getSeaLevelsdata());
  }, []);

  const handleTimeFilter = (chartName, Time) => {
    let index = SeaLevelEmission.findIndex(
      sl => sl.Time === parseInt(Time)
    );
    if (index !== -1) {
      switch (chartName) {
        case "Pie1":
          setIndexTime1(index);
          break;
        case "Pie2":
          setIndexTime2(index);
          break;
      }
    } else {
      // alert the user if no data found
      alert("Data från önskade årtalet finns inte ");
    }
  };
// stoleken på typsnittet börjar på 12,
// storleken kan heller inte gå över 17 eller under 10 pga allt fallerar.
// ändra px värdet när rätt texter är på plats
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
      <InfoBoxText blogs={seaLevelsIntro} />
      <InfoBoxList blogs={seaLevelsList} />
      </div>
      <h1 className='DiagramTitle'>Historisk statistik om havsnivåer</h1>
      <p className='margin1'> Linjediagrammet visar genomsnittlig havsnivåförändring, vilket hänvisar till havsytans höjd, oavsett om närliggande land stiger eller faller.</p>
      <p className='margin1'> Kumulativa förändringar är baserat på en kombination av långtidsmätningar av tidvattenmätare och de senaste satellitmätningarna. GMSL står för Global Mean Sea Level. </p>
      <p className='margin1'> Y-axeln representerar meter. </p>
      <SeaLevelsData />
      <h3 className='margin1'>Jämför årtal</h3>
      <div className="App compareBars">
        <SeaLevelCompareBarChart
          chartName="Pie1"
          SeaLevelEmission={SeaLevelEmission[indexTime1]}
          onTimeFilter={handleTimeFilter}
        />
        <SeaLevelCompareBarChart
          chartName="Pie2"
          SeaLevelEmission={SeaLevelEmission[indexTime2]}
          onTimeFilter={handleTimeFilter}
        />
      </div>
      <div style={{
            fontSize: `${fontSize}px`
        }}>
      <InfoBoxText blogs={seaLevelsInformation} />
      </div>

      <div style={{
            fontSize: `${fontSize}px`
        }}>
      <InfoBoxText blogs={seaLevelsEnding} />
      <InfoBoxList blogs={seaLevelsImpact} />
      </div>
      <Link to="/">
        <button type="button" className="show btn btn-outline-dark customBTN"><span className='btnIcon-Left'><FontAwesomeIcon icon={faChevronLeft} /></span> Tillbaka</button>
      </Link>
    </div>
  );
}

export default SeaLevelsContainer;
