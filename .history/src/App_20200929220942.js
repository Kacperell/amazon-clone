import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      {/* <h1>Hello amazon clone 💻💻💻💻</h1> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
