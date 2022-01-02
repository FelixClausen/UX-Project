import React, { useState } from "react";

/*
Notera att koden just nu är endast för display,
komponenten kommer att appliceras på text på samtliga sidor
*/

function FontSizeChanger() {
  const [fontSize, setFontSize] = useState(16);

  return (
    <div className='btnWrapper'>
      <div className='fontSize'>
        <p>Öka eller minska text stoleken</p>
        <button className='resizeUp' onClick={() => setFontSize(fontSize + 2)}>
            +
          </button>
          <button className='resizeDown' onClick={() => setFontSize(fontSize - 2)}>
            -
           </button>
        <p
          style={{
            fontSize: `${fontSize}px`
        }}
        >
          xx
        </p>
      </div>
    </div>
  );
}

export default FontSizeChanger;

