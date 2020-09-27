import React, { useState } from 'react';

import { FormControl, TextField, DateTimePicker, Select, InputLabel, MenuItem } from './styles';

export interface IFilterProps {
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

const Filters: React.FC<IFilterProps> = (props) => {
  const {
    id,
    name,
    values,
    validation,
    onChange,
  } = props;

  const [fieldValues, setFieldValues] = useState('');

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

    setFieldValues(value);
    onChange(value);
  };

  const handleDateTimePickerChange = (date: any) => {
    const formattedDate = date?.format('yyyy-MM-DDTHH:mm:ss');

    setFieldValues(formattedDate);
    onChange(formattedDate);
  };

  const getText = () => {
    if (validation?.primitiveType === 'INTEGER') {
      return 'number';
    }

    return 'text';
  };

  if (values?.length) {
    return (
      <FormControl>
        <InputLabel id={`${id}-label`} color="secondary">
          {name}
        </InputLabel>
        <Select
          labelId={`${id}-label`}
          value={fieldValues}
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
        data-testid="date-time-picker"  
        label={name}
        format="DD-MM-yyyy HH:mm:ss"
        clearLabel="Limpar"
        cancelLabel="Cancelar"
        value={fieldValues || null}
        onChange={handleDateTimePickerChange}
      />
    );
  }

  return (
    <TextField
      data-testid="text-field"
      color="secondary"
      variant="outlined"
      fullWidth
      label={name}
      type={getText()}
      value={fieldValues}
      onChange={handleSelectChange}
      InputProps={{
        inputProps: {
          min: validation?.min,
          max: validation?.max,
        },
      }}
    />
  );
};

export default Filters;
