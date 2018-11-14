import React from 'react';
import PropTypes from 'prop-types';
import '../styles/selectFilter.scss';

const SelectFilter = ({
  values,
  id,
  label,
  value,
  onChange,
  intl,
  ...others,
}) => (
    <label
      className={`selectFilter ${others.className || ''}`}
      htmlFor={id}
    >
      {label}
      <select
        id={id}
        value={value}
        onChange={onChange}
        {...others}
      >
        <option value="">{intl.formatMessage({ id: 'select' })}</option>
        {values.map(({ name, value }) =>
          (<option key={value} value={value}>{name}</option>)
        )}
      </select>
    </label>
  );

SelectFilter.propTypes = {
  values: PropTypes.array,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
}

export default SelectFilter;
