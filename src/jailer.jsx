import React, { useState, useEffect } from 'react';

const Goat = () => {
  const lyrics = [
    { text: "Raa Yen Raavellam Long Aavudhe", startTime: 0 },
    { text: "Robbery Ku Raa Ve Ra Ve", startTime: 3 },
    { text: "Raa Nee Pathale Thee Aavudhe", startTime: 6 },
    { text: "Thee Pidikka Raavaiya Ve", startTime: 9 },
    { text: "Machatha Moracha Achatha Koracha", startTime: 12 },
    { text: "Ichhatha Maracha Micham Illama", startTime: 15 },
    { text: "Machame nuvvaiya Achame Ledhaiya", startTime: 18 },
    { text: "Ichhame Nenaiya Michom Yemaiya", startTime: 21 },
    { text: "Vaa Nu Kavalaiya Nu Kabali", startTime: 24 },
    { text: "Raa Raa Raa Raa Raa Raa Raa", startTime: 27 },
    { text: "Vaa Nu Kavalaiya Nu Kabali", startTime: 30 },
    { text: "Raa Raa Raa Raa Raa Raa Raa", startTime: 33 },
    { text: "Pathikka Vekkum Bodhaiya", startTime: 36 },
    { text: "Yeppappa Yeppappa", startTime: 39 },
    { text: "Kannukulla Nee Seidhi", startTime: 42 },
    { text: "Sollen Paa", startTime: 45 },
    { text: "Sikkika Vaikkum Aasaiya", startTime: 48 },
    { text: "Vandhaaye Yappa", startTime: 51 },
    { text: "Thangathula Thaan", startTime: 54 },
    { text: "Thechukoyen Paa", startTime: 57 },
    { text: "Konjam Thayangaadha Paa", startTime: 60 },
    { text: "Konjam Adanga Venaam Paa", startTime: 63 },
    { text: "Romba Mayangaadha Paa", startTime: 66 },
    { text: "Thappappa Thappappa", startTime: 69 },
    { text: "Konjam Paatu Kaavaalaa", startTime: 72 },
    { text: "Konjam Dance’u Kaavaala", startTime: 75 },
    { text: "Rendum Onnakagava", startTime: 78 },
    { text: "Kaavala Kaavala", startTime: 81 },
    { text: "Vaa Nu Kavalaiya Nu Kabali", startTime: 84 },
    { text: "Raa Raa Raa Raa Raa Raa Raa", startTime: 87 },
    { text: "Vaa Nu Kavalaiya Nu Kabali", startTime: 90 },
    { text: "Raa Raa Raa Raa Raa Raa Raa", startTime: 93 }
  ];

  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
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

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [currentLyricIndex, lyrics]);

  const handleEnded = () => {
    setCurrentLyricIndex(0);
    setIsPlaying(false);
  };

  return (
    <div>
      <div id="movie">
        <img
          style={{
            borderRadius:'50%',
            width: "190px",
            animation: isPlaying ? "rotate 3s linear infinite" : "none"
          }}
          src="jailer.jpeg"
          alt="Maari"
        />
        <br /><br />
        <audio ref={audioRef} controls onEnded={handleEnded}>
          <source src="Kaavaalaa-MassTamilan.dev.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <h2>{lyrics[currentLyricIndex]?.text || ""}</h2>
      </div>
      <style>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Goat;
