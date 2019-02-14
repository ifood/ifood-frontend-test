import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// Component to build the Select Values into a list
const SelectRenderer = ({
  onChange,
  options,
  label,
  inputProps,
  value,
  className,
}) => ((
  <FormControl className={className}>
    <InputLabel htmlFor={inputProps.id}>{label}</InputLabel>
    <Select
      value={value || ''}
      onChange={onChange}
      inputProps={inputProps}>
      {
        options.map(option => ((
          <MenuItem
            key={option.value}
            value={option.value}>
            {option.name}
          </MenuItem>
        )))
      }
    </Select>
  </FormControl>
));

// Prop types that says what type of data in each field
SelectRenderer.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default SelectRenderer;