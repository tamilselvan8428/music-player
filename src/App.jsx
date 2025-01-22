import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParticleAnimation from './ParticleAnimation';
import Login from './Login';
import Menu from './menu'; // Assuming 'Menu' is the correct component for the menu page

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Background animation */}
        <ParticleAnimation />
        
        {/* Main content container */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
