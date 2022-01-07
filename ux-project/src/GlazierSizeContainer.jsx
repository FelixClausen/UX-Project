// react
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// css
import './App.css';
import './responsive.css';

// components
import InfoBoxText from './InfoBoxText';
import InfoBoxList from './InfoBoxList';
import GlazierSizeData from './GlazierSizeGraph';
import GlacierSizeCompareBarChart from './GlacierSizeCompareBarChart';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// images
import glacierOne from '../src/images/glacierOne.jpg';
import glacierMap from '../src/images/glacierMap.png';
import glacierMelt from '../src/images/glacierMelt.jpg';
import glacierTemp from '../src/images/glacierTemp.jpg';
import glacierLight from '../src/images/glacierLight.png';

// hämtar array med data från separat fil
import { getGlacierSizesdata } from './data/GlaciersSize';

const GlazierSizeContainer = () => {
	// denna visar en lista med information om ämnet
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [GlacierSizeList] = useState([
		{
			title: 'Visste du att...',
			li_1: 'Omkring 75 procent av världens dricksvattenreserv finns i glaciärer',
			li_2: 'Världens största glaciär finns på Antarktis',
			li_3: 'I Sverige finns nära 300 glaciärer',
			img: glacierOne,
		},
	]);

	// denna visar tips på hur man själv kan göra påverkan
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [GlacierSizeImpact] = useState([
		{
			title: 'Gör påverkan själv...',
			li_1: 'Minska din användning av fossila bränslen',
			li_2: 'Säg NEJ till plast',
			li_3: 'Håll vår miljö ren, skräpa inte ned',
			img: glacierLight,
		},
	]);

	// denna visar introduktion om ämnet
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [GlacierSizeIntro] = useState([
		{
			title: 'Glaciärer',
			body: 'Ungefär 10 procent av jordens yta täcks av glaciärer. Gläcierer förekommer i alla världsdelar förutom på Australien. Glaciärer är egentligen sammanpackad snö och de bildas när vinterns snöfall är kraftigare än sommarens smältning.',
			img: glacierMap,
			id: 2,
		},
	]);

	// denna visar ett textfält
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [GlacierSizeInformation] = useState([
		{
			title: 'Temperaturen',
			body: 'Om medeltemperaturen på Jorden fortstätter att stiga kommer världens glaciärer att fortsätta smälta. Om alla glaciärer på jorden smälter kommer havsytan att stiga med ungefär 120 meter. Sedan 1800-talet har den globala medeltemperaturen ökat med en dryg grad.',
			img: glacierTemp,
			id: 2,
		},
	]);

	// denna visar avslutningen om ämnet
	// ett obejkt för att anpassa text innehållet i återanvända komponenter
	const [GlacierSizeEnding] = useState([
		{
			title: 'Glaciärerna smälter',
			body: 'Forskare varnar att smältande glaciärer kan medföra katastrofala konsekvenser för oss människor. Om havsytan stiger kan storstäder som Tokyo och New York hamna under vatten. Förhindrar vi inte att glaciärerna smälter bort förlorar vi också dessa som sötvattenresurs.',
			img: glacierMelt,
			id: 2,
		},
	]);

	// hämtar datan och bestämmmer index för att kunna hitta årtal att jämföra
	const [GlacierSizeEmission, setGlacierSizeEmission] = useState([]);
	const [indexYear1, setIndexYear1] = useState(0);
	const [indexYear2, setIndexYear2] = useState(0);

	useEffect(() => {
		// gets data from local file
		setGlacierSizeEmission(getGlacierSizesdata());
	}, []);

	// funktion för att köra och hitta årtal
	const handleYearFilter = (chartName, Year) => {
		let index = GlacierSizeEmission.findIndex(
			(gl) => gl.Year === parseInt(Year)
		);
		// om årtal hittat, fyll i datan i Pie1
		if (index !== -1) {
			switch (chartName) {
				case 'Pie1':
					setIndexYear1(index);
					break;
				// om årtal hittat, fyll i datan i Pie2
				case 'Pie2':
					setIndexYear2(index);
					break;
			}
		} /*else {
			// om inget hittades, visa felmeddelande
			alert('Data från önskade årtalet finns inte ');
		}*/
	};
	// funktion för att ändra storlek på typsnittet
	// sätter storleken på 12px
	const [fontSize, setFontSize] = useState(12);
	// om storleken på typsnittet är 17px, ta bort 1px vid klick
	if (fontSize === 17) {
		setFontSize(fontSize - 1);
	}
	// om storleken på typsnittet är 10px, lägg till 1px vid klick
	if (fontSize === 10) {
		setFontSize(fontSize + 1);
	}
	return (
		<div className="customBTN">
			{/* använder link för att gå tillbaka till startsidan */}
			<Link to="/">
				<button type="button" className="show btn btn-outline-dark customBTN">
					<span className="btnIcon-Left">
						<FontAwesomeIcon icon={faChevronLeft} />
					</span>
					Tillbaka
				</button>
			</Link>
			{/* en container div för att visa knapparna som justerar storleken på typsnittet */}
			<div className="btnWrapper">
				<p>Justera storleken på texterna</p>
				{/* en knapp för att förstora texterna */}
				<button className="resizeUp" onClick={() => setFontSize(fontSize + 1)}>
					{' '}
					+{' '}
				</button>
				{/* en knapp för att minska texterna */}
				<button
					className="resizeDown"
					onClick={() => setFontSize(fontSize - 1)}
				>
					{' '}
					-{' '}
				</button>
			</div>
			{/* använder en div för att omfamna de texter som ska kunna justeras med knapparna */}
			<div
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				{/* visar olika textkomponenter, fyller dem med innehåll från objekten ovan */}
				<InfoBoxText blogs={GlacierSizeIntro} />
				<InfoBoxList blogs={GlacierSizeList} />
			</div>
			{/* title och text som beskriver vad statistiken mäts i */}
			<h1>Historisk statistik om världens glaciärer</h1>
			<p className="margin1">
				Genomsnittlig kumulativ massbalans för "referensglaciärer" över hela
				världen hämtade från US EPA och World Glacier Monitoring Service (WGMS).
				Detta är den kumulativa förändringen i massbalansen för en uppsättning
				"referens"-glaciärer över hela världen. Värdena representerar
				genomsnittet av alla glaciärer som mättes. Negativa värden indikerar en
				nettoförlust av is och snö jämfört med basåret 1945. För konsekvens,
				mätningarna är i meter vattenekvivalenter, vilket representerar
				förändringar i medeltjockleken på en glaciär.
			</p>
			{/* visar linjediagrammet om glaciärer */}
			<GlazierSizeData />
			{/* title för nästa sektion, funktionen för att jämföra årtal */}
			<h3 className="margin1">Jämför årtal</h3>
			{/* texter för att förklara kort hur användaren ska göra en sökning */}
			<p className="margin1">
				Statistik finns endast tillgänglig mellan årtalen 1945 och 2014
			</p>
			<p className="margin1">
				För att söka årtal, skriv in årtalet i sökrutan, t.ex 1899
			</p>
			<p className="margin1">
				Om du vill kolla på ett nytt årtal, radera det första och skriv in ditt
				nya
			</p>
			{/* en div som visar de två stapeldiagrammen */}
			<div className="App compareBars">
				{/* visar stapeldiagrammet */}
				{/* namngiven Pie1 för att kunna fylla den med rätt data,
            kopplar den till det första året som hittades på användarens sökning */}
				<GlacierSizeCompareBarChart
					chartName="Pie1"
					GlacierSizeEmission={GlacierSizeEmission[indexYear1]}
					onYearFilter={handleYearFilter}
				/>
				{/* visar stapeldiagrammet */}
				{/* namngiven Pie2 för att kunna fylla den med rätt data,
            kopplar den till det första året som hittades på användarens sökning, */}
				<GlacierSizeCompareBarChart
					chartName="Pie2"
					GlacierSizeEmission={GlacierSizeEmission[indexYear2]}
					onYearFilter={handleYearFilter}
				/>
			</div>
			{/* använder en div för att omfamna de texter som ska kunna justeras med knapparna */}
			<div
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				<InfoBoxText blogs={GlacierSizeInformation} />
			</div>
			{/* använder en div för att omfamna de texter som ska kunna justeras med knapparna */}
			<div
				style={{
					fontSize: `${fontSize}px`,
				}}
			>
				{/* visar olika textkomponenter, fyller dem med innehåll från objekten ovan */}
				<InfoBoxText blogs={GlacierSizeEnding} />
				<InfoBoxList blogs={GlacierSizeImpact} />
			</div>
			{/* använder link för att gå tillbaka till startsidan */}
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

export default GlazierSizeContainer;
