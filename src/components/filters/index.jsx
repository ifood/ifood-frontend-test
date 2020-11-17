import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_FILTER_CHANGE } from "../../redux/actions/actionTypes";
import { getApiFiltersData } from "../../services/api/endpoints"

import DateFnsUtils from '@date-io/date-fns';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import { Autocomplete } from '@material-ui/lab';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { useStyles } from "../../style/styles"

export default function FiltersComponent() {
  const [apiFiltersData, setApiFiltersData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dispatch = useDispatch();
  
  const filtersData = useSelector(store => store.apiFilterChangeReducer.apiFilterSelectedValues);

  const classes = useStyles();

  let limitOptions = [
    { value: "6", label: "6" },
    { value: "12", label: "12" },
    { value: "18", label: "18" },
    { value: "24", label: "24" },
    { value: "30", label: "30" },
    { value: "36", label: "36" },
    { value: "42", label: "42" },
    { value: "48", label: "48" },
    { value: "50", label: "50" },
  ];

  const inputChange = (field, value) => {
    filtersData[field] = value;
    console.log(filtersData);
    dispatch({ type: API_FILTER_CHANGE, apiFilterSelectedValues: filtersData })
  }

  useEffect(() => {
    (async () => {
      let response = await getApiFiltersData();

      response.data.filters[0].values = response.data.filters[0].values.map(filter => {
        let updatedFilter = {...filter}
        switch(updatedFilter.value){
          case "pt_BR": updatedFilter.name = "Português"; break;
          case "en_US": updatedFilter.name = "Ingles (EUA)"; break;
          case "en_AU": updatedFilter.name = "Inglês (Australia)"; break;
          case "de_DE": updatedFilter.name = "Alemão"; break;
          case "fr_FR": updatedFilter.name = "Francês"; break;
          case "es_AR": updatedFilter.name = "Espanhol (Argentina)"; break;
          default: break;
        }
        return updatedFilter;
      });

      setApiFiltersData({
        locale: {...response.data.filters[0]},
        country: {...response.data.filters[1]},
        timestamp: {...response.data.filters[2]},
        limit: {...response.data.filters[3]},
        offset: {...response.data.filters[4]}
      })
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {apiFiltersData.length === 0 ? <></> : 
        <div className={classes.filtersComponent}>
        <Container maxWidth="sm">
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item xs={6}>
                <Autocomplete className={classes.filtersFields}
                  id="autocomplete-locale"
                  options={apiFiltersData.locale.values}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => <TextField {...params} label="Idioma" variant="outlined" />}
                  onChange={(_, value) => {
                    inputChange(apiFiltersData.locale.id, value.value)
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Autocomplete className={classes.filtersFields}
                  id="autocomplete-country"
                  options={apiFiltersData.country.values}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => <TextField {...params} label="País" variant="outlined" />}
                  onChange={(_, value) => {
                    inputChange(apiFiltersData.country.id, value.value)
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DateTimePicker className={classes.filtersFields}
                    inputVariant="outlined"
                    label="Data de busca (nostalgia <3)"
                    value={selectedDate}
                    format="dd/MM/yyyy HH:mm"
                    ampm={false}
                    onChange={(event) => {
                      setSelectedDate(event)
                      console.log(event.toISOString().substr(0, 19));
                      inputChange(apiFiltersData.timestamp.id, selectedDate.toISOString().substr(0, 19))
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="outlined" className={classes.filtersFields}>
                  <InputLabel id="limit-select-label">Limite</InputLabel>
                  <Select 
                    labelId="limit-select-label"
                    id="limit-select"
                    label="Limite"
                    onChange={event => inputChange(apiFiltersData.limit.id, event.target.value)}
                  >
                    {limitOptions.map((limit, idx) => (
                      <MenuItem key={idx} value={limit.value}>{limit.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* <Grid item xs={6}>
                <TextField
                  id="outlined-number"
                  label="Offset"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={event => {
                    inputChange(apiFiltersData.offset.id, event.target.value)
                  }}
                />
              </Grid> */}
            </Grid>
          </div>
        </Container>
        </div>
      }
    </>
  );
}