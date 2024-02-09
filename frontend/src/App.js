import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Disclosures from './pages/Disclosures';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/disclosures' element={<Disclosures />} />
      </Routes>
    </Router>
  )
}

export default App;
