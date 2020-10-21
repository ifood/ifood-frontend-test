/* eslint-disable consistent-return */
/* eslint-disable no-inner-declarations */
import { useState, useEffect, useCallback } from 'react';

export default function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined';

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : 1400;
    const height = hasWindow ? window.innerHeight : 1400;

    return { width, height };
  }, [hasWindow]);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow, getWindowDimensions]);

  return windowDimensions;
}
