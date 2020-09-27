import React, { useState } from "react";

import MaterialTextField from '@material-ui/core/TextField';
import MaterialFormControl from '@material-ui/core/FormControl';
import { DateTimePicker as MaterialDateTimePicker } from '@material-ui/pickers';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Validation } from "../../interfaces/Filter";

export type Props = {
  id?: string;
  name?: string;
  values?: { value: string; name: string; }[];
  validation?: Validation,
  onChange: (value: string) => void;
  pattern?: string;
}

const FilterInput: React.FC<Props> = ({
  id,
  name,
  values,
  validation,
  onChange,
  pattern
}) => {

  const [filterValue, setFilterValue] = useState('');

  const handleInputSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let value = event.target.value as string;

    const min = validation?.min;

    if (value && min && Number(value) < min) {
      value = min.toString();
    }

    setFilterValue(value);
    onChange(value);
  };

  const handleInputSelectDatePickerType = (date: any) => {
    const formattedDate = date.format(pattern);

    setFilterValue(formattedDate);
    onChange(formattedDate);
  };

  const getTextFieldType = () => validation?.primitiveType === 'STRING' ? 'text': 'number;';

  if (values?.length) {
    return (
      <MaterialFormControl fullWidth variant="outlined" data-testid="select">
        <InputLabel id={`${id}-label`} color="secondary">
          {name}
        </InputLabel>
        <Select
          labelId={`${id}-label`}
          value={filterValue}
          label={name}
          onChange={handleInputSelectChange}
          color="secondary"
        >
          <MenuItem value="">Selecione</MenuItem>
          {values?.map((selectValue) => (
            <MenuItem value={selectValue.value} key={selectValue.value}>
              {selectValue.name}
            </MenuItem>
          ))}
        </Select>
      </MaterialFormControl>
    );
  }

  if (validation?.entityType === 'DATE_TIME') {
    return (
      <MaterialDateTimePicker
        clearable
        color="secondary"
        inputVariant="outlined"
        fullWidth
        label={name}
        format="DD-MM-yyyy HH:mm:ss"
        clearLabel="Limpar"
        cancelLabel="Cancelar"
        value={filterValue || null}
        onChange={handleInputSelectDatePickerType}
      />
    );
  }

  return (
    <MaterialTextField
      color="secondary"
      variant="outlined"
      fullWidth
      label={name}
      type={getTextFieldType()}
      value={filterValue}
      onChange={handleInputSelectChange}
      InputProps={{
        inputProps: {
          min: validation?.min,
        },
      }}
    />
  );
}

export default FilterInput;
