import { useState, useEffect } from 'react';
import http from '../../../http';

function useFilters() {
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data } =
          (await http.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776')) ||
          {};
        if (mounted) {
          setFilters([...data.filters]);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(error.message);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return { loading, filters };
}

export default useFilters;
