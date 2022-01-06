// react
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// css
import './App.css';
import './responsive.css';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

// components
import IndexCardWrapper from './indexCardWrapper';
import InfoBox from './Co2Container';
import SeaLevelsContainer from './SeaLevelsContainer';
import GlobalTempContainer from './GlobalTempContainer';
import GlazierSizeContainer from './GlazierSizeContainer';
import WorkShop from './WorkShop';

// function to show container component
function NavListComp() {
	return (
		// router structure
		<Router>
			{/* classes are from bootstrap */}
			<div>
				<ul className="nav-item nav justify-content-center">
					{/* One "li" per link */}
					<li className="navLink hidden">
						{/* Uses Link to navigate through "pages" */}
						{/* uses icons from font awsome */}
						<Link to="/" className="nav-link" aria-current="page">
							<span className="btnIcon-Left">
								<FontAwesomeIcon icon={faChevronLeft} />
							</span>
							Tillbaka
						</Link>
					</li>
					<li className="navLink">
						{/* Uses Link to navigate through "pages" */}
						{/* uses icons from font awsome */}
						<Link to="/" className="nav-link" aria-current="page">
							<span className="btnIcon-Left">
								<FontAwesomeIcon icon={faHome} />
							</span>
							Start
						</Link>
					</li>
					<li className="navLink">
						{/* Uses Link to navigate through "pages" */}
						{/* uses icons from font awsome */}
						<Link to="/" className="nav-link" aria-current="page">
							<span className="btnIcon-Left">
								<FontAwesomeIcon icon={faBookmark} />
							</span>
							Klimat
						</Link>
					</li>
					<li className="navLink">
						{/* Uses Link to navigate through "pages" */}
						<Link to="/workshop" className="nav-link" aria-current="page">
							<span className="btnIcon-Left">
								<FontAwesomeIcon icon={faCog} />
							</span>
							Workshops
						</Link>
					</li>
				</ul>
				{/* Uses "Routes" to contain paths */}
				<Routes>
					{/* Sätter "path" -> Visar valda komponenter,
                        en länk route till varje container komponent per ämne */}
					{/* "/" för att börja på en tom länk */}
					<Route path="/" element={<IndexCardWrapper />}></Route>
					<Route path="/workshop" element={<WorkShop />}></Route>
					<Route path="/fossil" element={<InfoBox />}></Route>
					<Route path="/havsniva" element={<SeaLevelsContainer />}></Route>
					<Route path="/global" element={<GlobalTempContainer />}></Route>
					<Route path="/glaciar" element={<GlazierSizeContainer />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default NavListComp;
