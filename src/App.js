import React from 'react';

import FetchApiComponent from './Components/FetchApi/FetchApiComponent';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>below is the data being fetched from the API</p>
        <FetchApiComponent />
      </header>
    </div>
  );
}

export default App;
