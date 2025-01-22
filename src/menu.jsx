import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './menu.css'

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const songs = location.state?.songs || []; // Retrieve songs passed from Login

  const handleLogout = () => {
    // Navigate back to login page
    navigate('/');
  };

  return (
    <div id="menu">
      <h1>Music Menu</h1>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <h3>{song.name}</h3>
            <p>Artist: {song.artists[0].name}</p>
            <p>Album: {song.album.name}</p>
            <audio controls>
              <source src={song.preview_url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
