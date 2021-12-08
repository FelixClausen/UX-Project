import './App.css';
import React from 'react'
import IndexCard from './indexCard';

function IndexCardWrapper() {
  return (
<div className="indexWrapper">
  <h3 className="indexCardTitle">Vårt klimat</h3>
  <IndexCard />
  <IndexCard />
</div>
  );
}

export default IndexCardWrapper;

/*
<div className="indexWrapper">
  <h3 className="indexCardTitle">Vårt klimat</h3>
  <IndexCard />
  <IndexCard />
</div>
*/