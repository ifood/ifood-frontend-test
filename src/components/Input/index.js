import React, { useContext } from "react";
import PropTypes from "prop-types";
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

Input.propTypes = {
  field: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
