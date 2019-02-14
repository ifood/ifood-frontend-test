import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import RenderField from '../render-field/render-field';
import axios from 'axios';
import {URL_GET_FILTER, MOCKY_API_ERROR_MESSAGE} from '../../constants';

class Filter extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        filtersFields: []
      };
    }

    // Method called before render the page
    componentDidMount() {
      axios.get(URL_GET_FILTER) // Call mocky API to get the filter fields/Values
        .then(response => {
            this.setState({
            filtersFields: response.data.filters
            })
        })
        .catch(error => {
            console.log(MOCKY_API_ERROR_MESSAGE, error)
        });
    }

    // Method to render the page
    render() {
      const { filtersFields } = this.state;
      const {
        filterValues,
        onChangeFilters,
      } = this.props;

      return (
        <div>
          {
            filtersFields ?
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                  id="search"
                  label="Filter playlists by name"
                  onKeyUp={event => this.props.onTextChange(event.target.value)}
                  style={{ marginBottom: '.8em' }} />
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
              </div> : 'Error'
          }
        </div>
      );
    }
  }

  export default Filter;