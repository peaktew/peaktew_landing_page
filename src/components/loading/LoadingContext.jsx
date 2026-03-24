// hooks/useBlackHoleTransition.js
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';

const useBlackHoleTransition = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // ENTER ANIMATION
    setIsLoading(true);
    const enterTimer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      clearTimeout(enterTimer);
      // EXIT ANIMATION
      setIsExiting(true);
      setTimeout(() => setIsExiting(false), 2000);
    };
  }, [location.pathname]);

  return { isLoading, isExiting };
};

export default useBlackHoleTransition;