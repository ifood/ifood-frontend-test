import React from 'react';
import PropTypes from 'prop-types';
import '../styles/nameFilter.scss';

const NameFilter = ({ intl, onChange, ...others }) => (
  <label
    className={`nameFilter ${others.className || ''}`}
    htmlFor="inputName">
    {intl.formatMessage({ id: 'name' })}
    <input
      id="inputName"
      onChange={onChange}
      {...others}
    />
  </label>
);

NameFilter.propTypes = {
  filters: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default NameFilter;
