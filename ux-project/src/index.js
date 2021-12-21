// react
import React from 'react'
import ReactDOM from 'react-dom';

// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// components
import HeaderComp from './HeaderComp';
import FontSizeChanger from './components/FontSizeChanger'; // Placeras här temporärt för display


// render components in root
ReactDOM.render(
  <React.StrictMode>
    <HeaderComp />
    <FontSizeChanger />
  </React.StrictMode>,
  document.getElementById('root')
);


/*
kommandon för git

byta branches
 git switch BranchName

 kolla vilken branch du är i
  git branch

lägga upp på github
 git add .
 git commit -m "comment here"
 git push

uppdatera från github
 git fetch
 git rebase origin/Master
*/
