import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({
  label,
  input,
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    {...input}
    {...custom}
    fullWidth
    type="number"
  />
);

renderTextField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
};

function InputField({ filterName, id }) {
  return (
    <Field
      name={id}
      component={renderTextField}
      label={filterName}
    />
  );
}

InputField.propTypes = {
  filterName: PropTypes.string,
  id: PropTypes.string,
};

export default InputField;
