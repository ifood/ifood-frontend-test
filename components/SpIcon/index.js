import './style.sass';
import React from 'react';
import Arrow from './svg/arrow';
import Bars from './svg/bars';
import Settings from './svg/settings';


export default class Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    ev.preventDefault();
    const { onClick, disabled } = this.props;
    if (onClick && !disabled) onClick(ev);
  }

  iconComp() {
    const { icon } = this.props;
    if (icon === 'arrow') return <Arrow />;
    if (icon === 'bars') return <Bars />;
    if (icon === 'settings') return <Settings />;
    return null;
  }

  render() {
    const { disabled } = this.props;
    const className = ['icon'];
    if (disabled) className.push('icon--disabled');
    return (
      <button type="button" onClick={this.handleClick} className={className.join(' ')}>
        {this.iconComp()}
      </button>
    );
  }
}
