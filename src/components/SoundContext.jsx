import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const isMutedRef = useRef(isMuted);

  isMutedRef.current = isMuted;

  const initializeAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(music);
      audio.loop = true;
      audio.volume = 0.5;
      audio.muted = isMutedRef.current;
      audio.preload = "auto";
      audioRef.current = audio;
    }

    return audioRef.current;
  }, []);

  // Defer the music request until the visitor interacts with the page.
  useEffect(() => {
    const startAudio = () => {
      const audio = initializeAudio();
      if (!isMutedRef.current) {
        audio.play().catch(() => {});
      }
      interactionEvents.forEach((eventName) =>
        window.removeEventListener(eventName, startAudio),
      );
    };

    const interactionEvents = ["pointerdown", "touchstart", "keydown", "scroll"];
    interactionEvents.forEach((eventName) =>
      window.addEventListener(eventName, startAudio, {
        once: true,
        passive: eventName !== "keydown",
      }),
    );

    return () =>
      interactionEvents.forEach((eventName) =>
        window.removeEventListener(eventName, startAudio),
      );
  }, [initializeAudio]);

  // Keep an initialized player in sync with the mute control.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = isMuted;
    if (isMuted) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
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
    initializeAudio();
    setIsMuted((prev) => !prev);
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};
