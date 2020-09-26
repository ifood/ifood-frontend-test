import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'baseui/select';

const FormSelect = ({ id, options, value, placeholder, onChange }) => {
  const validateOptions = (items) =>
    items.map((item) => {
      return {
        id: item.value,
        label: item.name,
      };
    });

  return (
    <Select
      id={id}
      options={validateOptions(options)}
      value={{ id: value }}
      placeholder={placeholder}
      onChange={(params) =>
        onChange({
          field: id,
          value: params.value[0].id || '',
        })
      }
    />
  );
};

FormSelect.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FormSelect.defaultProps = {
  value: '',
  placeholder: '',
};

export default FormSelect;
