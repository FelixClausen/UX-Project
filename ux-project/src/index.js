// importing ´container´ components
import React from 'react'
import ReactDOM from 'react-dom';
import HeaderComp from './HeaderComp.jsx';
import IndexCardWrapper from './indexCardWrapper';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import InfoBox from './InfoBox.jsx';
import InfoBoxList from './InfoBoxList.jsx';


import App from './App.js'

// all components
ReactDOM.render(
  <React.StrictMode>
    <HeaderComp />
    <IndexCardWrapper />
    <InfoBox />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.log("still working !?")


//*******************************************   useful commands for using git   ******************************************************************//

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