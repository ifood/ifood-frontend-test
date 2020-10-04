import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loader from "components/Loader";

import useEffectUpdate from "hooks/useEffectUpdate";

import { updatePlaylists } from "store/modules/playlists/actions";

import { getFilterField } from "helpers/getFilterField";

import FiltersApiService from "services/filters";
import PlaylistsApiService from "services/playlists";

import * as S from "./styled";

const Filters = () => {
  const [fields, setFields] = useState([]);
  const [dataStart, setDataStart] = useState(new Date());
  const [params, setParams] = useState(false);
  const [limitSize, setLimitSize] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.authentication.token);

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

  const handleInputChange = useCallback(
    (e, id) => {
      const { value } = e.target;

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

  useEffectUpdate(() => {
    if (token) {
      const requestPlaylists = PlaylistsApiService();
      const { getPlaylists } = requestPlaylists;

      getPlaylists(token, params)
        .then((data) => {
          dispatch(updatePlaylists(data));
        })
        .catch(() => {
          console.log("tentou filtrar e deu erro");
        });
    }
  }, [params]);

  const fieldsSize = useMemo(() => {
    return fields.length === 0;
  }, [fields]);

  return (
    <S.Filters>
      <S.FiltersTitle>Browse in our playlists</S.FiltersTitle>

      <S.FiltersBox>
        {fieldsSize && <Loader />}

        {limitSize && (
          <S.FiltersValidation>
            Erro: Por favor digite um número entre 1 e 50 para o campo de
            quantidade
          </S.FiltersValidation>
        )}

        {fields.map((item) => (
          <S.FiltersItem key={item.id}>
            {getFilterField(
              item,
              (e) => handleInputChange(e, item.id),
              (date) => handleDateChange(date, item.id),
              dataStart
            )}
          </S.FiltersItem>
        ))}
      </S.FiltersBox>
    </S.Filters>
  );
};

export default Filters;
