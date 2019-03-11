import React, { Component } from 'react';
import mock from '../../routes/mock';
import Select from '@material-ui/core/Select';
import * as changeListAction from '../../actions/changeList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
          dataFilterLocale: [],
          dataFilterCountry: [],
          locale: '',
          country: '',
          dateTime: '',
          name: ''
        };

        this.getFilters = this.getFilters.bind(this);

    }

    handleChange = event => {
     
      this.setState({ [event.target.name]: event.target.value });

      setTimeout(function(){
        this.props.changeList({locale: this.state.locale, country: this.state.country, name: this.state.name});
      }.bind(this), 500)
    };

    getFilters(){

        mock.getMockInfo().then(dataFilter => {
          dataFilter.data.filters.map(value => {
            if(value.id === 'locale'){
              this.setState({dataFilterLocale: value.values});
            }
            if(value.id === 'country'){
              this.setState({dataFilterCountry: value.values});
            }
          });
        });
        
    }

    componentDidMount(){
      this.getFilters();
    }

    render() {
        return (
          <div>
             <FormControl>
              <InputLabel htmlFor="locale">Locale</InputLabel>
              <Select 
                className="selectSearch"
                value={this.state.locale}
                onChange={this.handleChange}
                inputProps={{
                  name: 'locale',
                  id: 'locale',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {this.state.dataFilterLocale.map( (locale,index) => {
                  return (
                    <MenuItem key={index} value={locale.value}>
                      <em>{locale.name}</em>
                    </MenuItem>
                  )
                })}
              </Select>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="country">Country</InputLabel>
                <Select 
                  className="selectSearch"
                  value={this.state.country}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'country',
                    id: 'country',
                  }}
                >
                <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {this.state.dataFilterCountry.map( (country,index) => {
                    return (
                      <MenuItem key={index} value={country.value}>
                        <em>{country.name}</em>
                      </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <FormControl>
                <TextField
                  className="inputNameSearch"
                  id="name"
                  name="name"
                  label="Name"
                  onChange={this.handleChange}
                  margin="normal"
                />
              </FormControl>
            
          </div>
        )
      }
}

function mapDispatchToProps(dispatch, props) {
  return {
    dispatch,
    ...bindActionCreators({
      ...changeListAction
    }, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps
 )(Filter);