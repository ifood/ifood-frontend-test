import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as globalActions } from 'store/ducks/global';
import { FiltersWrapper } from './styles';

export const SideFilters = ({
  filtersOptions,
  appliedFilters,
  setAppliedFilterChange,
  getSpotifyPlaylistsRequest,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAppliedFilterChange(name, value);
    setAppliedFilterChange('offset', 0); // Reset pagination on each filter change

    if (name === 'limit') {
      if (value > filtersOptions.limit.validation.max) {
        return;
      }
      getSpotifyPlaylistsRequest(1000);
      return;
    }

    if (name !== 'name') {
      getSpotifyPlaylistsRequest();
    }
  };

  return (
    <FiltersWrapper>
      <h4>Filtros</h4>

      <TextField
        label="Nome"
        name="name"
        value={appliedFilters.name}
        onChange={handleChange}
        margin="normal"
        className="form-control"
      />

      {filtersOptions.timestamp && (
        <TextField
          id="datetime-local"
          label={filtersOptions.timestamp.name}
          name="timestamp"
          type="datetime-local"
          onChange={handleChange}
          value={appliedFilters.timestamp}
          InputLabelProps={{
            shrink: true,
          }}
          className="form-control"
        />
      )}

      {filtersOptions.country && (
        <FormControl className="form-control">
          <InputLabel htmlFor="country">{filtersOptions.country.name}</InputLabel>
          <Select
            value={appliedFilters.country}
            onChange={handleChange}
            inputProps={{ name: 'country', id: 'country' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {filtersOptions.country.values.map((item) => {
              return (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}

      {filtersOptions.locale && (
        <FormControl className="form-control">
          <InputLabel htmlFor="locale">Localidade</InputLabel>
          <Select
            value={appliedFilters.locale}
            onChange={handleChange}
            inputProps={{ name: 'locale', id: 'locale' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {filtersOptions.locale.values.map((item) => {
              return (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}

      {filtersOptions.limit && (
        <FormControl className="form-control">
          <TextField
            label={filtersOptions.limit.name}
            name="limit"
            value={appliedFilters.limit}
            onChange={handleChange}
            type="number"
            error={
              appliedFilters.limit > filtersOptions.limit.validation.max
              || appliedFilters.limit < filtersOptions.limit.validation.min
            }
            helperText={`Escolha um número entre: ${filtersOptions.limit.validation.min} e${' '}
            ${filtersOptions.limit.validation.max}`}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min: filtersOptions.limit.validation.min,
              max: filtersOptions.limit.validation.max,
            }}
            margin="normal"
          />
        </FormControl>
      )}
    </FiltersWrapper>
  );
};

const mapStateToProps = store => ({
  filtersOptions: store.global.filtersOptions,
  appliedFilters: store.global.appliedFilters,
});

const mapDispatchToProps = dispatch => bindActionCreators(globalActions, dispatch);

SideFilters.propTypes = {
  filtersOptions: PropTypes.object.isRequired,
  appliedFilters: PropTypes.object.isRequired,
  setAppliedFilterChange: PropTypes.func.isRequired,
  getSpotifyPlaylistsRequest: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideFilters);
