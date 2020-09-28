import React from "react";
import { DateTimePicker as MaterialDateTimePicker } from '@material-ui/pickers';

type Props = {
  name: string;
  value: string;
  onChange: (date: any) => void;
  format: string;
  clearLabel: string;
  cancelLabel: string;
  clearable: boolean;
}

const DatePickerInput = (
  {
    name,
    value,
    onChange,
    format,
    clearLabel,
    cancelLabel,
    clearable
  }: Props) => {

  return (
    <MaterialDateTimePicker
      label={ name }
      inputVariant="outlined"
      value={ value || null }
      fullWidth
      format={ format }
      clearable={clearable}
      clearLabel={ clearLabel }
      cancelLabel={ cancelLabel }
      onChange={ onChange }
    />
  );
}

export default DatePickerInput;
