import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact component={<Home />} />
        <Route path='/privacy' component={<Privacy />} />
      </Routes>
    </Router>
  )
}

export default App;