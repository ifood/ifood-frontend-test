import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';
import { reduxForm } from 'redux-form';
import { getFilters } from '../../services';
import SelectFilter from './SelectFilter';
import DateTimeFilter from './DateTimeFilter';

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
    switch (filter.id) {
      case 'locale':
        return (
          <SelectFilter
            filterName={filter.name}
            values={filter.values}
            key={filter.id}
            id={filter.id}
          />
        );
      case 'country':
        return (
          <SelectFilter
            filterName={filter.name}
            values={filter.values}
            key={filter.id}
            id={filter.id}
          />
        );
      case 'timestamp':
        return (
          <DateTimeFilter
            filterName={filter.name}
            validations={filter.validations}
            key={filter.id}
            id={filter.id}
          />
        );
      default:
        // throw Error('Invalid filter type');
    }
  }

  render() {
    const { filters, isLoadingFilters } = this.state;
    return (
      <>
        {isLoadingFilters && <CircularProgress />}
        {!isLoadingFilters && filters.map((filter) => (
          this.renderFilters(filter)
        ))}
      </>
    );
  }
}

export default reduxForm({
  form: 'FILTERS_FORM',
})(Filters);
