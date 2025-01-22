import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Spotify API credentials
  const clientId = 'f4843471a0c445ac94c0722793dcf982';
  const clientSecret = 'fd94e55951ba44c49221aa78c4e8d0d2';
  
  const fetchAccessToken = async () => {
    const authUrl = 'https://accounts.spotify.com/api/token';
    const body = new URLSearchParams();
    body.append('grant_type', 'client_credentials');

    // Fetch the access token from Spotify
    const response = await fetch(authUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(clientId + ':' + clientSecret)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    });

    const data = await response.json();
    return data.access_token; // Return the access token
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && password) {
      console.log('Login successful:', username);

      try {
        // Fetch the access token
        const token = await fetchAccessToken();

        // Fetch music data from Spotify using the access token
        const response = await fetch('https://api.spotify.com/v1/search?q=eminem&type=track&limit=10', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const songs = data.tracks.items; // Extract songs from the response
          console.log('Songs:', songs);
          navigate('/menu', { state: { songs } }); // Pass songs to the menu page
        } else {
          console.error('Error fetching songs:', response.statusText);
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div id="login">
      <h1>Login to Music App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
