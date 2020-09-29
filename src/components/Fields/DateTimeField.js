import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

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

function DateTimeField({ filterName, id, validation }) {
    return (
        <Field
            name={id}
            component={renderDateTimerField}
            label={filterName}
            parse={(value) => moment(value).toISOString(validation.pattern)}
        />
    );
}

DateTimeField.propTypes = {
    id: PropTypes.string,
    filterName: PropTypes.string,
    validation: PropTypes.object,
};

export default DateTimeField;
