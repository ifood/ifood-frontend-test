import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import SelectRenderer from '../SelectRenderer';

import {
  LOCALE,
  COUNTRY,
  TIMESTAMP,
  LIMIT,
  OFFSET,
} from '../../constants/filters';

const RenderField = ({
  id,
  values,
  validation,
  fieldValues,
  onChange,
}) => {
  switch (id) {
    case LOCALE:
      return ((
        <SelectRenderer
          options={values}
          label="Locale"
          inputProps={{
            name: 'locale',
            id: 'locale',
          }}
          value={fieldValues.locale}
          onChange={onChange}
          className="filters-container__field"
        />
      ));
    case COUNTRY:
      return ((
        <SelectRenderer
          options={values}
          label="Country"
          inputProps={{
            name: 'country',
            id: 'country',
          }}
          value={fieldValues.country}
          onChange={onChange}
          className="filters-container__field"
        />
      ));
    case TIMESTAMP:
      return ((
        <TextField
          id="datetime"
          name="datetime"
          label="Date and time"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          InputLabelProps={{
            shrink: true,
          }}
          value={fieldValues.datetime}
          onChange={onChange}
          className="filters-container__field"
        />
      ));
    case LIMIT:
      return ((
        <TextField
          label="Limit"
          name="limit"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          min={validation.min}
          max={validation.max}
          margin="normal"
          defaultValue={validation.min}
          value={fieldValues.limit}
          onChange={onChange}
          className="filters-container__field"
        />
      ));
    case OFFSET:
      return ((
        <TextField
          label="Página"
          name="offset"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          min={1}
          margin="normal"
          defaultValue={1}
          value={fieldValues.offset}
          onChange={onChange}
          className="filters-container__field"
        />
      ));
    default:
      return null;
  }
};

RenderField.propTypes = {
  id: PropTypes.string,
  values: PropTypes.array,
  validation: PropTypes.object,
  fieldValues: PropTypes.object,
  onChange: PropTypes.func,
};

export default RenderField;
