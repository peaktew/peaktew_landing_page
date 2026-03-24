import React from "react";
import { useDarkMode } from "./DarkModeContext";
import { useSound } from "./SoundContext";

const SoundToggleButton = () => {
  const { isMuted, toggleMute } = useSound();
  const { isDarkMode } = useDarkMode();

  return (
    <button
      type="button"
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute sound" : "Mute sound"}
      aria-pressed={!isMuted}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
        isDarkMode
          ? "bg-[#2d1450] border-[#6f42a7] text-white"
          : "bg-white border-[#d9c9f5] text-[#220239]"
      }`}
      style={{ paddingBottom: "max(0px, env(safe-area-inset-bottom))" }}
    >
      {isMuted ? (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
          <path d="m19 9-6 6" />
          <path d="m13 9 6 6" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 6a9 9 0 0 1 0 12" />
        </svg>
      )}
    </button>
  );
};

export default SoundToggleButton;
