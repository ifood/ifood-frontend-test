import React, { memo } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import MaterialFormControl from "@material-ui/core/FormControl";
import { FilterValue } from "../../../interfaces/Filter";

type Props = {
  id: string;
  name: string;
  value: string;
  inputs: FilterValue[];
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const SelectInput = (
  {
    id,
    name,
    value,
    inputs,
    onChange
  }: Props
) => {

  return (
    <MaterialFormControl fullWidth variant="outlined">
      <InputLabel id={ id }>
        { name }
      </InputLabel>
      <Select
        labelId={ id }
        label={ name }
        value={ value }
        onChange={ onChange }
      >
        <MenuItem value="">Selecione um item</MenuItem>
        { inputs?.map((input) => (
          <MenuItem value={ input.value } key={ input.value }>
            { input.name }
          </MenuItem>
        )) }
      </Select>
    </MaterialFormControl>
  )
}

export default memo(SelectInput);
