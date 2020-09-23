import React from 'react';
import { DateTimePicker, DateTimePickerProps } from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { OutlinedTextFieldProps } from '@material-ui/core/TextField/TextField';
import { FilterField as FilterFieldInterface } from '../../../hooks/useFilterFields';

interface FilterFieldProps {
  filterField: FilterFieldInterface;
  value: string | null;
  error?: string;
  onChange: (value: string | null) => void;
}

export const FilterField: React.FC<FilterFieldProps> = ({
  filterField,
  value,
  error,
  onChange,
}) => {
  const fieldSize = 'small' as 'small';
  const fieldVariant = 'outlined' as 'outlined';

  const commonProps = {
    id: filterField.id,
    label: filterField.name,
    size: fieldSize,
    fullWidth: true,
    value,
    error: !!error,
    helperText: error,
  };

  const textFieldProps: OutlinedTextFieldProps = {
    ...commonProps,
    variant: fieldVariant,
    onChange: (element) => onChange(element.target.value),
  };

  const dateTimePickerProps: DateTimePickerProps = {
    ...commonProps,
    inputVariant: fieldVariant,
    onChange: (element) => onChange(element ? element.toISO() : null),
  };

  if (filterField.type === 'datetime') {
    return <DateTimePicker {...dateTimePickerProps} ampm={false} format="dd/MM/yyyy HH:mm" />;
  }

  if (filterField.type === 'select') {
    return (
      <TextField {...textFieldProps} select>
        <MenuItem value="">
          <em>Nenhum</em>
        </MenuItem>
        {filterField.options?.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
    );
  }

  if (filterField.type === 'integer') {
    return (
      <TextField
        {...textFieldProps}
        type="number"
        inputProps={{ min: filterField.validation?.min, max: filterField.validation?.max }}
        onKeyPress={(event) => (event.key === '.' || event.key === ',') && event.preventDefault()} // No decimal value
      />
    );
  }

  return <TextField {...textFieldProps} />;
};
