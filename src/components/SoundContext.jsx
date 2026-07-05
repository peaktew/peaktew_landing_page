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

  // Initialize audio on mount
  useEffect(() => {
    const audio = new Audio(music);
    audio.loop = true;
    audio.volume = 0.2;
    audioRef.current = audio;

    // Attempt to play; browsers allow muted autoplay
    audio.muted = true;
    audio.play()
      .then(() => {
        // Unmute only if user hasn't chosen to mute
        if (!isMuted) {
          audio.muted = false;
        }
      })
      .catch(() => {
        // Autoplay fully blocked — wait for first user interaction
        const unlock = () => {
          audio.play()
            .then(() => {
              if (!isMuted) {
                audio.muted = false;
              }
            })
            .catch(() => {});
          window.removeEventListener("click", unlock);
          window.removeEventListener("keydown", unlock);
          window.removeEventListener("touchstart", unlock);
        };
        window.addEventListener("click", unlock, { once: true });
        window.addEventListener("keydown", unlock, { once: true });
        window.addEventListener("touchstart", unlock, { once: true });
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // Update mute state
  useEffect(() => {
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
