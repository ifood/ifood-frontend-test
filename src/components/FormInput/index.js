import React from 'react';
import PropTypes from 'prop-types';
import { StatefulInput } from 'baseui/input';
import { ThemeProvider, createTheme, lightThemePrimitives } from 'baseui';
import { debounce } from 'lodash';

const FormInput = ({
  id,
  value,
  placeholder,
  clearable,
  debounceTime,
  onChange,
  backgroundColor,
}) => {
  let debouncedFn;

  const handleChange = (e) => {
    e.persist();

    if (!debouncedFn) {
      debouncedFn = debounce(
        () => onChange({ field: id, value: e.target.value }),
        debounceTime,
      );
    }
    debouncedFn();
  };

  return (
    <ThemeProvider
      theme={createTheme(lightThemePrimitives, {
        colors: { inputFill: backgroundColor },
      })}
    >
      <StatefulInput
        id={id}
        value={value}
        placeholder={placeholder}
        clearable={clearable}
        onChange={handleChange}
      />
    </ThemeProvider>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  clearable: PropTypes.bool,
  debounceTime: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
};

FormInput.defaultProps = {
  value: '',
  placeholder: '',
  clearable: false,
  debounceTime: 0,
  backgroundColor: '#EEEEEE',
};

export default FormInput;
