import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_FILTER_CHANGE } from "../../redux/actions/actionTypes";
import { getApiFiltersData } from "../../services/api/endpoints"

import DateFnsUtils from '@date-io/date-fns';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';

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
          case "pt_BR": updatedFilter.name = "Portuguese (Brazil)"; break;
          case "en_US": updatedFilter.name = "English (US)"; break;
          case "en_AU": updatedFilter.name = "English (Australia)"; break;
          case "de_DE": updatedFilter.name = "German"; break;
          case "fr_FR": updatedFilter.name = "French"; break;
          case "es_AR": updatedFilter.name = "Spanish (Argentina)"; break;
          default: break;
        }
        return updatedFilter;
      });

      response.data.filters[1].values = response.data.filters[1].values.map(filter => {
        let updatedFilter = {...filter}
        switch(updatedFilter.value){
          case "DE": updatedFilter.name = "Germany"; break;
          case "BR": updatedFilter.name = "Brazil"; break;
          case "RU": updatedFilter.name = "Russia"; break;
          case "en_US": {
            updatedFilter.name = "EUA";
            updatedFilter.value = 'US';            
            break;
          }
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
      {apiFiltersData.length === 0 
        ? 
        <div style={{position: 'relative'}}>
          <CircularProgress className={classes.filtersLoader}/>
        </div> 
        : 
        <div className={classes.filtersComponent}>
        <Container maxWidth="sm">
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item xs={6}>
                <FormControl variant="outlined" className={classes.filtersFields}>
                  <InputLabel id="locale-select-label">Language</InputLabel>
                  <Select 
                    labelId="locale-select-label"
                    id="locale-select"
                    label="Language"
                    onChange={event => inputChange(apiFiltersData.locale.id, event.target.value)}
                  >
                    {apiFiltersData.locale.values.map((locale, idx) => (
                      <MenuItem key={idx} value={locale.value}>{locale.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="outlined" className={classes.filtersFields}>
                  <InputLabel id="country-select-label">Country</InputLabel>
                  <Select 
                    labelId="country-select-label"
                    id="country-select"
                    label="Country"
                    onChange={event => inputChange(apiFiltersData.country.id, event.target.value)}
                  >
                    {apiFiltersData.country.values.map((country, idx) => (
                      <MenuItem key={idx} value={country.value}>{country.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DateTimePicker className={classes.filtersFields}
                    inputVariant="outlined"
                    label="Search date (if you're nostalgic <3)"
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
                  <InputLabel id="limit-select-label">Initial limit</InputLabel>
                  <Select 
                    labelId="limit-select-label"
                    id="limit-select"
                    label="Initial limit"
                    onChange={event => inputChange(apiFiltersData.limit.id, event.target.value)}
                  >
                    {limitOptions.map((limit, idx) => (
                      <MenuItem key={idx} value={limit.value}>{limit.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </Container>
        </div>
      }
    </>
  );
}