// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
