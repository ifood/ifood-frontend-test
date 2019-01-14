import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Filters extends Component {

  constructor(props) {
    super(props);
    this.buscar = this.buscar.bind(this);
    this.nameSearch = this.nameSearch.bind(this);
  }

  buscar(e) {
    let country;
    this.props.filters.find(filter => filter.name === 'País').values.map((pais) => {
      if (pais.name === e.target.value)
        country = pais.value
    });
    this.props.setFilters({ country });
  }

  nameSearch(e) {
    this.props.setNameSearch(e.target.value);
  }

  render() {
    const { filters } = this.props;

    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-5 mb-sm-3">
          <Label for="name" className="mr-sm-3">Nome da Playlist</Label>
          <Input type="text" name="name" id="name" onChange={this.nameSearch} placeholder="Por exemplo: 'Pop'" aria-label="Digitar Nome da Playlist"
            aria-required="true" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-5 mb-sm-3">
          <Label for="country" className="mr-sm-3">País</Label>
          <Input type="select" name="country" id="country" aria-label="Selecionar País"
            aria-required="true" onChange={this.buscar}>
            <option>Selecionar País</option>
            {
              filters
              &&
              filters.find(filter => filter.name === 'País').values.map((pais) =>
                (<option key={`${pais.value}_${pais.name}`}> {pais.name} </option>)
              )
            }
          </Input>
        </FormGroup>
      </Form>
    );
  }
}

export default Filters;