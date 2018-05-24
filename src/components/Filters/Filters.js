import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import { getFilters } from '../../services/filterServices';

import RenderField from './RenderField';

class Filters extends Component {

  static propTypes = {
    filterByName: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      filters: [],
    };
  }

  componentDidMount() {
    getFilters()
      .then((response) => {
        const { filters } = response.data;

        this.setState({
          filters,
        });
      });
  }

  render() {
    const { filters } = this.state;
    const { filterByName } = this.props;
    return (
      <div className="filters-container">
        <TextField
          id="search"
          label="Search by name"
          onChange={filterByName}
          margin="normal"
        />
        {
          filters.map(field => ((
            <RenderField {...field} key={field.id} />
          )))
        }
      </div>
    );
  }
}

export default Filters;
