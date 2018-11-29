import React, { PureComponent } from 'react';

interface IProps {
  onSignOut: () => void;
  onSearch: (search: string) => void;
}

export default class Filter extends PureComponent<IProps> {
  public render() {
    return (
      <div>
        <input onChange={this.handleSearch} type='text' />
        <select />
        <button onClick={this.props.onSignOut}>Sign out</button>
      </div>
    );
  }

  private handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.onSearch(e.currentTarget.value);
  };
}
