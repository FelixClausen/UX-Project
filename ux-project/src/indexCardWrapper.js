// react
import React from 'react'

// css
import './App.css';

// components
import IndexCard from './indexCard';

// function to show container component
function IndexCardWrapper() {
  return (
    <div className="indexWrapper">
      {/* Section title */}
      <h3 className="indexCardTitle">Vårt klimat</h3>
      {/* Uses components */}
      <IndexCard />
      <IndexCard />
    </div>
  );
}

export default IndexCardWrapper;