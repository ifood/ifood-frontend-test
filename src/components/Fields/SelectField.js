/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import {
  Select,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: '100%',
  },
}));

const renderSelectField = ({
  input,
  children,
  className,
  label,
  ...custom
}) => (
  <FormControl className={className.formControl}>
    <InputLabel>{label}</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
      }}
    >
      {children}
    </Select>
  </FormControl>
);

renderSelectField.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  input: PropTypes.object,
  className: PropTypes.object,
};

function SelectField({ values, id, filterName }) {
  const classes = useStyles();
  return (
    <Field
      name={id}
      component={renderSelectField}
      className={classes}
      label={filterName}
    >
      <option />
      {values.map(({ value, name }, index) => (
        <option value={value} key={index}>{name}</option>))}
    </Field>
  );
}

SelectField.propTypes = {
  id: PropTypes.string,
  filterName: PropTypes.string,
  values: PropTypes.array,
};

export default SelectField;
