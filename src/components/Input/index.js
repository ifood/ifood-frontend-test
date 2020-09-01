import React, { useContext } from "react";
import { FilterDispatchContext } from "../../context/Filter";

import { Container, Label, InputField } from "./styles";

const Input = ({ field, type, value, ...rest }) => {
  const dispatch = useContext(FilterDispatchContext);
  return (
    <Container>
      {field && (
        <div>
          <Label htmlFor={field.id}>{field.name}: </Label>
          <InputField
            id={field.id}
            type={type}
            {...rest}
            value={value}
            onChange={(event) =>
              dispatch({
                type: "UPDATE_SELECTED_FILTER",
                payload: { [field.id]: event.target.value },
              })
            }
          />
        </div>
      )}
    </Container>
  );
};

export default Input;
