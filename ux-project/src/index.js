// importing ´container´ components

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import IndexCardWrapper from './indexCardWrapper'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// all components
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <IndexCardWrapper />
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