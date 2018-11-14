import React from 'react';
import PropTypes from 'prop-types';
import SelectFilter from './SelectFilter';
import InputFilter from './InputFilter';

const APIFilters = ({ filters, onChange }) => {
  if (!filters || filters.length === 0) {
    return null;
  }

  return filters.map((item) => {
    if (item.hasOwnProperty('values')) {
      return <SelectFilter
        key={item.id}
        id={item.id}
        label={item.name}
        value={item.stateValue}
        onChange={onChange(item.id)}
        values={item.values}
      />
    }

    if (item.hasOwnProperty('validation')) {
      return <InputFilter
        key={item.id}
        id={item.id}
        label={item.name}
        value={item.stateValue}
        onChange={onChange(item.id)}
        validation={item.validation}
      />;
    }

    // we show nothing in case of an unknown format
  });
};

APIFilters.propTypes = { filters: PropTypes.array };

export default APIFilters;
