import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Disclosures from './pages/Disclosures';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/disclosures' element={<Disclosures />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
