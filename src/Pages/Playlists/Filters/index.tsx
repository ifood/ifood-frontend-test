import React, { useState, useEffect, memo, useCallback } from "react";

import FilterService from "../../../Services/filterService";
import { useFeaturedPlaylist } from "../../../Hooks/playlistsHook";

import Filters, { IFilterProps } from "../../../Components/Filters";

import { Form, EmptyState } from "./styles";

const PlaylistFilters: React.FC = () => {
  const [filtersField, setFiltersField] = useState([] as IFilterProps[]);

  const { filter, setFilter } = useFeaturedPlaylist();

  const getFilters = useCallback(async () => {
    try {
      const filtersData = await FilterService.get();
      setFiltersField(filtersData);
    } catch (error) {
      alert("Ops! Não conseguimos buscar os filtros");
    }
  }, []);

  const handleChange = (id: string, value: string | number) => {
    const newFilter = {
      ...filter,
      [id]: value,
    };

    setFilter(newFilter);
  };

  const getEmptyState = () => {
    if (filtersField?.length) {
      return null;
    }

    return <EmptyState>Nenhum filtro encontrado.</EmptyState>;
  };

  const mapFiltersField = () =>
    filtersField?.map((filterField: IFilterProps) => (
      <Filters
        data-testeid="filter-item"
        key={filterField.id}
        {...filterField}
        onChange={(value) => handleChange(filterField.id, value)}
      />
    ));

  useEffect(() => {
    getFilters();
  }, [getFilters]);

  return (
    <Form noValidate autoComplete="off">
      {getEmptyState()}

      {mapFiltersField()}
    </Form>
  );
};

export default memo(PlaylistFilters);
