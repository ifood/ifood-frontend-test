import React, { useState, useEffect } from "react";
import { getPlaylists, getFilters } from "services/api";

export default function PlaylistFilters() {
  const [filters, setFilters] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const loadFilters = async () => {
    try {
      setLoading(true);
      const { data: filtersData } = await getFilters();
      if (Array.isArray(filtersData)) {
        setFilters(filtersData.filters);
      }
    } catch (e) {
      console.log(e);
      // TODO: Show error message on screen
    }
    setLoading(false);
  };

  useEffect(() => {
    loadFilters();
  }, []);

  const renderFilter = () => {};

  return <div className="playlist-filters">Filters: {filters.length}</div>;
}
