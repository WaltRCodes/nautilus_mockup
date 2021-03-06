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
        <button>Read Now</button>
      </div>
      <div id="main">
        <div id="leftBar">
                <div id="starterPost">
                    <p><b>Issue 079</b></p>
                    <h2>Catalyst</h2>
                    <p id="quote">"What Generates a new theory in science?...."</p>
                </div>
                <ul id="post">
                    <li>
                        <p>Chapter 1</p>
                        <p>Art</p>
                        <p class="date"></p>
                    </li>
                    <li>
                        <p>Chapter 2</p>
                        <p>Mind</p>
                        <p class="date">Coming December 12</p>
                    </li>
                    <li>
                        <p>Chapter 3</p>
                        <p>Energy</p>
                        <p class="date">Coming December 19</p>
                    </li>
                    <li>
                        <p>Chapter 4</p>
                        <p>Stars</p>
                        <p  class="date">Coming December 26</p>
                    </li>
                </ul>
            </div>
            <div id="threeSections">
                <div id="firstSection">
                    <div class="textCell">
                        <p><b>Artificial Intelligence</b></p>
                        <p>Best Screenplay Goes to the Algorithims</p>
                        <p class="bottom">By Arthur I. Miller</p>
                    </div>
                </div>
                <div id="secondAndThirdSections">
                    <div id="secondSection">
                        <div class="textCell">
                            <p><b>Music</b></p>
                            <p>How I taught my computer to write its own music</p>
                            <p class="bottom">By John Supko</p>
                        </div>
                    </div>
                    <div id="thirdSection">
                        <div class="textCell" id="right">
                            <p><b>Art</b></p>
                            <p>Picasso's Got Nothing on AI Artist</p>
                            <p class="bottom">By Kevin Berger</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default App;
