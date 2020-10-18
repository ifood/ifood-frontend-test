import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import http from '../../../http';
import { filters as filtersAtom } from '../../../atoms/filters.atom';

function useFilters() {
  const [loading, setLoading] = useState(false);
  const setFiltersParams = useSetRecoilState(filtersAtom);
  const [filters, setFilters] = useState();

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

  const setFilter = (key, value) => {
    setFiltersParams((prev) => ({ ...prev, [key]: value }));
  };

  return { loading, filters, setFilter };
}

export default useFilters;
