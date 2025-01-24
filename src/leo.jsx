import React, { useState, useEffect } from "react";

const Goat = () => {
  const lyrics = [
    { text: "Naa Ready Dhaan Varava", startTime: 14 },
    { text: "Annan Naa Erangi Varava", startTime: 16 },
    { text: "Thael Kodukku Singatha", startTime: 19 },
    { text: "Seendaathapa Evan Thaduthum", startTime: 21 },
    { text: "En Route’u Maaraadhappa", startTime: 23 },
    { text: "Naa Ready Dhaan Varava", startTime: 24 },
    { text: "Annan Naa Thaniya Varava", startTime: 27 },
    { text: "Thara Nadungura Parai", startTime: 30 },
    { text: "Adikanum Naa Aadathan", startTime: 31 },
    { text: "Veral Idukula Theepandham", startTime: 33 },
    { text: "Naa Yethathan", startTime: 34 },
    { text: "Pathaathu Bottle Naa Kudikka", startTime: 35 },
    { text: "Andala Konda Cheers Adikka", startTime: 38 },
    { text: "Keda Vetti Kondanga Da", startTime: 41 },
    { text: "Yenpasi Naa Thanikka", startTime: 43 },
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
        return (
          currentTime >= lyric.startTime &&
          (!nextLyric || currentTime < nextLyric.startTime)
        );
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
      <div id="movie" style={{ alignItems: "center",height:'40%',padding:'5%',backgroundColor:"transparent" }}>
        {/* Rotating image */}
        <img
          style={{
            marginRight:'50%',
            width: "250px",
            borderRadius: "100%",
            animation: isPlaying ? "spin 3s linear infinite" : "none",
          }}
          src="leo1.jpg"
          alt="leo"
        />
        <br /><br />


        {/* Audio player */}
        <audio ref={audioRef} controls onEnded={handleEnded}>
          <source src="Naa-Ready-MassTamilan.dev (1).mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Current lyric */}
        <h2>{lyrics[currentLyricIndex]?.text || ""}</h2>
      </div>

      {/* CSS for rotation */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Goat;
