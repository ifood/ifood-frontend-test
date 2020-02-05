import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CircularProgress, List, ListItem, Button,
} from '@material-ui/core';
import { reduxForm } from 'redux-form';
import { getFilters } from '../../services/services';
import SelectFilter from './SelectFilter';
import DateTimeFilter from './DateTimeFilter';
import InputFilter from './InputFilter';

class Filters extends Component {
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
        <SelectFilter
          filterName={filter.name}
          values={filter.values}
          key={filter.id}
          id={filter.id}
        />
      );
    }

    if (filter.id === 'limit' || filter.id === 'offset') {
      return (
        <InputFilter
          filterName={filter.name}
          validations={filter.validations}
          key={filter.id}
          id={filter.id}
        />
      );
    }

    return (
      <DateTimeFilter
        filterName={filter.name}
        validations={filter.validations}
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
          <ListItem key={filter.id}>
            {this.renderFilters(filter)}
          </ListItem>
        ))}
        <ListItem>
          <Button
            onClick={reset}
            disabled={pristine}
            color="primary"
            variant="contained"
            fullWidth
          >
            Limpar filtros
          </Button>
        </ListItem>
      </List>
    );
  }
}

Filters.propTypes = {
  reset: PropTypes.func,
  pristine: PropTypes.bool,
};

export default reduxForm({
  form: 'FILTERS_FORM',
})(Filters);
