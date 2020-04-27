import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AudioPlayerContainer} from './container/AudioPlayer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AudioPlayerContainer />
             
      </header>
    </div>
  );
}

export default App;
