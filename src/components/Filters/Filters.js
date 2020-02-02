import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';
import { reduxForm } from 'redux-form';
import { getFilters } from '../../services';
import LocaleFilter from './LocaleFilter';

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
        return <LocaleFilter id={filter.id} filterName={filter.name} values={filter.values} />;
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
