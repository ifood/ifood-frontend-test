import React, { Component } from 'react';
import { getFilters } from '../../services/filterServices';

import RenderField from './RenderField';

class Filters extends Component {
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
    return (
      <React.Fragment>
        <input type="text" placeholder="Search by name" />
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
