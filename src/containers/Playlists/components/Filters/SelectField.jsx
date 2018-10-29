
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class SelectField extends Component {
  renderValues = () => {
    const { field } = this.props;

    return field.values.map((entry) => {
      return (
        <MenuItem key={entry.value} value={entry.value}>
          {entry.name}
        </MenuItem>
      );
    });
  }

  render() {
    const { field, onChange, value } = this.props;

    if (!field) {
      return null;
    }

    return (
      <TextField
        id={field.id}
        select
        label={field.name}
        value={value}
        fullWidth
        onChange={onChange}
        margin="normal"
      >
        {this.renderValues()}
      </TextField>
    );
  }
}

SelectField.propTypes = {
  field: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

SelectField.defaultProps = {
  field: null,
  onChange: () => false,
  value: '',
};

export default SelectField;
