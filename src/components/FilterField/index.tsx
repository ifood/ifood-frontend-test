import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { FormControl, TextField } from './styles';

export interface FilterFieldProps {
  id: string;
  name: string;
  values?: { value: string; name: string; }[];
  validation?: {
    primitiveType?: 'STRING' | 'INTEGER';
    entityType?: 'DATE_TIME';
    min?: number;
    max?: number;
  },
  value: string | number | null | undefined;
  onChange?: (value: string) => void;
}

const FilterField: React.FC<FilterFieldProps> = (props) => {
  const {
    id,
    name,
    value,
    values,
    validation,
  } = props;

  const isShrink = id === 'timestamp' || undefined;

  const getTextFieldType = () => {
    if (validation?.primitiveType === 'INTEGER') {
      return 'number';
    }

    if (validation?.entityType === 'DATE_TIME') {
      return 'datetime-local';
    }

    return 'text';
  };

  if (values?.length) {
    return (
      <FormControl fullWidth variant="outlined">
        <InputLabel id={`${id}-label`}>
          {name}
        </InputLabel>
        <Select
          labelId={`${id}-label`}
          value={value}
          label={name}
        >
          <MenuItem value={undefined}>Selecione</MenuItem>
          {values?.map((selectValue) => (
            <MenuItem value={selectValue.value} key={selectValue.value}>
              {selectValue.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
  return (
    <TextField
      variant="outlined"
      fullWidth
      label={name}
      value={value}
      type={getTextFieldType()}
      defaultValue={null}
      InputLabelProps={{
        shrink: isShrink,
      }}
      InputProps={{
        inputProps: {
          min: validation?.min,
          max: validation?.max,
        },
      }}
    />
  );
};

export default FilterField;
