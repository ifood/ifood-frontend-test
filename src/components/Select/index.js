import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FilterDispatchContext } from "../../context/Filter";

import { Container, SelectField, Label } from "./styles";

const Select = ({ field, value }) => {
  const dispatch = useContext(FilterDispatchContext);
  return (
    <Container>
      {field && (
        <div>
          <Label htmlFor={field.id}>{field.name}: </Label>
          <SelectField
            id={field.id}
            onChange={(event) =>
              dispatch({
                type: "UPDATE_SELECTED_FILTER",
                payload: { [field.id]: event.target.value },
              })
            }
            value={value}
          >
            <option value="">Selecione</option>
            {field.values.map((filter) => (
              <option value={filter.value} key={filter.value}>
                {filter.name}
              </option>
            ))}
          </SelectField>
        </div>
      )}
    </Container>
  );
};

Select.propTypes = {
  field: PropTypes.object,
  value: PropTypes.string,
};

export default Select;
