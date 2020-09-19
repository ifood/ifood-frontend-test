import React, { useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { FormControl, TextField, DateTimePicker } from './styles';

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
  onChange: (value: string) => void;
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
    let value = target.value as string;

    const max = validation?.max;
    const min = validation?.min;

    if (max && Number(value) > max) {
      value = max.toString();
    }

    if (value && min && Number(value) < min) {
      value = min.toString();
    }

    setFieldValue(value);
    onChange(value);
  };

  const handleDateTimePickerChange = (date: any) => {
    const formattedDate = date?.format('yyyy-MM-DDTHH:mm:ss');

    setFieldValue(formattedDate);
    onChange(formattedDate);
  };

  const getTextFieldType = () => {
    if (validation?.primitiveType === 'INTEGER') {
      return 'number';
    }

    return 'text';
  };

  if (values?.length) {
    return (
      <FormControl fullWidth variant="outlined">
        <InputLabel id={`${id}-label`} color="secondary">
          {name}
        </InputLabel>
        <Select
          labelId={`${id}-label`}
          value={fieldValue}
          label={name}
          onChange={handleSelectChange}
          color="secondary"
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

  if (validation?.entityType === 'DATE_TIME') {
    return (
      <DateTimePicker
        clearable
        color="secondary"
        inputVariant="outlined"
        fullWidth
        label={name}
        format="DD-MM-yyyy HH:mm:ss"
        clearLabel="Limpar"
        cancelLabel="Cancelar"
        value={fieldValue || null}
        onChange={handleDateTimePickerChange}
      />
    );
  }

  return (
    <TextField
      color="secondary"
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
          min: validation?.min,
          max: validation?.max,
        },
      }}
    />
  );
};

export default FilterField;
