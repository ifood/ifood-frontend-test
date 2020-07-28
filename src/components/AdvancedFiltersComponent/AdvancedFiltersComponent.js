/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Col, Select, Input,
  Row, InputNumber,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { PlaylistActions } from '../../app/redux/actions';
import { PlaylistSelectors, LoadingSelectors } from '../../app/redux/reducers';
import useDebounce from '../../app/hooks/useDebounce';
import useInterval from '../../app/hooks/useInterval';

import Loading from '../shared/Loading';
import './AdvancedFiltersComponent.less';


const { Option } = Select;
const { Search } = Input;

const AdvancedFiltersComponent = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => LoadingSelectors.getLoading(state));
  const filters = useSelector((state) => PlaylistSelectors.getPlaylistFilters(state));

  const [selectedFilters, setSelectedFilters] = useState({});

  const debouncedSearchTerm = useDebounce(selectedFilters, 500);


  useEffect(() => {
    dispatch(PlaylistActions.getPlaylistFilters());
  }, [dispatch]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(PlaylistActions.getFeaturedPlaylists(selectedFilters));
    }
  }, [debouncedSearchTerm]);

  useInterval(() => {
    dispatch(PlaylistActions.getFeaturedPlaylists(selectedFilters));
  }, 30000);

  const onFieldChange = (filterId, value) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterId]: value,
    }));
  };

  const renderAdvancedFilter = (filter) => {
    if (filter.values) {
      return (
        <div className="advanced-filters__item">
          <Select
            className="advanced-filters__item__select"
            placeholder={filter.name}
            onChange={(value) => onFieldChange(filter.id, value)}
          >
            {filter.values.map(({ value, name }) => (
              <Option
                key={value}
                value={value}
              >{name}
              </Option>
            ))}
          </Select>
        </div>
      );
    }
    if (filter.validation && filter.validation.entityType === 'DATE_TIME') {
      return;
    }
    return (
      <div className="advanced-filters__item">
        <InputNumber
          placeholder={filter.name}
          onChange={(value) => onFieldChange(filter.id, value)}
          min={filter.validation.min || undefined}
          max={filter.validation.max || undefined}
        />
      </div>
    );
  };

  return (
    <>
      <Row
        type="flex"
        align="middle"
      >
        {filters && (
        <Col
          span={24}
          className="advanced-filters"
        >
          {filters.map((filter) => renderAdvancedFilter(filter))}

          <div className="advanced-filters__item">
            <Search
              placeholder="Buscar por nome"
              className="advanced-filters__item__search"
              enterButton
            />
          </div>
        </Col>
        )}

        {!filters && loading !== 0 && (<Loading />)}
      </Row>
    </>
  );
};

export default AdvancedFiltersComponent;
