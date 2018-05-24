import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SelectRenderer = ({
  onChange,
  options,
  label,
  inputProps,
}) => ((
  <FormControl>
    <InputLabel htmlFor={inputProps.id}>{label}</InputLabel>
    <Select
      value=""
      onChange={onChange}
      inputProps={inputProps}
    >
      {
        options.map(option => ((
          <MenuItem
            key={option.value}
            value={option.value}
          >
            {option.name}
          </MenuItem>
        )))
      }
    </Select>
  </FormControl>
));

SelectRenderer.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  inputProps: PropTypes.object,
  label: PropTypes.string,
};

export default SelectRenderer;
