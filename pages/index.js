import React from 'react';
import "./style.sass"
import Startup from './components/Startup';

export default class Component extends React.Component {
  render() {
    return <div className="app">
      <Startup />
    </div>;
  }
}
