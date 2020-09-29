import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CircularProgress, List, ListItem, Button,
} from '@material-ui/core';
import { reduxForm } from 'redux-form';
import { getFilters } from '../../services/services';
import SelectField from '../Fields/SelectField';
import DateTimeField from '../Fields/DateTimeField';
import InputField from '../Fields/InputField';

export class RawFilters extends Component {
  state = {
    filters: null,
    isLoadingFilters: true,
  }

  componentDidMount() {
    getFilters()
      .then(((filters) => this.setState({ filters, isLoadingFilters: false })));
  }

  renderFilters(filter) {
    if (filter.id === 'locale' || filter.id === 'country') {
      return (
        <SelectField
          filterName={filter.name}
          values={filter.values}
          key={filter.id}
          id={filter.id}
        />
      );
    }

    if (filter.id === 'limit' || filter.id === 'offset') {
      return (
        <InputField
          filterName={filter.name}
          validation={filter.validation}
          key={filter.id}
          id={filter.id}
        />
      );
    }

    return (
      <DateTimeField
        filterName={filter.name}
        validation={filter.validation}
        key={filter.id}
        id={filter.id}
      />
    );
  }

  render() {
    const { filters, isLoadingFilters } = this.state;
    const { reset, pristine } = this.props;

    return (
      <List>
        {isLoadingFilters && <CircularProgress />}
        {!isLoadingFilters && filters.map((filter) => (
          <ListItem key={filter.id} data-test-id="filter-item">
            {this.renderFilters(filter)}
          </ListItem>
        ))}
        <ListItem>
          {/* <Button
            onClick={reset}
            disabled={pristine}
            color="primary"
            variant="contained"
            fullWidth
          >
            Limpar filtros
          </Button> */}
        </ListItem>
      </List>
    );
  }
}

RawFilters.propTypes = {
  reset: PropTypes.func,
  pristine: PropTypes.bool,
};

export default reduxForm({
  form: 'FILTERS_FORM',
})(RawFilters);
