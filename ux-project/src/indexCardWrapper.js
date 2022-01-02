// react
import React, { useState } from 'react'

// css
import './App.css';

//images
import fossilFuel from './images/fossilFuel.jpg';
import globalTemperature from './images/globalTemperature.jpg';
import glaciersSize from './images/glaciersSize.jpeg';
import seaLevels from './images/seaLevels.jpg';
import x1 from './images/x1.png'

// Kolla figma för nya propotioner för bilderna (insta post 1-4)
// se nedre raden på index korten för skillnad
// vi behöver också fler bilder

// components
import IndexCard from './indexCard';

const IndexCardWrapper = () => {
  const [fossilFuels] = useState([
    { title: 'Fossil Fuel',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit.',
      img: fossilFuel,
      id: 1
    },
  ])

  const [waterLevels] = useState([
    { title: 'Sea Levels',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit.',
      img: glaciersSize,
      id: 2
    },
  ])

  const [globalTemperatures] = useState([
    { title: 'Global Temperature',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit.',
      img: globalTemperature,
      id: 3
    },
  ])

  const [glaciersSizes] = useState([
    { title: 'Glaciers Size',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit.',
      img: x1,
      id: 4
    },
  ])

  return (
    <div className="indexWrapper">
      {/* Section title */}
      <h3 className="indexCardTitle">Vad vill du lära dig mer om?</h3>
      <div className='flex'>
        <div>
          {/* Uses components */}
          <IndexCard blogs={fossilFuels}/>
          <IndexCard blogs={waterLevels}/>
        </div>
        <div>
          <IndexCard blogs={globalTemperatures}/>
          <IndexCard blogs={glaciersSizes}/>
        </div>
      </div>
    </div>
  );
}

export default IndexCardWrapper;

/*
function IndexCardWrapper() {
  return (
    <div className="indexWrapper">
      <h3 className="indexCardTitle">Vårt klimat</h3>
      <IndexCard />
      <IndexCard />
    </div>
  );
}
/export default IndexCardWrapper;
*/