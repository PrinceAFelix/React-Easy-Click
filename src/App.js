import React, { useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Foods } from './components/food/Foods';
import { Home } from './components/pages/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
