import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import TextField from '@material-ui/core/TextField';

import { getFilters } from '../../services/filterServices';
import { updateFilters } from '../../redux/actions/updateFilters';

import RenderField from './RenderField';

class Filters extends Component {

  static propTypes = {
    filterByName: PropTypes.func,
    filterValues: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      filtersFields: [],
      filterValues: {},
    };
  }

  componentDidMount() {
    getFilters()
      .then((response) => {
        const { filters } = response.data;

        this.setState({
          filtersFields: filters,
        });
      });
  }

  updateFilterValues = (filterValues) => {
    const currentFilterValues = this.filterValues;
    this.setState({
      ...currentFilterValues,
      filterValues,
    });

    //atualiza action
  }

  render() {
    const { filtersFields } = this.state;
    const { filterByName, filterValues } = this.props;
    return (
      <div className="filters-container">
        <TextField
          id="search"
          label="Search by name"
          onChange={filterByName}
          margin="normal"
        />
        {
          filtersFields.map(field => ((
            <RenderField
              {...field}
              key={field.id}
              filterValues={filterValues}
            />
          )))
        }
      </div>
    );
  }
}

export default Filters;
