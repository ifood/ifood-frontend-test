import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const renderDateTimerField = ({
  label,
  input,
  className,
  ...custom
}) => (
  <TextField
    InputLabelProps={{ shrink: true }}
    type="datetime-local"
    label={label}
    {...input}
    {...custom}
  />
);

renderDateTimerField.propTypes = {
  className: PropTypes.object,
  label: PropTypes.string,
  input: PropTypes.object,
};

function DateTimeFilter({ filterName, id }) {
  return (
    <Field
      name={id}
      component={renderDateTimerField}
      label={filterName}
    />
  );
}

DateTimeFilter.propTypes = {
  id: PropTypes.string,
  filterName: PropTypes.string,
};

export default DateTimeFilter;
