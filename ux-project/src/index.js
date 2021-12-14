// react
import React from 'react'
import ReactDOM from 'react-dom';

// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// components
import HeaderComp from './HeaderComp';
//import FontSizeChanger from './components/FontSizeChanger'; // Placeras här temporärt för display


// render components in root
ReactDOM.render(
  <React.StrictMode>
    <HeaderComp />
  </React.StrictMode>,
  document.getElementById('root')
);


//    <FontSizeChanger />
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


// använd samma princip på indexCard som på InfoBoxText