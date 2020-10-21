import { useEffect, useRef } from 'react';

export default function useSkipFirstRender(fn, args) {
  const isMounted = useRef(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isMounted.current) {
      return fn();
    }
  }, args);

  useEffect(() => {
    isMounted.current = true;
  }, []);
}
