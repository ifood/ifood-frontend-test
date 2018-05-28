import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import { getFilters } from '../../services/filterServices';

import RenderField from './RenderField';

class Filters extends Component {

  static propTypes = {
    filterByName: PropTypes.func,
    filterValues: PropTypes.object,
    onChangeFilters: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      filtersFields: [],
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

  render() {
    const { filtersFields } = this.state;
    const {
      filterByName,
      filterValues,
      onChangeFilters,
    } = this.props;

    return (
      <div className="filters-container">
        <TextField
          id="search"
          label="Search by name"
          onChange={filterByName}
          className="filters-container__field"
        />
        {
          filtersFields.map(field => ((
            <RenderField
              {...field}
              key={field.id}
              onChange={onChangeFilters}
              fieldValues={filterValues}
            />
          )))
        }
      </div>
    );
  }
}

export default Filters;
