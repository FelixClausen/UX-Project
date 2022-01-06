// react
import React from 'react';

// css
import './App.css';
import './responsive.css';

// components
import NavListComp from './NavListComp';
import LogoComp from './LogoComp';

// function to show container component
function HeaderComp() {
	return (
		// nav classes are from bootstrap
		<nav className="navbar navbar-light bg-gradient-light">
			{/* logo + name container */}
			<LogoComp />
			{/* navigation container */}
			<NavListComp />
			{/* använder en tom div för att enklare sprida ut och fördela ytan jämt,
          med tanke på nav klassen från bootstrap */}
			<div className="filler"></div>
		</nav>
	);
}

export default HeaderComp;
