import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Disclosures from './pages/Disclosures';
import Header from './components/Header';
import Footer from './components/Footer';
import SwapPage from './pages/SwapPage';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/swap' element={<SwapPage />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/disclosures' element={<Disclosures />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
