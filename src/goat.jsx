import React, { useState, useEffect } from 'react';
import './goat.css'

const Goat = () => {
  const lyrics = [
    { text: "MUSIC", startTime: 0 },
    { text: "Matta", startTime: 19 },
    { text: "Matta", startTime: 25 },
    { text: "Enna Nada Enna Nada", startTime: 63 },
    { text: "Yeri Vara Jilukka", startTime: 65 },
    { text: "Kanna Daasan Sonna Ponnu", startTime: 66 },
    { text: "Kannu Munna Irukka", startTime: 68 },
    { text: "Enna Nada Enna Ida", startTime: 69 },
    { text: "Yeri Vara Jilukka", startTime: 71 },
    { text: "Man-Madhane Ambu Eduthu", startTime: 73 },
    { text: "Kanna Kuthi Kedakka", startTime: 74 },
    { text: "Matta", startTime: 78 },
    { text: "Matta", startTime: 82 },
    { text: "Adi Matta", startTime: 84 },
    { text: "Adi Adi Matta Matta", startTime: 87 },
    { text: "Matta Matta Raja Matta", startTime: 100 },
    { text: "Yenga Vanthu Yaaru Kitta", startTime: 102 },
    { text: "Matta Matta Raja Matta", startTime: 103 },
    { text: "Yenga Vanthu Yaaru Kitta", startTime: 105 },
    { text: "Atta Atta Acha Matta", startTime: 106 },
    { text: "Machi Keda Manja Satta", startTime: 108 },
    { text: "Mamti Vara Pallam Vetta", startTime: 110 },
    { text: "Poyiruva Kitta Thatta", startTime: 111 },
    { text: "Valai Thitti Vacha Katya", startTime: 113 },
    { text: "Paambu Kerri Kozhi Koththa", startTime: 114 },
    { text: "Yeri Vanthu Mattikuva", startTime: 116 },
    { text: "Enga Vanthu Yaar’u Kitta", startTime: 117 },
    { text: "Yaar’u Kitta", startTime: 119 },
    { text: "Enna Nada Enna Nada", startTime: 156 },
    { text: "Yeri Vara Jilukka", startTime: 158 },
    { text: "Thekka Ninna Ekka Chakkam", startTime: 159 },
    { text: "Pora Edam Vadakka", startTime: 161 },
    { text: "Oora Vitta Thearu Kada", startTime: 162 },
    { text: "Maradappu Kooduka", startTime: 164 },
    { text: "Man-Madhane Ambu Eduthu", startTime: 166 },
    { text: "Kanna Kuthi Kedakkan", startTime: 168 },
    { text: "Matta", startTime: 183 },
    { text: "Matta", startTime: 184 },
    { text: "Adi Matta", startTime: 190 },
    { text: "Adi Adi Matta Matta", startTime: 192 },
    { text: "Jiththaththa Jiththaththa", startTime: 196 },
    { text: "Jiththaththa Jiththaththa..", startTime: 200 },
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

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', () => {
      setCurrentLyricIndex(0);
      setIsPlaying(false);
    });

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [currentLyricIndex, lyrics]);

  return (
    <div>
      {/* Inline CSS for rotation */}
      <style>
        {`
          .rotate {
            animation: spin 5s linear infinite;
          }

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
      <div id="movie">
        <img
          src="goat.jpeg"
          alt="goat"
          className={isPlaying ? 'rotate' : ''}
          style={{ borderRadius: '50%', width: '190px' }}
        />
        <br />
        <br />
        <audio
          ref={audioRef}
          controls
        >
          <source src="Matta.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <h2>{lyrics[currentLyricIndex]?.text || ''}</h2>
      </div>
    </div>
  );
};

export default Goat;
