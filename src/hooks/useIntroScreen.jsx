import { useState, useLayoutEffect } from 'react';

export const useIntroScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mostrarIntro, setMostrarIntro] = useState(false);

  useLayoutEffect(() => {
    const introShown = sessionStorage.getItem('introShown');
    setMostrarIntro(!introShown);
    setIsLoading(false);
  }, []);

  const handleCloseIntro = () => {
    sessionStorage.setItem('introShown', 'true');
    setMostrarIntro(false);
  };

  return { mostrarIntro, handleCloseIntro, isLoading };
};
