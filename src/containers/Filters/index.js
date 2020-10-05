import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "components/Button";
import Loader from "components/Loader";
import FiltersApiService from "services/filters";
import PlaylistsApiService from "services/playlists";
import { getFilterField } from "helpers/getFilterField";
import { filtersContainerData } from "constants/data/containers/Filters";

import {
  updatePlaylists,
  updatePlaylistsStatus,
  removePlaylists,
  filterPlaylists,
  removeFilteredPlaylists,
} from "store/modules/playlists/actions";

import * as S from "./styled";

const Filters = () => {
  const [fields, setFields] = useState([]);
  const [dataStart, setDataStart] = useState(new Date());
  const [params, setParams] = useState(false);
  const [limitSize, setLimitSize] = useState(false);
  const [offsetIsNegative, setOffsetIsNegative] = useState(false);
  const [generalError, setGeneralError] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.authentication.token);
  const currentPlaylists = useSelector((state) => state.playlists.items);

  useEffect(() => {
    const requestFilters = FiltersApiService();
    const { getFilters } = requestFilters;

    getFilters()
      .then((response) => {
        setFields(response);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  const updateParams = useCallback((id, value) => {
    const filter = {
      [id]: value,
    };

    setParams((prevState) => {
      return { ...prevState, ...filter };
    });
  }, []);

  const applyFilters = useCallback(() => {
    if (token) {
      const requestPlaylists = PlaylistsApiService();
      const { getPlaylists } = requestPlaylists;

      getPlaylists(token, params)
        .then((data) => {
          if (data.length === 0) {
            dispatch(updatePlaylistsStatus(true));
            dispatch(removePlaylists());
          } else {
            dispatch(updatePlaylistsStatus(false));
          }
          setGeneralError(false);
          dispatch(updatePlaylists(data));
        })
        .catch(() => {
          setGeneralError(true);
          dispatch(removePlaylists());
        });
    }
  }, [dispatch, params, token]);

  const handleInputChange = useCallback(
    (e, id) => {
      const { value } = e.target;

      if (id === "offset" && Number(value) < 0) {
        return setOffsetIsNegative(true);
      }

      setOffsetIsNegative(false);

      if (id === "limit" && (Number(value) > 50 || Number(value) < 1)) {
        return setLimitSize(true);
      }

      setLimitSize(false);

      if (id === "country" && value === "en_US") {
        return updateParams(id, "US");
      }

      if (value !== "") {
        return updateParams(id, value);
      }
    },
    [updateParams]
  );

  const handleDateChange = useCallback(
    (date, id) => {
      const convertedDate = date.toISOString();

      updateParams(id, convertedDate);

      setDataStart(date);
    },
    [updateParams]
  );

  const fieldsSize = useMemo(() => {
    return fields.length === 0;
  }, [fields]);

  const fieldsLoaded = useMemo(() => {
    return fields.length > 0;
  }, [fields]);

  const searchByName = useCallback(
    (e) => {
      const { value } = e.target;

      const searchTermToLowercase = value.toLocaleLowerCase();

      const filteredItems = currentPlaylists.filter(({ name }) =>
        name.toLocaleLowerCase().includes(searchTermToLowercase)
      );

      if (value === "") {
        return (
          dispatch(updatePlaylistsStatus(false)),
          dispatch(removeFilteredPlaylists())
        );
      }

      if (filteredItems.length !== 0) {
        return (
          dispatch(updatePlaylistsStatus(false)),
          dispatch(filterPlaylists(filteredItems))
        );
      }

      if (value !== "" && filteredItems.length === 0) {
        return (
          dispatch(updatePlaylistsStatus(true)),
          dispatch(removeFilteredPlaylists())
        );
      }
    },
    [currentPlaylists, dispatch]
  );

  return (
    <S.Filters>
      <S.FilterByName
        onChange={(e) => searchByName(e)}
        placeholder={filtersContainerData.search_name_label}
      />

      <S.FiltersBox>
        {fieldsSize && <Loader />}

        {offsetIsNegative && (
          <S.FiltersValidation>
            {filtersContainerData.errors.offset}
          </S.FiltersValidation>
        )}

        {limitSize && (
          <S.FiltersValidation>
            {filtersContainerData.errors.limit}
          </S.FiltersValidation>
        )}

        {generalError && (
          <S.FiltersValidation>
            {filtersContainerData.errors.general}
          </S.FiltersValidation>
        )}

        {fields.map((item) => (
          <S.FiltersItem key={item.id} fieldType={item.id}>
            {getFilterField(
              item,
              (e) => handleInputChange(e, item.id),
              (date) => handleDateChange(date, item.id),
              dataStart
            )}
          </S.FiltersItem>
        ))}

        {fieldsLoaded && (
          <Button label="Aplicar Filtros" onClick={() => applyFilters()} />
        )}
      </S.FiltersBox>
    </S.Filters>
  );
};

export default Filters;
