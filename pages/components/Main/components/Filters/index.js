import './style.sass';
import React from 'react';
import FilterServices from '../../../../../services/filter.service';
import MainStore from '../../index.store';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      filters: [],
      values: {},
    };
  }

  componentDidMount() {
    this.getFilters();
    MainStore.on('change', () => {
      this.setState({ values: MainStore.getState().filters });
    });
  }

  getFilters() {
    FilterServices
      .getFilters()
      .then((result) => {
        this.setState({ filters: result.data.filters });
      });
  }

  handleChange(ev) {
    const id = ev.target.getAttribute('id');
    const { value } = ev.target;
    const { values } = this.state;
    if (value) {
      values[id] = value;
    } else {
      delete values[id];
    }
    MainStore.filters = values;
  }

  populateSelects() {
    const { filters } = this.state;
    if (!Array.isArray(filters)) return '';
    const { values } = this.state;
    return filters
      .filter(f => ['locale', 'country'].indexOf(f.id) > -1)
      .map(f => (
        <select key={f.id} onChange={this.handleChange} id={f.id} value={values[f.id]}>
          <option value="">{f.name}</option>
          {f.values.map(o => (
            <option key={o.value} value={o.value}>{o.name}</option>
          ))}
        </select>
      ));
  }

  render() {
    return (
      <div className="filters">
        {this.populateSelects()}
      </div>
    );
  }
}
