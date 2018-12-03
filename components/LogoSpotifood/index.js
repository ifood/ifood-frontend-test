import React from 'react';
import './style.sass';


export default class Component extends React.PureComponent {
  render() {
    return (
      <div className="logo-spotifood">
        <span className="logo-spotifood__first">Spoti</span>
        <span className="logo-spotifood__last">food</span>
      </div>
    );
  }
}
