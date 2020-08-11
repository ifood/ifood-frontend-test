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
      <form>
        <FormControl fullWidth>
          <Autocomplete
            id="locale"
            disableClearable
            options={locale || []}
            size="small"
            getOptionLabel={option => option.name}
            onChange={(event, newValue) =>
              onFilters(
                Object.assign({
                  ...filters,
                  locale: newValue.value,
                })
              )
            }
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
            disableClearable
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
        <FormControl fullWidth>
          <TextField
            id="offset"
            name="offset"
            label="Página"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            type="number"
            onChange={event =>
              onFilters(
                Object.assign({ ...filters, offset: event.target.value || 1 })
              )
            }
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="limit"
            name="limit"
            color="secondary"
            label="Quantidade"
            variant="outlined"
            size="small"
            fullWidth
            type="number"
            inputProps={{ min: 1, max: 50 }}
            onChange={event =>
              onFilters(
                Object.assign({ ...filters, limit: event.target.value || 12 })
              )
            }
          />
        </FormControl>
      </form>
    </div>
  );
};

Filters.propTypes = {
  onFilters: PropTypes.func,
};

export default Filters;
