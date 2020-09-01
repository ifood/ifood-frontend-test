import React, { useEffect, useContext } from "react";
import {
  loadFilter,
  FilterStateContext,
  FilterDispatchContext,
} from "../../context/Filter";
import Input from "../../components/Input";
import Select from "../../components/Select";

import xIcon from "../../assets/images/x-icon.svg";

import { Container, Header, Title, XIcon, Fields } from "./styles";
import Loading from "../Loading";

export default function FilterPlaylist({ active, setIsVisible }) {
  const { filters, selectedFilters, loading } = useContext(FilterStateContext);

  const dispatch = useContext(FilterDispatchContext);

  useEffect(() => {
    loadFilter(dispatch);
  }, [dispatch]);

  const getFieldById = (id) => filters.find((filter) => filter.id === id);

  const locale = getFieldById("locale");
  const country = getFieldById("country");
  const timestamp = getFieldById("timestamp");
  const limit = getFieldById("limit");
  const offset = getFieldById("offset");

  console.log(selectedFilters?.timestamp);

  return (
    <Container active={active}>
      <Header>
        <Title>Filtros</Title>

        <XIcon
          src={xIcon}
          alt="X icon"
          role="button"
          onClick={() => setIsVisible(!active)}
        />
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <Fields>
          <Select field={locale} value={selectedFilters?.locale} />

          <Select field={country} value={selectedFilters?.country} />

          <Input
            field={timestamp}
            type="datetime-local"
            value={selectedFilters?.timestamp}
            step="1"
            placeholder="yyyy-mm-ddThh:mm:ss"
          />

          <Input
            field={limit}
            type="number"
            min={limit?.validation?.min}
            max={limit?.validation?.max}
            value={selectedFilters?.limit}
          />

          <Input field={offset} type="number" value={selectedFilters?.offset} />
        </Fields>
      )}
    </Container>
  );
}
