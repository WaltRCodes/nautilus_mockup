import React from 'react';

import './App.css';
import mainLogo from'./assets/global/nautilus-logo-sprite@2x.png';
function App() {
  return (
    <div id="container">
      <nav>
        <img src={mainLogo} id="logo" />
        issues
        topics
        blog
        newsletter
        <button id="login">
          Login
        </button>
        <button id="subscribe">
          subscribe
        </button>
      </nav>
      <div id="headline">
        <h4>THE NAUTILUS SPOTLIGHT</h4>
        <h1>WHY THE LAWS OF PHYSICS ARE INVEVITABLE</h1>
      </div>
    </div>
  );
}

export default App;
