import React, { useState } from 'react';

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
  onChange?: (value: string) => void;
}

const FilterField: React.FC<FilterFieldProps> = (props) => {
  const {
    id,
    name,
    values,
    validation,
    onChange,
  } = props;

  const [fieldValue, setFieldValue] = useState('');

  const isShrink = id === 'timestamp' || undefined;

  const handleSelectChange = ({ target }: React.ChangeEvent<{ value: unknown }>) => {
    const value = target.value as string;
    setFieldValue(value);

    if (!onChange) {
      return;
    }

    onChange(value);
  };

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
          value={fieldValue}
          label={name}
          onChange={handleSelectChange}
        >
          <MenuItem value="">Selecione</MenuItem>
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
      type={getTextFieldType()}
      value={fieldValue}
      onChange={handleSelectChange}
      InputLabelProps={{
        shrink: isShrink,
      }}
      InputProps={{
        inputProps: {
          min: validation?.min || 1,
          max: validation?.max,
        },
      }}
    />
  );
};

export default FilterField;
