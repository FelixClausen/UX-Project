// react
import React from 'react';
import ReactDOM from 'react-dom';

// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './form.css';

// components
import HeaderComp from './HeaderComp';

// render components in root
ReactDOM.render(
	<React.StrictMode>
		<HeaderComp />
	</React.StrictMode>,
	document.getElementById('root')
);
