import React from 'react';
import PropTypes from 'prop-types';
import { StatefulSelect } from 'baseui/select';

const FormSelect = ({
  id,
  options,
  value,
  placeholder,
  clearable,
  onChange,
}) => {
  const validateOptions = (items) =>
    items.map((item) => {
      return {
        id: item.value,
        label: item.name,
      };
    });

  return (
    <StatefulSelect
      id={id}
      options={validateOptions(options)}
      value={{ id: value }}
      clearable={clearable}
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
  clearable: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

FormSelect.defaultProps = {
  value: '',
  placeholder: '',
  clearable: false,
};

export default FormSelect;
