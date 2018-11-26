import React, { PureComponent } from 'react';

interface IProps {
  onSignOut: () => void;
}

export default class Filter extends PureComponent<IProps> {
  public render() {
    return (
      <div>
        <h1>Hi, I'm the filter component</h1>
        <input type='text' />
        <select />
        <button onClick={this.props.onSignOut}>Sign out</button>
      </div>
    );
  }
}
