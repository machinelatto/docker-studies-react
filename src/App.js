import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif" alt="hello there"/>
        <p>
          <i>- Hello there</i>
        </p>
        <p>
          <i>- General Kenobi</i>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react
        </a>
      </header>
    </div>
  );
}

export default App;
