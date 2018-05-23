import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <React.Fragment>
        <input type="text" placeholder="Search by name" onChange={filterByName} />
        {
          filters.map(field => ((
            <RenderField {...field} key={field.id} />
          )))
        }
      </React.Fragment>
    );
  }
}

export default Filters;
