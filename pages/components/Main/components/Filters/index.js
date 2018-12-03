import './style.sass';
import React from 'react';

export default class Component extends React.Component {
  render() {
    return (
      <div className="filters">
        <select>
          <option>Language</option>
        </select>
      </div>
    );
  }
}
