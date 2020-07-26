/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Col, Spin, Select, Input,
  Row, InputNumber,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';

import { PlaylistActions } from '../../app/redux/actions';
import { PlaylistSelectors, LoadingSelectors } from '../../app/redux/reducers';
import useDebounce from '../../app/hooks/useDebounce';

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
    if (debouncedSearchTerm) {
      dispatch(PlaylistActions.getFeaturedPlaylists(selectedFilters));
    }
  }, [debouncedSearchTerm]);

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
            style={{ width: 120 }}
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
              style={{ width: 200 }}
              enterButton
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </Col>
        )}

        {!filters && loading !== 0 && (
        <Col
          span={24}
          className="home__loading"
        >
          <Spin indicator={(
            <LoadingOutlined
              style={{ fontSize: 50 }}
              className="home__loading__spin"
              spin
            />
          )}
          />
        </Col>
        )}
      </Row>
    </>
  );
};

export default AdvancedFiltersComponent;
