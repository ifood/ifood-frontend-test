import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import {
  loadFilter,
  FilterStateContext,
  FilterDispatchContext,
  errorMessage,
} from "../../context/Filter";
import Input from "../../components/Input";
import Select from "../../components/Select";

import xIcon from "../../assets/images/x-icon.svg";

import { Container, Header, Title, XIcon, Fields } from "./styles";
import Loading from "../Loading";
import Error from "../Error";

const FilterPlaylist = ({ active, setIsVisible }) => {
  const { filters, selectedFilters, loading, error } = useContext(
    FilterStateContext
  );

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

  return (
    <Container active={active} role="dialog" aria-live="polite">
      <Header>
        <Title>Filtros</Title>

        <XIcon
          aria-label="Fechar Filtro"
          src={xIcon}
          alt="X icon"
          role="button"
          tabIndex="0"
          onClick={() => setIsVisible(!active)}
        />
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <>
          {error && error !== "" ? (
            <Error message={errorMessage} color="#bf75b3" />
          ) : (
            selectedFilters && (
              <Fields>
                <Select field={locale} value={selectedFilters.locale} />

                <Select field={country} value={selectedFilters.country} />

                <Input
                  field={timestamp}
                  type="datetime-local"
                  value={selectedFilters.timestamp}
                  step="1"
                  place
                  holder="yyyy-mm-ddThh:mm:ss"
                />

                <Input
                  field={limit}
                  type="number"
                  min={limit && limit.validation.min}
                  max={limit && limit.validation.max}
                  value={selectedFilters.limit}
                />

                <Input
                  field={offset}
                  type="number"
                  value={selectedFilters.offset}
                />
              </Fields>
            )
          )}
        </>
      )}
    </Container>
  );
};

FilterPlaylist.propTypes = {
  active: PropTypes.bool,
  setIsVisible: PropTypes.func,
};

export default FilterPlaylist;
