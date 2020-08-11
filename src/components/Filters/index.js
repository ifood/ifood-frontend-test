import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TextField, FormControl } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { API_MOCKY } from '../../config/API';
import useStyles from '../Filters/styles';
import { format } from 'date-fns';

const Filters = ({ onFilters, filters }) => {
  const classes = useStyles();
  const [locale, setLocale] = useState(null);
  const [country, setCountry] = useState(null);
  const timestamp = format(new Date(), "yyyy-MM-dd'T'HH:mm");

  useEffect(() => {
    (async () => {
      const { data } = await API_MOCKY.get('/5a25fade2e0000213aa90776');
      data.filters.map((item, key) => {
        setLocale(prevState => data.filters[0].values);
        setCountry(prevState => data.filters[1].values);
        return true;
      });
    })();
  }, []);

  return (
    <div className={classes.root}>
      <FormControl fullWidth>
        <Autocomplete
          id="locale"
          options={locale || []}
          size="small"
          getOptionLabel={option => option.name}
          renderInput={params => (
            <TextField
              {...params}
              label="Idioma"
              variant="outlined"
              color="secondary"
            />
          )}
        />
      </FormControl>

      <FormControl fullWidth>
        <Autocomplete
          id="country"
          options={country || []}
          size="small"
          getOptionLabel={option => option.name}
          onChange={(event, newValue) =>
            onFilters(
              Object.assign({
                ...filters,
                country: newValue.value,
              })
            )
          }
          renderInput={params => (
            <TextField
              {...params}
              label="País"
              variant="outlined"
              color="secondary"
            />
          )}
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          id="timestamp"
          color="secondary"
          label="Data e Horário"
          type="datetime-local"
          variant="outlined"
          size="small"
          fullWidth
          defaultValue={timestamp}
          InputLabelProps={{
            shrink: true,
            pattern: 'yyyy-MM-ddTHH:mm',
          }}
          onChange={event =>
            onFilters(
              Object.assign({
                ...filters,
                timestamp: format(
                  new Date(event.target.value),
                  "yyyy-MM-dd'T'HH:mm:ss"
                ),
              })
            )
          }
        />
      </FormControl>
    </div>
  );
};

Filters.propTypes = {
  onFilters: PropTypes.func,
};

export default Filters;
