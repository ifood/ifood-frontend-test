import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'baseui/input';
import { ThemeProvider, createTheme, lightThemePrimitives } from 'baseui';

const FormInput = ({
  id,
  value,
  placeholder,
  clearable,
  onChange,
  backgroundColor,
}) => (
  <ThemeProvider
    theme={createTheme(lightThemePrimitives, {
      colors: { inputFill: backgroundColor },
    })}
  >
    <Input
      id={id}
      value={value}
      placeholder={placeholder}
      clearable={clearable}
      onChange={(e) => onChange({ field: id, value: e.target.value })}
    />
  </ThemeProvider>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  clearable: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
};

FormInput.defaultProps = {
  value: '',
  placeholder: '',
  clearable: false,
  backgroundColor: '#EEEEEE',
};

export default FormInput;
