import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

import * as S from "./styles";

const Select = ({ register, optionId, values }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setValue } = useFormContext();

  return (
    <>
      <S.FieldSelect
        ref={register}
        id={optionId}
        name={optionId}
        type="text"
        onClick={() => setIsOpen(true)}
        readOnly
      />
      {isOpen ? (
        <>
          <S.Close onClick={() => setIsOpen(false)}>x</S.Close>
          <S.Options>
            {values?.map(({ name, value }) => (
              <S.Option
                key={value}
                onClick={() => {
                  setValue(optionId, value);
                  setIsOpen(false);
                }}
              >
                {name}
              </S.Option>
            ))}
          </S.Options>
        </>
      ) : (
        <S.Arrow onClick={() => setIsOpen(true)} />
      )}
    </>
  );
};

Select.propTypes = {
  register: PropTypes.func.isRequired,
  optionId: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
};

export default Select;
