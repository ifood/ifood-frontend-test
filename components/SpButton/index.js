import React from 'react';
import "./style.sass"


export default class Component extends React.Component {
  render() {
    return <button className="button">
      {this.props.text}
    </button>;
  }
}
