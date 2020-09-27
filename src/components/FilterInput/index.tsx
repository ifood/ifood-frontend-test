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

  const getTextFieldType = () => validation?.primitiveType === 'STRING' ? 'text' : 'number;';

  if (values?.length) {
    return (
      <MaterialFormControl fullWidth variant="outlined">
        <InputLabel id={ id }>
          { name }
        </InputLabel>
        <Select
          labelId={ id }
          label={ name }
          value={ filterValue }
          onChange={ handleInputSelectChange }
        >
          <MenuItem value="">Selecione</MenuItem>
          { values?.map((value) => (
            <MenuItem value={ value.value } key={ value.value }>
              { value.name }
            </MenuItem>
          )) }
        </Select>
      </MaterialFormControl>
    );
  }

  if (validation?.entityType === 'DATE_TIME') {
    return (
      <MaterialDateTimePicker
        label={ name }
        inputVariant="outlined"
        value={ filterValue || null }
        fullWidth
        format="DD/MM/yyyy HH:mm:ss"
        clearable
        clearLabel="Limpar"
        cancelLabel="Cancelar"
        onChange={ handleInputSelectDatePickerType }
      />
    );
  }

  return (
    <MaterialTextField
      label={ name }
      value={ filterValue }
      fullWidth
      type={ getTextFieldType() }
      variant="outlined"
      onChange={ handleInputSelectChange }
      InputProps={ {
        inputProps: {
          min: validation?.min,
        },
      } }
    />
  );
}

export default FilterInput;
