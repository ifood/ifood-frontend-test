import React from 'react';
import Head from 'next/head'
import Startup from './components/Startup';
import Main from './components/Main';
import store from './store';

import "./style.sass"


export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    store.on('change', state => this.setState(store.getState()));
  }

  render() {
    return <div className="app">
      <Head>
        <title>Spotifood</title>
      </Head>
      <div className="app__bg"></div>
      <Main />
      <Startup />
    </div>;
  }
}
