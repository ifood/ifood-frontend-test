import React, { memo } from "react";
import MaterialTextField from "@material-ui/core/TextField";
import { Validation } from "../../../interfaces/Filter";

type Props = {
  name: string;
  value?: string | number;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  validation?: Validation,
  size?: 'small' | 'large'
}

const TextInput = (
  {
    value,
    name,
    onChange,
    validation,
    size
  }: Props
) => {

  const getInputType = (): string => {
    if (validation?.primitiveType === 'INTEGER') {
      return 'number';
    }

    return 'text';
  }

  const getInputSize = (): 'small' | 'medium'  => {
    if (size === 'small') {
      return 'small';
    }

    return 'medium';
  }

  return (
    <MaterialTextField
      label={ name }
      value={ value }
      fullWidth
      size={ getInputSize() }
      type={ getInputType() }
      variant="outlined"
      onChange={ onChange }
      InputProps={ {
        inputProps: {
          min: validation?.min,
          max: validation?.max
        },
      } }
    />
  );
}

export default memo(TextInput);
