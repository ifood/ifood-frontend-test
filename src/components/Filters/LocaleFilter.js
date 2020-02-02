import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import {
  Select,
  InputLabel,
  FormControl,
} from '@material-ui/core';

const renderSelectField = ({
  input,
  children,
  ...custom
}) => (
  <FormControl>
    <InputLabel htmlFor="age-native-simple">Locale</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: 'Locale',
      }}
    >
      {children}
    </Select>
  </FormControl>
);

renderSelectField.propTypes = {
  children: PropTypes.node,
  input: PropTypes.object,
};

function LocaleFilter({ values, filterName, id }) {
  return (
    <Field name={filterName} component={renderSelectField} id={id}>
      {values.map(({ value, name }, index) => (
        <option value={value} key={index}>{name}</option>))}
    </Field>
  );
}

LocaleFilter.propTypes = {
  id: PropTypes.string,
  filterName: PropTypes.string,
  values: PropTypes.array,
};

export default LocaleFilter;
