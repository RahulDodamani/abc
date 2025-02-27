import React, { createContext, useContext, useRef, useEffect } from "react";
import musicFile from "../components/musicc.mp3"; // ✅ Ensure correct path

const AudioContext = createContext<{ playAudio: () => void; stopAudio: () => void } | null>(null);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef(new Audio(musicFile));

  useEffect(() => {
    audioRef.current.loop = true; // ✅ Enable looping
    audioRef.current.volume = 1; // ✅ Ensure volume is set
  }, []);

  const playAudio = () => {
    audioRef.current.muted = false;
    audioRef.current.play().catch((error) => console.log("Autoplay prevented:", error));
  };

  const stopAudio = () => {
    audioRef.current.pause();
  };

  return (
    <AudioContext.Provider value={{ playAudio, stopAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
