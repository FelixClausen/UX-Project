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
        <button className='resizeUp' onClick={() => setFontSize(fontSize + 2)}>
            + Öka storlek
          </button>
          <button className='resizeDown' onClick={() => setFontSize(fontSize - 2)}>
            - Minska storlek
           </button>
        <p
          style={{
            fontSize: `${fontSize}px`
        }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  );
}

export default FontSizeChanger;

