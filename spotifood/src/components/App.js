// Global
import React, { Component } from 'react';
// Components
import List from './List';
// Stylesheets
import './App.scss';

class App extends Component {
    render() {
        return(
            <div className='page'>
                <List />
            </div>
        )
    }
}

export default App;