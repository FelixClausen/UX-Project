// react
import React from "react";

// css
import './App.css';
import './responsive.css'

// components
import BookingForm from './form';

const WorkShop = () => {
  return (
    <div>
      <div className="workshopIntro">
        <h1>Workshops</h1>
        <h3>Workshop är en sammanställning av likasinnade som vill lära sig mer och gå in på djupet om klimat frågan.</h3>
        <p>För att delta behöver du registerade dig nedan. Det är helt gratis. Det enda du behöver är tillgång till en surfplatta eller dator. Du behöver heller inga förkunskaper om ämnet.</p>
        <p className="welcome">Välkommen!</p>
      </div>
        <BookingForm />
    </div>
  );
}

export default WorkShop;
