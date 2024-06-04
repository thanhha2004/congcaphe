// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
