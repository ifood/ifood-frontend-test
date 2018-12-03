import React from 'react';
import './style.sass';


export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    ev.preventDefault();
    const { onClick } = this.props;
    if (onClick) onClick(ev);
  }

  render() {
    const className = ['button'];
    const { size, text, disabled } = this.props;
    if (size === 'lg') className.push('button--size-lg');
    if (disabled) className.push('button--disabled');
    return (
      <button type="button" className={className.join(' ')} onClick={this.handleClick} disabled={disabled}>
        {text}
      </button>
    );
  }
}
