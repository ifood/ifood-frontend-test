import React, { useState, useEffect } from "react";
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
  const [params, setParams] = useState(false);

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

  const handleInputChange = (e, id) => {
    const { value } = e.target;

    if (value !== "") {
      const filter = {
        [id]: value,
      };

      setParams((prevState) => {
        return { ...prevState, ...filter };
      });
    }
  };

  useEffectUpdate(() => {
    if (token) {
      const requestPlaylists = PlaylistsApiService();
      const { getPlaylists } = requestPlaylists;

      getPlaylists(token, params)
        .then((data) => {
          dispatch(updatePlaylists(data));
        })
        .catch(() => {});
    }
  }, [params]);

  return (
    <S.Filters>
      <S.FiltersTitle>Browse in our playlists</S.FiltersTitle>

      <S.FiltersBox>
        {fields.length <= 0 && <Loader />}

        {fields.map((item) => (
          <S.FiltersItem key={item.id}>
            {getFilterField(item, (e) => handleInputChange(e, item.id))}
          </S.FiltersItem>
        ))}
      </S.FiltersBox>
    </S.Filters>
  );
};

export default Filters;
