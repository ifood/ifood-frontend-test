
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DatePicker } from 'antd';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SelectField from './SelectField';
import 'antd/lib/date-picker/style/css';


const Container = styled.div`
  flex-grow: 1;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 50px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 24px;
`;

const DatePickerContainer = styled.div`
  margin-top: 24px;
`;

const FILTER_FIELDS = {
  LOCALE: 'locale',
  COUNTRY: 'country',
  LIMIT: 'limit',
  OFFSET: 'offset',
  TIMESTAMP: 'timestamp',
};

class Filters extends Component {
  state = {
    searchTerm: '',
    locale: '',
    country: '',
    limit: '',
    offset: '',
    timestamp: '',
  }

  handleChange = name => (event) => {
    const { onChange } = this.props;
    this.setState({
      [name]: event.target.value,
    });

    onChange({
      ...this.state,
      [name]: event.target.value,
    });
  }

  handleDateChange = (value, dateString) => {
    const { onChange } = this.props;
    this.setState({
      [FILTER_FIELDS.TIMESTAMP]: dateString,
    });

    onChange({
      ...this.state,
      [FILTER_FIELDS.TIMESTAMP]: dateString.replace(' ', 'T'),
    });
  }

  onSearchChange = (event) => {
    const { onSearch } = this.props;
    this.setState({ searchTerm: event.target.value });

    onSearch(event.target.value);
  }

  renderFields = () => {
    const { metaFilters } = this.props;
    const {
      locale,
      country,
      limit,
      offset,
    } = this.state;

    if (!metaFilters) {
      return null;
    }

    return metaFilters.map((field) => {
      let filterField = null;
      switch (field.id) {
        case FILTER_FIELDS.LOCALE:
          filterField = (
            <Grid item xs={12} sm={6} key={field.id}>
              <SelectField
                onChange={this.handleChange(FILTER_FIELDS.LOCALE)}
                value={locale}
                field={field}
              />
            </Grid>
          );
          break;
        case FILTER_FIELDS.COUNTRY:
          filterField = (
            <Grid item xs={12} sm={6} key={field.id}>
              <SelectField
                onChange={this.handleChange(FILTER_FIELDS.COUNTRY)}
                value={country}
                field={field}
              />
            </Grid>
          );
          break;
        case FILTER_FIELDS.LIMIT:
          filterField = (
            <Grid item xs={12} sm={4} key={field.id}>
              <TextField
                id={field.id}
                label={field.name}
                onChange={this.handleChange(FILTER_FIELDS.LIMIT)}
                value={limit}
                type="number"
                inputProps={{
                  min: field.validation.min,
                  max: field.validation.max,
                }}
                fullWidth
                margin="normal"
              />
            </Grid>
          );
          break;
        case FILTER_FIELDS.OFFSET:
          filterField = (
            <Grid item xs={12} sm={4} key={field.id}>
              <TextField
                id={field.id}
                label={field.name}
                onChange={this.handleChange(FILTER_FIELDS.OFFSET)}
                value={offset}
                type="number"
                inputProps={{
                  min: 0,
                }}
                fullWidth
                margin="normal"
              />
            </Grid>
          );
          break;
        case FILTER_FIELDS.TIMESTAMP:
          filterField = (
            <Grid item xs={12} sm={4} key={field.id}>
              <DatePickerContainer>
                <DatePicker
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder="Select Time"
                  onChange={this.handleDateChange}
                />
              </DatePickerContainer>
            </Grid>
          );
          break;
        default:
          break;
      }
      return filterField;
    });
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={24}
        >
          <Grid item xs={12}>
            <TextField
              id="searchTerm"
              label="Search"
              type="search"
              value={searchTerm}
              onChange={this.onSearchChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          {this.renderFields()}
        </Grid>
      </Container>
    );
  }
}

Filters.propTypes = {
  metaFilters: PropTypes.array,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};

Filters.defaultProps = {
  metaFilters: null,
  onChange: () => false,
  onSearch: () => false,
};

export default Filters;
