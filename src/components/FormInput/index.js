import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'baseui/input';

const FormInput = ({ id, value, placeholder, onChange }) => (
  <Input
    id={id}
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange({ field: id, value: e.target.value })}
  />
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  value: '',
  placeholder: '',
};

export default FormInput;
