import React, { useState, useEffect } from 'react';

const Goat = () => {
  // Lyrics array with timestamps (start time in seconds for each lyric)
  const lyrics = [
    { text: "Un Peyaril En Peyarai Serthu", startTime: 0 },
    { text: "Viralodu Uyir Kooda Korthu", startTime: 5 },
    { text: "Oor Munne Ondraga Naamum Nadanthal Enna…", startTime: 10 },
    { text: "En Nenjin Theeye", startTime: 15 },
    { text: "Ul Engum Neeye", startTime: 18 },
    { text: "Kan Moodumpothum", startTime: 21 },
    { text: "Kan Mun Nindraye", startTime: 24 },
    { text: "Sirikkadhey Sirikkadhey", startTime: 30 },
    { text: "Siripaley Mayakathey", startTime: 33 },
    { text: "Adikkadhe Adikkadhe", startTime: 36 },
    { text: "Azhagaaley Adikkadhe", startTime: 39 },
    { text: "Nanaikka Theriyatha Adai Mazhaiye", startTime: 45 },
    { text: "Nanaiya Theriyatha Malar Kudaiye", startTime: 48 },
    { text: "Maraiya Theriyatha Pagal Nilave", startTime: 51 },
    { text: "Ennai Theriyatha Thannazhage", startTime: 54 },
    { text: "Nanaikka Theriyatha Adai Mazhaiye", startTime: 60 },
    { text: "Nanaiya Theriyatha Malar Kudaiye", startTime: 63 },
    { text: "Maraiya Theriyatha Pagal Nilave", startTime: 66 },
    { text: "Ennai Theriyatha", startTime: 69 },
    { text: "Un Peyaril En Peyarai Serthu", startTime: 75 },
    { text: "Viralodu Uyir Kudu Korthu", startTime: 78 },
    { text: "Oor Munne Ondraga Naamum Nadanthal Enna..", startTime: 81 },
    { text: "Manam Vittu Unmai Mattum", startTime: 87 },
    { text: "Unnodu Pesida Vendum", startTime: 90 },
    { text: "Nee Kekum Kadhalai Alli", startTime: 93 },
    { text: "Unmel Nan Pusida Vendum", startTime: 96 },
    { text: "Naan Kaannum Otrai Kanvai", startTime: 99 },
    { text: "Un Kaadhil Ularida Vendum", startTime: 102 },
    { text: "Enai Meeri Unnidam Mayangum", startTime: 105 },
    { text: "Ennai Naan Thaduthida Vendum", startTime: 108 },
    { text: "Kudathey Kudathey", startTime: 115 },
    { text: "Ennal Mudiya Kudathey", startTime: 118 },
    { text: "Pogathey Pogathey", startTime: 121 },
    { text: "Enai Nee Thaandi Pogathey", startTime: 124 },
    { text: "Nerungathey Nerungathey", startTime: 130 },
    { text: "En Penmai Thayangathey", startTime: 133 },
    { text: "Thirakathey Thirakathey", startTime: 136 },
    { text: "En Manathai Thirakathey", startTime: 139 },
    { text: "Nanaikka Theriyatha Adai Mazhaiye", startTime: 145 },
    { text: "Nanaiya Theriyatha Malar Kudaiye", startTime: 148 },
    { text: "Maraiya Theriyatha Pagal Nilave", startTime: 151 },
    { text: "Ennai Theriyatha", startTime: 154 },
    { text: "Un Peyaril En Peyarai Serthu", startTime: 160 },
    { text: "Viralodu Uyir Kudu Korthu", startTime: 163 },
    { text: "Oor Munne Ondraga Naamum Nadanthal Enna..", startTime: 166 },
    { text: "Un Peyaril En Peyarai Serthu", startTime: 172 },
    { text: "Viralodu Uyir Kudu Korthu", startTime: 175 },
    { text: "Oor Munne Ondraga Naamum Nadanthal Enna..", startTime: 178 }
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

  const handleEnded = () => {
    setCurrentLyricIndex(0); // Reset to the first lyric when the audio ends
    setIsPlaying(false); // Stop rotation
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div id="movie">
        <img
          src="remo.jpeg"
          alt="remo"
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
          onEnded={handleEnded}
          style={{ width: '80%', outline: 'none', marginTop: '10px' }}
        >
          <source src="Sirikkadhey.mp3" type="audio/mpeg" />
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
