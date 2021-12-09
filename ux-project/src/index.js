// react
import React from 'react'
import ReactDOM from 'react-dom';

// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// components
//import HeaderComp from './HeaderComp';
//import IndexCardWrapper from './indexCardWrapper';
//import InfoBox from './InfoBox.jsx';
//import App from './App.js'
//import App2 from './CompareData';
import RouterStructure from "./routerStructure";
import HeaderComp from './HeaderComp';
import LogoComp from './LogoComp';
import SearchComp from './SearchComp';
import FontSizeChanger from './components/FontSizeChanger'; // Placeras här temporärt för display

// render components in root
ReactDOM.render(
  <React.StrictMode>
    <HeaderComp />
    <FontSizeChanger />
  </React.StrictMode>,
  document.getElementById('root')
);

console.log("still working !?")


//**********  useful commands for using git  **********//

// switching branches //
// git switch BranchName

// To check which branch you are in //
// git branch


// pushing code to github //
// git add .
// git commit -m "comment here"
// git push


// updating merged code from github //
// git fetch
// git rebase origin/Master

// components need to start with uppercase letters (?) //


//**********  use these principles  **********//

// life-cicle hooks for displaying the right content, use it as navigation
// or stack native

// nvm use router
