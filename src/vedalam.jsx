import React, { useState, useEffect } from 'react';

const Goat = () => {
  const lyrics = [
    { text: "Aaluma Doluma Isalagadi Maaluma", startTime: 0 },
    { text: "Thaechu Galeejunu Graaki Vitta Saaluma", startTime: 5 },
    { text: "Arikal Karikal Kothu Vitta Kalakkal", startTime: 10 },
    { text: "Palichunu Palapalakudhu Mittai Maela Localu", startTime: 15 },
    { text: "Dammukuna Dumukkuna Dolaka Dhaan Gumukkuna", startTime: 20 },
    { text: "Gumukkuna Doomankhozhi Eppadi Pona Enakenna", startTime: 25 },
    { text: "Arikina Murikina Thotaiyadhaan Erakuna", startTime: 30 },
    { text: "Irukina Sarakina Enga Vandha Unukina", startTime: 35 },
    { text: "Aaluma Doluma", startTime: 40 },
    { text: "Aaluma Doluma Isalagadi Maaluma", startTime: 45 },
    { text: "Thaechu Galeejunu Graaki Vitta Saaluma", startTime: 50 },
    { text: "Arikal Karikal Kothu Vitta Kalakkal", startTime: 55 },
    { text: "Palichunu Palapalakudhu Mittai Maela Localu", startTime: 60 },
    { text: "Wrong Ah Raava Dhaan Rowdy Aanan Show Ah Dhaan", startTime: 65 },
    { text: "Dhutta Kuduthuputa Kuthu Vizhum Slow ah Dhaan", startTime: 70 },
    { text: "Robbery Forgery Mokka Scene Bore da", startTime: 75 },
    { text: "Matta Panniputtan Machaan Maela Paeru Da", startTime: 80 },
    { text: "Eghirinan Thogarinan Silent ah Dhaan Navuruna", startTime: 85 },
    { text: "Ullukula Soruvunan Adhukku Maatunan", startTime: 90 },
    { text: "Unna Dhaan Idupula Vechan Vechu Thudupila", startTime: 95 },
    { text: "Izhukuran Polakuran Rowdy Ènnum Adhupila", startTime: 100 },
    { text: "Aaluma Doluma Isalagadi Maaluma", startTime: 105 },
    { text: "Thaechu Galeejunu Graaki Vitta Šaaluma", startTime: 110 },
    { text: "Getha Vudaatha Pangu Getha Vudaatha", startTime: 115 },
    { text: "Nee Yerinaalum Vaarinaalum Getha Vudaatha", startTime: 120 },
    { text: "Getha Vudaatha Pangu Getha Vudaatha", startTime: 125 },
    { text: "Evan Seerinaalum Maarinaalum Getha Vudaatha", startTime: 130 },
    { text: "Aaluma Doluma Doluma Aaluma", startTime: 135 },
    { text: "Aaluma Douma Isalagadi Maaluma", startTime: 140 },
    { text: "Thaechu Galeejunu Graaki Vitta Saaluma", startTime: 145 },
    { text: "Arikal Karikal Kothu Vitta Kalakkal", startTime: 150 },
    { text: "Palichunu Palapalakudhu Mittai Maela Localu", startTime: 155 },
    { text: "Dammukuna Dumukkuna Dolaka Dhaan Gumukkuna", startTime: 160 },
    { text: "Gumukkuna Doomankhozhi Eppadi Pona Enakenna", startTime: 165 },
    { text: "Arikina Murikina Thotaiyadhaan Erakuna", startTime: 170 },
    { text: "Irukina Sarakina Enga Vandha Unukina", startTime: 175 },
    { text: "Aaluma Doluma Isalagadi Maaluma", startTime: 180 },
    { text: "Thaechu Galeejunu Graaki Vitta Saaluma", startTime: 185 },
    { text: "Arikal Karikal Kothu Vitta Kalakkal", startTime: 190 },
    { text: "Palichunu Palapalakudhu Mittai Maela Localu", startTime: 195 }
  ];

  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Track if the audio is playing
  const audioRef = React.useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      const currentTime = audio.currentTime;
      const lyricIndex = lyrics.findIndex((lyric, index) => {
        const nextLyric = lyrics[index + 1];
        return currentTime >= lyric.startTime && (!nextLyric || currentTime < nextLyric.startTime);
      });

      if (lyricIndex !== -1 && lyricIndex !== currentLyricIndex) {
        setCurrentLyricIndex(lyricIndex);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [currentLyricIndex, lyrics]);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div id="movie">
        <img
          src="veram.jpg"
          alt="Aaluma Doluma"
          style={{
            borderRadius: '50%',
            width: '200px',
            height: '200px',
            marginBottom: '15px',
            animation: isPlaying ? 'spin 3s linear infinite' : 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        />
        <br />
        <audio
          ref={audioRef}
          controls
          style={{
            width: '80%',
            outline: 'none',
            marginTop: '10px',
          }}
        >
          <source src="Aaluma-Doluma.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <h2 style={{  marginTop: '15px' }}>
          {lyrics[currentLyricIndex]?.text || ''}
        </h2>
      </div>
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Goat;
