import React, { useState, useEffect } from 'react';
import {
  Col, Spin, Select, Input, DatePicker,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import moment from 'moment';

import { PlaylistActions } from '../../app/redux/actions';
import { PlaylistSelectors, LoadingSelectors } from '../../app/redux/reducers';

import './AdvancedFiltersComponent.less';

const { Option } = Select;

const AdvancedFiltersComponent = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => LoadingSelectors.getLoading(state));
  const filters = useSelector((state) => PlaylistSelectors.getPlaylistFilters(state));
  const featuredPlaylists = useSelector((state) => PlaylistSelectors.getPlaylists(state));

  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    dispatch(PlaylistActions.getFeaturedPlaylists(selectedFilters));
  }, [selectedFilters, dispatch]);

  const onFieldChange = (filterId, value) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterId]: value,
    }));
  };

  const renderAdvancedFilter = (filter) => {
    if (filter.values) {
      return (
        <Col
          span={3}
          className="px-2"
          key={filter.id}
        >
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
        </Col>
      );
    }
    if (filter.validation && filter.validation.entityType === 'DATE_TIME') {
      return (
        <DatePicker
          showTime={{ format: 'HH:mm' }}
          onOk={(value) => onFieldChange(filter.id, moment(value).format(filter.validation.pattern))}
          // format={filter.validation.pattern}
          // onOk={onOk}
        />
      );
    }
    return (
      <Col
        span={5}
        className="px-2"
        key={filter.id}
      >
        <Input placeholder={filter.name} />
      </Col>
    );
  };

  return (
    <>
      <Col span={6}>
        {featuredPlaylists && (
        <h3 className="home__header__title">{featuredPlaylists.message}</h3>
        )}
        {loading !== 0 && (
          <Spin indicator={(
            <LoadingOutlined
              style={{ fontSize: 50 }}
              className="home__loading__spin"
              spin
            />
            )}
          />
        )}
      </Col>

      <Col span={18}>
        {filters && filters.map((filter) => renderAdvancedFilter(filter))}
      </Col>

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
    </>
  );
};

export default AdvancedFiltersComponent;
