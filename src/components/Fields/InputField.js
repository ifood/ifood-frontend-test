import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import inputLength from '../Validations/inputLength';

const renderTextField = ({
  label,
  input,
  meta,
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    helperText={meta.error}
    {...input}
    {...custom}
    fullWidth
    type="number"
  />
);

renderTextField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

function InputField({ filterName, id, validation }) {
  const hasLengthValidation = !!validation.min;

  return (
    <Field
      name={id}
      component={renderTextField}
      label={filterName}
      validate={hasLengthValidation
        ? (value) => inputLength(value, validation) : undefined}
    />
  );
}

InputField.propTypes = {
  filterName: PropTypes.string,
  id: PropTypes.string,
  validation: PropTypes.object,
};

export default InputField;
