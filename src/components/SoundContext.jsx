import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import music from "../assets/web-music.mp3";
const SoundContext = createContext();

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
};

export const SoundProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem("siteMuted");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return false;
  });
  const audioRef = useRef(null);
  const isInitialMount = useRef(true);

  // Initialize audio on mount
  useEffect(() => {
    const audio = new Audio(music);
    audio.loop = true;
    audio.volume = 0.2;
    audioRef.current = audio;

    if (isMuted) {
      audio.muted = true;
      return;
    }

    audio.muted = true;

    let unlocked = false;
    const unlock = () => {
      if (unlocked) return;
      unlocked = true;

      const savedMute = localStorage.getItem("siteMuted");
      const currentMute = savedMute !== null ? JSON.parse(savedMute) : false;

      if (!currentMute) {
        audio.muted = false;
        audio.play().catch(() => { });
      }

      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };

    audio.play()
      .then(() => {
        window.addEventListener("click", unlock);
        window.addEventListener("keydown", unlock);
        window.addEventListener("touchstart", unlock);
      })
      .catch(() => {
        window.addEventListener("click", unlock);
        window.addEventListener("keydown", unlock);
        window.addEventListener("touchstart", unlock);
      });

    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update mute state
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      if (!isMuted) {
        audioRef.current.play().catch(() => { });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("siteMuted", JSON.stringify(isMuted));
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};
