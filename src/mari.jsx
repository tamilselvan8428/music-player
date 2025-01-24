import React, { useState, useEffect } from 'react';

const Goat = () => {
  const lyrics = [
    { text: "Thappa dhaan theriyum", startTime: 0 },
    { text: "Namma route", startTime: 3 },
    { text: "Sariyana payalaa get outu", startTime: 6 },
    { text: "Koncham wrongathan irukkum", startTime: 9 },
    { text: "Aaana rightu", startTime: 12 },
    { text: "Puriyaadha varaikkum apeettu", startTime: 15 },
    { text: "Intha ooroda light-u", startTime: 20 },
    { text: "Maari the great-u", startTime: 23 },
    { text: "Police adichathu da salute-u", startTime: 26 },
    { text: "Nee irunthathaan correct-u", startTime: 30 },
    { text: "Illana reveett-u", startTime: 33 },
    { text: "Inimeluthaan naala neram isstart-u", startTime: 36 },
    { text: "Haaah haaah haaah haaah", startTime: 40 },
    { text: "Haaah haaah haaah haa haa hahaha", startTime: 43 },
    { text: "Guniyumbothu", startTime: 54 },
    { text: "Kuthum oorukulla", startTime: 57 },
    { text: "Niminthethaan nadakanum", startTime: 60 },
    { text: "Vazhiyae illa", startTime: 63 },
    { text: "Thunai thedi", startTime: 66 },
    { text: "Venai thaedum olagathula", startTime: 69 },
    { text: "Thaniyavae irunthaalum", startTime: 72 },
    { text: "Thappae illa", startTime: 75 },
    { text: "Summa ethachum", startTime: 80 },
    { text: "Sollatha kannu", startTime: 83 },
    { text: "Ingae irukkum ellorum", startTime: 86 },
    { text: "Eppothum onnu", startTime: 89 },
    { text: "Unakku rite-nnu pattatha", startTime: 92 },
    { text: "Mattum pannu", startTime: 95 },
    { text: "Ippo vanthu en vootla", startTime: 98 },
    { text: "Vayirara thunnu", startTime: 101 },
    { text: "Thaniya vanthen thaniya poven", startTime: 105 },
    { text: "Sontha bantham theva illa", startTime: 108 },
    { text: "Thaena pesi thaana vantha", startTime: 111 },
    { text: "Veena pogum yenda tholla", startTime: 114 },
    { text: "Thappa dhaan theriyum", startTime: 132 },
    { text: "Namma route", startTime: 135 },
    { text: "Sariyana payalaa get outu", startTime: 138 },
    { text: "Koncham wrongathan irukkum", startTime: 141 },
    { text: "Aaana rightu", startTime: 144 },
    { text: "Puriyaadha varaikkum apeettu", startTime: 147 },
    { text: "Intha ooroda light-u", startTime: 152 },
    { text: "Maari the great-u", startTime: 155 },
    { text: "Police adichathu da salute-u", startTime: 158 },
    { text: "Haaah haaah haaah haaah", startTime: 172 },
    { text: "Haaah haaah haaah haa haa hahaha", startTime: 175 }
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
        {/* Rotating image when audio is playing */}
        <img
          style={{
            width: "190px",
            borderRadius:'50%',
            animation: isPlaying ? "rotate 3s linear infinite" : "none"
          }}
          src="mari.jpeg"
          alt="Maari"
        />
        <br /><br />
        <audio ref={audioRef} controls onEnded={handleEnded}>
          <source src="Thappa Dhaan Theriyum (Maari's Karuthu).mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <h2>{lyrics[currentLyricIndex]?.text || ""}</h2>
      </div>
      {/* CSS styles */}
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
