import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Field = ({ as, type, options, onChange, inputName }) => {
  return (
    <S.Field
      as={as}
      placeholder={inputName}
      type={type}
      onChange={onChange}
      defaultValue="DEFAULT"
    >
      {options && options.length >= 0 && (
        <>
          <option value="DEFAULT" disabled>
            {inputName}
          </option>

          {options.map(({ value, name }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </>
      )}
    </S.Field>
  );
};

Field.defaultProps = {
  inputName: "",
  as: null,
  type: "text",
  options: null,
  onChange: () => {},
};

Field.propTypes = {
  inputName: PropTypes.string,
  as: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default Field;
