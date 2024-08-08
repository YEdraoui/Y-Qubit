import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Team from './components/Team';
import About from './components/About';
import './App.css';
import logo from './components/3.png';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
