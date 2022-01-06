// react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// css
import './App.css';

//images
import fossilabränslenhamn from './images/fossilabränslenhamn.jpg';
import globalTemperature from './images/globalTemperature.jpg';
import glaciersSize from './images/glaciersSize.png';
import seaLevels from './images/seaLevels.jpg';

// components
import IndexCard from './indexCard';
import BookingForm from './form';

// container komponent för att visa under komponenter med rätt data
const IndexCardWrapper = () => {
	// en array med data för att skriva ut olikt innehåll
	const [fossilFuels] = useState([
		{
			title: 'Fossila bränslen',
			body: 'Fossila bränslen är kol, olja och naturgas. När vi bränner dem får vi energi. Samtidigt bildas koldioxid.',
			img: fossilabränslenhamn,
		},
	]);

	const [waterLevels] = useState([
		{
			title: 'Havsnivån',
			body: 'Havsnivån är en term som används för att beskriva vad havets höjd vanligtvis är och den är aldrig permanent.',
			img: seaLevels,
		},
	]);

	const [globalTemperatures] = useState([
		{
			title: 'Global uppvärmning',
			body: 'Global uppvärmning är temperaturen på jordens yta, hav och atmosfär som stiger över tiotusentals år.',
			img: globalTemperature,
		},
	]);

	const [glaciersSizes] = useState([
		{
			title: 'Glaciärer',
			body: 'En glaciär är en stor kropp av is och snö. Det bildas eftersom snön i ett område inte smälter på sommaren.',
			img: glaciersSize,
		},
	]);

	return (
		// en container komponent
		<div className="indexWrapper">
			{/* section title */}
			<h3 className="indexCardTitle">Vad vill du lära dig mer om?</h3>
			<div className="flex">
				<div>
					{/* Uses components */}
					{/* använder länk för att kunna navigera till sidorna,
              se NavListComp.jsx för fullständig router struktur */}
					<Link to="/fossil">
						{/* skriver ut rätt innehåll kopplat till arrayn ovan */}
						<IndexCard blogs={fossilFuels} />
					</Link>
					<Link to="/havsniva">
						{/* skriver ut rätt innehåll kopplat till arrayn ovan */}
						<IndexCard blogs={waterLevels} />
					</Link>
				</div>
				<div>
					<Link to="/global">
						{/* skriver ut rätt innehåll kopplat till arrayn ovan */}
						<IndexCard blogs={globalTemperatures} />
					</Link>
					<Link to="/glaciar">
						{/* skriver ut rätt innehåll kopplat till arrayn ovan */}
						<IndexCard blogs={glaciersSizes} />
					</Link>
				</div>
			</div>
			{/* importerar bookningsmöjlighet till workshops */}
			<BookingForm />
		</div>
	);
};

export default IndexCardWrapper;
