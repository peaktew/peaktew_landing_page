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
    return saved === "true";
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
      audio.load();
    }

    return audioRef.current;
  }, []);

  const startPlayback = useCallback(() => {
    const audio = initializeAudio();
    const attempt = ++playAttemptRef.current;
    audio.muted = false;
    audio.play().then(
      () => {
        if (attempt === playAttemptRef.current) {
          setIsPlaying(!audio.paused && !audio.muted);
        }
      },
      (error) => {
        if (attempt === playAttemptRef.current) {
          setIsPlaying(false);
          console.error("Background audio could not start while sound is enabled.", error);
        }
      },
    );
  }, [initializeAudio]);

  useEffect(() => {
    const audio = initializeAudio();

    if (isMuted) {
      playAttemptRef.current += 1;
      audio.muted = true;
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio.muted = false;
    if (audio.paused) startPlayback();
  }, [initializeAudio, isMuted, startPlayback]);

  useEffect(() => {
    const retryPlayback = (event) => {
      if (isMutedRef.current) return;
      if (event.target instanceof Element && event.target.closest("[data-sound-toggle]")) return;
      if (event.type === "keydown" && (event.repeat || !["Enter", " "].includes(event.key))) return;
      if (audioRef.current?.paused !== false) startPlayback();
    };

    window.addEventListener("click", retryPlayback);
    window.addEventListener("keydown", retryPlayback);
    return () => {
      window.removeEventListener("click", retryPlayback);
      window.removeEventListener("keydown", retryPlayback);
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

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;

    if (isMutedRef.current) {
      isMutedRef.current = false;
      setIsMuted(false);
      startPlayback();
    } else if (audio && !audio.paused && !audio.muted) {
      playAttemptRef.current += 1;
      isMutedRef.current = true;
      setIsMuted(true);
      audio.muted = true;
      audio.pause();
      setIsPlaying(false);
    } else {
      startPlayback();
    }
  }, [startPlayback]);

  return (
    <SoundContext.Provider value={{ isMuted, isPlaying, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};
