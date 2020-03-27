import React from 'react';

import './App.css';
import mainLogo from'./assets/global/nautilus-logo-sprite@2x.png';
function App() {
  return (
    <div id="container">
      <nav>
      <img src={mainLogo} id="logo" />
      </nav>
    </div>
  );
}

export default App;
