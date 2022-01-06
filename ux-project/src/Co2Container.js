// react
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// css
import './App.css';
import './responsive.css';

// components
import InfoBoxText from './InfoBoxText';
import InfoBoxList from './InfoBoxList';
import Graph from './Co2Graph';
import CompareBarChart from './Co2CompareBarChart';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// images
import fossilFuel from './images/fossilFuel.jpg';
import fossilabränslenindustri from './images/fossilabränslenindustri.jpg';
import fossilabränslenhamn from './images/fossilabränslenhamn.jpg';
import fossilabränslenfossil from './images/fossilabränslenfossil.jpg';
import fossilabänslenpåverkan from './images/fossilabänslenpåverkan.jpg';

// import seperate file that holds and wrapps data
import { getCO2Emissionsdata } from './data/CO2Emission';

/*
 Gjorde om funktionen för att göra den mer anpassningsbar samt så att den går att återanvända med nytt innehåll.
 vi behöver dock på något vis visa rätt information/graf när användaren går vidare till ett specifikt ämne,
 just nu visas bara all random data som vi har.
*/

const InfoBox = () => {
	const [fossilFuels] = useState([
		{
			title: 'Fossila bränslen',
			body: 'Fossila bränslen är olika energikällor i form av kolväten, som kommer från äldre geologiska perioder, och som kan påträffas på eller under marken i lito- och pedosfären. Enligt den biogeniska teorin, som är förhärskande idag, utgörs de fossila bränslena av rester av forntida djur och växter som bäddats ner i jorden och sedan under högt tryck och värme brutits ner till sina beståndsdelar (huvudsakligen kol och kolföreningar). Enligt den abiogeniska teorin utgörs de fossila bränslena av resultaten av kemiska processer under jordens forntid.',
			img: fossilFuel,
			id: 1,
		},
	]);

	const [fossilFuels2] = useState([
		{
			title: 'Olika varianter',
			body: 'De fossila bränslena omfattar främst naturgas, petroleum och kol. Naturgas består huvudsakligen av gasen metan och har ett högt innehåll av grundämnet väte jämfört med grundämnet kol. Metan finns i naturgasfält tillsammans med råolja eller bundet som metanklatrat. Petroleum (även kallad råolja) påträffas i vätskeform och innehåller en större mängd av grundämnet kol, medan de icke-flyktiga bergarterna som också kallas kol (ej att förväxla med grundämnet kol) innehåller en mycket stor mängd av grundämnet kol.',
			img: fossilabränslenindustri,
			id: 1,
		},
	]);
	const [fossilFuels3] = useState([
		{
			title: 'Framtida fossila bränseln',
			body: 'Enligt den biogeniska teorin bildades jordens petroleumtillgångar då förhistoriska alger och plankton samt andra växter och döda djur lagt sig på sjö- och havsbottnar under syrefria förhållanden. Detta organiska material har begravts under tjocka lager sediment. Genom högt tryck och hög temperatur har det omvandlats kemiskt, först till kerogen och sedan genom ytterligare tryck och värme till kolväten i vätske- eller gasform (det vill säga naturgas och petroleum). ',
			img: fossilabränslenhamn,
			id: 1,
		},
	]);

	// redigera denna för att ändra den första listan
	const [test_1] = useState([
		{
			title: 'Visste du att...',
			li_1: 'fakta ett om klimat',
			li_2: 'fakta två om klimat',
			li_3: 'fakta tre om klimat',
			img: fossilabränslenfossil,
		},
	]);

	// redigera denna för att ändra den andra listan
	const [impact] = useState([
		{
			title: 'Gör påverkan själv...',
			li_1: 'Tips nummer ett',
			li_2: 'Tips nummer två',
			li_3: 'Tips nummer tre',
			img: fossilabänslenpåverkan,
		},
	]);

	const [Co2Emission, setCo2Emission] = useState([]);
	const [indexYear1, setIndexYear1] = useState(0);
	const [indexYear2, setIndexYear2] = useState(0);

	useEffect(() => {
		// gets data from local file
		setCo2Emission(getCO2Emissionsdata());
	}, []);

	const handleYearFilter = (chartName, Year) => {
		let index = Co2Emission.findIndex((co2) => co2.Year === parseInt(Year));
		if (index !== -1) {
			switch (chartName) {
				case 'Pie1':
					setIndexYear1(index);
					break;
				case 'Pie2':
					setIndexYear2(index);
					break;
			}
		} else {
			// alert the user if no data found
			alert('Data från önskade årtalet finns inte ');
		}
	};
	// stoleken på typsnittet börjar på 12,
	// storleken kan heller inte gå över 17 eller under 10 pga allt fallerar.
	const [fontSize, setFontSize] = useState(12);
	if (fontSize === 17) {
		setFontSize(fontSize - 1);
	}
	if (fontSize === 10) {
		setFontSize(fontSize + 1);
	}
	return (
		<div className="customBTN">
			<Link to="/">
				<button type="button" className="show btn btn-outline-dark customBTN">
					<span className="btnIcon-Left">
						<FontAwesomeIcon icon={faChevronLeft} />
					</span>
					Tillbaka
				</button>
			</Link>
			<div className="btnWrapper">
				<p>Justera storleken på texterna</p>
				<button className="resizeUp" onClick={() => setFontSize(fontSize + 1)}>
					{' '}
					+{' '}
				</button>
				<button
					className="resizeDown"
					onClick={() => setFontSize(fontSize - 1)}
				>
					{' '}
					-{' '}
				</button>
			</div>
			<div
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				<InfoBoxText blogs={fossilFuels} />
				<InfoBoxList blogs={test_1} />
			</div>
			{/* Test är enbart ett test för att återskapa diagram med olika data, just nu sea levels
      <Test />
      */}
			<h1>Historisk statistik på fossila bränslen</h1>
			<p className="margin1">
				Statistiken representerar de fyra vanligaste varianterna av fossila
				bränslen, gasbränsle, flytande bränsle, fast bränsle och cement. Genom
				att analysera alla fyra varianter sammanställt får du bäst överblick av
				användingen av fossila bränslen.{' '}
			</p>
			<p className="margin1">
				Y-axel representerar totala koldioxidutsläpp från
				fossilbränsleförbrukning och cementproduktion (miljoner ton C).
			</p>
			<Graph />
			<h3 className="margin1">Jämför årtal</h3>
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
			<div
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				<InfoBoxText blogs={fossilFuels2} />
			</div>

			<div
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				<InfoBoxText blogs={fossilFuels3} />
				<InfoBoxList blogs={impact} />
			</div>
			<Link to="/">
				<button type="button" className="show btn btn-outline-dark customBTN">
					<span className="btnIcon-Left">
						<FontAwesomeIcon icon={faChevronLeft} />
					</span>{' '}
					Tillbaka
				</button>
			</Link>
		</div>
	);
};

export default InfoBox;
