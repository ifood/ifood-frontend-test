import React, { useState } from "react";
import { Validation } from "../../../../interfaces/Filter";
import TextInput from "../../../Inputs/TextInput";
import SelectInput from "../../../Inputs/SelectInput";
import DatePickerInput from "../../../Inputs/DatePickerInput";

export type Props = {
  id?: string;
  name?: string;
  values?: { value: string; name: string; }[];
  validation?: Validation,
  onChange: (value: string) => void;
  pattern?: string;
}

const FilterInput: React.FC<Props> = (
  {
    id,
    name,
    values,
    validation,
    onChange,
    pattern
  }) => {

  const [filterValue, setFilterValue] = useState('');

  const validateMaxMinValue = (value: string) => {
    const min = validation?.min;
    const max = validation?.max;

    if (value && min && Number(value) < min) {
      value = min.toString();
    }

    if (max && Number(value) > max) {
      value = max.toString();
    }

    return value;
  }

  const handleInputSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let value = event.target.value as string;

    value = validateMaxMinValue(value);

    setFilterValue(value);
    onChange(value);
  };

  const handleInputSelectDatePickerType = (date: any) => {
    const formattedDate = date.format(pattern);
    setFilterValue(formattedDate);
    onChange(formattedDate);
  };

  if (values?.length) {
    return (
      <SelectInput
        id={id!}
        name={name!}
        value={filterValue}
        inputs={values}
        onChange={handleInputSelectChange}
      />
    );
  }

  if (validation?.entityType === 'DATE_TIME') {
    return (
      <DatePickerInput
        name={ name! }
        value={ filterValue! }
        format="DD/MM/yyyy HH:mm:ss"
        clearable
        clearLabel="Limpar"
        cancelLabel="Cancelar"
        onChange={ handleInputSelectDatePickerType }
      />
    );
  }

  return (
    <TextInput
      name={ name! }
      value={ filterValue }
      onChange={ handleInputSelectChange }
      validation={ validation }
    />
  );
}

export default FilterInput;
