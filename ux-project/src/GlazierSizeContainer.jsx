// react
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";

// css
import './App.css';
import './responsive.css'

// components
import InfoBoxText from "./InfoBoxText";
import InfoBoxList from './InfoBoxList';
import GlazierSizeData from './GlazierSizeGraph'
import CompareBarChart from "./CompareBarChart";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

// vi behöver fler bilder, lägg in dom under images,
// byt sedan ut img värdet till de olika bilderna
// images
import glacierOne from '../src/images/glacierOne.jpg';
import glacierMap from '../src/images/glacierMap.png';
import glacierMelt from '../src/images/glacierMelt.jpg';
import glacierTemp from '../src/images/glacierTemp.jpg';
import glacierLight from '../src/images/glacierLight.png';


// import seperate file that holds and wrapps data
// denna ska bytas ut till data om havsnivåer
import { getCO2Emissionsdata } from "./data/CO2Emission";

const GlazierSizeContainer = () => {
      const [GlacierSizeList] = useState([
        { title: 'Visste du att...',
          li_1: 'Omkring 75 procent av världens dricksvattenreserv finns i glaciärer',
          li_2: 'Världens största glaciär finns på Antarktis',
          li_3: 'I Sverige finns nära 300 glaciärer',
          img: glacierOne,
        },
      ])

      // redigera denna för att ändra den andra listan
      const [GlacierSizeImpact] = useState([
        { title: 'Gör påverkan själv...',
          li_1: 'Minska din användning av fossila bränslen',
          li_2: 'Säg NEJ till plast',
          li_3: 'Håll vår miljö ren, skräpa inte ned',
          img: glacierLight,
        },
      ])

      // redigera denna för att ändra den första text blocket
      const [GlacierSizeIntro] = useState([
        { title: 'Glaciärer',
          body: 'Ungefär 10 procent av jordens yta täcks av glaciärer. Gläcierer förekommer i alla världsdelar förutom på Australien. Glaciärer är egentligen sammanpackad snö och de bildas när vinterns snöfall är kraftigare än sommarens smältning.',
          img: glacierMap,
          id: 2
        },
      ])

      // redigera denna för att ändra den andra text blocket
      const [GlacierSizeInformation] = useState([
        { title: 'Temperaturen',
          body: 'Om medeltemperaturen på Jorden fortstätter att stiga kommer världens glaciärer att fortsätta smälta. Om alla glaciärer på jorden smälter kommer havsytan att stiga med ungefär 120 meter. Sedan 1800-talet har den globala medeltemperaturen ökat med en dryg grad.',
          img: glacierTemp,
          id: 2
        },
      ])

      // redigera denna för att ändra den tredje text blocket
      const [GlacierSizeEnding] = useState([
        { title: 'Glaciärerna smälter',
          body: 'Forskare varnar att smältande glaciärer kan medföra katastrofala konsekvenser för oss människor. Om havsytan stiger kan storstäder som Tokyo och New York hamna under vatten. Förhindrar vi inte att glaciärerna smälter bort förlorar vi också dessa som sötvattenresurs.',
          img: glacierMelt,
          id: 2
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
      <InfoBoxText blogs={GlacierSizeIntro} />
      <InfoBoxList blogs={GlacierSizeList} />
      </div>
      <h1>Historisk statistik på havsnivåer</h1>
      <h3 className='margin1'> !! Förklara vad datan representerar !!</h3>
      <GlazierSizeData />
      <h3 className='margin1'>Jämför årtal</h3>
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
      <InfoBoxText blogs={GlacierSizeInformation} />
      </div>

      <div style={{
            fontSize: `${fontSize}px`
        }}>
      <InfoBoxText blogs={GlacierSizeEnding} />
      <InfoBoxList blogs={GlacierSizeImpact} />
      </div>
      <Link to="/">
        <button type="button" className="show btn btn-outline-dark customBTN"><span className='btnIcon-Left'><FontAwesomeIcon icon={faChevronLeft} /></span> Tillbaka</button>
      </Link>
    </div>
  );
}

export default GlazierSizeContainer;
