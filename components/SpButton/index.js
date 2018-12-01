import React from 'react';
import "./style.sass"


export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    ev.preventDefault();
    if (this.props.onClick) this.props.onClick(ev);
  }

  render() {
    const className = ['button'];
    if (this.props.size === 'lg') className.push('button--size-lg');
    return <button className={className.join(' ')} onClick={this.handleClick}>
      {this.props.text}
    </button>;
  }
}
