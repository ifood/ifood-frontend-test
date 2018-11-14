import React from 'react';
import PropTypes from 'prop-types';
import SelectFilter from './SelectFilter';
import InputFilter from './InputFilter';

const APIFilters = ({ filters, onChange, intl }) => {
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
        intl={intl}
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
        intl={intl}
      />;
    }

    // we show nothing in case of an unknown format
  });
};

APIFilters.propTypes = {
  filters: PropTypes.array,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default APIFilters;
