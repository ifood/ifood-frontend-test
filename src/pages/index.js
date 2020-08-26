import React, { useEffect, useState } from 'react';

import { Hello } from '../components';

import * as FilterService from '../services/filter';

function IndexPage() {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await FilterService.getFilters();
      setFilters(response.filters);
    }

    getData();
  }, []);

  return (
    <Hello />
  );
} 

export default IndexPage;
