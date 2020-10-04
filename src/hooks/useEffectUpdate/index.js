import { useRef, useEffect } from "react";

export default function useEffectUpdate(effect, deps) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      effect();
    }
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    isFirstRender.current = false;
  }, []);
}
