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
