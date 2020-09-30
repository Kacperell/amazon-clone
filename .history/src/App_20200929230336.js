import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <h1>Hello amazon clone 💻💻💻💻</h1> */}
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
