import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './menu.css';

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const songs = location.state?.songs || []; // Retrieve songs passed from Login

  const handleLogout = () => {
    // Navigate back to login page
    navigate('/');
  };

  const navigateToGoat = () => {
    // Navigate to the goat page
    navigate('/goat');
  };
  const navileo=()=>{
    navigate('/leo');
  };
  const navialu=()=>{
    navigate('/vedelam');
  };
  const naviremo=()=>{
    navigate('/remo');
  };
  const navimari=()=>{
    navigate('/mari');
  };
  const navijail=()=>{
    navigate('/jailer');
  };
  return (
    <div id="menu">
      <h1>Music Menu</h1>
      <button onClick={handleLogout}>Logout</button>
      <div id="music">
        <div id="mersal" onClick={navigateToGoat} className="clickable">
          <img src="goat.jpeg" alt="goat" />
          <h3>MATTA</h3>
        </div>
        <div id="mersal" onClick={navileo} >
          <img src="leo.jpg" alt="leo" style={{width:'150PX'}} />
          <h3>NAA READY</h3>
        </div>
        <div id="mersal" onClick={navialu}>
          <img src="veram.jpg" alt="veeram" style={{width:'200px'}}/>
          <h3>AALUMA DOLUMA</h3>
        </div>
        <div id="mersal" onClick={naviremo}>
        <img src="remo.jpeg" alt="remo" />
          <h3>SIRIKKADHEY</h3>
        </div>
        <div id="mersal" onClick={navimari}>
          <img src="mari.jpeg" alt="mari" style={{width:'200px'}} />
          <h3>THAPPA THA THARIYUM</h3>
        </div>
        <div id="mersal" onClick={navijail}>
          <img src="jailer.jpeg" alt="jailer" style={{width:'200px'}} />
          <h3>KAAVAALAA</h3>
        </div>
      </div>
    </div>
  );
};

export default Menu;
