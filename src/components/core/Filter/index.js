import React from "react";
import PropTypes from "prop-types";
import { useForm, FormContext } from "react-hook-form";

import { handleInputMask } from "helpers/masks";

import { CustomColumns } from "components/core/Grid";
import Button from "components/core/Button";
import Select from "components/core/Select";
import Loading from "components/core/Loading";

import * as S from "./styles";

const Filter = ({ isLoading, options, handleFilter }) => {
  const { register, handleSubmit, ...methods } = useForm({
    mode: "onChange",
    reValidateMode: "onBlur",
    submitFocusError: true,
  });

  const { setValue } = methods;

  return (
    <Loading isLoading={isLoading}>
      <S.Div>
        <FormContext setValue={setValue} {...methods}>
          <form autoComplete="off" onSubmit={handleSubmit(handleFilter)}>
            <CustomColumns minmax="150px">
              {options.map((option) => (
                <S.Wrapper key={option.id}>
                  {!option.values ? (
                    <S.Field
                      name={option.id}
                      id={option.id}
                      type="text"
                      ref={register}
                      onInput={(e) => {
                        option?.validation?.primitiveType &&
                          handleInputMask(
                            e,
                            option.validation.primitiveType,
                            option.validation?.entityType
                          );
                      }}
                    />
                  ) : (
                    <Select
                      register={register}
                      optionId={option.id}
                      values={option.values}
                    />
                  )}
                  <S.Label htmlFor={option.id}>{option.name}</S.Label>

                  {option.validation?.pattern && (
                    <S.Format>Formato: {option.validation?.pattern}</S.Format>
                  )}
                </S.Wrapper>
              ))}
            </CustomColumns>

            <Button margin="1rem 0 0">Filtrar</Button>
          </form>
        </FormContext>
      </S.Div>
    </Loading>
  );
};

Filter.propTypes = {
  isLoading: PropTypes.bool,
  handleFilter: PropTypes.func.isRequired,
  options: PropTypes.array,
};

Filter.defaultProps = {
  isLoading: false,
  options: [],
};

export default Filter;
