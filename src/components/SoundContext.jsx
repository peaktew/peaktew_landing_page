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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const playAttemptRef = useRef(0);
  const isMutedRef = useRef(isMuted);

  isMutedRef.current = isMuted;

  const initializeAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(music);
      audio.loop = true;
      audio.volume = 0.5;
      audio.muted = isMutedRef.current;
      audio.preload = "auto";
      audio.addEventListener("playing", () => {
        setIsPlaying(!audio.paused && !audio.muted);
      });
      const markStopped = () => setIsPlaying(false);
      audio.addEventListener("pause", markStopped);
      audio.addEventListener("ended", markStopped);
      audio.addEventListener("error", markStopped);
      audioRef.current = audio;
    }

    return audioRef.current;
  }, []);

  const startPlayback = useCallback(() => {
    const audio = initializeAudio();
    const attempt = ++playAttemptRef.current;
    audio.muted = false;
    // Call play synchronously inside the gesture, before any effects or awaits.
    audio.play().then(
      () => {
        if (attempt === playAttemptRef.current) {
          setIsPlaying(!audio.paused && !audio.muted);
        }
      },
      () => {
        if (attempt === playAttemptRef.current) setIsPlaying(false);
      },
    );
  }, [initializeAudio]);

  // Scroll is not a playback permission gesture. Keep listening after a
  // rejected attempt so a later click/key can still start the music.
  useEffect(() => {
    const startAudio = (event) => {
      if (event.target instanceof Element && event.target.closest("[data-sound-toggle]")) return;
      if (event.type === "keydown" && (event.repeat || !["Enter", " "].includes(event.key))) return;
      if (!isMutedRef.current && audioRef.current?.paused !== false) {
        startPlayback();
      }
    };
    window.addEventListener("click", startAudio);
    window.addEventListener("keydown", startAudio);
    return () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("keydown", startAudio);
    };
  }, [startPlayback]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      playAttemptRef.current += 1;
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("siteMuted", JSON.stringify(isMuted));
  }, [isMuted]);

  const toggleMute = () => {
    const audio = initializeAudio();
    if (!audio.paused && !audio.muted && !isMutedRef.current) {
      playAttemptRef.current += 1;
      isMutedRef.current = true;
      setIsMuted(true);
      audio.muted = true;
      audio.pause();
      setIsPlaying(false);
    } else {
      isMutedRef.current = false;
      setIsMuted(false);
      startPlayback();
    }
  };

  return (
    <SoundContext.Provider value={{ isMuted, isPlaying, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};
