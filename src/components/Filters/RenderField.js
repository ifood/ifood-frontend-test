import React from 'react';
import TextField from '@material-ui/core/TextField';
import SelectRenderer from '../SelectRenderer';

import {
  LOCALE,
  COUNTRY,
  TIMESTAMP,
  LIMIT,
} from '../../constants/filters';

const RenderField = ({
  id,
  values,
  validation,
  filterValues,
}) => {
  switch (id) {
    case LOCALE:
      return ((
        <SelectRenderer
          options={values}
          label="Locale"
          inputProps={{
            name: 'Locale',
            id: 'locale',
          }}
          value={filterValues.locale}
        />
      ));
    case COUNTRY:
      return ((
        <SelectRenderer
          options={values}
          label="Country"
          inputProps={{
            name: 'Country',
            id: 'country',
          }}
          value={filterValues.country}
        />
      ));
    case TIMESTAMP:
      return ((
        <TextField
          id="datetime-local"
          label="Date and time"
          type="datetime-local"
          onChange={() => {}}
          defaultValue="2017-05-24T10:30"
          InputLabelProps={{
            shrink: true,
          }}
          value={filterValues.datetime}
        />
      ));
    case LIMIT:
      return ((
        <TextField
          id="number"
          label="Limit"
          onChange={() => {}}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          min={validation.min}
          max={validation.max}
          margin="normal"
          value={filterValues.limit}
        />
      ));
    default:
      return null;
  }
};

export default RenderField;
