import React, { PureComponent } from 'react';

interface IProps {
  countries: Array<{ name: string; value: string }>;
  onCountryChange: (countryCode: string) => void;
  onSignOut: () => void;
  onSearch: (search: string) => void;
}

export default class Filter extends PureComponent<IProps> {
  public render() {
    return (
      <div>
        <input onChange={this.handleSearch} type='text' />
        <select onChange={this.handleCountryChange}>
          <option>Global</option>
          {this.props.countries.map(c => (
            <option value={c.value} key={c.value}>
              {c.name}
            </option>
          ))}
        </select>
        <button onClick={this.props.onSignOut}>Sign out</button>
      </div>
    );
  }

  private handleCountryChange = (e: React.FormEvent<HTMLSelectElement>) => {
    this.props.onCountryChange(e.currentTarget.value);
  };

  private handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.onSearch(e.currentTarget.value);
  };
}
