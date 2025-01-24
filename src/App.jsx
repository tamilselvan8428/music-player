import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParticleAnimation from './ParticleAnimation';
import Login from './Login';
import Menu from './menu';
import Goat from './goat' // Assuming 'Menu' is the correct component for the menu page
import Leo from './leo'
import Alu from './vedalam'
import Remo from './remo'
import Mari from './mari'
import Jailer from './jailer'
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
            <Route path="/goat" element={<Goat/>}/>
            <Route path="/leo" element={<Leo/>}/>
            <Route path="/vedelam" element={<Alu/>}/>
            <Route path="/remo" element={<Remo/>}/>
            <Route path="/mari" element={<Mari/>}/>
            <Route path="/jailer" element={<Jailer/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
