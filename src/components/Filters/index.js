import React, { useState, useEffect } from 'react';
import { TextField, FormControl } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { API_MOCKY } from '../../config/API';
import useStyles from '../Filters/styles';
import { format } from 'date-fns';

const Filters = () => {
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
            <TextField {...params} label="Idioma" variant="outlined" />
          )}
        />
      </FormControl>

      <FormControl fullWidth>
        <Autocomplete
          id="country"
          options={country || []}
          size="small"
          getOptionLabel={option => option.name}
          renderInput={params => (
            <TextField {...params} label="País" variant="outlined" />
          )}
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          id="timestamp"
          label="Data e Horário"
          type="datetime-local"
          variant="outlined"
          size="small"
          fullWidth
          defaultValue={timestamp}
          InputLabelProps={{
            shrink: true,
            pattern: 'yyyy-MM-ddTHH:mm:ss',
          }}
        />
      </FormControl>
    </div>
  );
};

export default Filters;
